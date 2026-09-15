/**
 * Conteúdo das páginas legais (Colômbia — oferta contra entrega).
 * Textos em espanhol; edite aqui conforme necessário.
 */

export type LegalPageKey = "privacy" | "terms" | "returns";

export interface LegalSection {
  heading: string;
  body: string[];
  list?: string[];
}

export interface LegalPageContent {
  title: string;
  updatedAt: string;
  intro: string;
  sections: LegalSection[];
}

export const LEGAL_PAGES: Record<LegalPageKey, LegalPageContent> = {
  privacy: {
    title: "Política de privacidad",
    updatedAt: "22 de agosto de 2026",
    intro:
      "En BeeVenom respetamos tu privacidad. Esta política explica qué datos recopilamos al hacer tu pedido y cómo los utilizamos.",
    sections: [
      {
        heading: "1. Datos que recopilamos",
        body: [
          "Para procesar tu pedido recopilamos únicamente los datos que nos compartes en el formulario de compra: nombre completo, número de WhatsApp o teléfono, ciudad y departamento, y dirección de entrega.",
        ],
      },
      {
        heading: "2. Uso de los datos",
        body: [
          "Utilizamos tus datos exclusivamente para confirmar tu pedido, coordinar la entrega y responder tus consultas por WhatsApp. No utilizamos tus datos para fines distintos a los descritos en esta política.",
        ],
        list: [
          "Confirmación del pedido por WhatsApp",
          "Coordinación de la entrega con la transportadora",
          "Atención al cliente y garantía",
        ],
      },
      {
        heading: "3. Protección y compartición",
        body: [
          "No vendemos, alquilamos ni compartimos tus datos personales con terceros con fines comerciales. Solo compartimos los datos mínimos necesarios con la empresa de mensajería encargada de entregar tu pedido.",
          "Tus datos se conservan únicamente durante el tiempo necesario para gestionar tu compra y dar cumplimiento a la garantía.",
        ],
      },
      {
        heading: "4. Contacto",
        body: [
          "Si tienes preguntas sobre esta política o sobre tus datos personales, puedes escribirnos por WhatsApp al número indicado en la página de la oferta.",
        ],
      },
    ],
  },
  terms: {
    title: "Términos y condiciones",
    updatedAt: "22 de agosto de 2026",
    intro:
      "Al realizar un pedido a través de esta página aceptas los siguientes términos y condiciones.",
    sections: [
      {
        heading: "1. Producto",
        body: [
          "El producto ofrecido es la Crema Botox Bee Venom (120g), una crema antienvejecimiento de uso externo con veneno de abeja. Los resultados pueden variar de persona a persona.",
          "Este producto no es un medicamento y no pretende diagnosticar, tratar, curar ni prevenir ninguna enfermedad.",
        ],
      },
      {
        heading: "2. Precios y promociones",
        body: [
          "Los precios se muestran en pesos colombianos (COP). Las promociones y ofertas tienen vigencia limitada mientras estén publicadas en la página.",
          "El pago se realiza contra entrega: efectivo o datáfono al recibir el pedido en la puerta de tu casa.",
        ],
      },
      {
        heading: "3. Proceso de pedido",
        body: [
          "Al completar el formulario, tu pedido se envía por WhatsApp para su confirmación. Nuestro equipo te contactará para validar los datos antes de despachar.",
          "El envío es gratuito a todo Colombia. Los tiempos de entrega son de 3 a 7 días hábiles según la ciudad.",
        ],
      },
      {
        heading: "4. Uso responsable",
        body: [
          "Se requiere ser mayor de 18 años para realizar una compra. Suspende el uso si experimentas alguna reacción y consulta a un especialista.",
        ],
      },
    ],
  },
  returns: {
    title: "Cambios y devoluciones",
    updatedAt: "22 de agosto de 2026",
    intro:
      "Tu compra está protegida con nuestra garantía de satisfacción de 90 días.",
    sections: [
      {
        heading: "1. Garantía de 90 días",
        body: [
          "Tienes 90 días desde la recepción de tu pedido para solicitar el cambio o la devolución si no quedas satisfecho con el producto.",
        ],
      },
      {
        heading: "2. ¿Cómo solicitar?",
        body: [
          "Escríbenos por WhatsApp indicando tu nombre, el número de pedido y el motivo de la solicitud. Nuestro equipo te indicará los pasos a seguir.",
        ],
        list: [
          "Nombre completo y número de pedido",
          "Motivo del cambio o devolución",
          "Fotos del producto (si aplica)",
        ],
      },
      {
        heading: "3. Condiciones",
        body: [
          "El producto debe estar sin uso excesivo y preferiblemente en su empaque original. Los gastos de devolución en garantía son asumidos por nosotros.",
        ],
      },
      {
        heading: "4. Reintegro",
        body: [
          "Al tratarse de pagos contra entrega, el reintegro se coordina por WhatsApp y se realiza por el mismo medio acordado al momento de la solicitud.",
        ],
      },
    ],
  },
};
