"use client";
import { motion } from "framer-motion";
import { Send, MapPin, Phone, Mail, MessageCircle } from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="py-20 px-4 bg-gradient-to-b from-white to-green-50">
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
            <span>Pronto para começar?</span>
            <br />
            <span className="gradient-green">Fale com a gente</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Entre em contato e descubra como o ConverSync pode revolucionar o
            atendimento da sua empresa
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="p-8 bg-white rounded-2xl shadow-lg border border-gray-200"
          >
            <form className="space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Nome completo
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full px-4 py-3 bg-gray-50 border border-gray-300 rounded-lg text-gray-900 placeholder-gray-500 focus:outline-none focus:border-green-500 focus:ring-2 focus:ring-green-200 transition-all"
                  placeholder="Seu nome"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-3 bg-gray-50 border border-gray-300 rounded-lg text-gray-900 placeholder-gray-500 focus:outline-none focus:border-green-500 focus:ring-2 focus:ring-green-200 transition-all"
                  placeholder="seu@email.com"
                />
              </div>

              <div>
                <label
                  htmlFor="phone"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Telefone
                </label>
                <input
                  type="tel"
                  id="phone"
                  className="w-full px-4 py-3 bg-gray-50 border border-gray-300 rounded-lg text-gray-900 placeholder-gray-500 focus:outline-none focus:border-green-500 focus:ring-2 focus:ring-green-200 transition-all"
                  placeholder="(00) 00000-0000"
                />
              </div>

              <div>
                <label
                  htmlFor="company"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Empresa
                </label>
                <input
                  type="text"
                  id="company"
                  className="w-full px-4 py-3 bg-gray-50 border border-gray-300 rounded-lg text-gray-900 placeholder-gray-500 focus:outline-none focus:border-green-500 focus:ring-2 focus:ring-green-200 transition-all"
                  placeholder="Nome da empresa"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Mensagem
                </label>
                <textarea
                  id="message"
                  rows={4}
                  className="w-full px-4 py-3 bg-gray-50 border border-gray-300 rounded-lg text-gray-900 placeholder-gray-500 focus:outline-none focus:border-green-500 focus:ring-2 focus:ring-green-200 transition-all resize-none"
                  placeholder="Como podemos ajudar?"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full py-4 bg-green-500 hover:bg-green-600 text-white font-semibold rounded-lg transition-all duration-300 hover:scale-105 shadow-md hover:shadow-lg flex items-center justify-center gap-2"
              >
                <Send className="w-5 h-5" />
                Enviar mensagem
              </button>
            </form>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            {/* WhatsApp CTA */}
            <div className="p-8 bg-gradient-to-br from-green-500 to-green-600 rounded-2xl text-white shadow-xl">
              <h3 className="text-2xl font-bold mb-4">
                Comece agora mesmo!
              </h3>
              <p className="mb-6 text-green-50">
                Fale diretamente com nossa equipe pelo WhatsApp e tire todas
                as suas dúvidas. Resposta rápida garantida!
              </p>
              <a
                href="https://wa.me/5500000000000?text=Olá! Gostaria de conhecer o ConverSync"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 w-full py-3 px-6 bg-white text-green-600 font-semibold rounded-lg text-center hover:bg-gray-100 transition-all duration-300 hover:scale-105 shadow-lg justify-center"
              >
                <MessageCircle className="w-5 h-5" />
                Falar no WhatsApp
              </a>
            </div>

            {/* Contact Details */}
            <div className="space-y-4">
              <div className="flex items-start gap-4 p-4 bg-white border border-gray-200 rounded-lg hover:border-green-300 hover:shadow-md transition-all">
                <div className="w-12 h-12 bg-gradient-to-br from-green-400 to-green-600 rounded-lg flex items-center justify-center flex-shrink-0 shadow-md">
                  <Mail className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="text-gray-900 font-semibold mb-1">Email</h4>
                  <p className="text-gray-600">contato@conversync.com.br</p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 bg-white border border-gray-200 rounded-lg hover:border-green-300 hover:shadow-md transition-all">
                <div className="w-12 h-12 bg-gradient-to-br from-green-400 to-green-600 rounded-lg flex items-center justify-center flex-shrink-0 shadow-md">
                  <Phone className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="text-gray-900 font-semibold mb-1">Telefone</h4>
                  <p className="text-gray-600">(00) 0000-0000</p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 bg-white border border-gray-200 rounded-lg hover:border-green-300 hover:shadow-md transition-all">
                <div className="w-12 h-12 bg-gradient-to-br from-green-400 to-green-600 rounded-lg flex items-center justify-center flex-shrink-0 shadow-md">
                  <MapPin className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="text-gray-900 font-semibold mb-1">
                    Localização
                  </h4>
                  <p className="text-gray-600">
                    São Paulo, SP - Brasil
                  </p>
                </div>
              </div>
            </div>

            {/* Business Hours */}
            <div className="p-6 bg-white border border-gray-200 rounded-lg">
              <h4 className="text-gray-900 font-semibold mb-3">
                Horário de atendimento
              </h4>
              <div className="space-y-2 text-sm text-gray-600">
                <p>Segunda a Sexta: 9h às 18h</p>
                <p>Sábado: 9h às 13h</p>
                <p>Domingo: Fechado</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
