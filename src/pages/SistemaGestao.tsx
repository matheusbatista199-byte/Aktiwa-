import { Link } from "react-router-dom";
import React from 'react';
import { 
  ShieldPlus, 
  CheckCircle2, 
  DollarSign, 
  MonitorSmartphone, 
  Database, 
  ShieldCheck, 
  BarChart2, 
  Lock, 
  Zap, 
  TrendingUp, 
  User, 
  Infinity as InfinityIcon,
  Check,
  ArrowUpRight
} from 'lucide-react';

export function SistemaGestao() {
  return (
    <main className="w-full bg-[#f8f9fa] min-h-screen py-16 px-6">
      <div className="max-w-[900px] mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-extrabold text-[#0f2636] mb-4 uppercase">SISTEMA DE GESTÃO INTEGRADO</h1>
          <p className="text-xl text-gray-600 font-light">Mais controle, mais agilidade e mais segurança</p>
        </div>

        <div className="text-gray-800 text-[15px] leading-relaxed mb-10">
          <p>
            Para garantir uma contabilidade realmente eficiente, utilizamos uma plataforma de gestão moderna e integrada, que conecta sua empresa diretamente à área contábil, fiscal e financeira. Isso significa menos retrabalho, mais organização e decisões mais rápidas.
          </p>
        </div>

        {/* Light Blue Box */}
        <div className="bg-[#eaf5fc] border border-[#cbe4f7] rounded-xl p-8 md:p-10 mb-16">
          <div className="flex items-center gap-3 mb-6">
            <ShieldPlus className="w-8 h-8 text-[#009fe3]" strokeWidth={1.5} />
            <h2 className="text-[#0f2636] text-xl font-bold">Emissão e geração automática de documentos</h2>
          </div>
          
          <p className="text-gray-700 text-[15px] mb-6">O sistema permite a emissão de notas fiscais de venda e serviço, como</p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            <div className="bg-white rounded-lg p-5 flex items-center gap-3 shadow-sm">
              <CheckCircle2 className="w-5 h-5 text-[#65AF1F]" />
              <span className="text-gray-700 text-sm">NF-e (Nota Fiscal de Produto)</span>
            </div>
            <div className="bg-white rounded-lg p-5 flex items-center gap-3 shadow-sm">
              <CheckCircle2 className="w-5 h-5 text-[#65AF1F]" />
              <span className="text-gray-700 text-sm">NFC-e (Nota Fiscal ao Consumidor)</span>
            </div>
            <div className="bg-white rounded-lg p-5 flex items-center gap-3 shadow-sm">
              <CheckCircle2 className="w-5 h-5 text-[#65AF1F]" />
              <span className="text-gray-700 text-sm">NFS-e (Nota Fiscal de Serviço)</span>
            </div>
            <div className="bg-white rounded-lg p-5 flex items-center gap-3 shadow-sm">
              <CheckCircle2 className="w-5 h-5 text-[#65AF1F]" />
              <span className="text-gray-700 text-sm">CT-e (Conhecimento de Transporte Eletrônico)</span>
            </div>
          </div>
          
          <div className="bg-white rounded-lg p-5 flex items-center gap-3 shadow-sm mb-8 w-full">
            <CheckCircle2 className="w-5 h-5 text-[#65AF1F]" />
            <span className="text-gray-700 text-sm">MDF-e (Manifesto Eletrônico de Documentos Fiscais) de forma rápida e integrada à contabilidade.</span>
          </div>

          <p className="text-gray-700 text-[15px] mb-4">Além disso, gera automaticamente:</p>
          <ul className="list-disc pl-5 text-gray-700 text-[14px] space-y-1 mb-8">
            <li>Boletos bancários</li>
            <li>Recibos de pagamento</li>
            <li>Controle de parcelas</li>
            <li>Registro das vendas</li>
            <li>Integração com contas a receber</li>
          </ul>

          <p className="text-gray-700 text-[15px]">
            Todas as informações são armazenadas de forma segura e enviadas automaticamente para a área contábil e fiscal, evitando lançamentos manuais, reduzindo erros e garantindo que os impostos sejam apurados corretamente.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-10 mb-16">
          <div className="flex gap-4">
            <DollarSign className="w-6 h-6 text-[#009fe3] flex-shrink-0 mt-1" />
            <div>
              <h3 className="font-bold text-[#0f2636] text-[15px] mb-2">Gestão financeira completa</h3>
              <p className="text-gray-600 text-[14px] leading-relaxed">Controle de contas a pagar e a receber, fluxo de caixa, conciliação bancária e acompanhamento em tempo real da saúde financeira da empresa.</p>
            </div>
          </div>
          <div className="flex gap-4">
            <MonitorSmartphone className="w-6 h-6 text-[#009fe3] flex-shrink-0 mt-1" />
            <div>
              <h3 className="font-bold text-[#0f2636] text-[15px] mb-2">Controle de Estoque</h3>
              <p className="text-gray-600 text-[14px] leading-relaxed">Acompanhamento de entradas e saídas, evitando perdas e compras desnecessárias, além de apoiar o correto enquadramento fiscal.</p>
            </div>
          </div>
          <div className="flex gap-4">
            <Database className="w-6 h-6 text-[#009fe3] flex-shrink-0 mt-1" />
            <div>
              <h3 className="font-bold text-[#0f2636] text-[15px] mb-2">Centralização</h3>
              <p className="text-gray-600 text-[14px] leading-relaxed">Todos os dados ficam organizados em um único ambiente digital, facilitando consultas, relatórios gerenciais e auditorias.</p>
            </div>
          </div>
          <div className="flex gap-4">
            <ShieldCheck className="w-6 h-6 text-[#009fe3] flex-shrink-0 mt-1" />
            <div>
              <h3 className="font-bold text-[#0f2636] text-[15px] mb-2">Redução de erros e retrabalho</h3>
              <p className="text-gray-600 text-[14px] leading-relaxed">A integração entre sistema e contabilidade diminui falhas manuais, evita divergências fiscais e reduz riscos de multas.</p>
            </div>
          </div>
          <div className="flex gap-4">
            <BarChart2 className="w-6 h-6 text-[#009fe3] flex-shrink-0 mt-1" />
            <div>
              <h3 className="font-bold text-[#0f2636] text-[15px] mb-2">Relatórios gerenciais claros</h3>
              <p className="text-gray-600 text-[14px] leading-relaxed">Você acompanha faturamento, despesas, margens e resultados de forma visual e simples, mesmo sem conhecimento técnico.</p>
            </div>
          </div>
          <div className="flex gap-4">
            <Lock className="w-6 h-6 text-[#009fe3] flex-shrink-0 mt-1" />
            <div>
              <h3 className="font-bold text-[#0f2636] text-[15px] mb-2">Acesso remoto e seguro</h3>
              <p className="text-gray-600 text-[14px] leading-relaxed">Pode ser utilizado de qualquer lugar, com proteção de dados e backups automáticos.</p>
            </div>
          </div>
          <div className="flex gap-4">
            <Zap className="w-6 h-6 text-[#009fe3] flex-shrink-0 mt-1" />
            <div>
              <h3 className="font-bold text-[#0f2636] text-[15px] mb-2">Agilidade na comunicação</h3>
              <p className="text-gray-600 text-[14px] leading-relaxed">As informações chegam prontas para apuração de impostos, folha e obrigações fiscais, acelerando processos e evitando atrasos.</p>
            </div>
          </div>
          <div className="flex gap-4">
            <TrendingUp className="w-6 h-6 text-[#009fe3] flex-shrink-0 mt-1" />
            <div>
              <h3 className="font-bold text-[#0f2636] text-[15px] mb-2">Base para planejamento</h3>
              <p className="text-gray-600 text-[14px] leading-relaxed">Com dados organizados, é possível aplicar estratégias para redução legal de impostos e melhor aproveitamento do regime tributário.</p>
            </div>
          </div>
        </div>

        {/* Dark Box */}
        <div className="bg-[#0f2636] text-white rounded-xl p-8 md:p-12 mb-8">
          <div className="flex items-center gap-3 mb-6">
            <ShieldPlus className="w-7 h-7 text-[#009fe3]" strokeWidth={1.5} />
            <h3 className="text-white text-lg font-bold">Tecnologia a favor do seu resultado</h3>
          </div>
          
          <div className="w-full h-px bg-slate-700 mb-8"></div>
          
          <p className="text-slate-300 text-[15px] mb-8">Ao utilizar esse sistema de gestão integrado à nossa contabilidade digital, sua empresa ganha:</p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-y-4 gap-x-8 mb-10">
            <div className="flex items-center gap-3">
              <Check className="w-5 h-5 text-white" />
              <span className="text-slate-200 text-[15px]">Organização financeira</span>
            </div>
            <div className="flex items-center gap-3">
              <Check className="w-5 h-5 text-white" />
              <span className="text-slate-200 text-[15px]">Previsibilidade de impostos</span>
            </div>
            <div className="flex items-center gap-3">
              <Check className="w-5 h-5 text-white" />
              <span className="text-slate-200 text-[15px]">Redução de riscos fiscais</span>
            </div>
            <div className="flex items-center gap-3">
              <Check className="w-5 h-5 text-white" />
              <span className="text-slate-200 text-[15px]">Mais controle sobre o negócio</span>
            </div>
            <div className="flex items-center gap-3">
              <Check className="w-5 h-5 text-white" />
              <span className="text-slate-200 text-[15px]">Tomada de decisão com base em dados reais</span>
            </div>
            <div className="flex items-center gap-3">
              <Check className="w-5 h-5 text-white" />
              <span className="text-slate-200 text-[15px]">Economia de tempo e dinheiro</span>
            </div>
          </div>
          
          <div className="w-full h-px bg-slate-700 mb-8"></div>
          
          <p className="text-slate-300 text-[14px]">
            Essa estrutura tecnológica é parte do nosso modelo de <strong className="text-white font-bold">inteligência contábil digital</strong>, criada para empresas que querem crescer com segurança, pagando apenas o imposto devido e mantendo total conformidade com a legislação.
          </p>
        </div>

        {/* Badges */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          <div className="flex items-center gap-2 bg-[#eaf5fc] border border-[#009fe3] text-[#009fe3] px-6 py-2.5 rounded-full">
            <User className="w-4 h-4" />
            <span className="text-sm font-medium">Até 10 usuários</span>
          </div>
          <div className="flex items-center gap-2 bg-[#effbd8] border border-[#65AF1F] text-[#65AF1F] px-6 py-2.5 rounded-full">
            <InfinityIcon className="w-4 h-4" />
            <span className="text-sm font-medium">Sem limite de notas emitidas</span>
          </div>
        </div>

        {/* CTA Button */}
        <div className="flex justify-center">
          <Link to="/#planos" className="bg-[#f8f9fa] border border-[#009fe3] text-[#0f2636] px-8 py-4 rounded-full flex items-center justify-center gap-2 hover:bg-[#009fe3] hover:text-white transition-all duration-300 text-[15px]">
            Contrate agora <ArrowUpRight className="w-5 h-5" />
          </Link>
        </div>
      </div>
    </main>
  );
}
