import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Hotel e Restaurante Aquarela | Peruíbe",
  description:
    "Hospedagem, gastronomia e momentos especiais no Hotel e Restaurante Aquarela, em Peruíbe.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}
