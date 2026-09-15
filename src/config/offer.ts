/**
 * Fonte única de conteúdo da oferta (Colômbia — contra entrega).
 * Edite os valores aqui para trocar produto, preços, WhatsApp, imagens e textos.
 */
export const OFFER = {
  brandName: "BeeVenom",
  productName: "Crema Botox Bee Venom",
  productTagline: "Antiarrugas instantáneo · Sin agujas",
  weight: "120g",

  // Precios en pesos colombianos (COP)
  priceFrom: 69900,
  priceNow: 49900,
  installments: 3,

  // Número de WhatsApp que recibe los pedidos.
  // Formato internacional: código de país + número, sin "+" ni espacios.
  // Ejemplo: Colombia = "57" + número → "573001234567"
  whatsappNumber: "573000000000", // TODO: reemplazar por el número real

  // URL del Web App de Google Apps Script que guarda los pedidos en Google Sheets.
  // Debe terminar en "/exec". Sin esta URL, el formulario muestra el error con fallback por WhatsApp.
  ordersWebhookUrl: "https://script.google.com/macros/s/AKfycbyyz3rUfI174tbEMbsLPfemQMX3C625aiQU9Rxo_hSdGE_IcwM6H-hzbjcTUnx9DI_Efw/exec",

  images: {
    hero: "/beevenom/images/bee-venom-cream.jpg",
    gallery: ["/beevenom/images/bee-venom-cream.jpg"],
    benefit1: "/beevenom/images/benefit-lift.png",
    benefit2: "/beevenom/images/benefit-wrinkles.png",
    benefit3: "/beevenom/images/benefit-bags.png",
    results: "/beevenom/images/results-before-after.png?v=2",
    science: "/beevenom/images/science-bee-collagen.png",
    formula: "/beevenom/images/formula-honey-cream.png",
  },

  ratings: { average: 4.9, count: 22961 },

  urgency: {
    viewers: 27,
    stockLeft: 93,
    stockTotal: 100,
  },

  // Envío gratis desde la primera unidad (0 = sin umbral).
  // Nota: al jugar con order bump/upsell, este valor se usará para el cálculo de envío.
  freeShippingThreshold: 0,

  stats: [
    { value: "100%", label: "notó un efecto visible en la piel desde la primera aplicación" },
    { value: "90,9%", label: "percibió reducción de arrugas y líneas de expresión" },
    { value: "95,5%", label: "notó la piel más hidratada, suave y luminosa" },
  ],

  benefits: [
    {
      icon: "sparkles",
      title: "Borra líneas y arrugas",
      bullets: [
        "Reduce la apariencia de arrugas y líneas de expresión en minutos",
        "90,9% percibió reducción de arrugas en la primera hora",
        "Piel con aspecto más suave, firme y joven",
      ],
      quote: "Nada había funcionado con mis arrugas… hasta ahora. Me miro al espejo y me siento 10 años más joven.",
      author: "Catiane B.",
    },
    {
      icon: "droplets",
      title: "Hidrata y nutre la piel",
      bullets: [
        "Hidratación profunda e inmediata con extracto de miel",
        "95,5% notó la piel más hidratada y luminosa",
        "Calma y suaviza la piel desde la primera aplicación",
      ],
      quote: "Es tan bueno que solo necesitas un poquito. Ya ni uso corrector para las ojeras.",
      author: "Odete L.",
    },
    {
      icon: "atom",
      title: "Estimula el colágeno",
      bullets: [
        "El veneno de abeja estimula la producción natural de colágeno y elastina",
        "Efecto reafirmante tipo «botox» temporal por varias horas",
        "Piel más firme, elástica y con aspecto descansado",
      ],
      quote: "¡Increíble! Mi piel estaba flácida y esta crema la resolvió por completo. Me siento joven y segura otra vez.",
      author: "María D.",
    },
  ],

  concerns: [
    { key: "eye", label: "Bolsas bajo los ojos", image: "/beevenom/images/concern-bags.png" },
    { key: "sparkles", label: "Arrugas y líneas finas", image: "/beevenom/images/concern-wrinkles.png" },
    { key: "chevronDown", label: "Párpados caídos", image: "/beevenom/images/concern-eyelids.png" },
    { key: "scan", label: "Bigote chino", image: "/beevenom/images/concern-smile.png" },
    { key: "feather", label: "Patas de gallo", image: "/beevenom/images/concern-crowsfeet.png" },
  ],

  testimonials: [
    {
      name: "Patricia G.",
      city: "Bogotá",
      avatar: "/beevenom/images/testimonial-1.png",
      text: "Tenía miedo de que no funcionara, pero en 3 minutos se notó la diferencia. ¡Mi piel se ve increíble!",
    },
    {
      name: "Carolina M.",
      city: "Medellín",
      avatar: "/beevenom/images/testimonial-2.png",
      text: "La pedí por contra entrega y llegó rapidísimo. La uso cada mañana antes del maquillaje.",
    },
    {
      name: "Luz D.",
      city: "Barranquilla",
      avatar: "/beevenom/images/model-applying.png",
      text: "El veneno de abeja de verdad funciona. Siento un estiramiento inmediato, sin verse rígida.",
    },
    {
      name: "Jorge R.",
      city: "Cali",
      avatar: "",
      text: "Mi esposa y yo la usamos. Las líneas de la frente se ven mucho más suaves.",
    },
  ],

  science: {
    kicker: "Tecnología Bee Collagen-P",
    title: "¿Por qué funciona en pieles 40+?",
    text: "El veneno de abeja estimula la circulación y la producción natural de colágeno y elastina, logrando un efecto tensor inmediato: reduce la apariencia de arrugas, flacidez y bolsas bajo los ojos, todo sin agujas ni procedimientos invasivos.",
    bullet: "Fórmula aprobada por dermatólogos, apta para todo tipo de piel y segura alrededor de los ojos.",
  },

  formula: {
    kicker: "Fórmula superior",
    title: "con acción en las múltiples capas de la piel",
    text: "Fueron 2 años de investigación para lograr la fórmula perfecta: veneno de abeja, colágeno hidrolizado, miel, vitamina E y ácido hialurónico que trabajan en las capas más profundas de la piel. Resultados de tratamiento estético clínico, de forma rápida y sin toxinas.",
    ingredient: "Veneno de abeja",
    ingredientText:
      "Activo natural que estimula la producción de colágeno y elastina, con efecto tensor inmediato.",
  },

  ingredients: [
    {
      title: "Descripción",
      content:
        "Crema con veneno de abeja (Botox Bee Venom) que ayuda a borrar líneas de expresión, hidratar la piel y estimular la producción natural de colágeno. Efecto visible en minutos, sin agujas ni procedimientos invasivos. Contenido: 120g.",
    },
    {
      title: "Ingredientes",
      content:
        "Veneno de abeja, colágeno hidrolizado, miel, vitamina E, ácido hialurónico y activos tensores reafirmantes. Fórmula libre de parabenos, apta para pieles sensibles.",
    },
    {
      title: "Envíos",
      content:
        "Envío a todo Colombia en 3 a 7 días hábiles según tu ciudad. Pago contra entrega: pagas solo cuando recibes tu pedido.",
    },
  ],

  faqs: [
    {
      question: "¿Cuánto tarda el envío?",
      answer:
        "El envío tarda de 3 a 7 días hábiles según tu ciudad. Enviamos a todo Colombia.",
    },
    {
      question: "¿Cómo funciona el pago contra entrega?",
      answer:
        "Haces tu pedido por WhatsApp y pagas en efectivo o datáfono al recibirlo en la puerta de tu casa. Sin anticipos ni pagos en línea.",
    },
    {
      question: "¿En cuánto tiempo se ven resultados?",
      answer:
        "El efecto tensor es inmediato. La reducción de arrugas y líneas de expresión se percibe desde la primera semana de uso continuo.",
    },
    {
      question: "¿Qué pasa si no me gusta?",
      answer:
        "Tienes 90 días de garantía. Si no ves resultados, te devolvemos tu dinero.",
    },
    {
      question: "¿Es segura para pieles sensibles?",
      answer:
        "Sí. La fórmula es apta para todo tipo de piel y puede usarse alrededor de los ojos. Aprobada por dermatólogos.",
    },
  ],
} as const;

export type Benefit = (typeof OFFER.benefits)[number];
export type Testimonial = (typeof OFFER.testimonials)[number];
export type Faq = (typeof OFFER.faqs)[number];
export type Concern = (typeof OFFER.concerns)[number];
