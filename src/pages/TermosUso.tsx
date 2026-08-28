import React from 'react';

export function TermosUso() {
  return (
    <main className="w-full bg-[#f8f9fa] min-h-screen py-16 px-6">
      <div className="max-w-[1000px] mx-auto bg-white p-10 md:p-16 rounded-2xl shadow-sm">
        <h1 className="text-3xl md:text-5xl font-extrabold text-[#0f2636] mb-10 text-center uppercase">TERMOS DE USO</h1>
        
        <div className="text-gray-700 text-[15px] leading-relaxed space-y-6">
          <p>
            Bem-vindo(a) à AKTIWA Serviços Contábeis, apresentamos os Termos de Uso do nosso site (www.aktiwa.com.br). Estes termos não criam um contrato entre você e a aktiwa Serviços Contábeis, sendo apenas um informativo das condições de uso do site e dos serviços nele prestados. Recomendamos que, antes de continuar a navegação no nosso site, você leia atentamente os presentes Termos de Uso.
          </p>

          <div className="mt-12 space-y-10">
            <section className="border-l-[3px] border-[#0f2636] pl-5">
              <h2 className="text-lg font-bold text-black mb-3 uppercase">Aceitação dos Termos</h2>
              <p>
                Ao acessar nosso site você manifesta sua expressa concordância com os presentes Termos de Uso, pelo que você se compromete a respeitar e cumprir todas as disposições aqui contidas. Se você não concordar com estes Termos de Uso, você não deve continuar sua navegação por este site e/ou utilizar seus serviços.
              </p>
            </section>

            <section className="border-l-[3px] border-[#0f2636] pl-5">
              <h2 className="text-lg font-bold text-black mb-3 uppercase">Definições</h2>
              <p className="mb-4">
                Para os fins deste documento, devem ser consideradas as seguintes definições e descrições para seu melhor entendimento:
              </p>
              <ul className="list-disc pl-5 space-y-2">
                <li>Toda vez que houver menção aos termos "Aktiwa", "empresa", "nós" ou "nossos", estamos nos referindo à Aktiwa Serviços Contábeis; da mesma forma, toda vez que houver menção aos termos "você", "seu(s)", "sua(s)", usuário(s), estamos nos referindo a Você;</li>
                <li><strong>Titular:</strong> pessoa natural a quem se referem os dados pessoais que são objeto de tratamento;</li>
                <li><strong>Usuário(s):</strong> toda pessoa natural que utilizar os serviços, sendo titular dos dados ou não;</li>
                <li><strong>Encarregado:</strong> pessoa indicada pelo controlador e operador para atuar como canal de comunicação entre o controlador, os titulares dos dados e a Autoridade Nacional de Proteção de Dados (ANPD);</li>
                <li><strong>Tratamento:</strong> toda operação realizada com dados pessoais, como as que se referem a coleta, produção, recepção, classificação, utilização, acesso, reprodução, transmissão, distribuição, processamento, arquivamento, armazenamento, eliminação, avaliação ou controle da informação, modificação, comunicação, transferência, difusão ou extração.</li>
              </ul>
            </section>

            <section className="border-l-[3px] border-[#0f2636] pl-5">
              <h2 className="text-lg font-bold text-black mb-3 uppercase">Leis que regulamentam</h2>
              <p>
                Os presentes Termos de Uso estão de acordo com a legislação brasileira, inclusive com a Lei nº 13.709/18 (Lei Geral de Proteção de Dados - LGPD) e normas relacionadas, além da nossa Política de Privacidade.
              </p>
            </section>

            <section className="border-l-[3px] border-[#0f2636] pl-5">
              <h2 className="text-lg font-bold text-black mb-3 uppercase">Direitos do Usuário</h2>
              <p className="mb-4">
                Você tem o direito não exclusivo a acessar e usar nossos serviços online, para recebimento de notícias e informações da área contábil, bem como requerer a emissão de certificado digital.
              </p>
              <p>
                Todos os direitos não expressamente previstos nestes Termos de Uso estão reservados a nós.
              </p>
            </section>
            
            <section className="border-l-[3px] border-[#0f2636] pl-5">
              <h2 className="text-lg font-bold text-black mb-3 uppercase">Responsabilidades do Usuário</h2>
              <p className="mb-4">
                A utilização do site implica na sua total compreensão, aceitação e vinculação aos Termos de Uso.
              </p>
              <p className="mb-4">
                Você é responsável pelo conteúdo de suas mensagens ou quaisquer outros dados ou informações fornecidas por você, sendo responsável também pelas informações que fizer upload, distribuir ou enviar por e-mail.
              </p>
              <p>
                Nós não temos nenhuma obrigação de monitorar suas informações ou informações a respeito de qualquer assunto postado por parceiros.
              </p>
            </section>
            
            <section className="border-l-[3px] border-[#0f2636] pl-5">
              <h2 className="text-lg font-bold text-black mb-3 uppercase">Alterações nos Termos de Uso</h2>
              <p className="mb-4">
                Nós poderemos modificar estes Termos de Uso a qualquer momento. Se isso acontecer, nós publicaremos os Termos de Uso revisado no site www.aktiwa.com.br e atualizaremos a data da "última atualização" no final deste documento.
              </p>
              <p className="mb-4">
                Caso você não concorde com os Termos de Uso revisados, cabe a você deixar de utilizar o site. Ao continuar a navegar pelo site e usar nossos produtos e serviços após a alteração dos Termos de Uso, você concordará com as novas condições.
              </p>
              <p>
                Caso você deseje exercer qualquer um de seus direitos ou tirar dúvidas sobre estes Termos de Uso, entre em contato com o encarregado de Proteção de Dados pelo e-mail contato@aktiwa.com.br. Para efetivarmos os seus direitos, podemos solicitar comprovação da sua identidade, como medida de segurança e prevenção à fraude.
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
