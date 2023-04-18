import "./globals.css";

export const metadata = {
  title: "Mateus Amaral - Software engineer",
  description: "Portifolio of Mateus Amaral",
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
