"use client";
import { motion } from "framer-motion";

export default function Services() {
  return (
    <motion.section
      id="services"
      initial={{ opacity: 0, x: 50 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.7 }}
      className="py-24 px-4 max-w-5xl mx-auto"
    >
      <h2 className="text-3xl font-bold mb-8 text-center">Serviços</h2>

      <div className="grid md:grid-cols-3 gap-8">
        <div className="p-6 shadow rounded-xl text-center">
          <h3 className="font-bold text-xl mb-2">Criação de Sites</h3>
          <p>Sites rápidos, modernos e profissionais.</p>
        </div>

        <div className="p-6 shadow rounded-xl text-center">
          <h3 className="font-bold text-xl mb-2">Landing Pages</h3>
          <p>Alta conversão com design estratégico.</p>
        </div>

        <div className="p-6 shadow rounded-xl text-center">
          <h3 className="font-bold text-xl mb-2">SEO</h3>
          <p>Otimização para aparecer no Google.</p>
        </div>
      </div>
    </motion.section>
  );
}
