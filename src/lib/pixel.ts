declare global {
  interface Window {
    fbq?: (...args: unknown[]) => void;
  }
}

/**
 * Eventos do Meta Pixel (Facebook).
 * O script base de inicialização fica no index.html; aqui disparamos eventos.
 */

/** PageView — disparado a cada troca de rota (SPA). */
export function trackPageView(): void {
  window.fbq?.("track", "PageView");
}

/** Purchase — disparado quando o pedido é confirmado com sucesso (valor em COP). */
export function trackPurchase(value: number, quantity: number): void {
  window.fbq?.("track", "Purchase", {
    value,
    currency: "COP",
    num_items: quantity,
  });
}

export default { trackPageView, trackPurchase };
