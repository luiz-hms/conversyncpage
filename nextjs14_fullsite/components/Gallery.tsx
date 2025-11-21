"use client";

import Image from "next/image";
import { useState } from "react";

export default function Gallery() {
    const [selectedImage, setSelectedImage] = useState<number | null>(null);

    const screenshots = [
        {
            src: "/images/screenshot-1.jpg",
            alt: "ConverSync Dashboard - Visão Geral",
            title: "Dashboard Intuitivo"
        },
        {
            src: "/images/screenshot-2.jpg",
            alt: "ConverSync Conversas - Gestão de Atendimentos",
            title: "Gestão de Conversas"
        },
        {
            src: "/images/screenshot-3.jpg",
            alt: "ConverSync Automação - Fluxos Automatizados",
            title: "Automação Inteligente"
        },
        {
            src: "/images/screenshot-4.jpg",
            alt: "ConverSync Relatórios - Análise de Dados",
            title: "Relatórios Detalhados"
        }
    ];

    return (
        <section id="gallery" className="py-20 bg-gradient-to-b from-gray-50 to-white">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-[#25D366] to-[#128C7E] bg-clip-text text-transparent">
                        Veja o ConverSync em Ação
                    </h2>
                    <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                        Conheça a interface moderna e intuitiva que está transformando o atendimento via WhatsApp
                    </p>
                </div>

                {/* Video Demo */}
                <div className="mb-16 max-w-4xl mx-auto">
                    <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                        <video
                            controls
                            className="w-full"
                            poster="/images/screenshot-1.jpg"
                        >
                            <source src="/images/demo-video.mp4" type="video/mp4" />
                            Seu navegador não suporta a reprodução de vídeos.
                        </video>
                    </div>
                    <p className="text-center mt-4 text-gray-600 font-medium">
                        🎥 Demonstração completa do sistema
                    </p>
                </div>

                {/* Screenshots Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {screenshots.map((screenshot, index) => (
                        <div
                            key={index}
                            className="group relative cursor-pointer overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
                            onClick={() => setSelectedImage(index)}
                        >
                            <div className="relative h-64 bg-gray-100">
                                <Image
                                    src={screenshot.src}
                                    alt={screenshot.alt}
                                    fill
                                    className="object-cover transition-transform duration-300 group-hover:scale-110"
                                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                    <div className="absolute bottom-0 left-0 right-0 p-4">
                                        <h3 className="text-white font-semibold text-lg">
                                            {screenshot.title}
                                        </h3>
                                        <p className="text-white/90 text-sm mt-1">
                                            Clique para ampliar
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Lightbox Modal */}
                {selectedImage !== null && (
                    <div
                        className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
                        onClick={() => setSelectedImage(null)}
                    >
                        <button
                            className="absolute top-4 right-4 text-white text-4xl hover:text-gray-300 transition-colors"
                            onClick={() => setSelectedImage(null)}
                        >
                            ×
                        </button>
                        <div className="relative max-w-6xl max-h-[90vh] w-full h-full">
                            <Image
                                src={screenshots[selectedImage].src}
                                alt={screenshots[selectedImage].alt}
                                fill
                                className="object-contain"
                                sizes="90vw"
                            />
                        </div>
                        <div className="absolute bottom-8 left-0 right-0 text-center">
                            <h3 className="text-white text-2xl font-semibold mb-2">
                                {screenshots[selectedImage].title}
                            </h3>
                            <p className="text-white/80">
                                {selectedImage + 1} de {screenshots.length}
                            </p>
                            <div className="flex justify-center gap-4 mt-4">
                                <button
                                    className="bg-white/20 hover:bg-white/30 text-white px-6 py-2 rounded-lg transition-colors"
                                    onClick={(e) => {
                                        e.stopPropagation();
                                        setSelectedImage(
                                            selectedImage > 0 ? selectedImage - 1 : screenshots.length - 1
                                        );
                                    }}
                                >
                                    ← Anterior
                                </button>
                                <button
                                    className="bg-white/20 hover:bg-white/30 text-white px-6 py-2 rounded-lg transition-colors"
                                    onClick={(e) => {
                                        e.stopPropagation();
                                        setSelectedImage(
                                            selectedImage < screenshots.length - 1 ? selectedImage + 1 : 0
                                        );
                                    }}
                                >
                                    Próxima →
                                </button>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </section>
    );
}
