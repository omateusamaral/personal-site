import { Metadata } from "next";
import "./globals.css";
import { useEffect } from "react";
import { initFirebase } from "./firebase.config";
import { logEvent } from "firebase/analytics";

export const metadata: Metadata = {
  title: "Mateus Amaral - Software engineer",
  description: "Portifolio of Mateus Amaral",
  icons: {
    icon: {
      url: "/favicon.png",
      type: "image/png",
    },
    shortcut: { url: "/favicon.png", type: "image/png" },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  useEffect(() => {
    initFirebase();
  }, []);
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
