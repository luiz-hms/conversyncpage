"use client";
import { motion } from "framer-motion";

export default function About() {
  return (
    <motion.section
      id="about"
      initial={{ opacity: 0, x: -50 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.7 }}
      className="py-24 px-4 max-w-4xl mx-auto"
    >
      <h2 className="text-3xl font-bold mb-4">Sobre</h2>
      <p className="text-lg text-gray-700">
        Somos especialistas em sites modernos, rápidos e otimizados para
        conversão. Usamos tecnologias atuais e foco na performance.
      </p>
    </motion.section>
  );
}
