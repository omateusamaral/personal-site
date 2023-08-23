import { toast } from "react-hot-toast";
import isValidEmail from "is-valid-email";

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
