import { Metadata } from "next";
import "./globals.css";

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
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
