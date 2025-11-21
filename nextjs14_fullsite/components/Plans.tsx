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
      name: "Starter",
      price: "R$ 49/mês",
      icon: <Star size={40} className="text-green-600" />,
      features: [
        "1 canal de atendimento",
        "Até 500 conversas/mês",
        "Chatbot básico",
        "Relatórios simples",
      ],
      unavailable: ["Múltiplos atendentes", "Integração API", "IA avançada"],
      highlight: false,
    },
    {
      name: "Professional",
      price: "R$ 149/mês",
      icon: <Rocket size={40} className="text-green-600" />,
      features: [
        "Até 5 canais de atendimento",
        "Conversas ilimitadas",
        "Chatbot com IA avançada",
        "Múltiplos atendentes",
        "Análise de dados completa",
        "Integração API",
      ],
      unavailable: ["Canais ilimitados"],
      highlight: true,
    },
    {
      name: "Enterprise",
      price: "Customizado",
      icon: <Shield size={40} className="text-green-600" />,
      features: [
        "Canais ilimitados",
        "Volume ilimitado",
        "IA personalizada",
        "API completa",
        "White label",
        "Gerente de conta dedicado",
        "SLA garantido",
      ],
      unavailable: [],
      highlight: false,
    },
  ];

  return (
    <section id="plans" className="py-20 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* título */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">
            <span>Planos que se adaptam</span>
            <br />
            <span className="gradient-green">ao seu negócio</span>
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Escolha o plano ideal para sua empresa. Todos com 3 dias de teste grátis.
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
                  ? "border-green-500 bg-green-50 scale-105"
                  : "border-gray-200 bg-white"}
            `}
            >
              {/* destaque */}
              {plan.highlight && (
                <span className="absolute top-4 right-4 bg-green-500 text-white text-xs px-3 py-1 rounded-full">
                  Mais Popular
                </span>
              )}

              <div className="flex justify-center mb-6">{plan.icon}</div>

              <h3 className="text-2xl font-bold text-center">{plan.name}</h3>
              <p className="text-3xl font-extrabold gradient-green text-center my-4">
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
                w-full mt-8 py-3 font-semibold rounded-lg transition-all
                ${plan.highlight
                    ? "bg-green-500 text-white hover:bg-green-600 hover:scale-105"
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
                <tr className="bg-green-600 text-white">
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

          {/* Additional Info */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
            className="mt-12 text-center"
          >
            <p className="text-gray-600">
              Todos os planos incluem 3 dias de teste grátis • Cancele quando quiser • Sem taxas de setup
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
