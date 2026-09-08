"use client";

import { useState } from "react";
import Link from "next/link";

export default function AdvisoryConsultingPage() {
  const [lang, setLang] = useState("en");

  const content = {
    en: {
      title: "Advisory & Consulting",
      intro:
        "Personalized guidance for individuals and small businesses to plan ahead, evaluate their options, and make informed tax, financial, and business decisions throughout the year.",

      badges: ["Plan", "Evaluate", "Decide"],

      services: [
        {
          title: "Tax Planning",
          desc: "Year-round guidance to help you understand potential tax obligations, plan for estimated payments, and identify opportunities before tax season.",
        },
        {
          title: "Business Guidance",
          desc: "Personalized guidance for business owners evaluating financial, tax, and operational decisions that may affect their business.",
        },
        {
          title: "Self-Employed Consultations",
          desc: "Guidance for independent contractors and self-employed individuals on tax responsibilities, estimated payments, business expenses, and recordkeeping.",
        },
        {
          title: "Tax Situation Review",
          desc: "A personalized review of your current tax situation to identify potential concerns, planning opportunities, and areas that may require additional attention.",
        },
        {
          title: "Financial Organization Guidance",
          desc: "Support with improving how you organize financial information, records, and documents so you can make decisions with greater clarity.",
        },
        {
          title: "Personalized Consultation",
          desc: "One-on-one guidance for specific tax, accounting, or business questions based on your individual circumstances and goals.",
        },
      ],

      highlightTitle: "Planning should not start at tax season.",
      highlightText:
        "Year-round guidance can help you identify responsibilities earlier, stay organized, and make decisions with more confidence.",

      ctaTitle: "Have a question or important decision to make?",
      ctaText:
        "MRU Professional Services provides personalized consultations to help you understand your options, address your questions, and determine the next steps with greater clarity.",

      ctaButton: "Schedule a Consultation",
      back: "Back to Home",
    },

    es: {
      title: "Asesoría y Consultoría",
      intro:
        "Orientación personalizada para ayudar a individuos y pequeños negocios a planificar, evaluar sus opciones y tomar decisiones contributivas, financieras y de negocio con mayor claridad durante todo el año.",

      badges: ["Planifica", "Evalúa", "Decide"],

      services: [
        {
          title: "Planificación Contributiva",
          desc: "Orientación durante todo el año para ayudarte a comprender posibles obligaciones contributivas, planificar pagos estimados e identificar oportunidades antes de la temporada de impuestos.",
        },
        {
          title: "Orientación para Negocios",
          desc: "Orientación personalizada para dueños de negocios que necesitan evaluar decisiones financieras, contributivas y operacionales que puedan impactar su negocio.",
        },
        {
          title: "Consultas para Trabajadores por Cuenta Propia",
          desc: "Orientación para contratistas independientes y trabajadores por cuenta propia sobre responsabilidades contributivas, pagos estimados, gastos del negocio y mantenimiento de registros.",
        },
        {
          title: "Revisión de Situación Contributiva",
          desc: "Revisión personalizada de tu situación contributiva actual para identificar posibles asuntos, oportunidades de planificación y áreas que puedan requerir atención adicional.",
        },
        {
          title: "Orientación para Organización Financiera",
          desc: "Apoyo para mejorar la organización de tu información financiera, registros y documentos financieros, ayudándote a tomar decisiones con mayor claridad.",
        },
        {
          title: "Consulta Personalizada",
          desc: "Orientación individual para preguntas específicas sobre impuestos, contabilidad o negocios, de acuerdo con tu situación y tus objetivos.",
        },
      ],

      highlightTitle: "La planificación no debe comenzar en temporada de impuestos.",
      highlightText:
        "Recibir orientación durante el año puede ayudarte a identificar responsabilidades con tiempo, mantenerte organizado y tomar decisiones con mayor confianza.",

      ctaTitle: "¿Tienes una pregunta o una decisión importante que tomar?",
      ctaText:
        "MRU Professional Services ofrece consultas personalizadas para ayudarte a comprender tus opciones, atender tus preguntas y determinar los próximos pasos con mayor claridad.",

      ctaButton: "Solicitar una Consulta",
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

        <div className="mt-12 rounded-3xl border border-slate-200 bg-white px-7 py-9 text-center shadow-sm sm:px-10">
          <h2 className="text-2xl font-bold text-slate-900">
            {t.highlightTitle}
          </h2>

          <p className="mx-auto mt-3 max-w-2xl leading-7 text-slate-600">
            {t.highlightText}
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