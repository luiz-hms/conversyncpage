"use client";
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="fixed w-full top-0 bg-white shadow z-50">
      <div className="max-w-5xl mx-auto flex justify-between items-center p-4">
        <h1 className="text-xl font-bold">Meu Site</h1>

        <div className="flex gap-6 font-medium">
          <Link href="#hero">Início</Link>
          <Link href="#about">Sobre</Link>
          <Link href="#plans">Planos</Link>
          <Link href="#services">Serviços</Link>
          <Link href="#contact">Contato</Link>
        </div>
      </div>
    </nav>
  );
}
