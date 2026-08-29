import { Link } from "react-router-dom";
import React from 'react';
import { 
  RefreshCw, 
  GitBranch, 
  Database, 
  CheckCircle2, 
  FileText, 
  MessageSquare, 
  BarChart, 
  Layout, 
  Share2, 
  User,
  ArrowUpRight
} from 'lucide-react';

export function QuemSomos() {
  return (
    <main className="w-full bg-white min-h-screen">
      
      {/* Hero Section */}
      <section className="bg-[#0f2636] text-white pt-24 pb-40 px-6 relative">
        <div className="max-w-[900px] mx-auto text-center">
          <h1 className="text-4xl md:text-[44px] font-extrabold mb-4 leading-tight uppercase">SOMOS MOVIDOS POR RESULTADOS. SOMOS A AKTIWA.</h1>
          <p className="text-slate-300 text-[15px] font-light mb-12 max-w-[600px] mx-auto">
            Na Aktiwa, acreditamos que contabilidade não é apenas obrigação — é estratégia, crescimento e liberdade para empreender com segurança.
          </p>
          <p className="text-slate-200 text-lg md:text-xl font-light max-w-[700px] mx-auto">
            Unimos inteligência contábil, tecnologia e visão de negócio para simplificar processos, reduzir custos e transformar a gestão financeira das empresas.
          </p>
        </div>
      </section>

      {/* 3 Cards Section (overlapping) */}
      <section className="px-6 relative -mt-20 z-10">
        <div className="max-w-[1000px] mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white rounded-xl p-8 shadow-xl border-b-4 border-[#65AF1F]">
            <div className="bg-[#effbd8] w-12 h-12 rounded-lg flex items-center justify-center mb-6">
              <RefreshCw className="w-6 h-6 text-[#65AF1F]" />
            </div>
            <h3 className="text-[#0f2636] font-bold text-lg mb-2">Modernizamos</h3>
            <p className="text-gray-600 text-sm">o que antes era burocrático.</p>
          </div>
          <div className="bg-white rounded-xl p-8 shadow-xl border-b-4 border-[#009fe3]">
            <div className="bg-[#eaf5fc] w-12 h-12 rounded-lg flex items-center justify-center mb-6">
              <Share2 className="w-6 h-6 text-[#009fe3]" />
            </div>
            <h3 className="text-[#0f2636] font-bold text-lg mb-2">Simplificamos</h3>
            <p className="text-gray-600 text-sm">o que parecia complicado.</p>
          </div>
          <div className="bg-white rounded-xl p-8 shadow-xl border-b-4 border-[#65AF1F]">
            <div className="bg-[#effbd8] w-12 h-12 rounded-lg flex items-center justify-center mb-6">
              <Database className="w-6 h-6 text-[#65AF1F]" />
            </div>
            <h3 className="text-[#0f2636] font-bold text-lg mb-2">Estruturamos</h3>
            <p className="text-gray-600 text-sm">o que impulsiona o crescimento.</p>
          </div>
        </div>
      </section>

      {/* Middle White Section */}
      <section className="py-24 px-6">
        <div className="max-w-[1000px] mx-auto">
          <div className="text-left md:text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-light text-gray-800 mb-4">
              Contabilidade que <span className="text-[#009fe3] font-bold">acompanha a evolução da sua empresa</span>
            </h2>
            <p className="text-gray-600">Atendemos empresas de todos os portes que querem mais do que cumprir obrigações fiscais.</p>
          </div>

          <div className="flex flex-col items-start md:flex-row md:flex-wrap md:justify-center gap-6 mb-16">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5 text-[#009fe3]" />
              <span className="text-gray-700 text-[15px]">Querem organização.</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5 text-[#009fe3]" />
              <span className="text-gray-700 text-[15px]">Querem economia.</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5 text-[#009fe3]" />
              <span className="text-gray-700 text-[15px]">Querem clareza para decidir.</span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-light text-[#0f2636] mb-8">Com a Aktiwa, sua empresa tem:</h3>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="w-6 h-6 text-[#65AF1F]" />
                  <span className="text-gray-700 text-[15px]">Processos digitais e ágeis</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="w-6 h-6 text-[#65AF1F]" />
                  <span className="text-gray-700 text-[15px]">Planejamento tributário estratégico</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="w-6 h-6 text-[#65AF1F]" />
                  <span className="text-gray-700 text-[15px]">Atendimento próximo e consultivo</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="w-6 h-6 text-[#65AF1F]" />
                  <span className="text-gray-700 text-[15px]">Segurança fiscal e contábil</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="w-6 h-6 text-[#65AF1F]" />
                  <span className="text-gray-700 text-[15px]">Relatórios claros para decisões inteligentes</span>
                </div>
              </div>
            </div>
            <div className="rounded-2xl overflow-hidden shadow-lg h-[300px]">
              <img 
                src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" 
                alt="Equipe trabalhando em laptop" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Dark Features Section */}
      <section className="bg-[#0f2636] text-white py-16 px-6">
        <div className="max-w-[1000px] mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-[38px] font-extrabold mb-4">Tecnologia, proximidade e estratégia no mesmo lugar</h2>
            <p className="text-slate-300 font-light text-[15px]">Acreditamos que é possível, sim, ter uma contabilidade moderna, eficiente e totalmente integrada ao seu negócio.</p>
          </div>

          <div className="flex flex-col md:grid md:grid-cols-2 gap-x-12 gap-y-6 max-w-[800px] mx-auto">
            <div className="order-1 md:order-none flex items-center gap-4">
              <div className="bg-[#ffdddd] w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0">
                <FileText className="w-6 h-6 text-[#d32f2f]" />
              </div>
              <span className="text-slate-200 text-sm font-light">Sem papelada desnecessária.</span>
            </div>
            <div className="order-2 md:order-none flex items-center gap-4">
              <div className="bg-[#effbd8] w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0">
                <Layout className="w-6 h-6 text-[#65AF1F]" />
              </div>
              <span className="text-slate-200 text-sm font-light">Aqui, cada número tem propósito.</span>
            </div>
            <div className="order-1 md:order-none flex items-center gap-4">
              <div className="bg-[#ffdddd] w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0">
                <MessageSquare className="w-6 h-6 text-[#d32f2f]" />
              </div>
              <span className="text-slate-200 text-sm font-light">Sem linguagem complicada.</span>
            </div>
            <div className="order-2 md:order-none flex items-center gap-4">
              <div className="bg-[#effbd8] w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0">
                <GitBranch className="w-6 h-6 text-[#65AF1F]" />
              </div>
              <span className="text-slate-200 text-sm font-light">Cada decisão tem base.</span>
            </div>
            <div className="order-1 md:order-none flex items-center gap-4">
              <div className="bg-[#ffdddd] w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0">
                <BarChart className="w-6 h-6 text-[#d32f2f]" />
              </div>
              <span className="text-slate-200 text-sm font-light">Sem surpresas no fim do mês.</span>
            </div>
            <div className="order-2 md:order-none flex items-center gap-4">
              <div className="bg-[#effbd8] w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0">
                <User className="w-6 h-6 text-[#65AF1F]" />
              </div>
              <span className="text-slate-200 text-sm font-light">Cada cliente tem atenção.</span>
            </div>
          </div>
        </div>
      </section>

      {/* Footer CTA Section */}
      <section className="bg-[#f8f9fa] py-20 px-6 text-center">
        <h2 className="text-2xl md:text-3xl font-light text-[#0f2636] mb-4">Aktiwa. Ativando o crescimento da sua empresa.</h2>
        <p className="text-gray-600 text-sm md:text-[15px] max-w-[500px] mx-auto mb-10">
          Se você quer uma contabilidade que trabalha a favor do seu negócio e não apenas para cumprir obrigações <strong className="text-[#009fe3] font-bold">a Aktiwa é a escolha certa.</strong>
        </p>
        
        <a 
          href="https://wa.me/5517996501530" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="inline-flex items-center gap-2 bg-[#eaf5fc] border border-[#009fe3] text-[#0f2636] px-8 py-4 rounded-full hover:bg-[#009fe3] hover:text-white transition-all duration-300 text-[15px]"
        >
          Fale com um especialista e descubra como podemos impulsionar sua empresa. <ArrowUpRight className="w-5 h-5" />
        </a>
      </section>

    </main>
  );
}
