import { Link } from "react-router-dom";
import React from 'react';
import { ShieldPlus, Calculator, ArrowUpRight, Lightbulb } from 'lucide-react';

export function LucroPresumido() {
  return (
    <main className="w-full bg-[#f8f9fa] min-h-screen py-16 px-6">
      <div className="max-w-[900px] mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-extrabold text-[#0f2636] mb-4 uppercase">LUCRO PRESUMIDO</h1>
          <p className="text-xl text-gray-600 font-light">Estratégia tributária para empresas em crescimento</p>
        </div>

        <div className="text-gray-800 text-[15px] leading-relaxed mb-10">
          <p>
            O <strong className="font-bold text-black">Lucro Presumido</strong> é um regime tributário indicado para empresas que já ultrapassaram o perfil do Simples Nacional ou que, pela natureza da atividade, podem obter vantagens fiscais fora dele. Nesse modelo, o imposto é calculado com base em uma margem de lucro estimada por lei, e não sobre o lucro real da empresa.
          </p>
        </div>

        <div className="bg-[#eaf5fc] border border-[#cbe4f7] rounded-xl p-8 md:p-10 mb-10">
          <div className="flex items-center gap-3 mb-4">
            <ShieldPlus className="w-8 h-8 text-[#009fe3]" strokeWidth={1.5} />
            <h2 className="text-[#0f2636] text-xl font-bold">Análise Estratégica Personalizada</h2>
          </div>
          <p className="text-gray-700 text-[15px]">
            Cada segmento possui regras específicas — por isso, contar com uma contabilidade especializada é fundamental. Por meio de uma análise estratégica, avaliamos se o Lucro Presumido é realmente a melhor opção para o seu negócio ou se existe um enquadramento mais econômico dentro da legalidade.
          </p>
        </div>

        <div className="mb-10 text-[15px] text-gray-800">
          <p>
            Em muitos casos, produtos e serviços que sofrem <strong className="font-bold text-black">ICMS ST</strong> ou <strong className="font-bold text-black">tributação monofásica de PIS e COFINS</strong> continuam sendo tributados indevidamente dentro da base de cálculo. Nossa atuação é identificar essas distorções e aplicar corretamente as exclusões permitidas por lei, promovendo redução tributária legal e segura.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
          <div className="bg-white rounded-xl p-8 shadow-sm border border-gray-100">
            <div className="bg-[#effbd8] w-14 h-14 rounded-lg flex items-center justify-center mb-6">
              <Calculator className="w-7 h-7 text-[#65AF1F]" />
            </div>
            <h3 className="text-[#0f2636] text-lg font-bold mb-3">Fluxo de Caixa Otimizado</h3>
            <p className="text-gray-600 text-[15px]">
              Estruturamos a apuração para gerar fôlego no fluxo de caixa. Isso significa pagar tributos sobre valores efetivamente recebidos, especialmente em operações parceladas no boleto ou cartão.
            </p>
          </div>
          
          <div className="bg-white rounded-xl p-8 shadow-sm border border-gray-100">
            <div className="bg-[#eaf5fc] w-14 h-14 rounded-lg flex items-center justify-center mb-6">
              <Lightbulb className="w-7 h-7 text-[#009fe3]" />
            </div>
            <h3 className="text-[#0f2636] text-lg font-bold mb-3">Inteligência Contábil</h3>
            <p className="text-gray-600 text-[15px]">
              Utilizamos tecnologia e inteligência fiscal para elevar sua empresa ao mais alto nível de conformidade, evitando o desembolso antecipado de impostos.
            </p>
          </div>
        </div>

        <div className="text-gray-800 text-[15px] mb-12">
          <p>
            De forma integrada, utilizamos tecnologia e inteligência fiscal para elevar sua empresa ao mais alto nível de inteligência contábil digital, com foco em economia tributária, previsibilidade financeira e conformidade legal.
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
