/** Formata valores em pesos colombianos, ex: 49900 → "$49.900" */
export function formatCOP(value: number): string {
  return `$${value.toLocaleString("es-CO")}`;
}

/** Valor de cada parcela (sem juros), ex: 49900 ÷ 3 → "$16.633" */
export function formatInstallment(value: number, installments: number): string {
  return formatCOP(Math.floor(value / installments));
}
