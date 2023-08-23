"use client";

import { useState } from "react";
import { EmailFields, hasErrorInFields } from "../helpers";
import emailjs from "@emailjs/browser";
import { toast } from "react-hot-toast";
export default function page() {
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

    await emailjs.send(
      process.env.NEXT_PUBLIC_EMAILJS__SERVICE_ID ?? "",
      process.env.NEXT_PUBLIC_EMAILJS__TEMPLATE_ID ?? "",
      {
        from_name: emailFields.name,
        message: emailFields.body,
        email: emailFields.email,
      },
      process.env.NEXT_PUBLIC_EMAILJS__PUBLIC_KEY
    );

    toast.success("E-mail enviado e iremos análisar sua proposta.", {
      id: "success-email-sended",
    });
  }

  function handleChange(context: string, value: string) {
    setEmailFields({
      ...emailFields,
      [context]: value,
    });
  }
  return (
    <div className="flex flex-1 w-full justify-center">
      <div className="flex align-center flex-col justify-center  max-w-md w-2/4">
        <h1 className="text-white font-bold text-4xl">
          Quer que sua ideia vire realidade?
        </h1>
        <h4 className="text-yellow-300  font-semibold text-2xl">
          Entre em contanto,
        </h4>
        <p className="font-medium text-white text-xl">
          Seja sua ideia um <span className="text-yellow-300">site, </span>
          <span className="text-yellow-300">app</span> ou até mesmo uma{" "}
          <span className="text-yellow-300">automação</span>, posso realizar
        </p>
        <h4 className="font-medium text-white text-lg">
          unindo sua ideia com a tecnologia.
        </h4>
      </div>
      <div className="w-2/4  flex justify-center items-center">
        <form className="w-full">
          <div className="mb-5">
            <label
              htmlFor="name"
              className="mb-3 block text-base font-medium text-white"
            >
              Full Name
            </label>
            <input
              type="text"
              name="name"
              id="name"
              placeholder="Full Name"
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
              Email Address
            </label>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="example@domain.com"
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
              Subject
            </label>
            <input
              type="text"
              name="subject"
              id="subject"
              placeholder="Enter your subject"
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
              Message
            </label>
            <textarea
              rows={4}
              name="message"
              id="message"
              placeholder="Type your message"
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
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
