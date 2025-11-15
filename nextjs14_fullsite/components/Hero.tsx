"use client";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <motion.section
      id="hero"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7 }}
      className="min-h-screen flex flex-col justify-center items-center text-center px-4"
    >
      <h1 className="text-5xl font-bold">Seu Site Profissional</h1>
      <p className="mt-4 text-lg max-w-xl">
        Moderno, responsivo, com animações suaves e SEO otimizado.
      </p>
    </motion.section>
  );
}
