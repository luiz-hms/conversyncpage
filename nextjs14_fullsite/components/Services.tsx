"use client";
import { motion } from "framer-motion";
import { Zap, TrendingDown, Clock, Star, CheckCircle, Users } from "lucide-react";

const benefits = [
  {
    icon: Zap,
    title: "Respostas Rápidas e Eficientes",
    description:
      "Atenda seus clientes instantaneamente com respostas inteligentes e precisas powered by IA.",
  },
  {
    icon: Clock,
    title: "Atendimento Personalizado 24/7",
    description:
      "Disponibilidade total a qualquer hora do dia, todos os dias da semana com automação inteligente.",
  },
  {
    icon: TrendingDown,
    title: "Redução de Custos Operacionais",
    description:
      "Automatize processos e reduza custos significativamente sem comprometer a qualidade.",
  },
];

const testimonials = [
  {
    name: "Solange Borges",
    role: "Gerente de Atendimento",
    content:
      "Amei o ConverSync! Ele me ajudou a automatizar o atendimento de forma fácil e eficiente. Agora, posso responder instantaneamente a perguntas frequentes e aumentar minha produtividade.",
    avatar: "SB",
    rating: 5,
  },
  {
    name: "Fabrício Bueno",
    role: "Empresário",
    content:
      "Desde que comecei a usar o Conv erSync, minha empresa tem tido um atendimento muito mais ágil. Pude redirecionar minha equipe para atividades mais estratégicas, tornando a operação mais eficiente.",
    avatar: "FB",
    rating: 5,
  },
  {
    name: "Diana Simões",
    role: "Proprietária",
    content:
      "O ConverSync é incrível! Ele me ajudou a automatizar meu atendimento, economizando tempo e aumentando a satisfação dos clientes. Agora posso focar em crescer meu negócio.",
    avatar: "DS",
    rating: 5,
  },
];

export default function Services() {
  return (
    <section id="services" className="py-20 px-4 bg-gradient-to-b from-green-50 to-white">
      <div className="max-w-7xl mx-auto">
        {/* AI Benefits */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 mb-4 px-4 py-2 bg-green-100 border border-green-300 rounded-full">
            <Zap className="w-5 h-5 text-green-600" />
            <span className="text-sm font-medium text-green-700">
              Inteligência Artificial
            </span>
          </div>

          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">
            <span>Sinta o Poder da</span>
            <br />
            <span className="gradient-green">Inteligência Artificial</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Automatize seu atendimento com IA de ponta. Respostas personalizadas
            e eficientes em tempo real para seus clientes.
          </p>
        </motion.div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="flex items-start gap-4 p-6 bg-white rounded-2xl shadow-md hover:shadow-xl transition-all card-hover"
              >
                <div className="relative flex-shrink-0">
                  <div className="absolute inset-0 bg-green-500/30 rounded-full blur-lg"></div>
                  <div className="relative w-12 h-12 bg-gradient-to-br from-green-400 to-green-600 rounded-full flex items-center justify-center">
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    {benefit.title}
                  </h3>
                  <p className="text-gray-600 text-sm">{benefit.description}</p>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Testimonials */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <h3 className="text-3xl md:text-4xl font-bold text-center mb-4 text-gray-900">
            Aprovado por{" "}
            <span className="gradient-green">+5.000 empresas</span>
          </h3>
          <p className="text-center text-gray-600 mb-12">
            Veja o que nossos clientes têm a dizer sobre o ConverSync
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                className="p-6 bg-white border border-gray-200 rounded-2xl hover:border-green-300 hover:shadow-xl transition-all card-hover"
              >
                {/* Stars */}
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-5 h-5 fill-yellow-400 text-yellow-400"
                    />
                  ))}
                </div>

                {/* Content */}
                <p className="text-gray-700 mb-4 leading-relaxed text-sm">
                  &quot;{testimonial.content}&quot;
                </p>

                {/* Author */}
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-gradient-to-br from-green-400 to-green-600 rounded-full flex items-center justify-center text-white font-semibold">
                    {testimonial.avatar}
                  </div>
                  <div>
                    <h4 className="text-gray-900 font-semibold">
                      {testimonial.name}
                    </h4>
                    <p className="text-sm text-gray-600">{testimonial.role}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 p-8 bg-white rounded-3xl shadow-lg"
        >
          {[
            { value: "5.000+", label: "Empresas Ativas" },
            { value: "98%", label: "Satisfação" },
            { value: "1M+", label: "Mensagens/dia" },
            { value: "24/7", label: "Suporte" },
          ].map((stat, i) => (
            <div key={i} className="text-center">
              <div className="text-3xl md:text-4xl font-bold gradient-green mb-2">
                {stat.value}
              </div>
              <div className="text-gray-600 text-sm">{stat.label}</div>
            </div>
          ))}
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-16 p-10 bg-gradient-to-r from-green-500 to-green-600 rounded-3xl text-center shadow-2xl"
        >
          <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Pronto para revolucionar seu atendimento?
          </h3>
          <p className="text-green-50 mb-8 max-w-2xl mx-auto">
            Comece hoje mesmo e teste gratuitamente por 3 dias todas as
            funcionalidades do ConverSync.
          </p>
          <a
            href="#contact"
            className="inline-block px-8 py-4 bg-white text-green-600 font-semibold rounded-lg hover:bg-gray-100 transition-all duration-300 hover:scale-105 shadow-xl"
          >
            Começar teste grátis
          </a>
        </motion.div>
      </div>
    </section>
  );
}
