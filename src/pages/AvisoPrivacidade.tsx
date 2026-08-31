import React from 'react';

export function AvisoPrivacidade() {
  return (
    <main className="w-full bg-[#f8f9fa] min-h-screen py-16 px-6">
      <div className="max-w-[1000px] mx-auto bg-white p-10 md:p-16 rounded-2xl shadow-sm">
        <h1 className="text-3xl md:text-5xl font-extrabold text-[#0f2636] mb-10 text-center uppercase">AVISO DE PRIVACIDADE</h1>
        
        <div className="text-gray-700 text-[15px] leading-relaxed space-y-6">
          <p>
            Nós, da AKTIWA, levamos a sério a sua privacidade e temos o compromisso de respeitá-la. Sendo assim, este Aviso de
            Privacidade tem o objetivo de esclarecer, de forma simples, transparente e objetiva, como se dá o tratamento das
            informações pessoais pela AKTIWA Serviços Contábeis - mas, caso ainda tenha dúvidas, nossos canais de atendimento
            indicados abaixo estão à sua disposição. Este Aviso de Privacidade descreve os dados pessoais que coletamos, as
            finalidades para as quais os coletamos, como eles são usados, armazenados, compartilhados ou seus direitos com relação a
            esses dados. Recomendamos a leitura atenta. Recomendamos que você conheça as nossas práticas como um todo, mas
            fizemos um resumo para você entender melhor como tudo isso funciona:
          </p>

          <ul className="list-disc pl-6 space-y-2">
            <li>Dado pessoal é o tipo de informação que permite identificar você, como nome, sobrenome, e-mail, telefone.</li>
            <li>Tratamento é qualquer operação realizada com os dados pessoais, desde a coleta, passando pelo acesso, utilização, até a eliminação do dado.</li>
            <li>Lei Geral de Proteção de Dados, a LGPD, é uma lei que veio para dizer o que pode e o que não pode ser feito com os seus dados pessoais.</li>
            <li>Os dados que você cadastra em nossa plataforma são tratados de forma segura.</li>
            <li>Você poderá tirar suas dúvidas e solicitar informações a qualquer momento através do e-mail suporte@aktiwa.com.br; Limitamos o tratamento dos dados para as suas devidas finalidades e em conformidade com a lei</li>
          </ul>

          <p className="font-bold text-black mt-8">
            Para facilitar seu acesso às informações deste Aviso, é só clicar no capítulo desejado ou descer a barra de rolagem:
          </p>

          <ol className="list-decimal pl-6 space-y-2 text-[#009fe3] underline decoration-1 underline-offset-2">
            <li><a href="#controlador">Quem é o Controlador dos dados pessoais.</a></li>
            <li><a href="#definicoes">Definições que você precisa saber para entender nosso Aviso de Privacidade.</a></li>
            <li><a href="#quando-quais">Em quais momentos ocorre a coleta de dados e quais dados são coletados.</a></li>
            <li><a href="#como-utilizamos">Como utilizamos seus dados pessoais.</a></li>
            <li><a href="#armazenamento">Qual o período de armazenamento das informações coletadas.</a></li>
            <li><a href="#compartilhamento">Compartilhamento de dados com terceiros e a finalidade.</a></li>
            <li><a href="#transferencia">Transferência internacional de dados.</a></li>
            <li><a href="#seguranca">Segurança dos dados</a></li>
            <li><a href="#direitos">Direitos dos titulares</a></li>
            <li><a href="#responsabilidades">Responsabilidades dos agentes que realizarão o tratamento</a></li>
            <li><a href="#alteracoes">Alterações no documento</a></li>
            <li><a href="#canal">Canal de comunicação</a></li>
            <li><a href="#data">Data de atualização do documento</a></li>
          </ol>

          <div className="mt-12 space-y-10">
            <section id="controlador" className="border-l-[3px] border-[#0f2636] pl-5">
              <h2 className="text-lg font-bold text-black mb-3 uppercase">Dados do Controlador</h2>
              <p>
                Inicialmente precisamos nos apresentar: somos a AKTIWA Serviços Contábeis, com sua sede na rua Pirassununga nº12 
                Catanduva - SP, conforme a definição trazida pela Lei Geral de Proteção de Dados (Lei nº 13.709/2018 - LGPD), na maior 
                parte do tempo seremos o Controlador dos seus dados pessoais, ou seja, a empresa responsável por tomar as decisões 
                sobre o tratamento dos seus dados pessoais e por protegê-los.
              </p>
            </section>

            <section id="definicoes" className="border-l-[3px] border-[#0f2636] pl-5">
              <h2 className="text-lg font-bold text-black mb-3 uppercase">Definições</h2>
              <p className="mb-4">
                Para os fins deste documento, devem ser consideradas as seguintes definições e descrições para seu melhor entendimento:
              </p>
              <p className="mb-4">
                Toda vez que houver menção aos termos "AKTIWA", "empresa", "nós" ou "nossos", estamos nos referindo à AKTIWA Serviços Contábeis; da mesma forma, toda vez que houver menção aos termos "você", "seu(s)", "sua(s)" usuário(s), estamos nos referindo a Você;
              </p>
              <ul className="list-disc pl-5 space-y-2">
                <li><strong>Plataforma:</strong> é o nosso site, um local para a troca de informações ou serviços;</li>
                <li><strong>Dado pessoal:</strong> informação relacionada a pessoa natural identificada ou identificável;</li>
                <li><strong>Dado pessoal sensível:</strong> dado pessoal sobre origem racial ou étnica, convicção religiosa, opinião política, filiação a sindicato ou a organização de caráter religioso, filosófico ou político, dado referente à saúde ou à vida sexual, dado genético ou biométrico, quando vinculado a uma pessoa natural;</li>
                <li><strong>Banco de dados:</strong> conjunto estruturado de dados pessoais, estabelecido em um ou em vários locais, em suporte eletrônico ou físico;</li>
                <li><strong>Titular:</strong> pessoa natural a quem se referem os dados pessoais que são objeto de tratamento;</li>
                <li><strong>Usuário(s):</strong> toda pessoa natural que utilizar os serviços, sendo titular dos dados ou não;</li>
                <li><strong>Controlador:</strong> pessoa natural ou jurídica, de direito público ou privado, a quem competem as decisões referentes ao tratamento de dados pessoais;</li>
                <li><strong>Operador:</strong> pessoa natural ou jurídica, de direito público ou privado, que realiza o tratamento de dados pessoais em nome do controlador;</li>
                <li><strong>Encarregado:</strong> pessoa indicada pelo controlador e operador para atuar como canal de comunicação entre o controlador, os titulares dos dados e a Autoridade Nacional de Proteção de Dados (ANPD);</li>
                <li><strong>Agentes de Tratamento:</strong> o controlador e o operador;</li>
                <li><strong>Tratamento:</strong> toda operação realizada com dados pessoais, como as que se referem a coleta, produção, recepção, classificação, utilização, acesso, reprodução, transmissão, distribuição, processamento, arquivamento, armazenamento, eliminação, avaliação ou controle da informação, modificação, comunicação, transferência, difusão ou extração;</li>
                <li><strong>Consentimento:</strong> manifestação livre, informada e inequívoca pela qual o titular concorda com o tratamento de seus dados pessoais para uma finalidade determinada;</li>
                <li><strong>Eliminação:</strong> exclusão de dado ou de conjunto de dados armazenados em banco de dados, independentemente do procedimento empregado;</li>
                <li><strong>Autoridade Nacional:</strong> órgão da administração pública responsável por zelar, implementar e fiscalizar o cumprimento da Lei Geral de Proteção de Dados em todo o território nacional.</li>
              </ul>
            </section>

            <section id="quando-quais" className="border-l-[3px] border-[#0f2636] pl-5">
              <h2 className="text-lg font-bold text-black mb-3 uppercase">Quando, quais os dados pessoais coletados e por quê?</h2>
              <p className="mb-4">
                Ao solicitar contato ou um serviço nós poderemos coletar informações importantes sobre você. Abaixo detalhamos quais são essas informações:
              </p>
              <p className="mb-4">
                Para você enviar à AKTIWA Serviços Contábeis uma mensagem, solicitamos seu nome e contato através de e-mail e telefone.
              </p>
              <p className="mb-4">
                Para que você receba mais informações sobre nossos serviços coletamos o seu email.
              </p>
              <p className="mb-4">
                Para você ter acesso ao nosso E-book, precisamos do seu nome, e-mail e telefone.
              </p>
              <p className="mb-4">
                E para emissão do seu certificado digital você precisa informar seu CPF, conforme previsto no nosso Termo de Uso.
              </p>
              <p>
                A finalidade da coleta de dados é a metrificação dos acessos do site. É importante informá-lo de que quando você acessa nossa plataforma, a Aktiwa em conjunto com empresas contratadas para acompanhar e mapear a utilização do site por seus clientes poderão colocar "cookies" em seu computador, que são pequenos arquivos de dados. Você já deve ter lido sobre eles na Política de Cookies, mas caso não tenha lido sugerimos que clique neste link para que você possa entender melhor sobre eles e gerencie suas preferências. Isso é muito importante para você!
              </p>
            </section>

            <section id="como-utilizamos" className="border-l-[3px] border-[#0f2636] pl-5">
              <h2 className="text-lg font-bold text-black mb-3 uppercase">O que é feito com essas informações</h2>
              <p className="mb-4">
                A principal finalidade da coleta e armazenamento das informações é para oferecer a você uma experiência eficiente, segura e para que seja possível viabilizar nossa relação comercial, cumprir algumas obrigações contratuais e legais.
              </p>
              <p className="mb-4">
                Envie uma mensagem para nós: usamos seus dados pessoais para responder aos seus questionamentos, reclamações e solicitações. Isso requer os seus dados pessoais de cadastro e contato. Como entendemos que esses dados são necessários para procedimentos preliminares a contrato do qual você é (será) parte e a seu pedido, já que você solicitou nosso contato – e agradecemos isso – esse tratamento é amparado no art. 7º, V da LGPD.
              </p>
              <p className="mb-4">
                Saiba mais sobre: seu e-mail é utilizado para enviarmos mais informações sobre o serviço que você optou e pensamos que aqui você deu o seu consentimento para ter esse conhecimento, com disposição prevista no inciso I do art. 7º da LGPD.
              </p>
              <p className="mb-4">
                Baixar E-book: tratamos seus dados pessoais de contato para encaminhar o Ebook que você pediu (aqui também entendemos que você deu o consentimento para usarmos os seus dados, conforme art. 7º, I da LGPD).
              </p>
              <p>
                Preciso de certificado digital: seu CPF é tratado para emissão do certificado digital como você nos contratou e, por isso, esse tratamento é com base no artigo 7º, V da LGPD
              </p>
            </section>
            
            <section className="border-l-[3px] border-[#0f2636] pl-5">
              <h2 className="text-lg font-bold text-black mb-3 uppercase">O que é feito com essas informações</h2>
              <p>Seus dados ficam armazenados numa pasta segura no nosso e-mail.</p>
            </section>

            <section id="armazenamento" className="border-l-[3px] border-[#0f2636] pl-5">
              <h2 className="text-lg font-bold text-black mb-3 uppercase">Qual o tempo de armazenamento</h2>
              <p className="mb-4">
                Nós armazenamos as suas informações durante o período necessário para o cumprimento das finalidades para as quais foram coletadas, respeitando o período e retenção de dados determinado pela legislação aplicável, ou quando você solicitar a eliminação de seus dados pessoais através do nosso atendimento no e-mail suporte@aktiwa.com.br.
              </p>
              <p>
                Caso você solicite a exclusão dos seus dados pessoais fornecidos à Aktiwa, as informações poderão ser conservadas para cumprimento de obrigação legal ou regulatória, para o exercício regular de nossos direitos ou transferência a terceiro. Mas não se preocupe: isso somente acontecerá respeitados os requisitos e hipóteses de tratamento de dados previstos na LGPD.
              </p>
            </section>

            <section id="compartilhamento" className="border-l-[3px] border-[#0f2636] pl-5">
              <h2 className="text-lg font-bold text-black mb-3 uppercase">Compartilhamento de dados pessoais</h2>
              <p>
                Poderemos compartilhar seus dados com terceiros para viabilizar a prestação do serviço, podendo ser compartilhados com sites do governo, órgãos públicos etc.
              </p>
            </section>

            <section id="seguranca" className="border-l-[3px] border-[#0f2636] pl-5">
              <h2 className="text-lg font-bold text-black mb-3 uppercase">Como protegemos seus dados pessoais</h2>
              <p>
                Levamos muito a sério a proteção dos seus dados pessoais, por isso adotamos medidas de segurança, técnica e administrativas para proteger os seus dados pessoais de acesso não autorizado e de situações acidentais ou ilícitas. Temos uma equipe altamente qualificada e responsável. Utilizamos os princípios estipulados por lei, respeitando sua privacidade e protegendo seus dados pessoais em nossos processos internos como um todo.
              </p>
            </section>

            <section id="direitos" className="border-l-[3px] border-[#0f2636] pl-5">
              <h2 className="text-lg font-bold text-black mb-3 uppercase">Quais os seus direitos</h2>
              <p className="mb-4">
                LGPD concede a você uma série de direitos em relação aos seus dados pessoais e nós respeitamos muito isso. Desta forma, você poderá exercê-los, de forma gratuita, pelo nosso canal de atendimento especifico (e-mail: suporte@aktiwa.com.br) destinado a esse assunto, que também está disponível na aba "Contato" na página inicial do site.
              </p>
              <p className="mb-4">Citamos, abaixo, os direitos de titular que você pode nos solicitar:</p>
              <ul className="list-disc pl-5 space-y-2">
                <li>Confirmação da existência de tratamento dos seus dados pessoais.</li>
                <li>Solicitar acesso aos dados tratados.</li>
                <li>Corrigir dados incompletos, inexatos ou desatualizados.</li>
                <li>Ter os dados não essenciais anonimizados, bloqueados ou eliminados</li>
                <li>Saber com quais parceiros compartilhamos os seus dados.</li>
                <li>Portabilidade dos dados a outro fornecedor de serviço ou produto, mediante requisição expressa, de acordo com regulamentação da autoridade nacional, não devendo comprometer nossos segredos comerciais protegidos por lei.</li>
              </ul>
            </section>

            <section id="responsabilidades" className="border-l-[3px] border-[#0f2636] pl-5">
              <h2 className="text-lg font-bold text-black mb-3 uppercase">Responsabilidades</h2>
              <p className="mb-4">
                As responsabilidades dos agentes de tratamento, controlador e operador, estão listadas nos artigos 42 a 45 da LGPD. Para que você não tenha que pesquisar a lei, nós vamos deixar esses artigos aqui embaixo para facilitar para você:
              </p>
              <p className="mb-4">
                Art. 42. O controlador ou o operador que, em razão do exercício de atividade de tratamento de dados pessoais, causar a outrem dano patrimonial, moral, QUAIS OS SEUS DIREITOS RESPONSABILIDADES QUAIS OS SEUS DIREITOS individual ou coletivo, em violação à legislação de proteção de dados pessoais, é obrigado a repará-lo.
              </p>
              <p className="mb-4">§ 1º A fim de assegurar a efetiva indenização ao titular dos dados:</p>
              <p className="mb-4">
                I - o operador responde solidariamente pelos danos causados pelo tratamento quando descumprir as obrigações da legislação de proteção de dados ou quando não tiver seguido as instruções lícitas do controlador, hipótese em que o operador se equipara ao controlador, salvo nos casos de exclusão previstos no art. 43 desta Lei;
              </p>
              <p className="mb-4">
                II - Os controladores que estiverem diretamente envolvidos no tratamento do qual decorrerem danos ao titular dos dados respondem solidariamente, salvo nos casos de exclusão previstos no art. 43 desta Lei.
              </p>
              <p className="mb-4">
                § 2º O juiz, no processo civil, poderá inverter o ônus da prova a favor do titular dos dados quando, a seu juízo, for verossímil a alegação, houver hipossuficiência para fins de produção de prova ou quando a produção de prova pelo titular resultar-lhe excessivamente onerosa.
              </p>
              <p className="mb-4">
                § 3º As ações de reparação por danos coletivos que tenham por objeto a responsabilização nos termos do caput deste artigo podem ser exercidas coletivamente em juízo, observado o disposto na legislação pertinente.
              </p>
              <p className="mb-4">
                § 4º Aquele que reparar o dano ao titular tem direito de regresso contra os demais responsáveis, na medida de sua participação no evento danoso.
              </p>
              <p className="mb-4">Art. 43. Os agentes de tratamento só não serão responsabilizados quando provarem:</p>
              <p className="mb-4">I - Que não realizaram o tratamento de dados pessoais que lhes é atribuído;</p>
              <p className="mb-4">II - Que, embora tenham realizado o tratamento de dados pessoais que lhe é atribuído, não houve violação à legislação de proteção de dados;</p>
              <p className="mb-4">III - Ou que o dano é decorrente de culpa exclusiva do titular dos dados ou de terceiros.</p>
              <p className="mb-4">
                Art. 44. O tratamento de dados pessoais será irregular quando deixar de observar a legislação ou quando não fornecer a segurança que o titular dele pode esperar, consideradas as circunstâncias relevantes, entre as quais:
              </p>
              <p className="mb-4">I - O modo pelo qual é realizado;</p>
              <p className="mb-4">II - O resultado e os riscos que razoavelmente dele se esperam;</p>
              <p className="mb-4">
                III - as técnicas de tratamento de dados pessoais disponíveis à época em que foi realizado. Parágrafo único. Responde pelos danos decorrentes da violação da segurança dos dados o controlador ou o operador que, ao deixar de adotar as medidas de segurança previstas no art. 46 desta Lei, der causa ao dano.
              </p>
              <p>
                Art. 45. As hipóteses de violação do direito do titular no âmbito das relações de consumo permanecem sujeitas às regras de responsabilidade previstas na legislação pertinente.
              </p>
            </section>

            <section id="alteracoes" className="border-l-[3px] border-[#0f2636] pl-5">
              <h2 className="text-lg font-bold text-black mb-3 uppercase">Alterações a este aviso de privacidade</h2>
              <p>
                Nós poderemos modificar este Aviso de Privacidade a qualquer momento. Se isso acontecer, nós publicaremos o Aviso de Privacidade revisado no site www.aktiwa.com.br e atualizaremos a data da "última atualização" no final deste Aviso de Privacidade.
              </p>
            </section>

            <section id="canal" className="border-l-[3px] border-[#0f2636] pl-5">
              <h2 className="text-lg font-bold text-black mb-3 uppercase">Identificação do Encarregado</h2>
              <p>
                Olívio Durval dos Santos Neto é o encarregado pelo tratamento de dados pessoais. Caso você deseje exercer qualquer um de seus direitos ou tirar dúvidas sobre este Aviso de Privacidade, entre em contato com a nossa Encarregada pelo ALTERAÇÕES A ESTE AVISO DE PRIVACIDADE IDENTIFICAÇÃO DO ENCARREGADO e-mail suporte@aktiwa.com.br com o assunto LGPD. Para efetivarmos os seus direitos, podemos solicitar comprovação da sua identidade, como medida de segurança e prevenção à fraude.
              </p>
            </section>

            <section id="data" className="border-l-[3px] border-[#0f2636] pl-5">
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
