import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Gerador de Senhas",
  description: "Uma aplicação para gerar senhas aleatórias",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <body
        className={`bg-gradient-to-r from-slate-900 to-slate-700 antialiased h-screen w-screen`}
      >
        {children}
      </body>
    </html>
  );
}
