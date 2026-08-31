import React from 'react';
import { Check } from 'lucide-react';
import { motion } from 'motion/react';
import heroBgImage from '../assets/images/regenerated_image_1787877114589.png';

export function Hero() {
  const benefits = [
    "Abertura de Empresa (constituição social)",
    "Sistema de gestão completo (controle de estoque, financeiro, fluxo de caixa, compras)",
    "Emissão de NF-S, NF-e, NFC-e, CT-e e MDF-e 10 usuários, sem limites de emissão notas;",
    "Emissão de Boletos sem custos (as taxa cobradas serão com seu próprio banco)",
    "Certificado digital A1 incluso; Tudo integrado à contabilidade, com tecnologia e estratégia tributária desde o primeiro dia."
  ];

  return (
    <section className="relative w-full bg-[#183955] text-white overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <motion.img 
          initial={{ scale: 1.08, opacity: 0 }}
          animate={{ scale: 1, opacity: 0.4 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          src={heroBgImage} 
          alt="Office background" 
          className="w-full h-full object-cover object-center mix-blend-overlay"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0d2a45] via-[#103454]/90 to-transparent"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 py-16 md:py-24">
        <div className="flex flex-col items-start gap-8 max-w-3xl lg:max-w-4xl">
          <div>
            <motion.h1 
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="text-3xl sm:text-4xl md:text-[40px] lg:text-[44px] leading-[1.25] font-bold text-white mb-5 tracking-tight"
            >
              Mais que contabilidade. <br className="hidden md:block" />
              Abra sua empresa com tudo incluso <br className="hidden md:block" />
              e comece a faturar sem investir em estrutura
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
              className="text-lg md:text-xl text-gray-200 leading-relaxed"
            >
              Aqui você não recebe só um CNPJ.<br className="hidden sm:inline" />
              Você recebe uma empresa pronta para operar.
            </motion.p>
          </div>

          <motion.ul 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="space-y-4"
          >
            {benefits.map((benefit, i) => (
              <motion.li 
                key={i}
                initial={{ opacity: 0, y: 6 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.25 + i * 0.06, ease: "easeOut" }}
                className="flex items-start gap-3 text-base md:text-lg"
              >
                <Check className="w-6 h-6 text-white shrink-0 mt-0.5" strokeWidth={3} />
                <span>{benefit}</span>
              </motion.li>
            ))}
          </motion.ul>

          <motion.div 
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6, ease: "easeOut" }}
            className="bg-[#24537a]/80 backdrop-blur-sm border border-[#3b73a3] rounded-md p-4 text-sm md:text-base"
          >
            No contrato de 12 meses, <span className="font-bold">todos os recursos extras</span> estão inclusos na mensalidade como bônus.
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.7, ease: "easeOut" }}
          >
            <a 
              href="https://wa.me/5517996501530" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-[#8ec63f] hover:bg-[#7ebd34] text-[#0f2636] font-bold py-3 px-6 rounded-full transition-colors inline-block mt-2 shadow-md hover:shadow-lg"
            >
              Fale conosco pelo WhatsApp
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
