"use client";
import { Inter } from "next/font/google";
import { IntroductionSection } from "./Components/IntroductionSection";
import { TimeLineSection } from "./Components/TimeLineSection";
import { logEvent, getAnalytics } from "firebase/analytics";
import { Suspense, useEffect } from "react";
import { app } from "./firebase.config";

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
