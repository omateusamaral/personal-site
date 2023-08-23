import { Metadata } from "next";
import "./globals.css";
import { Footer } from "./Components/Footer";
import Navbar from "./Components/Navbar";
import { Toaster } from "react-hot-toast";

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
        <main
          className="flex min-h-screen flex-col items-center justify-between"
          style={{
            background:
              "linear-gradient(254deg, rgba(2,0,36,1) 0%, rgba(27,27,50,1) 30%, rgba(13,13,14,1) 100%)",
          }}
        >
          <Toaster />
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
