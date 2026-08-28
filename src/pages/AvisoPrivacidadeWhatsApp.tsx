import React from 'react';

export function AvisoPrivacidadeWhatsApp() {
  return (
    <main className="w-full bg-[#f8f9fa] min-h-screen py-16 px-6">
      <div className="max-w-[1000px] mx-auto bg-white p-10 md:p-16 rounded-2xl shadow-sm">
        <h1 className="text-3xl md:text-5xl font-extrabold text-[#0f2636] mb-10 text-center uppercase">POLÍTICA DE PRIVACIDADE DO WHATSAPP</h1>
        
        <div className="text-gray-700 text-[15px] leading-relaxed space-y-6">
          <p>
            Esta política se aplica à coleta e tratamento de dados pessoais dos usuários que entram em contato com a AKTIWA Serviços Contábeis através do WhatsApp.
          </p>

          <div className="mt-12 space-y-10">
            <section className="border-l-[3px] border-[#0f2636] pl-5">
              <h2 className="text-lg font-bold text-black mb-3 uppercase">1. Quais dados são coletados e para quais finalidades?</h2>
              <p className="mb-4">
                Ao entrar em contato pelo WhatsApp, poderão ser coletados, no momento de envio da mensagem, alguns dos seus dados:
              </p>
              <ul className="list-disc pl-5 space-y-2">
                <li><strong>Nome e Sobrenome:</strong> Coletado e utilizado para saber quem é você, de onde está falando, além de podermos retornar o contato com segurança e te atender da melhor maneira.</li>
                <li><strong>Número de telefone:</strong> Apenas utilizado com a finalidade de estabelecer comunicação.</li>
                <li><strong>Mensagens:</strong> Quaisquer informações que você fornecer voluntariamente na mensagem.</li>
              </ul>
              <p className="mt-4">
                Além disso, caso seja necessário e para o envio de orçamentos, poderão ser solicitadas informações complementares. Esses dados não são utilizados para envios de propaganda ou malas diretas, salvo com o seu consentimento.
              </p>
            </section>

            <section className="border-l-[3px] border-[#0f2636] pl-5">
              <h2 className="text-lg font-bold text-black mb-3 uppercase">2. Como as informações são armazenadas?</h2>
              <p>
                Os seus dados são armazenados na própria plataforma do WhatsApp, que possui uma política de privacidade própria (você pode acessá-la em <a href="https://www.whatsapp.com/legal/privacy-policy" className="text-[#009fe3] hover:underline" target="_blank" rel="noreferrer">https://www.whatsapp.com/legal/privacy-policy</a>), e nossos colaboradores podem visualizar a informação que os clientes informarem no aplicativo.
              </p>
            </section>

            <section className="border-l-[3px] border-[#0f2636] pl-5">
              <h2 className="text-lg font-bold text-black mb-3 uppercase">3. Com quem seus dados são compartilhados?</h2>
              <p>
                Os dados podem ser compartilhados com outros funcionários da Aktiwa para atender a sua solicitação. Nós não compartilhamos as suas informações com terceiros que não os indicados nesta política, a menos que você tenha previamente concordado com isso ou que haja permissão ou obrigação com base em lei.
              </p>
            </section>

            <section className="border-l-[3px] border-[#0f2636] pl-5">
              <h2 className="text-lg font-bold text-black mb-3 uppercase">4. Quais os seus direitos?</h2>
              <p className="mb-4">
                A LGPD garante a você direitos como: acesso, correção, eliminação, oposição, dentre outros. Para exercê-los, entre em contato através do e-mail: <strong>contato@aktiwa.com.br</strong>, com o assunto "LGPD".
              </p>
            </section>
            
            <section className="border-l-[3px] border-[#0f2636] pl-5">
              <h2 className="text-lg font-bold text-black mb-3 uppercase">Data da Última Revisão</h2>
              <p>
                31 de outubro de 2025.
              </p>
            </section>
          </div>
        </div>
      </div>
    </main>
  );
}
