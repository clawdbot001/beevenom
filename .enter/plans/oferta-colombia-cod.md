# Oferta Contra Entrega — Colômbia (Crema Botox Bee Venom)

## Contexto

O usuário quer rodar na Colômbia uma oferta no mesmo formato da página de referência (lemoritz.com.br — funil de sérum antirrugas), com **outro produto** (imagem fornecida pelo usuário), conteúdo em espanhol, preço em pesos colombianos e modelo **contra entrega** (pagamento na entrega, pedido enviado por WhatsApp).

**Produto (imagem enviada pelo usuário):** tubo branco 120g, "BOTOX BEE VENOM" — rótulo com dourado `#C87C14` e preto, tema abelha/mel, selo "Wrinkle Cream", foto split (pele jovem × envelhecida), bullets: erase lines and wrinkles / moisturizes and hydrates skin / promote collagen production.

- **Preço**: ~~$69.900~~ → **$49.900 COP** (ou 3x de $16.633)
- **Pedidos**: formulário → mensagem pré-preenchida via WhatsApp (`wa.me`). Número com placeholder configurável no código.
- **Imagens**: a foto real do produto vai no hero/galeria; demais imagens (antes/depois, depoimentos) ficam como placeholder desenhado, trocáveis depois.

O projeto é o template padrão Vite + React + Tailwind + shadcn, com i18n instalado (será configurado só com espanhol).

## Direção visual (estrutura do funil de referência + identidade do produto)

- **Cores casadas com o produto** (ouro/mel em vez do roxo da referência): primário dourado âmbar `#C87C14` (variações `#B56C0A`–`#D98E1C`), preto `#0A0A0A` para seções de contraste, branco e off-white/creme `#FBF7F0` como fundos claros.
- **Tipografia**: serifada bold em caixa alta nos títulos (Playfair Display) + sans-serif no corpo (Manrope), via Google Fonts.
- **Estrutura idêntica ao funil de referência**: countdown regressivo, urgência ("27 personas viendo", "Quedan 93 unidades", barra de estoque), depoimentos, estatísticas, selos de garantia, barra CTA fixa no mobile.
- **Elementos temáticos**: ícones de abelha/hexágono (lucide) como detalhe decorativo, gradiente âmbar.

## Mudanças em arquivos existentes

- `index.html` — adicionar Google Fonts (Playfair Display + Manrope).
- `src/index.css` — tokens de marca: `--primary` dourado (#C87C14), `--brand-dark` (preto), `--brand-cream`, gradientes âmbar e sombras, classes de fonte display/sans.
- `tailwind.config.ts` — `fontFamily.display`, `fontFamily.sans` e cores de marca.
- `src/router.tsx` — rota `/` aponta para a nova página `Offer` (substitui `Index`).
- `i18n.config.json` — idioma único: `es` (fallback `es`, detecção `["es"]`, ltr).
- Deletar `public/locales/en.json` e `public/locales/zh-CN.json` (órfãos) e `src/pages/Index.tsx` (substituído por `Offer.tsx`).

## Arquivos novos

- `public/images/bee-venom-cream.jpg` — cópia da imagem do produto fornecida (extraída do anexo `resources/uid_100478762/521a1bcc-2d01-4a.jpg`, já recuperada em `/workspace/resources/attempt2.jpg`, 1254×1254).
- `src/config/offer.ts` — **fonte única de conteúdo** (fácil de editar):
  - marca/nome do produto ("Botox Bee Venom — Crema Antiarrugas"), peso 120g
  - preços (`priceFrom: 69900`, `priceNow: 49900`, 3x), moeda COP
  - `whatsappNumber` (placeholder `573000000000` + comentário com o formato)
  - imagens (hero, galeria, benefícios, depoimentos) — produto real + placeholders
  - urgência, nº avaliações, estatísticas, benefícios (3 blocos alinhados ao rótulo: reduz arrugas / hidrata / estimula colágeno), preocupações de pele, ingredientes (veneno de abeja, colágeno, miel), FAQ
- `src/lib/whatsapp.ts` — `buildWhatsAppLink(numero, mensagem)` e `buildOrderMessage(pedido)` (nome, telefone, cidade, endereço, quantidade, total).
- `src/pages/Offer.tsx` — monta todas as seções.
- `src/components/offer/` — `OfferImage` (img se houver URL, senão placeholder desenhado com gradiente + ícone lucide), `AnnouncementBar`, `Header`, `Hero` (galeria + info + countdown + CTA), `CountdownTimer`, `TrustBar`, `Reviews`, `Benefits`, `StatsBanner`, `ScienceSection`, `SkinConcerns`, `ResultsSection`, `FormulaSection`, `IngredientsSection`, `Testimonials`, `OrderForm`, `FaqSection`, `StickyCta`, `Footer`.
- `public/locales/es.json` — todas as strings do funil em espanhol.

## Fluxo do pedido (contra entrega)

1. Campos: nombre completo, WhatsApp/teléfono, ciudad/departamento, dirección, cantidad.
2. Validação com `react-hook-form` + `zod` (já instalados).
3. Ao enviar: abre `https://wa.me/{numero}?text={mensagem}` com produto, dados, quantidade, total e "pago contra entrega".
4. Estado de sucesso com botão do WhatsApp como fallback.
5. Barra CTA fixa no mobile ("PEDIR AHORA — $49.900") rola até o formulário.

## Implementação (checklist)

- [ ] Copiar a imagem do produto para `public/images/bee-venom-cream.jpg`.
- [ ] Tokens de marca no `index.css` (ouro/âmbar, preto, creme) + fontes no `index.html` + `tailwind.config.ts`.
- [ ] `src/config/offer.ts` com todos os dados (preços $69.900/$49.900, WhatsApp placeholder, produto "Botox Bee Venom", conteúdo).
- [ ] `src/lib/whatsapp.ts` com geração da mensagem do pedido.
- [ ] Componentes de seção em `src/components/offer/` (hero com galeria usando a foto real, countdown, urgência, benefícios, stats, ciência, preocupações, resultados, fórmula, ingredientes, depoimentos, FAQ).
- [ ] `OrderForm` (react-hook-form + zod) com envio via WhatsApp e estados de erro/sucesso.
- [ ] `StickyCta` no mobile + `Footer`.
- [ ] `src/pages/Offer.tsx` montando as seções; rota `/` no `router.tsx`; remover `Index.tsx`.
- [ ] i18n: `i18n.config.json` só com `es`; `public/locales/es.json` com todas as strings; remover `en.json`/`zh-CN.json`.
- [ ] Rodar `check-i18n.mjs` e `scan-i18n.mjs` (contrato da skill i18n).

## Verificação (checklist)

- [ ] `pnpm lint` e `pnpm build` passando sem erros.
- [ ] `check-i18n.mjs` imprime "i18n check passed." e `scan-i18n.mjs` gera `reports/i18n/summary.json`.
- [ ] Página `/` renderiza todas as seções em espanhol; countdown regressivo funciona; preços corretos ($69.900 tachado, $49.900 destaque, 3x de $16.633).
- [ ] Foto real do produto aparece no hero/galeria; placeholders nas demais seções.
- [ ] Formulário: validação bloqueia vazios/tel inválida; envio abre WhatsApp com mensagem pré-preenchida.
- [ ] Mobile: barra CTA fixa aparece, layout responsivo; contraste de texto sobre dourado/preto ok.
