import "./globals.css";
import Navbar from "../components/Navbar";

export const metadata = {
  title: "Conversync",
  description: "Sistema multiAtendimento whatsapp e gestão para empresa",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR">
      <body className="bg-white text-gray-900">
        <Navbar />
        {children}
      </body>
    </html>
  );
}
