import React from 'react';
import { FileCheck, Monitor, FileBadge, CheckCircle2, Check } from 'lucide-react';
import { motion } from 'motion/react';

export function Benefits() {
  const blueCards = [
    {
      icon: <FileCheck className="w-8 h-8 text-[#007cd6]" />,
      title: "Abertura empresa*",
      desc: null
    },
    {
      icon: <Monitor className="w-8 h-8 text-[#007cd6]" />,
      title: "Sistema ERP financeiro*",
      desc: "Gestão estoque, contas a pagar e a receber, emissor notas NF-S, NF-E, NFC-E, CT-e, MDF, 10 usuários, notas ilimitadas (plano de 12 meses fidelidade)"
    },
    {
      icon: <FileBadge className="w-8 h-8 text-[#007cd6]" />,
      title: "Certificado digital A1*",
      desc: null
    }
  ];

  const includedServices = [
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
  ];

  const guarantees = [
    'Apurações feitas com precisão',
    'Enquadramento tributário correto',
    'Redução de riscos fiscais',
    'Economia real no caixa'
  ];

  return (
    <section className="bg-[#f4f5f7] pb-16 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* 3 Blue Cards */}
        <div className="grid md:grid-cols-3 gap-8 pt-8 mb-4">
          {blueCards.map((card, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-30px" }}
              transition={{ duration: 0.5, delay: i * 0.08, ease: "easeOut" }}
              className="bg-[#007cd6] rounded-xl text-center text-white relative pt-12 pb-8 px-6 shadow-md mt-8 hover:-translate-y-1 transition-transform duration-300"
            >
              <div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-white rounded-full p-4 shadow-sm border border-gray-100">
                {card.icon}
              </div>
              <h3 className={`text-2xl font-bold ${card.desc ? 'mb-3' : ''}`}>{card.title}</h3>
              {card.desc && (
                <p className="text-sm opacity-90 leading-snug">{card.desc}</p>
              )}
            </motion.div>
          ))}
        </div>
        
        <motion.p 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-center text-sm text-gray-500 mb-16"
        >
          *na assinatura do plano de 12 meses de fidelidade
        </motion.p>

        {/* O que sua empresa recebe / Serviços Inclusos */}
        <div className="grid md:grid-cols-2 gap-12">
          
          {/* Left Column */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-30px" }}
            transition={{ duration: 0.5, ease: "easeOut" }}
          >
            <h2 className="text-4xl font-bold text-[#0f2636] mb-4">O que sua empresa recebe</h2>
            <p className="text-gray-600 mb-8 leading-relaxed">
              Ao contratar nossos serviços, você garante uma estrutura completa de backoffice. Focamos na burocracia para que você foque nas vendas.
            </p>
            
            <div className="bg-[#eaf5fc] rounded-xl p-8 border border-[#cbe4f7] shadow-sm">
              <h4 className="font-bold text-[#0f2636] mb-2">Você pode estar pagando impostos a mais todos os meses</h4>
              <p className="text-sm text-gray-600 mb-4">e nem sabe disso.</p>
              
              <p className="text-sm text-gray-700 mb-4 leading-relaxed">
                Pare de perder dinheiro por erro de tributação, enquadramento incorreto ou apurações mal feitas.
              </p>
              <p className="text-sm text-gray-700 mb-6 leading-relaxed">
                Teste nossa contabilidade digital por 30 dias grátis e descubra como unir inteligência artificial + especialistas contábeis pode fazer sua empresa pagar exatamente o que é devido — nem um real a mais, nem um real a menos.
              </p>
              
              <p className="font-bold text-[#0f2636] mb-3 text-sm">Nós garantimos:</p>
              <ul className="space-y-2">
                {guarantees.map((item, i) => (
                  <motion.li 
                    key={i} 
                    initial={{ opacity: 0, y: 4 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.35, delay: 0.05 * i, ease: "easeOut" }}
                    className="flex items-center gap-2 text-sm text-gray-700"
                  >
                    <Check className="w-4 h-4 text-[#009fe3]" strokeWidth={3} />
                    {item}
                  </motion.li>
                ))}
              </ul>
            </div>
          </motion.div>

          {/* Right Column */}
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-30px" }}
            transition={{ duration: 0.5, delay: 0.1, ease: "easeOut" }}
            className="flex flex-col items-start"
          >
            <h2 className="text-3xl font-bold text-[#0f2636] mb-8">Serviços Inclusos</h2>
            <ul className="space-y-4">
              {includedServices.map((item, i) => (
                <motion.li 
                  key={i}
                  initial={{ opacity: 0, y: 4 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.35, delay: 0.03 * i, ease: "easeOut" }}
                  className="flex items-center gap-4 text-gray-700 text-sm"
                >
                  <div className="bg-[#ccff99] text-[#8ec63f] rounded-full p-0.5 shrink-0">
                    <CheckCircle2 className="w-5 h-5 fill-[#ccff99] text-[#8ec63f]" />
                  </div>
                  {item}
                </motion.li>
              ))}
            </ul>

            <motion.div 
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.3 }}
              className="mt-8"
            >
              <a
                href="https://wa.me/5517996501530"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center bg-[#8ec63f] hover:bg-[#7ebd34] text-[#0f2636] font-bold py-3.5 px-8 rounded-full shadow-sm hover:shadow transition-all duration-200 text-base"
              >
                Contratar agora
              </a>
            </motion.div>
          </motion.div>
        </div>

      </div>
    </section>
  );
}
