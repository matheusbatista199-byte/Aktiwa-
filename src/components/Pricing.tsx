import React from 'react';

export function Pricing() {
  const Card = ({ title, subtitles, prices }: any) => (
    <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm flex flex-col justify-between h-full hover:scale-105 hover:shadow-lg transition-all duration-300">
      <h3 className="text-xl font-bold text-[#0f2636] mb-1">{title}</h3>
      <p className="text-gray-500 text-sm mb-6">{subtitles[0]}</p>
      
      <div className="space-y-4 mt-auto">
        <div>
          <p className="text-xs text-gray-500 mb-1">{subtitles[1]}</p>
          <div className="text-[#009fe3] font-bold text-3xl flex items-baseline gap-1">
            <span className="text-lg">R$</span> {prices[0]} <span className="text-sm font-normal text-gray-500">/mês</span>
          </div>
        </div>
        <div>
          <p className="text-xs text-gray-500 mb-1">{subtitles[2]}</p>
          <div className="text-[#009fe3] font-bold text-3xl flex items-baseline gap-1">
            <span className="text-lg">R$</span> {prices[1]} <span className="text-sm font-normal text-gray-500">/mês</span>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <section id="planos" className="py-16 bg-[#f4f5f7]">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <h2 className="text-4xl font-bold text-[#0f2636] mb-12">Planos</h2>

        {/* Simples Nacional */}
        <div className="mb-12">
          <h3 className="text-[#009fe3] font-bold text-sm uppercase tracking-widest mb-6">Simples Nacional</h3>
          <div className="grid md:grid-cols-3 gap-6">
            <Card 
              title="Prestadores de Serviços" 
              subtitles={["2 Sócios", "Faturamento até R$ 2.000.000,00", "Faturamento até R$ 4.800.000,00"]}
              prices={["200,00", "350,00"]}
            />
            <Card 
              title="Comércio" 
              subtitles={["2 Sócios", "Faturamento até R$ 1.500.000,00", "Faturamento até R$ 4.800.000,00"]}
              prices={["300,00", "400,00"]}
            />
            <Card 
              title="Indústrias" 
              subtitles={["2 Sócios", "Faturamento até R$ 960.000,00", "Faturamento até R$ 960.000,00"]}
              prices={["200,00", "200,00"]}
            />
          </div>
        </div>

        {/* Lucro Presumido */}
        <div className="mb-12">
          <h3 className="text-[#009fe3] font-bold text-sm uppercase tracking-widest mb-6">Lucro Presumido</h3>
          <div className="grid md:grid-cols-3 gap-6">
            <Card 
              title="Prestadores de Serviços" 
              subtitles={["2 Sócios", "Faturamento até R$ 2.000.000,00", "Faturamento até R$ 4.800.000,00"]}
              prices={["249,50", "400,00"]}
            />
            <Card 
              title="Comércio" 
              subtitles={["2 Sócios", "Faturamento até R$ 1.500.000,00", "Faturamento até R$ 4.800.000,00"]}
              prices={["349,50", "449,50"]}
            />
            <Card 
              title="Indústrias" 
              subtitles={["2 Sócios", "Faturamento até R$ 960.000,00", "Faturamento até R$ 960.000,00"]}
              prices={["349,50", "449,50"]}
            />
          </div>
        </div>

        {/* ONGs */}
        <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm mb-6 flex flex-col md:flex-row md:items-center md:justify-between hover:scale-[1.02] hover:shadow-lg transition-all duration-300">
          <div className="mb-6 md:mb-0">
            <h3 className="text-xl font-bold text-[#0f2636] mb-1">Entidades Sem Fins Lucrativos (OSCIPs/ONG)</h3>
            <p className="text-gray-500 text-sm">5 Participantes no Estatuto</p>
          </div>
          
          <div className="flex flex-col md:flex-row gap-6 md:gap-12">
            <div className="bg-[#f8f9fa] p-4 rounded-lg min-w-[200px]">
              <p className="text-xs text-gray-500 mb-1">Até R$ 1.500.000,00</p>
              <div className="text-[#009fe3] font-bold text-3xl flex items-baseline gap-1">
                <span className="text-lg">R$</span> 200,00 <span className="text-sm font-normal text-gray-500">/mês</span>
              </div>
            </div>
            <div className="bg-[#f8f9fa] p-4 rounded-lg min-w-[200px]">
              <p className="text-xs text-gray-500 mb-1">Até R$ 5.000.000,00</p>
              <div className="text-[#009fe3] font-bold text-3xl flex items-baseline gap-1">
                <span className="text-lg">R$</span> 350,00 <span className="text-sm font-normal text-gray-500">/mês</span>
              </div>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-4 text-xs text-gray-500">
          <div>
            <p>¹ A cada funcionário adicional: R$ 25,00.</p>
            <p>² Valores acima da tabela somente sob consulta.</p>
            <p>³ Lucro Real somente sob consulta.</p>
          </div>
          <div>
            <p>* Qualquer serviço adicional como alvará, certidões, consultorias: valores sob consulta.</p>
            <p>**Para empresas com obrigatoriedade de retenção de impostos federais, os valores da mensalidade poderão sofrer reajustes pela demanda.</p>
          </div>
        </div>

      </div>
    </section>
  );
}
