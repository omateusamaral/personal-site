import { toast } from "react-hot-toast";
import isValidEmail from "is-valid-email";
import emailjs from "@emailjs/browser";

export type EmailFields = {
  name: string;
  email: string;
  subject: string;
  body: string;
};

export function hasErrorInFields(fields: EmailFields) {
  if (
    !fields.body.length ||
    !fields.email.length ||
    !fields.name.length ||
    !fields.subject.length
  ) {
    toast.error("Verifique os campos e envie novamente.", {
      id: "error-message",
    });
    return true;
  }

  if (!isValidEmail(fields.email)) {
    toast.error("Email inválido.", {
      id: "error-message-email",
    });
    return true;
  }

  return false;
}

export async function sendEmail(emailFields: EmailFields) {
  try {
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
  } catch (error) {
    toast.error("Não foi possível enviar proposta", {
      id: "error-email-not-sended",
    });
  }
}
