import "./globals.css";
import { Inter } from "next/font/google";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "ConverSync - Atendimento Inteligente Omnichannel",
  description: "A ferramenta que organiza e facilita o atendimento da sua empresa. Chatbot com IA, WhatsApp, Instagram, Telegram e Messenger em uma única plataforma.",
  keywords: "chatbot, whatsapp, atendimento, omnichannel, inteligência artificial, automação, conversync",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR">
      <head></head>
      <body className={inter.className}>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
