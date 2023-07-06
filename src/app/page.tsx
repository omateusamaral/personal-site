"use client";
import { Inter } from "next/font/google";
import { Footer } from "./Components/Footer";
import { IntroductionSection } from "./Components/IntroductionSection";
import Navbar from "./Components/Navbar";
import { TimeLineSection } from "./Components/TimeLineSection";
import { logEvent, getAnalytics } from "firebase/analytics";
import { useEffect } from "react";
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
  react: {
    defaultTransParent: "span",
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
    <>
      <header>
        <Navbar />
      </header>
      <main
        className="flex min-h-screen flex-col items-center justify-between"
        style={{
          background:
            "linear-gradient(254deg, rgba(2,0,36,1) 0%, rgba(27,27,50,1) 30%, rgba(13,13,14,1) 100%)",
        }}
      >
        <IntroductionSection />
        <TimeLineSection />
        <Footer />
      </main>
    </>
  );
}
