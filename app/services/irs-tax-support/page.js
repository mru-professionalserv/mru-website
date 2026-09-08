"use client";

import { useState } from "react";
import Link from "next/link";

export default function IRSTaxSupportPage() {
  const [lang, setLang] = useState("en");

  const content = {
    en: {
      title: "IRS Services & Tax Support",
      intro:
        "Personalized support for IRS-related matters, tax compliance, notices, applications, and other tax situations beyond standard return preparation.",
      badges: ["Guidance", "Compliance", "Support"],

      services: [
        {
          title: "IRS Notices & Letters",
          desc: "Support with reviewing IRS notices and letters, understanding what they mean, identifying required next steps, and organizing the information needed to respond.",
        },
        {
          title: "ITIN Guidance & W-7 Preparation",
          desc: "Guidance on ITIN requirements and assistance preparing Form W-7 and the documentation needed for submission.",
        },
        {
          title: "Tax Compliance Support",
          desc: "Guidance on tax filing obligations, required documentation, deadlines, and other compliance requirements based on your situation.",
        },
        {
          title: "Prior-Year Tax Matters",
          desc: "Support with unresolved prior-year tax matters, missing filings, documentation review, and identifying appropriate next steps.",
        },
        {
          title: "IRS Account & Document Assistance",
          desc: "Assistance reviewing tax records, transcripts, notices, and other IRS-related documents to better understand your tax situation.",
        },
        {
          title: "General Tax Support",
          desc: "Personalized guidance for tax-related questions and situations that fall outside standard tax return preparation.",
        },
      ],

      trustTitle: "Clear guidance. Confidential support.",
      trustText:
        "Your tax information is handled with care, discretion, and attention to detail throughout the process.",

      ctaTitle: "Received a notice or need tax support?",
      ctaText:
        "MRU Professional Services can help you understand your situation, organize the necessary information, and determine the next steps.",
      ctaButton: "Contact MRU",
      back: "Back to Home",
    },

    es: {
      title: "Asistencia Contributiva y Trámites con el IRS",
      intro:
        "Apoyo personalizado para asuntos relacionados con el IRS, cumplimiento contributivo, avisos, solicitudes y otras situaciones fuera de la preparación regular de una planilla.",
      badges: ["Orientación", "Cumplimiento", "Apoyo"],

      services: [
        {
          title: "Avisos y Cartas del IRS",
          desc: "Apoyo para revisar avisos y cartas del IRS, comprender su contenido, identificar los próximos pasos y organizar la información necesaria para responder.",
        },
        {
          title: "Solicitudes de ITIN",
          desc: "Orientación sobre los requisitos del ITIN y asistencia en la preparación del Formulario W-7 y la documentación necesaria para su presentación.",
        },
        {
          title: "Apoyo en Cumplimiento Contributivo",
          desc: "Orientación sobre obligaciones de radicación, documentación requerida, fechas límite y asuntos generales de cumplimiento según tu situación.",
        },
        {
          title: "Asuntos Contributivos de Años Anteriores",
          desc: "Apoyo con situaciones contributivas pendientes de años anteriores, radicaciones faltantes, revisión de documentos e identificación de próximos pasos.",
        },
        {
          title: "Asistencia con Documentos y Registros del IRS",
          desc: "Apoyo para revisar registros contributivos, transcripciones, avisos y otros documentos relacionados con el IRS para comprender mejor tu situación contributiva.",
        },
        {
          title: "Orientación Contributiva General",
          desc: "Orientación personalizada para preguntas y situaciones contributivas que estén fuera de la preparación regular de una planilla.",
        },
      ],

      trustTitle: "Orientación clara. Apoyo confidencial.",
      trustText:
        "Tu información contributiva se maneja con cuidado, discreción y atención al detalle durante todo el proceso.",

      ctaTitle: "¿Recibiste un aviso o necesitas apoyo contributivo?",
      ctaText:
        "MRU Professional Services puede ayudarte a comprender tu situación, organizar la información necesaria y determinar los próximos pasos.",
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

        <div className="mt-12 rounded-3xl border border-slate-200 bg-white px-7 py-8 text-center shadow-sm sm:px-10">
          <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full border border-slate-300 text-xl">
            🔒
          </div>

          <h2 className="mt-4 text-2xl font-bold text-slate-900">
            {t.trustTitle}
          </h2>

          <p className="mx-auto mt-3 max-w-2xl leading-7 text-slate-600">
            {t.trustText}
          </p>
        </div>

        <div className="mt-10 rounded-3xl bg-slate-900 px-7 py-10 text-white sm:px-10">
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