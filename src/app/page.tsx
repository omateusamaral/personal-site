"use client";
import { Inter } from "next/font/google";
import { IntroductionSection } from "./Components/IntroductionSection";
import { TimeLineSection } from "./Components/TimeLineSection";
import { logEvent, getAnalytics } from "firebase/analytics";
import { Suspense, useEffect } from "react";
import { app } from "./firebase.config";
import i18next from "i18next";
import { initReactI18next } from "react-i18next";
import { resources } from "./i18n";

i18next.use(initReactI18next).init({
  resources: resources,
  fallbackLng: "pt",
  interpolation: {
    escapeValue: false,
  },
});
const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  useEffect(() => {
    if (typeof window !== "undefined") {
      logEvent(getAnalytics(app), "page_view", {
        page_location: "/",
        page_path: "/",
        page_title: "Mateus Amaral",
      });
    }
  }, []);
  return (
    <Suspense>
      <IntroductionSection />
      <TimeLineSection />
    </Suspense>
  );
}
