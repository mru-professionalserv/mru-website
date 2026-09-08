"use client";

import { useState } from "react";
import Link from "next/link";

export default function TaxServicesPage() {
  const [lang, setLang] = useState("en");

  const content = {
    en: {
      label: "TAX SERVICES",
      title: "Tax Services",
      intro:
        "Professional tax preparation and filing support for individuals, self-employed professionals, and businesses.",

      services: [
        {
          title: "Individual Tax Returns",
          desc: "Preparation of federal and applicable state individual income tax returns with attention to accuracy, elegible credits, deductions, and filing requirements.",
        },
        {
          title: "Self-Employed & 1099",
          desc: "Tax preparation for independent contractors, gig workers, and self-employed individuals, including Schedule C income and elegible business expenses.",
        },
        {
          title: "Business Tax Returns",
          desc: "Tax preparation for eligible business entities, including partnerships and corporations, based on the entity structure and filing requirements.",
        },
        {
          title: "Tax Amendments",
          desc: "Preparation of amended tax returns when income, deductions, credits, filing status, or other information needs to be corrected.",
        },
        {
          title: "Federal & State Filings",
          desc: "Federal income tax filings and applicable state returns preparations based on your individual tax situation.",
        },
        {
          title: "Puerto Rico Tax Services",
          desc: "Preparation and filing of applicable Puerto Rico individual and business tax returns.",
        },
      ],

      ctaTitle: "Need help with your taxes?",
      ctaText:
        "MRU Professional Services provides personalized guidance to help you understand your filing responsibilities and move forward with confidence.",
      ctaButton: "Contact MRU",
      back: "Back to Home",
    },

    es: {
      label: "SERVICIOS DE IMPUESTOS",
      title: "Servicios de Impuestos",
      intro:
        "Preparación y radicación de impuestos para individuos, trabajadores por cuenta propia y negocios.",

      services: [
        {
          title: "Planillas Individuales",
          desc: "Preparación de declaraciones federales y estatales aplicables, considerando créditos y deducciones elegibles, requisitos de radicación y la situación contributiva del cliente.",
        },
        {
          title: "Trabajadores por Cuenta Propia y 1099",
          desc: "Preparación contributiva para contratistas independientes, trabajadores de plataformas y personas por cuenta propia, incluyendo ingresos de Schedule C y gastos de negocio elegibles.",
        },
        {
          title: "Planillas de Negocios",
          desc: "Preparación contributiva para entidades de negocio elegibles, incluyendo sociedades y corporaciones, según su estructura y los requisitos de radicación aplicables.",
        },
        {
          title: "Enmiendas Contributivas",
          desc: "Preparación de declaraciones enmendadas cuando es necesario corregir ingresos, deducciones, créditos, estado civil contributivo u otra información.",
        },
        {
          title: "Radicaciones Federales y Estatales",
          desc: "Preparación y radicación de declaraciones federales y estatales aplicables de acuerdo con la situación contributiva del cliente.",
        },
        {
          title: "Servicios Contributivos de Puerto Rico",
          desc: "Preparación y radicación de planillas aplicables para individuos y negocios en Puerto Rico.",
        },
      ],

      ctaTitle: "¿Necesitas ayuda con tus impuestos?",
      ctaText:
        "MRU Professional Services ofrece orientación personalizada para ayudarte a comprender tus responsabilidades contributivas y avanzar con mayor claridad.",
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

            <button
              onClick={() => setLang(lang === "en" ? "es" : "en")}
              className="rounded-full border border-white/30 px-4 py-2 text-sm font-semibold transition hover:bg-white/10"
            >
              {lang === "en" ? "ES" : "EN"}
            </button>
          </div>

          <div className="max-w-3xl py-14">

            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
              {t.title}
            </h1>

            <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-slate-300">
              {t.intro}
            </p>

            <div className="mt-7 flex flex-wrap items-center justify-center gap-3 text-sm font-semibold text-slate-300">
             <span className="rounded-full border border-white/20 px-4 py-2">
              Federal
             </span>

              <span className="text-slate-500">•</span>

            <span className="rounded-full border border-white/20 px-4 py-2">
              State
           </span>

            <span className="text-slate-500">•</span>

            <span className="rounded-full border border-white/20 px-4 py-2">
             Puerto Rico
           </span>
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