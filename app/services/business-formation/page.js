"use client";

import { useState } from "react";
import Link from "next/link";

export default function BusinessFormationPage() {
  const [lang, setLang] = useState("en");

  const [selectedBusiness, setSelectedBusiness] = useState(null);

  const businessTypes = {
    en: [
      {
        title: "LLC",
        subtitle: "Limited Liability Company",
        description:
          "A flexible business structure thats offers liability protection and options for management and tax treatment.",
      },
      {
        title: "S Corporation",
        subtitle: "S Corporation Tax Election",
        description:
          "Explore how eligible business may elect S Corporation tax treatment and the requirements that may apply.",
      },
      {
        title: "C Corporation",
        subtitle: "Corporation",
        description:
          "A separate corporate entity with its own ownership structure, corporate requirements, and tax considerations.",
      },
      {
        title: "Partnership",
        subtitle: "Business with Multiple Owners",
        description:
          "A business arrangement involving two or more owners, with important ownership, filings, and tax considerations.",
      },
      {
        title: "DBA",
        subtitle: "Doing Business As",
        description:
          "Register a business name different from your legal name without creating a separate business entity.",
      },
      {
        title: "EIN",
        subtitle: "Employer Identification Number",
        description:
          "Obtain a federal tax identification number for your business with guidance through the application process.",
      },
      {
        title: "Business Dissolution",
        subtitle: "Closing a Business",
        description:
          "Formally close a business while addressing applicable state, tax, and administrative requirements.",
      },
    ],

    es: [
      {
        title: "LLC",
        subtitle: "Compañía de Responsabilidad Limitada",
        description:
          "Una estructura de negocio flexible que ofrece protección de responsabilidad y opciones de administración y tratamiento contributivo.",
      },
      {
        title: "S Corporation",
        subtitle: "Elección contributiva S Corporation",
        description:
          "Conoce cómo los negocios elegibles pueden optar tratamiento contributivo S Corporation y los requisitos que pueden aplicar.",
      },
      {
        title: "C Corporation",
        subtitle: "Corporación",
        description:
          "Una entidad legal separada con su propia estructura de propiedad, requisitos corporativos y consideraciones contributivas.",
      },
      {
        title: "Sociedad",
        subtitle: "Negocio con múltiples propietarios",
        description:
          "Una estructura de negocio con dos o más propietarios que conlleva consideraciones de participación, radicación y obligaciones contributivas.",
      },
      {
        title: "DBA",
        subtitle: "Doing Business As",
        description:
          "Registra un nombre comercial diferente al nombre legal sin crear una entidad de negocio separada.",
      },
      {
        title: "EIN",
        subtitle: "Número de Identificación del Empleador",
        description:
          "Obtén un número de identificación contributiva federal para tu negocio con orientación durante el proceso de solicitud.",
      },
      {
        title: "Disolución de Negocios",
        subtitle: "Cierre de una empresa",
        description:
          "Cierra formalmente un negocio atendiendo los requisitos estatales, contributivos y administrativos aplicables.",
      },
    ],
  };

  const businessDetails = {
  en: {
    LLC: {
      title: "LLC",
      description:
        "An LLC, or Limited Liability Company, is a flexible business structure that provides legal separation between the business and its owners whilevoffering flexibility in manegement and tax treatment.",
      considerations: [
        "Number of owners or members.",
        "How you want the business to be managed.",
        "Registration and compliance requirements.",
        "Applicable tax treatment.",
      ],
      question: "Have questions about an LLC?",
    },

    "S Corporation": {
      title: "S Corporation Election",
      description:
        "An S Corporation is a federal tax election available to certain eligible businesses. It is not a separate business entity formed in the same way as an LLC or corporation.",
      considerations: [
        "The business must meet IRS eligibility requirements.",
        "The election affects how business income is treated for federal tax purposes.",
        "Payroll and reasonable compensation requirements may apply.",
        "Filing deadlines and ongoing compliance requirements should be considered.",
      ],
      question: "Considering an S Corporation election?",
    },

    "C Corporation": {
      title: "C Corporation",
      description:
        "A C Corporation is a separate legal entity owned by shareholders. The corporation generally files its own tax return and is subject to taxation at the corporate level.",
      considerations: [
        "Ownership through shareholders and shares.",
        "Corporate governance and recordkeeping requirements.",
        "Separate corporate tax filing requirements.",
        "Business goals, growth plans, and ownership structure.",
      ],
      question: "Considering a C Corporation?",
    },

    Partnership: {
      title: "Partnership",
      description:
        "A partnership generally involves two or more people or entities operating a business together and sharing its profits, losses, responsabilities, and tax obligations.",
      considerations: [
        "Ownership percentages and responsibilities.",
        "How profits and losses will be allocated.",
        "Partnership tax filing requirements.",
        "The importance of a clear agreement between the partners.",
      ],
      question: "Starting or organizing a Partnership?",
    },

    DBA: {
      title: "DBA",
      description:
        "A DBA, or Doing Business As, allows a business or individual to operate under a name different from its legal name. A DBA by itself does not create a separate legal business entity.",
      considerations: [
        "Availability of the business name.",
        "State or local registration requirements.",
        "The underlying legal structure of the business.",
        "A DBA does not replace an LLC or corporation.",
      ],
      question: "Need help with a DBA?",
    },

    EIN: {
      title: "EIN",
      description:
        "An Employer Identification Number, or EIN, is a federal tax identification number issued by the IRS and used to identify a business for federal tax and other business purposes.",
      considerations: [
        "Your business structure.",
        "Whether the business has employees.",
        "Banking and federal tax filing needs.",
        "Accuracy of the information submitted to the IRS.",
      ],
      question: "Need an EIN for your business?",
    },

    "Business Dissolution": {
      title: "Business Dissolution",
      description:
        "Business dissolution is the formal process of closing a business entity and addressing applicable state, tax, registration and administrative requirements.",
      considerations: [
        "State dissolution or cancellation filings.",
        "Final federal and state tax filing requirements.",
        "Outstanding business obligations.",
        "Closing applicable business accounts and registrations.",
      ],
      question: "Need help closing a business?",
    },
  },

  es: {
    LLC: {
      title: "LLC",
      description:
        "Una LLC, o Compañía de Responsabilidad Limitada, es una estructura de negocio flexible que ofrece separación legal entre negocio y sus propietarios, además de flexibilidad en su administración y tratamiento contributivo.",
      considerations: [
        "Cantidad de propietarios o miembros.",
        "Cómo será administrado el negocio.",
        "Requisitos estatales de registro y cumplimiento continuo.",
        "Tratamiento contributivo federal y estatal aplicable.",
      ],
      question: "¿Tienes preguntas sobre la formación de una LLC?",
    },

    "S Corporation": {
      title: "Elección S Corporation",
      description:
        "Una S Corporation es una elección contributiva federal disponible para ciertos negocios elegibles. No es una entidad separada que se crea de la misma manera que una LLC o corporación.",
      considerations: [
        "El negocio debe cumplir con los requisitos de elegibilidad del IRS.",
        "La elección afecta cómo se tratan los ingresos del negocio para propósitos contributivos federales.",
        "Pueden aplicar requisitos de nómina y compensación razonable.",
        "Deben considerarse las fechas límite y los requisitos de cumplimiento continuo.",
      ],
      question: "¿Estás considerando una elección S Corporation?",
    },

    "C Corporation": {
      title: "C Corporation",
      description:
        "Una C Corporation es una entidad legal separada cuyos propietarios son accionistas. Generalmente, la corporación presenta su propia declaración contributiva y está sujeta a tributación a nivel corporativo.",
      considerations: [
        "Propiedad mediante accionistas y acciones.",
        "Requisitos de gobierno corporativo y mantenimiento de registros.",
        "Requisitos de radicación contributiva de la corporación.",
        "Objetivos del negocio, planes de crecimiento y estructura de propiedad.",
      ],
      question: "¿Estás considerando una C Corporation?",
    },

    Sociedad: {
      title: "Sociedad",
      description:
        "Una sociedad generalmente involucra a dos o más personas o entidades que operan un negocio en conjunto y comparten sus ganancias, pérdidas, responsabilidades y obligaciones contributivas.",
      considerations: [
        "Porcentajes de participación y responsabilidades.",
        "Cómo se distribuirán las ganancias y pérdidas.",
        "Requisitos de declaración contributiva de la sociedad.",
        "La importancia de tener un acuerdo claro entre los socios.",
      ],
      question: "¿Estás comenzando u organizando una sociedad?",
    },

    DBA: {
      title: "DBA",
      description:
        "Un DBA, o Doing Business As, permite que un negocio o individuo opere bajo un nombre diferente a su nombre legal. Por sí solo, un DBA no crea una entidad legal separada.",
      considerations: [
        "Disponibilidad del nombre comercial.",
        "Requisitos estatales o locales de registro.",
        "La estructura legal que existente del negocio.",
        "Un DBA no sustituye una LLC o corporación.",
      ],
      question: "¿Necesitas ayuda con el registro de un DBA?",
    },

    EIN: {
      title: "EIN",
      description:
        "El Employer Identification Number, o EIN, es un número de identificación contributiva federal emitido por el IRS y utilizado para identificar un negocio para propósitos contributivos federales y otras gestiones comerciales.",
      considerations: [
        "La estructura de tu negocio.",
        "Si el negocio tiene empleados.",
        "Necesidades bancarias y de radicación contributiva federal.",
        "La precisión de la información presentada al IRS.",
      ],
      question: "¿Necesitas un EIN para tu negocio?",
    },

    "Disolución de Negocios": {
      title: "Disolución de Negocios",
      description:
        "La disolución es el proceso formal de cerrar una entidad empresarial y atender los requisitos estatales, contributivos y administrativos aplicables.",
      considerations: [
        "Radicaciones estatales de disolución o cancelación.",
        "Requisitos finales de radicación federal y estatal.",
        "Obligaciones pendientes del negocio.",
        "Cierre de cuentas y registros comerciales aplicables.",
      ],
      question: "¿Necesitas ayuda para cerrar un negocio?",
    },
  },
};

  const content = {
    en: {
      title: "Business Formation & Services",
      intro:
        "Explore your business structure and registration options with clear guidance to help you make informed decisions from the start.",
      back: "Back to Home",
      eyebrow: "Explore your options",
      question: "What type of business are you considering?",
      explanation:
        "Every business is different. Understanding the basic differences between structures and registrations can help you ask the right questions before moving forward.",
      learnMore: "Learn More",
      haveQuestions: "Have questions?",
      ctaTitle: "Not sure which option applies to your business?",
      ctaText:
        "Tell us a little about your business and the type of assistance you are looking for. MRU Professional Services can help you understand the next steps.",
      contact: "Contact MRU",
    },

    es: {
      title: "Formación y Servicios para Negocios",
      intro:
        "Conoce tus opciones de estructura y registro de negocio con orientación clara para ayudarte a tomar decisiones informadas desde el comienzo.",
      back: "Volver al Inicio",
      eyebrow: "Explora tus opciones",
      question: "¿Qué tipo de negocio estás considerando?",
      explanation:
        "Cada negocio es diferente. Conocer las diferencias básicas entre estructuras y registros puede ayudarte a hacer las preguntas correctas antes de tomar una decisión.",
      learnMore: "Conoce Más",
      haveQuestions: "¿Tienes preguntas?",
      ctaTitle: "¿No estás segura de cuál opción aplica a tu negocio?",
      ctaText:
        "Cuéntanos un poco sobre tu negocio y el tipo de asistencia que estás buscando. MRU Professional Services puede ayudarte a entender los próximos pasos.",
      contact: "Contactar a MRU",
    },
  };

  const t = content[lang];
  const currentBusinessTypes = businessTypes[lang];

  return (
    <main className="min-h-screen bg-white">
      {/* HERO */}
      <section className="bg-slate-900 text-white">
        <div className="max-w-6xl mx-auto px-6 py-20 md:py-28">
          <div className="flex items-start justify-between gap-6">
            <Link href="/" className="flex items-center gap-1">
              <img
                src="/logo-mru-icon-clean.png"
                alt="MRU"
                className="h-20 w-auto"
              />

              <div className="leading-tight">
                <p className="text-sm font-semibold tracking-wide text-white">
                    MRU Professional Services
                </p>

                <p className="mt-1 text-xs text-slate-300">
                    {lang === "es"
                      ? "Contabilidad · Impuestos · Negocio"
                      : "Accounting · Tax · Business"}
                </p>
              </div>
            </Link>

            <div className="flex items-center gap-2 text-sm font-semibold">
              <button
                onClick={() => setLang("es")}
                className={
                  lang === "es"
                    ? "text-white underline underline-offset-4"
                    : "text-slate-400 hover:text-white"
                }
              >
                ES
              </button>

              <span className="text-slate-500">|</span>

              <button
                onClick={() => setLang("en")}
                className={
                  lang === "en"
                    ? "text-white underline underline-offset-4"
                    : "text-slate-400 hover:text-white"
                }
              >
                EN
              </button>
            </div>
          </div>

          <h1 className="mt-8 text-4xl md:text-5xl font-semibold">
            {t.title}
          </h1>

          <p className="mt-6 max-w-3xl text-lg md:text-xl text-slate-300 leading-relaxed">
            {t.intro}
          </p>

          <a
            href="/"
            className="inline-block mt-8 text-sm font-semibold text-white underline underline-offset-4"
          >
            ← {t.back}
          </a>
        </div>
      </section>

      {/* INTRO */}
      <section className="max-w-6xl mx-auto px-6 py-16 text-center">
        <p className="text-sm font-semibold uppercase tracking-widest text-slate-500">
          {t.eyebrow}
        </p>

        <h2 className="mt-3 text-3xl md:text-4xl font-semibold text-slate-900">
          {t.question}
        </h2>

        <p className="mt-5 max-w-3xl mx-auto text-slate-600 leading-relaxed">
          {t.explanation}
        </p>
      </section>

      {/* BUSINESS TYPES */}
      <section className="bg-slate-50 py-16">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {currentBusinessTypes.map((business) => (
            <div
              key={business.title}
              className="bg-white border border-slate-200 rounded-2xl p-7 shadow-sm hover:shadow-md hover:-translate-y-1 transition"
            >
              <p className="text-xs font-semibold uppercase tracking-wider text-slate-500">
                {business.subtitle}
              </p>

              <h3 className="mt-2 text-2xl font-semibold text-slate-900">
                {business.title}
              </h3>

              <p className="mt-4 text-slate-600 leading-relaxed">
                {business.description}
              </p>

              <button
                onClick={() => setSelectedBusiness(business.title)}          
                className="mt-6 font-semibold text-slate-900"
             >
                {t.learnMore} →
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="max-w-6xl mx-auto px-6 py-20">
        <div className="rounded-3xl bg-slate-900 px-8 py-12 md:px-12 text-white">
          <p className="text-sm uppercase tracking-widest text-slate-300">
            {t.haveQuestions}
          </p>

          <h2 className="mt-3 text-3xl font-semibold">
            {t.ctaTitle}
          </h2>

          <p className="mt-4 max-w-2xl text-slate-300 leading-relaxed">
            {t.ctaText}
          </p>

          <a
            href="/#contacto"
            className="inline-block mt-7 bg-white text-slate-900 px-6 py-3 rounded-xl font-semibold"
          >
            {t.contact}
          </a>
        </div>
      </section>
      {selectedBusiness && businessDetails[lang][selectedBusiness] && (
  <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 px-4">
    <div className="relative w-full max-w-2xl max-h-[calc(100vh-2rem)] overflow-y-auto rounded-3xl bg-white shadow-2xl">

    <div className="sticky top-0 z-10 flex items-center justify-between bg-slate-900 px-4 py-2 sm:px-8 sm:py-5">
      <div className="flex items-center gap-0">
        <img
          src="/logo-mru-icon-clean.png"
        alt="MRU"
        className="h-12 w-auto sm:h-14 object-contain"
      />

      <span className="-ml-2 text-[9px] font-medium tracking-[0.22em] text-white sm:text-[10px]">
        Professional Services 
      </span>
      </div>

      <button
        onClick={() => setSelectedBusiness(null)}
        className="text-3xl leading-none text-white/80 hover:text-white"
        aria-label="Close"
      >
        × 
      </button>
    </div>

    <div className="p-8">

      <p className="text-sm font-semibold uppercase tracking-widest text-slate-500">
        {lang === "es" ? "Formación de Negocios" : "Business Formation"}
      </p>

      <h2 className="mt-3 text-3xl font-semibold text-slate-900">
        {businessDetails[lang][selectedBusiness].title}
      </h2>

      <p className="mt-5 text-slate-600 leading-relaxed">
        {businessDetails[lang][selectedBusiness].description}
      </p>

      <div className="mt-7">
        <h3 className="text-lg font-semibold text-slate-900">
          {lang === "es"
            ? "¿Qué debes considerar?"
            : "What should you consider?"}
        </h3>

        <ul className="mt-3 space-y-2 text-slate-600">
          {businessDetails[lang][selectedBusiness].considerations.map(
            (item) => (
              <li key={item}>• {item}</li>
            )
          )}
        </ul>
      </div>

      <div className="mt-8 rounded-2xl bg-slate-50 p-6">
        <h3 className="text-lg font-semibold text-slate-900">
          {businessDetails[lang][selectedBusiness].question}
        </h3>

        <p className="mt-2 text-slate-600">
          {lang === "es"
            ? "MRU puede orientarte sobre el proceso y los próximos pasos."
            : "MRU can guide you through the process and next steps."}
        </p>

        <a
          href="/#contacto"
          className="inline-block mt-5 rounded-xl bg-slate-900 px-5 py-3 font-semibold text-white"
        >
          {lang === "es" ? "Contactar a MRU" : "Contact MRU"}
        </a>
      </div>
    </div>
  </div>
  </div>
)}
    </main>
  );
}