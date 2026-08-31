import React from 'react';
import { Briefcase, ShoppingBag, Factory, HeartHandshake } from 'lucide-react';
import { motion } from 'motion/react';

export function Solutions() {
  const cards = [
    {
      title: 'Prestadores de Serviços',
      desc: 'Contabilidade especializada para consultores, médicos e profissionais liberais.',
      icon: <Briefcase className="w-6 h-6 text-[#009fe3]" />
    },
    {
      title: 'Comércio',
      desc: 'Gestão fiscal completa para varejo e atacado com controle de estoque integrado.',
      icon: <ShoppingBag className="w-6 h-6 text-[#009fe3]" />
    },
    {
      title: 'Indústrias',
      desc: 'Apoio industrial com foco em custos, produção e benefícios fiscais.',
      icon: <Factory className="w-6 h-6 text-[#009fe3]" />
    },
    {
      title: 'ONGs e OSCIPs',
      desc: 'Entidades sem fins lucrativos com conformidade legal e prestação de contas transparente',
      icon: <HeartHandshake className="w-6 h-6 text-[#009fe3]" />
    }
  ];

  return (
    <section id="especialidades" className="py-16 bg-[#f8f9fa] overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <motion.div 
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-30px" }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="text-center max-w-3xl mx-auto mb-12"
        >
          <span className="text-[#009fe3] font-semibold text-sm uppercase tracking-wider block mb-2">
            Soluções Dedicadas
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-[#0f2636] mb-4">
            Atendemos o seu modelo de negócio
          </h2>
          <p className="text-gray-600 text-lg">
            Não importa o tamanho ou setor, temos a expertise necessária para manter sua empresa em dia e crescendo.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {cards.map((card, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-30px" }}
              transition={{ duration: 0.4, delay: idx * 0.08, ease: "easeOut" }}
              className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 flex flex-col items-start hover:shadow-md hover:-translate-y-1 transition-all duration-300"
            >
              <div className="bg-[#eaf5fc] w-12 h-12 rounded-lg flex items-center justify-center mb-6">
                {card.icon}
              </div>
              <h3 className="text-xl font-bold text-[#0f2636] mb-3">{card.title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed">{card.desc}</p>
            </motion.div>
          ))}
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-30px" }}
            transition={{ duration: 0.5, ease: "easeOut" }}
          >
            <h3 className="text-2xl font-bold text-[#0f2636] mb-4 leading-tight">
              Inteligência Fiscal<br/>Estratégica ao Seu Dispor
            </h3>
            <div className="space-y-4 text-gray-600 text-sm leading-relaxed">
              <p>
                Nós não nos limitamos à conformidade; nós nos dedicamos à inteligência fiscal e tributária estratégica para você.
              </p>
              <p>
                Nossa equipe é expert em identificar oportunidades para a redução legal da sua carga de impostos, aproveitando incentivos fiscais, regimes especiais e o melhor enquadramento tributário para o seu negócio.
              </p>
              <p>
                Dominamos temas complexos como ICMS-ST, MVA e importação direta de mercadorias, garantindo a maior economia possível para você.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-30px" }}
            transition={{ duration: 0.5, delay: 0.1, ease: "easeOut" }}
          >
            <h3 className="text-2xl font-bold text-[#0f2636] mb-4 leading-tight">
              Especialização Setorial Detalhada<br/>para Suas Necessidades
            </h3>
            <div className="space-y-4 text-gray-600 text-sm leading-relaxed">
              <p>
                Apesar de atendermos a diversos mercados, possuímos uma notável especialização em vários setores.
              </p>
              <p>
                Isso nos permite oferecer a você soluções contábeis e de consultoria perfeitamente adaptadas às necessidades e particularidades do seu segmento, como a expertise no Livro Caixa Digital do Produtor Rural (LCDPR) para o agronegócio ou a apuração detalhada por departamento para farmácias e autopeças.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
