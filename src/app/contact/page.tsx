"use client";

import { useEffect, useState } from "react";
import { EmailFields, hasErrorInFields, sendEmail } from "../helpers";
import { logEvent, getAnalytics } from "firebase/analytics";
import { app } from "../firebase.config";
import { Trans, useTranslation } from "react-i18next";

export default function Contact() {
  const { t } = useTranslation();
  const [emailFields, setEmailFields] = useState<EmailFields>({
    name: "",
    email: "",
    subject: "",
    body: "",
  });

  async function handleSubmit() {
    if (hasErrorInFields(emailFields)) {
      return;
    }

    await sendEmail(emailFields);
  }

  function handleChange(context: string, value: string) {
    setEmailFields({
      ...emailFields,
      [context]: value,
    });
  }
  useEffect(() => {
    if (typeof window !== "undefined") {
      logEvent(getAnalytics(app), "page_view", {
        page_location: "/contact",
        page_path: "/contact",
      });
    }
  }, []);
  return (
    <div className="flex flex-1 w-full flex-col lg:flex-row p-4  justify-center">
      <div
        className="flex align-center flex-col justify-center  max-w-md 
      lg:w-2/4 w-full"
      >
        <h1 className="text-white font-bold text-4xl">
          <Trans t={t}>Quer que sua ideia vire realidade?</Trans>
        </h1>
        <h4 className="text-yellow-300  font-semibold text-2xl">
          <Trans t={t}>Entre em contanto</Trans>,
        </h4>
        <p className="font-medium text-white text-xl">
          <Trans t={t}>Seja sua ideia um</Trans>{" "}
          <span className="text-yellow-300">site, </span>
          <span className="text-yellow-300">app</span>{" "}
          <Trans t={t}>ou até mesmo uma</Trans>{" "}
          <span className="text-yellow-300">
            <Trans t={t}>automação</Trans>
          </span>
          , <Trans t={t}>posso realizar</Trans>
        </p>
        <h4 className="font-medium text-white text-lg">
          <Trans t={t}>unindo sua ideia com a tecnologia.</Trans>
        </h4>
      </div>
      <div className="lg:w-2/4 w-full flex justify-center items-center">
        <form className="w-full">
          <div className="mb-5">
            <label
              htmlFor="name"
              className="mb-3 block text-base font-medium text-white"
            >
              <Trans t={t}>Nome completo</Trans>
            </label>
            <input
              type="text"
              name="name"
              id="name"
              placeholder="Michael Jordan"
              className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
              onChange={(event) => {
                handleChange("name", event.target.value);
              }}
            />
          </div>
          <div className="mb-5">
            <label
              htmlFor="email"
              className="mb-3 block text-base font-medium text-white"
            >
              <Trans t={t}>E-mail</Trans>
            </label>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="email@domain.com"
              className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
              onChange={(event) => {
                handleChange("email", event.target.value);
              }}
            />
          </div>
          <div className="mb-5">
            <label
              htmlFor="subject"
              className="mb-3 block text-base font-medium text-white"
            >
              <Trans t={t}>Assunto</Trans>
            </label>
            <input
              type="text"
              name="subject"
              id="subject"
              placeholder={t("Assunto")}
              className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
              onChange={(event) => {
                handleChange("subject", event.target.value);
              }}
            />
          </div>
          <div className="mb-5">
            <label
              htmlFor="message"
              className="mb-3 block text-base font-medium text-white"
            >
              <Trans t={t}>Digite aqui sua ideia</Trans>
            </label>
            <textarea
              rows={4}
              name="message"
              id="message"
              placeholder={t("De forma simples e breve digite aqui sua ideia")}
              className="w-full resize-none rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
              onChange={(event) => {
                handleChange("body", event.target.value);
              }}
            ></textarea>
          </div>
          <div>
            <button
              className="hover:shadow-form rounded-md bg-[#6A64F1] py-3 px-8 text-base font-semibold text-white outline-none w-full"
              type="button"
              onClick={handleSubmit}
            >
              <Trans t={t}>Enviar proposta</Trans>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
