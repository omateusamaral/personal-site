import { Metadata } from "next";
import "./globals.css";
import { Footer } from "./Components/Footer";
import Navbar from "./Components/Navbar";
import { Toaster } from "react-hot-toast";
import Layout from "./Components/Layout";

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
      <body>
        <Navbar />
        <Layout>
          <Toaster />
          {children}
        </Layout>
        <Footer />
      </body>
    </html>
  );
}
