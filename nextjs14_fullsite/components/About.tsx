"use client";
import { motion } from "framer-motion";
import {
  Users,
  Bot,
  BarChart3,
  MessageSquare,
  Clock,
  Shield,
  Smartphone,
  Headphones,
} from "lucide-react";

const features = [
  {
    icon: MessageSquare,
    title: "Chatbot ao seu alcance",
    description:
      "Atenda clientes em todas as plataformas: WhatsApp, Instagram, Telegram e Messenger com IA avançada.",
  },
  {
    icon: BarChart3,
    title: "Analise dados e melhore",
    description:
      "Colete e analise dados de conversas para identificar tendências e melhorar a qualidade do atendimento.",
  },
  {
    icon: Bot,
    title: "Inteligência Artificial",
    description:
      "Automatize respostas com IA. Atendimento personalizado e eficiente 24/7 para seus clientes.",
  },
  {
    icon: Users,
    title: "Múltiplos Atendentes",
    description:
      "Atenda diversos clientes simultaneamente com vários atendentes. Não perca nenhum chat.",
  },
  {
    icon: Clock,
    title: "Autoatendimento 24/7",
    description:
      "FAQs e chatbots para resolver problemas simples, liberando sua equipe para casos complexos.",
  },
  {
    icon: Shield,
    title: "Segurança e Confiabilidade",
    description:
      "Dados protegidos com criptografia de ponta. Infraestrutura robusta e confiável.",
  },
  {
    icon: Smartphone,
    title: "App Mobile",
    description:
      "Gerencie tudo pelo celular. Disponível para Android e iOS com sincronização em tempo real.",
  },
  {
    icon: Headphones,
    title: "Suporte Dedicado",
    description:
      "Nossa equipe está sempre pronta para ajudar você a aproveitar ao máximo a plataforma.",
  },
];

export default function About() {
  return (
    <section id="about" className="py-20 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">
            <span className="gradient-green">Recursos Completos</span>
            <br />
            <span>para Revolucionar seu Atendimento</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Solução integrada para atender seus clientes de forma eficiente e
            personalizada em todos os canais de comunicação.
          </p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group p-6 bg-white border border-gray-200 rounded-2xl hover:border-green-300 hover:shadow-xl transition-all duration-300 card-hover"
              >
                {/* Icon */}
                <div className="mb-4 relative inline-block">
                  <div className="absolute inset-0 bg-green-500/20 rounded-lg blur-lg group-hover:bg-green-500/30 transition-all"></div>
                  <div className="relative p-3 bg-gradient-to-br from-green-400 to-green-600 rounded-lg shadow-md">
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                </div>

                {/* Content */}
                <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-green-600 transition-colors">
                  {feature.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            );
          })}
        </div>

        {/* Additional Info */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 p-8 md:p-12 bg-gradient-to-br from-green-50 to-green-100 rounded-3xl border border-green-200"
        >
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-3xl font-bold text-gray-900 mb-4">
                Se é Omnichannel, é{" "}
                <span className="gradient-green">ConverSync</span>
              </h3>
              <p className="text-gray-700 mb-6">
                Centralize todos os canais de atendimento em uma única
                plataforma intuitiva. WhatsApp, Instagram, Telegram e Messenger
                sincronizados em tempo real.
              </p>
              <ul className="space-y-3">
                {[
                  "Histórico unificado de conversas",
                  "Distribuição inteligente de atendimentos",
                  "Sincronização em tempo real",
                  "Relatórios consolidados e métricas",
                ].map((item, i) => (
                  <li
                    key={i}
                    className="flex items-center gap-3 text-gray-800"
                  >
                    <div className="w-2 h-2 bg-gradient-to-r from-green-400 to-green-600 rounded-full"></div>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-white p-6 rounded-2xl shadow-lg">
              <div className="space-y-4">
                {[
                  { name: "WhatsApp", percent: 92, color: "green" },
                  { name: "Instagram", percent: 78, color: "pink" },
                  { name: "Telegram", percent: 65, color: "blue" },
                  { name: "Messenger", percent: 54, color: "indigo" },
                ].map((channel, i) => (
                  <div key={i}>
                    <div className="flex justify-between mb-1">
                      <span className="text-sm font-medium text-gray-700">
                        {channel.name}
                      </span>
                      <span className="text-sm font-semibold text-green-600">
                        {channel.percent}%
                      </span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2 overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${channel.percent}%` }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.1 + 0.3, duration: 0.8 }}
                        className="h-full bg-gradient-to-r from-green-400 to-green-600 rounded-full"
                      ></motion.div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
