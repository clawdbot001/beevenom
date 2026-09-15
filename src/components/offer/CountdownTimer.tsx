import { useEffect, useMemo, useState } from "react";
import { useTranslation } from "react-i18next";
import { Clock } from "lucide-react";

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

const pad = (n: number) => String(n).padStart(2, "0");

/** Contagem regressiva até o fim do dia (reinicia diariamente). */
const CountdownTimer = () => {
  const { t } = useTranslation();

  const target = useMemo(() => {
    const d = new Date();
    d.setHours(23, 59, 59, 999);
    return d.getTime();
  }, []);

  const [timeLeft, setTimeLeft] = useState<TimeLeft>(() => calc(target));

  useEffect(() => {
    const id = setInterval(() => setTimeLeft(calc(target)), 1000);
    return () => clearInterval(id);
  }, [target]);

  function calc(targetMs: number): TimeLeft {
    const diff = Math.max(0, targetMs - Date.now());
    return {
      days: Math.floor(diff / 86_400_000),
      hours: Math.floor((diff / 3_600_000) % 24),
      minutes: Math.floor((diff / 60_000) % 60),
      seconds: Math.floor((diff / 1000) % 60),
    };
  }

  const boxes = [
    { value: pad(timeLeft.days), label: t("countdown.days") },
    { value: pad(timeLeft.hours), label: t("countdown.hours") },
    { value: pad(timeLeft.minutes), label: t("countdown.minutes") },
    { value: pad(timeLeft.seconds), label: t("countdown.seconds") },
  ];

  return (
    <div className="w-full rounded-2xl border border-brand-gold/30 bg-brand-dark p-4 shadow-[var(--shadow-card)]">
      <div className="mb-3 flex items-center justify-center gap-2 text-brand-gold">
        <Clock className="h-4 w-4 animate-pulse-soft" />
        <span className="text-[11px] font-extrabold uppercase tracking-[0.2em]">
          {t("hero.countdownTitle")}
        </span>
      </div>
      <div className="flex items-center justify-center gap-2 sm:gap-3">
        {boxes.map((b, i) => (
          <div key={b.label} className="flex items-center gap-2 sm:gap-3">
            <div className="flex w-14 flex-col items-center rounded-xl bg-brand-dark2 py-2 sm:w-16">
              <span className="font-display text-2xl font-extrabold tabular-nums text-brand-gold sm:text-3xl">
                {b.value}
              </span>
              <span className="mt-0.5 text-[9px] font-semibold uppercase tracking-widest text-white/50">
                {b.label}
              </span>
            </div>
            {i < boxes.length - 1 && (
              <span className="font-display text-xl font-bold text-brand-gold/60">:</span>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default CountdownTimer;
