import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useTranslation } from "react-i18next";
import { AlertTriangle, CheckCircle2, Minus, Plus, Send } from "lucide-react";
import { OFFER } from "@/config/offer";
import { formatCOP } from "@/lib/format";
import { buildOrderMessage, buildWhatsAppLink, type OrderData } from "@/lib/whatsapp";
import { trackPurchase } from "@/lib/pixel";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

type FormStatus = "idle" | "submitting" | "success" | "error";

const resetStatus = () => ({ status: "idle" as FormStatus, fallbackLink: "" });

/** Formulário de pedido contra entrega → Google Sheets (Google Apps Script). */
const OrderForm = () => {
  const { t } = useTranslation();
  const [quantity, setQuantity] = useState(1);
  const [status, setStatus] = useState<FormStatus>("idle");
  const [fallbackLink, setFallbackLink] = useState("");

  const schema = z.object({
    name: z.string().min(3, t("order.error.minName")),
    phone: z
      .string()
      .min(8, t("order.error.phone"))
      .regex(/^[+\d][\d\s()-]*$/, t("order.error.phone")),
    city: z.string().min(3, t("order.error.minCity")),
    address: z.string().min(5, t("order.error.minAddress")),
  });

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<z.infer<typeof schema>>({
    resolver: zodResolver(schema),
  });

  const onSubmit = async (values: z.infer<typeof schema>) => {
    const order: OrderData = { ...values, quantity };
    const message = buildOrderMessage(order);
    const payload = {
      producto: OFFER.productName,
      nombre: order.name,
      telefono: order.phone,
      ciudad: order.city,
      direccion: order.address,
      cantidad: order.quantity,
      precioUnitario: OFFER.priceNow,
      total: OFFER.priceNow * order.quantity,
      mensaje: message,
    };

    // Fallback de seguridad: si el webhook falla, el pedido puede ir por WhatsApp.
    setFallbackLink(buildWhatsAppLink(message));

    setStatus("submitting");
    try {
      if (!OFFER.ordersWebhookUrl) {
        throw new Error("ordersWebhookUrl not configured");
      }
      // text/plain evita el preflight CORS del navegador.
      const res = await fetch(OFFER.ordersWebhookUrl, {
        method: "POST",
        headers: { "Content-Type": "text/plain;charset=utf-8" },
        body: JSON.stringify(payload),
      });
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      trackPurchase(total, quantity);
      setStatus("success");
    } catch {
      setStatus("error");
    }
  };

  const total = OFFER.priceNow * quantity;

  if (status === "success") {
    return (
      <section id="order" className="mx-auto max-w-xl scroll-mt-20 px-4 py-14 sm:px-6 lg:py-20">
        <div className="flex flex-col items-center gap-5 rounded-3xl border border-brand-gold/30 bg-white p-8 text-center shadow-[var(--shadow-card)] sm:p-10">
          <span className="flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-brand-honey to-brand-gold text-white shadow-[var(--shadow-gold)]">
            <CheckCircle2 className="h-9 w-9" />
          </span>
          <div className="flex flex-col gap-2">
            <h2 className="font-display text-2xl font-extrabold uppercase text-brand-dark">
              {t("order.success.title")}
            </h2>
            <p className="text-sm leading-relaxed text-muted-foreground">{t("order.success.text")}</p>
          </div>
          <Button
            variant="ghost"
            onClick={() => {
              setStatus("idle");
              setFallbackLink("");
              reset();
              setQuantity(1);
            }}
          >
            {t("order.success.new")}
          </Button>
        </div>
      </section>
    );
  }

  if (status === "error") {
    return (
      <section id="order" className="mx-auto max-w-xl scroll-mt-20 px-4 py-14 sm:px-6 lg:py-20">
        <div className="flex flex-col items-center gap-5 rounded-3xl border border-destructive/30 bg-white p-8 text-center shadow-[var(--shadow-card)] sm:p-10">
          <span className="flex h-16 w-16 items-center justify-center rounded-full bg-destructive/10 text-destructive">
            <AlertTriangle className="h-9 w-9" />
          </span>
          <div className="flex flex-col gap-2">
            <h2 className="font-display text-2xl font-extrabold uppercase text-brand-dark">
              {t("order.error.title")}
            </h2>
            <p className="text-sm leading-relaxed text-muted-foreground">{t("order.error.text")}</p>
          </div>
          <div className="flex w-full flex-col gap-2">
            <Button
              variant="gold"
              size="lg"
              className="w-full uppercase"
              onClick={() => {
                setStatus("idle");
                setFallbackLink("");
              }}
            >
              {t("order.error.retry")}
            </Button>
            {fallbackLink && (
              <a
                href={fallbackLink}
                target="_blank"
                rel="noreferrer"
                className="inline-flex h-11 w-full items-center justify-center gap-2 rounded-xl border border-brand-gold/40 bg-brand-cream px-6 text-sm font-bold uppercase tracking-wide text-brand-dark hover:bg-accent"
              >
                <Send className="h-4 w-4" />
                {t("order.error.whatsapp")}
              </a>
            )}
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="order" className="relative scroll-mt-20 overflow-hidden bg-white">
      <div className="pointer-events-none absolute -left-24 top-1/3 h-72 w-72 rounded-full bg-brand-gold/10 blur-3xl" />
      <div className="pointer-events-none absolute -right-24 bottom-0 h-72 w-72 rounded-full bg-brand-honey/10 blur-3xl" />

      <div className="relative mx-auto max-w-xl px-4 py-14 sm:px-6 lg:py-20">
        <div className="overflow-hidden rounded-3xl border border-border bg-white shadow-[var(--shadow-card)]">
          <div className="bg-gradient-to-r from-brand-honey to-brand-gold px-6 py-5 text-center sm:px-8">
            <span className="text-[11px] font-extrabold uppercase tracking-[0.3em] text-white/80">
              {t("order.kicker")}
            </span>
            <h2 className="font-display text-2xl font-extrabold uppercase tracking-tight text-white sm:text-3xl">
              {t("order.title")}
            </h2>
            <p className="mx-auto mt-1 max-w-sm text-xs leading-relaxed text-white/80">
              {t("order.subtitle")}
            </p>
          </div>

          <form onSubmit={handleSubmit(onSubmit)} noValidate className="flex flex-col gap-4 p-6 sm:p-8">
            <div className="flex flex-col gap-1.5">
              <Label htmlFor="name" className="text-sm font-bold text-brand-dark">
                {t("order.name")}
              </Label>
              <Input
                id="name"
                placeholder={t("order.name")}
                className={errors.name ? "border-destructive" : ""}
                {...register("name")}
              />
              {errors.name && (
                <span className="text-xs font-medium text-destructive">{errors.name.message}</span>
              )}
            </div>

            <div className="flex flex-col gap-1.5">
              <Label htmlFor="phone" className="text-sm font-bold text-brand-dark">
                {t("order.phone")}
              </Label>
              <Input
                id="phone"
                inputMode="tel"
                placeholder="300 123 4567"
                className={errors.phone ? "border-destructive" : ""}
                {...register("phone")}
              />
              {errors.phone && (
                <span className="text-xs font-medium text-destructive">{errors.phone.message}</span>
              )}
            </div>

            <div className="flex flex-col gap-1.5">
              <Label htmlFor="city" className="text-sm font-bold text-brand-dark">
                {t("order.city")}
              </Label>
              <Input
                id="city"
                placeholder="Bogotá, Cundinamarca"
                className={errors.city ? "border-destructive" : ""}
                {...register("city")}
              />
              {errors.city && (
                <span className="text-xs font-medium text-destructive">{errors.city.message}</span>
              )}
            </div>

            <div className="flex flex-col gap-1.5">
              <Label htmlFor="address" className="text-sm font-bold text-brand-dark">
                {t("order.address")}
              </Label>
              <Input
                id="address"
                placeholder="Calle 12 # 34-56, barrio"
                className={errors.address ? "border-destructive" : ""}
                {...register("address")}
              />
              {errors.address && (
                <span className="text-xs font-medium text-destructive">{errors.address.message}</span>
              )}
            </div>

            <div className="flex flex-col gap-1.5">
              <Label className="text-sm font-bold text-brand-dark">{t("order.quantity")}</Label>
              <div className="flex items-center justify-between rounded-xl border border-input bg-background px-2 py-1.5">
                <Button
                  type="button"
                  variant="outline"
                  size="icon"
                  className="h-9 w-9"
                  onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                  aria-label="Menos"
                >
                  <Minus className="h-4 w-4" />
                </Button>
                <span className="font-display text-xl font-extrabold text-brand-dark">{quantity}</span>
                <Button
                  type="button"
                  variant="outline"
                  size="icon"
                  className="h-9 w-9"
                  onClick={() => setQuantity((q) => Math.min(9, q + 1))}
                  aria-label="Más"
                >
                  <Plus className="h-4 w-4" />
                </Button>
              </div>
            </div>

            <div className="mt-1 flex items-center justify-between rounded-2xl border border-brand-gold/30 bg-brand-cream px-5 py-4">
              <div className="flex flex-col">
                <span className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                  {t("order.total")}
                </span>
                <span className="text-xs text-muted-foreground">
                  {t("order.unitPrice", { price: formatCOP(OFFER.priceNow) })} · {quantity} ×{" "}
                  {formatCOP(OFFER.priceNow)}
                </span>
              </div>
              <span className="font-display text-3xl font-extrabold text-brand-gold">
                {formatCOP(total)}
              </span>
            </div>

            <Button
              type="submit"
              variant="gold"
              size="xl"
              className="w-full uppercase"
              disabled={status === "submitting"}
            >
              <Send className="h-5 w-5" />
              {status === "submitting" ? "…" : t("order.submit")}
            </Button>
            <p className="text-center text-xs font-medium text-muted-foreground">{t("order.note")}</p>
          </form>
        </div>
      </div>
    </section>
  );
};

export default OrderForm;
