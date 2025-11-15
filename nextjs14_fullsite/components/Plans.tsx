"use client";

import { motion } from "framer-motion";
import {
  Check,
  X,
  Star,
  Rocket,
  Shield,
} from "lucide-react";

export default function Plans() {
  const planCards = [
    {
      name: "Básico",
      price: "R$ 49/mês",
      icon: <Star size={40} className="text-blue-600" />,
      features: [
        "1 número de WhatsApp",
        "Atendimento básico",
        "Chat interno",
        "Relatórios simples",
      ],
      unavailable: ["Chatbot avançado", "Integração API", "Multiagentes"],
      highlight: false,
    },
    {
      name: "Pro",
      price: "R$ 99/mês",
      icon: <Rocket size={40} className="text-blue-600" />,
      features: [
        "3 números de WhatsApp",
        "Chatbot inteligente",
        "Multiagentes",
        "Dashboard completo",
        "Integração API",
      ],
      unavailable: ["Atendente ilimitado"],
      highlight: true,
    },
    {
      name: "Premium",
      price: "R$ 199/mês",
      icon: <Shield size={40} className="text-blue-600" />,
      features: [
        "Números ilimitados",
        "Atendentes ilimitados",
        "Chatbot ilimitado",
        "API avançada",
        "Automações personalizadas",
        "Suporte 24/7",
      ],
      unavailable: [],
      highlight: false,
    },
  ];

  return (
    <section id="plans" className="py-24 px-4 max-w-7xl mx-auto">
      {/* título */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-14"
      >
        <h2 className="text-4xl font-bold mb-4">Planos e Preços</h2>
        <p className="text-gray-600 text-lg max-w-2xl mx-auto">
          Escolha o plano ideal para seu time e comece a atender seus clientes com eficiência.
        </p>
      </motion.div>

      {/* cards */}
      <div className="grid md:grid-cols-3 gap-10">
        {planCards.map((plan, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.8, y: 40 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.15 }}
            className={`
              shadow-lg rounded-2xl p-8 border relative
              transition hover:-translate-y-2 hover:shadow-2xl
              ${plan.highlight
                ? "border-blue-600 bg-blue-50 scale-105"
                : "border-gray-200 bg-white"}
            `}
          >
            {/* destaque */}
            {plan.highlight && (
              <span className="absolute top-4 right-4 bg-blue-600 text-white text-xs px-3 py-1 rounded-full">
                Mais Popular
              </span>
            )}

            <div className="flex justify-center mb-6">{plan.icon}</div>

            <h3 className="text-2xl font-bold text-center">{plan.name}</h3>
            <p className="text-3xl font-extrabold text-blue-600 text-center my-4">
              {plan.price}
            </p>

            <div className="mt-6 space-y-2">
              {plan.features.map((feat, i) => (
                <div key={i} className="flex items-center gap-2 text-gray-700">
                  <Check size={18} className="text-green-600" />
                  {feat}
                </div>
              ))}
            </div>

            {plan.unavailable.length > 0 && (
              <div className="mt-4 space-y-2 opacity-70">
                {plan.unavailable.map((feat, i) => (
                  <div key={i} className="flex items-center gap-2 text-gray-500">
                    <X size={18} className="text-red-500" />
                    {feat}
                  </div>
                ))}
              </div>
            )}

            <button
              className={`
                w-full mt-8 py-3 font-semibold rounded-lg
                ${plan.highlight
                  ? "bg-blue-600 text-white hover:bg-blue-700"
                  : "bg-gray-200 hover:bg-gray-300"}
              `}
            >
              Assinar
            </button>
          </motion.div>
        ))}
      </div>

      {/* comparação */}
      <div className="mt-24">
        <motion.h3
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl font-bold text-center mb-6"
        >
          Comparação dos Planos
        </motion.h3>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="overflow-x-auto"
        >
          <table className="w-full border-collapse text-left rounded-lg overflow-hidden">
            <thead>
              <tr className="bg-blue-600 text-white">
                <th className="p-4">Recurso</th>
                {planCards.map((p, idx) => (
                  <th key={idx} className="p-4 text-center">{p.name}</th>
                ))}
              </tr>
            </thead>

            <tbody>
              {[
                "Números de WhatsApp",
                "Multiagentes",
                "Chatbot Inteligente",
                "API",
                "Atendentes Ilimitados",
                "Suporte 24/7",
              ].map((feature, i) => (
                <tr key={i} className="border-b">
                  <td className="p-4 font-medium">{feature}</td>

                  {planCards.map((plan, index) => {
                    const available =
                      plan.features.some(f => f.toLowerCase().includes(feature.toLowerCase())) ||
                      (feature === "Atendentes Ilimitados" && plan.name === "Premium") ||
                      (feature === "Suporte 24/7" && plan.name === "Premium");

                    return (
                      <td key={index} className="p-4 text-center">
                        {available ? (
                          <Check className="text-green-600 mx-auto" />
                        ) : (
                          <X className="text-red-500 mx-auto opacity-60" />
                        )}
                      </td>
                    );
                  })}
                </tr>
              ))}
            </tbody>
          </table>
        </motion.div>
      </div>
    </section>
  );
}
