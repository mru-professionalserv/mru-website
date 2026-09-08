"use client";

import { useState } from "react";
import Link from "next/link";

export default function AccountingBookkeepingPage() {
  const [lang, setLang] = useState("en");

  const content = {
    en: {
      title: "Accounting & Bookkeeping",
      intro:
        "Keep your business finances organized and up to date, with clear information to better understand your financial position.",
      badges: ["Organize", "Track", "Understand"],

      services: [
        {
          title: "Bookkeeping",
          desc: "Ongoing organization and recording of business financial activity to help keep your books accurate and up to date.",
        },
        {
          title: "Income & Expense Tracking",
          desc: "Organization and categorization of business income and expenses to provide a clearer view of your finances.",
        },
        {
          title: "Bank & Account Reconciliations",
          desc: "Review and reconciliation of financial records with bank and account activity to identify discrepancies and maintain accurate balances.",
        },
        {
          title: "Financial Reports",
          desc: "Preparation and review of financial reports to help you better understand business performance and financial position.",
        },
        {
          title: "Financial Organization & Cleanup",
          desc: "Support with organizing, reviewing, and cleaning up existing bookkeeping records when your books need attention or correction.",
        },
        {
          title: "Ongoing Accounting Support",
          desc: "Personalized accounting support throughout the year to help your business stay organized and prepared.",
        },
      ],

      ctaTitle: "Ready to get your books organized?",
      ctaText:
        "MRU Professional Services provides personalized accounting support designed to bring greater clarity and organization to your business finances.",
      ctaButton: "Contact MRU",
      back: "Back to Home",
    },

    es: {
      title: "Contabilidad y Bookkeeping",
      intro:
        "Mantén las finanzas de tu negocio organizadas, actualizadas y claras para que tengas una visión precisa de tu situación financiera.",
      badges: ["Organiza", "Controla", "Comprende"],

      services: [
        {
          title: "Bookkeeping",
          desc: "Organización y registro continuo de la actividad financiera de tu negocio para mantener tus libros actualizados y en orden.",
        },
        {
          title: "Registro de Ingresos y Gastos",
          desc: "Organización y categorización de los ingresos y gastos del negocio para tener una visión más clara de tus finanzas.",
        },
        {
          title: "Conciliaciones Bancarias y de Cuentas",
          desc: "Revisión y conciliación de los registros financieros con la actividad bancaria y de otras cuentas para identificar diferencias y mantener balances correctos.",
        },
        {
          title: "Reportes Financieros",
          desc: "Preparación y revisión de reportes financieros para ayudarte a comprender mejor el desempeño y la situación financiera de tu negocio.",
        },
        {
          title: "Organización y Limpieza Contable",
          desc: "Apoyo para organizar, revisar y corregir registros contables existentes cuando tus libros necesitan ponerse al día.",
        },
        {
          title: "Apoyo Contable Continuo",
          desc: "Apoyo contable personalizado durante el año para ayudarte a mantener las finanzas de tu negocio organizadas y preparadas.",
        },
      ],

      ctaTitle: "¿Listo para organizar la contabilidad de tu negocio?",
      ctaText:
        "MRU Professional Services ofrece apoyo contable personalizado para brindarte mayor claridad y organización en las finanzas de tu negocio.",
      ctaButton: "Contactar a MRU",
      back: "Volver al Inicio",
    },
  };

  const t = content[lang];

  return (
    <main className="min-h-screen bg-slate-50">
      <header className="bg-slate-950 text-white">
        <div className="mx-auto max-w-6xl px-6 py-6">

          <div className="flex items-center justify-between gap-4">
            <Link href="/" className="flex items-center gap-3">
              <img
                src="/logo-mru-icon-clean.png"
                alt="MRU"
                className="h-16 w-auto"
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

            <button
              onClick={() => setLang(lang === "en" ? "es" : "en")}
              className="rounded-full border border-white/30 px-4 py-2 text-sm font-semibold transition hover:bg-white/10"
            >
              {lang === "en" ? "ES" : "EN"}
            </button>
          </div>

          <div className="mx-auto max-w-3xl py-14 text-center">
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
              {t.title}
            </h1>

            <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-slate-300">
              {t.intro}
            </p>

            <div className="mt-7 flex flex-wrap items-center justify-center gap-3 text-sm font-semibold text-slate-300">
              {t.badges.map((badge, index) => (
                <div key={badge} className="flex items-center gap-3">
                  <span className="rounded-full border border-white/20 px-4 py-2">
                    {badge}
                  </span>

                  {index < t.badges.length - 1 && (
                    <span className="text-slate-500">•</span>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </header>

      <section className="mx-auto max-w-6xl px-6 py-16">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {t.services.map((service) => (
            <div
              key={service.title}
              className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-md"
            >
              <h2 className="text-xl font-semibold text-slate-900">
                {service.title}
              </h2>

              <p className="mt-3 leading-7 text-slate-600">
                {service.desc}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-14 rounded-3xl bg-slate-900 px-7 py-10 text-white sm:px-10">
          <h2 className="text-2xl font-bold">{t.ctaTitle}</h2>

          <p className="mt-3 max-w-2xl leading-7 text-slate-300">
            {t.ctaText}
          </p>

          <div className="mt-6 flex flex-wrap gap-3">
            <Link
              href="/#contacto"
              className="rounded-xl bg-white px-5 py-3 text-sm font-semibold text-slate-900 transition hover:bg-slate-100"
            >
              {t.ctaButton}
            </Link>

            <Link
              href="/"
              className="rounded-xl border border-white/30 px-5 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
            >
              {t.back}
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}