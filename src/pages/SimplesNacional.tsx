import { Link } from "react-router-dom";
import React from 'react';
import { ShieldPlus, TrendingUp, Check, ArrowUpRight } from 'lucide-react';

export function SimplesNacional() {
  return (
    <main className="w-full bg-[#f8f9fa] min-h-screen py-16 px-6">
      <div className="max-w-[900px] mx-auto">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-extrabold text-[#0f2636] mb-4 uppercase">SIMPLES NACIONAL</h1>
          <p className="text-xl text-gray-600 font-light">Menos impostos, mais crescimento para sua empresa</p>
        </div>

        {/* Introduction Text */}
        <div className="text-gray-800 text-[15px] leading-relaxed mb-10 space-y-6">
          <p>
            O <strong className="font-bold text-black">Simples Nacional</strong> é o regime tributário ideal para micro e pequenas empresas que buscam <strong className="font-bold text-black">reduzir carga tributária e simplificar obrigações fiscais</strong>. Ele unifica diversos impostos em uma única guia mensal (DAS), facilitando o controle financeiro e evitando erros que geram multas e autuações.
          </p>
          <p>
            Mas atenção: estar no Simples <strong className="font-bold text-black">não significa pagar sempre menos impostos</strong> automaticamente.
            <br />
            A escolha correta do enquadramento, do anexo tributário e das atividades é decisiva para garantir economia real.
          </p>
        </div>

        {/* Blue Box */}
        <div className="bg-[#eaf5fc] border border-[#cbe4f7] rounded-xl p-8 md:p-10 mb-12">
          <div className="flex items-center gap-3 mb-8">
            <ShieldPlus className="w-8 h-8 text-[#009fe3]" strokeWidth={1.5} />
            <h2 className="text-[#0f2636] text-xl font-bold">O que fazemos por você no Simples Nacional</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
            <div className="bg-white rounded-lg p-5 flex items-start gap-4">
              <div className="mt-0.5"><Check className="w-5 h-5 text-[#65AF1F]" /></div>
              <span className="text-gray-700 text-sm">Análise do melhor enquadramento para sua atividade</span>
            </div>
            <div className="bg-white rounded-lg p-5 flex items-start gap-4">
              <div className="mt-0.5"><Check className="w-5 h-5 text-[#65AF1F]" /></div>
              <span className="text-gray-700 text-sm">Planejamento tributário para reduzir impostos legalmente</span>
            </div>
            <div className="bg-white rounded-lg p-5 flex items-start gap-4">
              <div className="mt-0.5"><Check className="w-5 h-5 text-[#65AF1F]" /></div>
              <span className="text-gray-700 text-sm">Cálculo correto da guia mensal (DAS)</span>
            </div>
            <div className="bg-white rounded-lg p-5 flex items-start gap-4">
              <div className="mt-0.5"><Check className="w-5 h-5 text-[#65AF1F]" /></div>
              <span className="text-gray-700 text-sm">Entrega das obrigações fiscais e contábeis</span>
            </div>
            <div className="bg-white rounded-lg p-5 flex items-start gap-4">
              <div className="mt-0.5"><Check className="w-5 h-5 text-[#65AF1F]" /></div>
              <span className="text-gray-700 text-sm">Acompanhamento do faturamento para evitar desenquadramento</span>
            </div>
            <div className="bg-white rounded-lg p-5 flex items-start gap-4">
              <div className="mt-0.5"><Check className="w-5 h-5 text-[#65AF1F]" /></div>
              <span className="text-gray-700 text-sm">Suporte digital rápido e sem burocracia</span>
            </div>
          </div>
          
          <p className="text-gray-600 text-[15px] mb-10">Tudo isso com processos 100% digitais, sem papelada e sem perda de tempo.</p>

          <div className="flex items-center gap-3 mb-6">
            <ShieldPlus className="w-8 h-8 text-[#009fe3]" strokeWidth={1.5} />
            <h3 className="text-[#0f2636] text-xl font-bold">Para quem o Simples Nacional é indicado?</h3>
          </div>
          
          <p className="text-gray-700 mb-6 text-[15px]">O Simples é indicado para empresas que faturam até R$ 4,8 milhões por ano,</p>

          <div className="flex flex-wrap gap-3 mb-8">
            <span className="border border-[#009fe3] text-[#009fe3] rounded-full px-5 py-2 text-sm">Prestadores de serviços</span>
            <span className="border border-[#009fe3] text-[#009fe3] rounded-full px-5 py-2 text-sm">Comércio e e-commerce</span>
            <span className="border border-[#009fe3] text-[#009fe3] rounded-full px-5 py-2 text-sm">Oficinas, autopeças e implementos agrícolas</span>
            <span className="border border-[#009fe3] text-[#009fe3] rounded-full px-5 py-2 text-sm">Profissionais liberais</span>
            <span className="border border-[#009fe3] text-[#009fe3] rounded-full px-5 py-2 text-sm">Pequenas indústrias</span>
            <span className="border border-[#009fe3] text-[#009fe3] rounded-full px-5 py-2 text-sm">Startups em fase inicial</span>
          </div>

          <div className="text-gray-700 text-[15px] space-y-2">
            <p>Cada segmento possui regras tributárias próprias</p>
            <p>por isso, contar com uma contabilidade especializada faz toda a diferença.</p>
            <p>Por meio de uma análise detalhada, podemos identificar oportunidades para reenquadrar sua empresa em um regime mais vantajoso, quando aplicável</p>
          </div>
        </div>

        {/* Text Section 2 */}
        <div className="mb-10 text-[15px] text-gray-800 space-y-4">
          <p className="font-bold text-black">Você pode estar pagando imposto em dobro</p>
          <p>Em muitos casos, o produto vendido é tributado dentro do Simples Nacional, mas na prática já está sujeito a ICMS ST e à tributação monofásica de PIS e COFINS.</p>
          <p>Produtos como cervejas, bebidas frias e cosméticos muitas vezes possuem tributação monofásica. Se sua contabilidade não segregá-los corretamente, você paga imposto sobre o que já foi tributado na indústria.</p>
        </div>

        {/* Green Box */}
        <div className="bg-[#effbd8] border border-[#d6fa9e] rounded-xl p-8 md:p-10 mb-10">
          <div className="flex items-center gap-3 mb-4">
            <TrendingUp className="w-8 h-8 text-[#65AF1F]" strokeWidth={2} />
            <h3 className="text-[#0f2636] text-xl font-bold">Exemplos práticos</h3>
          </div>
          <p className="text-gray-800 text-[15px]">
            Produtos como cervejas, bebidas frias e cosméticos muitas vezes possuem tributação monofásica. Se sua contabilidade não segregá-los corretamente, você paga imposto sobre o que já foi tributado na indústria.
          </p>
        </div>

        {/* Text Section 3 */}
        <div className="mb-12 text-[15px] text-gray-800 space-y-6">
          <p>
            Nossa estratégia é justamente corrigir esse cenário, aplicando o enquadramento correto e buscando <strong className="font-bold text-black">redução legal da carga tributária.</strong>
          </p>
          <p className="font-bold text-black text-lg">Fluxo de Caixa Inteligente</p>
          <p>
            Trabalhamos para gerar fôlego no fluxo de caixa da sua empresa. Isso é feito por meio da apuração dos impostos sobre o valor efetivamente recebido, e não apenas sobre o valor faturado — especialmente em vendas parceladas no boleto ou cartão, sem antecipação de recebíveis.
          </p>
          <p>
            De forma estratégica, unimos conhecimento tributário e tecnologia para levar sua empresa ao máximo nível de <strong className="font-bold text-black">inteligência contábil digital</strong>, garantindo economia, organização financeira e segurança fiscal.
          </p>
        </div>

        {/* Dark Box */}
        <div className="bg-[#0f2636] text-white rounded-xl p-8 md:p-10 shadow-lg">
          <div className="flex items-center gap-3 mb-6">
            <ShieldPlus className="w-8 h-8 text-[#009fe3]" strokeWidth={1.5} />
            <h3 className="text-white text-xl font-bold">Contabilidade digital: o Simples do jeito certo</h3>
          </div>
          <div className="w-full h-px bg-slate-700 mb-6"></div>
          
          <p className="text-slate-300 text-[15px] mb-8">Nossa contabilidade digital combina tecnologia + estratégia fiscal, garantindo que sua empresa:</p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-y-4 gap-x-8 mb-10">
            <div className="flex items-center gap-3">
              <Check className="w-5 h-5 text-white" />
              <span className="text-slate-200 text-[15px]">Pague apenas o imposto devido</span>
            </div>
            <div className="flex items-center gap-3">
              <Check className="w-5 h-5 text-white" />
              <span className="text-slate-200 text-[15px]">Cresça com segurança</span>
            </div>
            <div className="flex items-center gap-3">
              <Check className="w-5 h-5 text-white" />
              <span className="text-slate-200 text-[15px]">Evite multas e problemas com o fisco</span>
            </div>
            <div className="flex items-center gap-3">
              <Check className="w-5 h-5 text-white" />
              <span className="text-slate-200 text-[15px]">Tenha suporte humano quando precisar</span>
            </div>
            <div className="flex items-center gap-3">
              <Check className="w-5 h-5 text-white" />
              <span className="text-slate-200 text-[15px]">Tenha clareza financeira</span>
            </div>
          </div>
          
          <p className="text-slate-300 text-[15px]">
            Você foca no seu negócio. <strong className="text-white font-bold">Nós cuidamos dos números.</strong>
          </p>
        </div>

        {/* CTA Button */}
        <div className="flex justify-center mt-12">
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
