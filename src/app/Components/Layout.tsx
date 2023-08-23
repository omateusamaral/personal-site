"use client";
import i18next from "i18next";
import { initReactI18next } from "react-i18next";
import { resources } from "../i18n";

i18next.use(initReactI18next).init({
  resources: resources,
  fallbackLng: "pt",
  interpolation: {
    escapeValue: false,
  },
});
export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <main
      className="flex min-h-screen flex-col items-center justify-between"
      style={{
        background:
          "linear-gradient(254deg, rgba(2,0,36,1) 0%, rgba(27,27,50,1) 30%, rgba(13,13,14,1) 100%)",
      }}
    >
      {children}
    </main>
  );
}
