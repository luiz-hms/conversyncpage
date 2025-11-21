"use client";
import { motion } from "framer-motion";
import { MessageCircle, Sparkles, Zap } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col justify-center items-center text-center px-4 py-20 bg-gradient-to-br from-white via-gray-50 to-green-50">
      {/* Background Pattern */}
      <div className="absolute inset-0 overflow-hidden opacity-5">
        <div className="absolute -top-1/2 -right-1/2 w-full h-full bg-gradient-to-br from-green-400 to-green-600 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-1/2 -left-1/2 w-full h-full bg-gradient-to-tr from-green-500 to-green-700 rounded-full blur-3xl"></div>
      </div>

      {/* Content */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative z-10 max-w-5xl"
      >
        {/* Badge */}
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
          className="inline-flex items-center gap-2 mb-6 px-4 py-2 bg-green-100 border border-green-300 rounded-full"
        >
          <Sparkles className="w-5 h-5 text-green-600" />
          <span className="text-sm font-medium text-green-700">
            Atendimento Inteligente com IA
          </span>
        </motion.div>

        {/* Title */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="text-5xl md:text-7xl font-bold mb-6 leading-tight"
        >
          <span className="gradient-green">ConverSync</span>
          <br />
          <span className="text-gray-900">
            Atendimento Omnichannel
          </span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto mb-10"
        >
          A ferramenta que organiza e facilita o atendimento da sua empresa.
          Unifique WhatsApp, Instagram, Telegram e Messenger em uma única
          plataforma poderosa.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.8 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <a
            href="#contact"
            className="group relative px-8 py-4 bg-green-500 hover:bg-green-600 text-white rounded-lg font-semibold overflow-hidden transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl hover:shadow-green-500/50 flex items-center gap-2"
          >
            <MessageCircle className="w-5 h-5" />
            Teste grátis por 3 dias
          </a>

          <a
            href="#plans"
            className="px-8 py-4 bg-white border-2 border-green-500 text-green-600 rounded-lg font-semibold transition-all duration-300 hover:bg-green-50 hover:scale-105"
          >
            Ver planos
          </a>
        </motion.div>

        {/* Social Proof */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.8 }}
          className="mt-12 flex flex-col items-center gap-4"
        >
          <div className="flex items-center gap-2 text-gray-600">
            <div className="flex -space-x-2">
              {[1, 2, 3, 4].map((i) => (
                <div
                  key={i}
                  className="w-10 h-10 rounded-full bg-gradient-to-br from-green-400 to-green-600 border-2 border-white flex items-center justify-center text-white font-semibold"
                >
                  {String.fromCharCode(64 + i)}
                </div>
              ))}
            </div>
            <span className="text-sm font-medium">
              +5.000 empresas confiam no ConverSync
            </span>
          </div>

          {/* Platform Pills */}
          <div className="flex flex-wrap gap-3 justify-center">
            {["WhatsApp", "Instagram", "Telegram", "Messenger"].map(
              (platform) => (
                <div
                  key={platform}
                  className="px-4 py-2 bg-white border border-gray-200 rounded-full text-sm text-gray-700 font-medium shadow-sm hover:shadow-md hover:border-green-300 transition-all"
                >
                  {platform}
                </div>
              )
            )}
          </div>
        </motion.div>
      </motion.div>

      {/* Floating Icon */}
      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1.2, type: "spring" }}
        className="absolute bottom-10 right-10 hidden lg:block"
      >
        <div className="relative">
          <div className="absolute inset-0 bg-green-500/30 rounded-full blur-xl animate-pulse"></div>
          <div className="relative w-16 h-16 bg-gradient-to-br from-green-400 to-green-600 rounded-full flex items-center justify-center shadow-lg">
            <Zap className="w-8 h-8 text-white" />
          </div>
        </div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <div className="w-6 h-10 border-2 border-green-500 rounded-full flex justify-center">
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
            className="w-1.5 h-1.5 bg-green-500 rounded-full mt-2"
          ></motion.div>
        </div>
      </motion.div>
    </section>
  );
}
