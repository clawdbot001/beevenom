import { OFFER } from "@/config/offer";
import { formatCOP } from "./format";

export interface OrderData {
  name: string;
  phone: string;
  city: string;
  address: string;
  quantity: number;
}

/** Monta o link wa.me com a mensagem do pedido pré-preenchida. */
export function buildWhatsAppLink(message: string, number = OFFER.whatsappNumber): string {
  return `https://wa.me/${number}?text=${encodeURIComponent(message)}`;
}

/** Mensagem do pedido no formato contra entrega. */
export function buildOrderMessage(order: OrderData): string {
  const total = OFFER.priceNow * order.quantity;
  return [
    `Hola, quiero pedir: *${OFFER.productName}* (${OFFER.weight})`,
    "",
    `👤 Nombre: ${order.name}`,
    `📱 WhatsApp: ${order.phone}`,
    `📍 Ciudad/Depto: ${order.city}`,
    `🏠 Dirección: ${order.address}`,
    `🧴 Cantidad: ${order.quantity}`,
    `💰 Total a pagar: ${formatCOP(total)} (${formatCOP(OFFER.priceNow)} c/u)`,
    "",
    "Pago contra entrega.",
  ].join("\n");
}
