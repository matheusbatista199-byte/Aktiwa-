import React from 'react';
import { Check } from 'lucide-react';
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
    <section className="relative w-full bg-[#183955] text-white">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroBgImage} 
          alt="Office background" 
          className="w-full h-full object-cover object-center opacity-40 mix-blend-overlay"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0d2a45] via-[#103454]/90 to-transparent"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 py-16 md:py-24 grid md:grid-cols-2 gap-12">
        <div className="flex flex-col items-start gap-8">
          <div>
            <h1 className="text-3xl md:text-[40px] leading-[1.15] font-bold text-white mb-4">
              Mais que contabilidade. Abra sua empresa com tudo incluso e comece a faturar sem investir em estrutura
            </h1>
            <p className="text-lg text-gray-200">
              Aqui você não recebe só um CNPJ.<br/>
              Você recebe uma empresa pronta para operar.
            </p>
          </div>

          <ul className="space-y-4">
            {benefits.map((benefit, i) => (
              <li key={i} className="flex items-start gap-3 text-base md:text-lg">
                <Check className="w-6 h-6 text-white shrink-0 mt-0.5" strokeWidth={3} />
                <span>{benefit}</span>
              </li>
            ))}
          </ul>

          <div className="bg-[#24537a]/80 backdrop-blur-sm border border-[#3b73a3] rounded-md p-4 text-sm md:text-base">
            No contrato de 12 meses, <span className="font-bold">todos os recursos extras</span> estão inclusos na mensalidade como bônus.
          </div>

          <button className="bg-[#8ec63f] hover:bg-[#7ebd34] text-[#0f2636] font-bold py-3 px-6 rounded-full transition-colors inline-block mt-2">
            Fale conosco pelo WhatsApp
          </button>
        </div>
      </div>
    </section>
  );
}
