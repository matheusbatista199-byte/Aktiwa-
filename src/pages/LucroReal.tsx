import { Link } from "react-router-dom";
import React from 'react';
import { Clock, RefreshCw, Calculator, ArrowUpRight } from 'lucide-react';

export function LucroReal() {
  return (
    <main className="w-full bg-[#f8f9fa] min-h-screen py-16 px-6">
      <div className="max-w-[900px] mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-extrabold text-[#0f2636] mb-4 uppercase">LUCRO REAL</h1>
          <p className="text-xl text-gray-600 font-light">Precisão fiscal para empresas que exigem máxima estratégia.</p>
        </div>

        <div className="text-gray-800 text-[15px] leading-relaxed mb-10">
          <p>
            O <strong>Lucro Real</strong> é o regime tributário mais técnico e rigoroso do sistema tributário brasileiro. Nele, os impostos são calculados com base no lucro efetivamente apurado, considerando receitas, custos e despesas dedutíveis. É o modelo indicado para empresas com margens reduzidas, grande volume de operações ou estruturas mais complexas.
          </p>
        </div>

        <div className="bg-[#eaf5fc] border border-[#cbe4f7] rounded-xl p-8 md:p-10 mb-10">
          <div className="flex items-center gap-3 mb-4">
            <Clock className="w-8 h-8 text-[#009fe3]" strokeWidth={2} />
            <h2 className="text-[#0f2636] text-xl font-bold">Contratação Sob Consulta</h2>
          </div>
          <p className="text-gray-700 text-[15px]">
            Por sua complexidade, cada operação precisa ser analisada com critério. A contratação desse regime é realizada <strong className="font-bold text-black">exclusivamente sob consulta</strong>, mediante estudo prévio da atividade, do faturamento, da margem de lucro e da estrutura financeira da empresa.
          </p>
        </div>

        <div className="mb-10 text-[15px] text-gray-800">
          <p>
            Em muitos casos, empresas no Lucro Real continuam recolhendo tributos indevidamente sobre receitas que já possuem <strong className="font-bold text-black">ICMS ST</strong> ou tributação monofásica de <strong className="font-bold text-black">PIS e COFINS</strong>. Nossa atuação é identificar essas distorções e aplicar corretamente as exclusões e compensações permitidas por lei, promovendo <strong className="font-bold text-black">redução tributária legal e segura.</strong>
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
          <div className="bg-white rounded-xl p-8 shadow-sm border border-gray-100">
            <div className="bg-[#effbd8] w-14 h-14 rounded-lg flex items-center justify-center mb-6">
              <RefreshCw className="w-7 h-7 text-[#65AF1F]" />
            </div>
            <h3 className="text-[#0f2636] text-lg font-bold mb-3">Fluxo de Caixa Inteligente</h3>
            <p className="text-gray-600 text-[15px]">
              Mesmo quando não há redução direta por lei, estruturamos a apuração para gerar fôlego no fluxo de caixa, evitando o pagamento antecipado de tributos sobre valores ainda não recebidos.
            </p>
          </div>
          
          <div className="bg-white rounded-xl p-8 shadow-sm border border-gray-100">
            <div className="bg-[#eaf5fc] w-14 h-14 rounded-lg flex items-center justify-center mb-6">
              <Calculator className="w-7 h-7 text-[#009fe3]" />
            </div>
            <h3 className="text-[#0f2636] text-lg font-bold mb-3">Apuração Estratégica</h3>
            <p className="text-gray-600 text-[15px]">
              Focamos especialmente em operações parceladas no boleto ou cartão, sem antecipação de recebíveis, garantindo que o imposto incida no momento correto.
            </p>
          </div>
        </div>

        <div className="text-gray-800 text-[15px] mb-12">
          <p>
            Aliando tecnologia, controle contábil rigoroso e inteligência fiscal, conduzimos sua empresa ao mais alto nível de gestão, com foco em economia tributária, previsibilidade financeira e total conformidade com a legislação.
          </p>
        </div>

        <div className="flex justify-center">
          <a 
            href="https://wa.me/5517996501530" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="bg-[#eaf5fc] border border-[#009fe3] text-[#0f2636] px-8 py-4 rounded-full flex items-center justify-center gap-2 hover:bg-[#009fe3] hover:text-white transition-all duration-300 text-[15px]"
          >
            Contrate agora <ArrowUpRight className="w-5 h-5" />
          </a>
        </div>
      </div>
    </main>
  );
}
