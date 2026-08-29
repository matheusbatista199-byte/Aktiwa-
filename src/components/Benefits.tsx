import React from 'react';
import { FileCheck, Monitor, FileBadge, CheckCircle2, Check } from 'lucide-react';

export function Benefits() {
  return (
    <section className="bg-[#f4f5f7] pb-16">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* 3 Blue Cards */}
        <div className="grid md:grid-cols-3 gap-8 pt-8 mb-4">
          <div className="bg-[#007cd6] rounded-xl text-center text-white relative pt-12 pb-8 px-6 shadow-md mt-8">
            <div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-white rounded-full p-4 shadow-sm border border-gray-100">
              <FileCheck className="w-8 h-8 text-[#007cd6]" />
            </div>
            <h3 className="text-2xl font-bold">Abertura empresa*</h3>
          </div>
          
          <div className="bg-[#007cd6] rounded-xl text-center text-white relative pt-12 pb-8 px-6 shadow-md mt-8">
            <div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-white rounded-full p-4 shadow-sm border border-gray-100">
              <Monitor className="w-8 h-8 text-[#007cd6]" />
            </div>
            <h3 className="text-2xl font-bold mb-3">Sistema ERP financeiro*</h3>
            <p className="text-sm opacity-90 leading-snug">Gestão estoque, contas a pagar e a receber, emissor notas NF-S, NF-E, NFC-E, CT-e, MDF, 10 usuários, notas ilimitadas (plano de 12 meses fidelidade)</p>
          </div>

          <div className="bg-[#007cd6] rounded-xl text-center text-white relative pt-12 pb-8 px-6 shadow-md mt-8">
            <div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-white rounded-full p-4 shadow-sm border border-gray-100">
              <FileBadge className="w-8 h-8 text-[#007cd6]" />
            </div>
            <h3 className="text-2xl font-bold">Certificado digital A1*</h3>
          </div>
        </div>
        
        <p className="text-center text-sm text-gray-500 mb-16">*na assinatura do plano de 12 meses de fidelidade</p>

        {/* O que sua empresa recebe / Serviços Inclusos */}
        <div className="grid md:grid-cols-2 gap-12">
          
          {/* Left Column */}
          <div>
            <h2 className="text-4xl font-bold text-[#0f2636] mb-4">O que sua empresa recebe</h2>
            <p className="text-gray-600 mb-8">
              Ao contratar nossos serviços, você garante uma estrutura completa de backoffice. Focamos na burocracia para que você foque nas vendas.
            </p>
            
            <div className="bg-[#eaf5fc] rounded-xl p-8 border border-[#cbe4f7]">
              <h4 className="font-bold text-[#0f2636] mb-2">Você pode estar pagando impostos a mais todos os meses</h4>
              <p className="text-sm text-gray-600 mb-4">e nem sabe disso.</p>
              
              <p className="text-sm text-gray-700 mb-4">
                Pare de perder dinheiro por erro de tributação, enquadramento incorreto ou apurações mal feitas.
              </p>
              <p className="text-sm text-gray-700 mb-6">
                Teste nossa contabilidade digital por 30 dias grátis e descubra como unir inteligência artificial + especialistas contábeis pode fazer sua empresa pagar exatamente o que é devido — nem um real a mais, nem um real a menos.
              </p>
              
              <p className="font-bold text-[#0f2636] mb-3 text-sm">Nós garantimos:</p>
              <ul className="space-y-2">
                {['Apurações feitas com precisão', 'Enquadramento tributário correto', 'Redução de riscos fiscais', 'Economia real no caixa'].map((item, i) => (
                  <li key={i} className="flex items-center gap-2 text-sm text-gray-700">
                    <Check className="w-4 h-4 text-[#009fe3]" strokeWidth={3} />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Right Column */}
          <div className="flex flex-col items-start">
            <h2 className="text-3xl font-bold text-[#0f2636] mb-8">Serviços Inclusos</h2>
            <ul className="space-y-4">
              {[
                'Atendimento via telefone, e-mail ou chat;',
                'Escrituração dos livros fiscais obrigatórios',
                'Apuração completa dos impostos e declarações',
                'Escrituração contábil e Balanço anual',
                'Balancete mensal ou trimestral (sob análise)',
                'Declaração de faturamento fiscal (até 4/ano)',
                'Orientações sobre operações fiscais',
                'Elaboração de folha de pagamento, férias e rescisão',
                'Pró-Labore e gestão de funcionários',
                'Relatórios fiscais mensais'
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-4 text-gray-700 text-sm">
                  <div className="bg-[#ccff99] text-[#8ec63f] rounded-full p-0.5 shrink-0">
                    <CheckCircle2 className="w-5 h-5 fill-[#ccff99] text-[#8ec63f]" />
                  </div>
                  {item}
                </li>
              ))}
            </ul>

            <div className="mt-8">
              <a
                href="https://wa.me/5517996501530"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center bg-[#8ec63f] hover:bg-[#7ebd34] text-[#0f2636] font-bold py-3.5 px-8 rounded-full shadow-sm hover:shadow transition-all duration-200 text-base"
              >
                Contratar agora
              </a>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
