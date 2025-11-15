"use client";
import { motion } from "framer-motion";

export default function Contact() {
  return (
    <motion.section
      id="contact"
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.7 }}
      className="py-24 px-4 max-w-3xl mx-auto text-center"
    >
      <h2 className="text-3xl font-bold mb-4">Contato</h2>
      <p className="text-lg mb-6">Entre em contato e vamos criar algo incrível!</p>

      <a
        href="mailto:contato@meusite.com"
        className="bg-blue-600 text-white px-6 py-3 rounded-lg shadow hover:bg-blue-700 transition"
      >
        Enviar Mensagem
      </a>
    </motion.section>
  );
}
