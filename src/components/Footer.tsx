import React from 'react';
import { Link } from 'react-router-dom';

export function Footer() {
  return (
    <footer className="bg-black text-white py-12">
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col gap-3">
        
        <div className="flex items-center gap-2">
          <svg width="239" height="48" viewBox="0 0 239 48" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-[150px] md:w-[180px] h-auto">
            <path fillRule="evenodd" clipRule="evenodd" d="M36.9698 21.3215L29.806 31.7045L24.5624 39.3045L30.5763 33.1994L38.7925 24.8588L36.9698 21.3215Z" fill="#65AF1F"/>
            <path fillRule="evenodd" clipRule="evenodd" d="M38.7925 24.8588L30.5763 33.1994L24.5624 39.3045H33.7222L37.7183 47.0597H50.2323L38.7925 24.8588Z" fill="url(#paint0_linear_280_200)"/>
            <path fillRule="evenodd" clipRule="evenodd" d="M0 26.6232L7.84329 37.991L5.09227 41.9782L1.58628 47.0597H14.1003L19.7404 38.8851L27.6207 27.4636L34.7846 17.0806L41.9484 6.6976L46.5694 0L29.4344 6.6976L22.2705 17.0806L13.4834 29.8164L5.64012 18.4486L0 26.6232Z" fill="url(#paint1_linear_280_200)"/>
            <path fillRule="evenodd" clipRule="evenodd" d="M7.8433 37.991L14.1003 47.0597L5.09229 41.9782L7.8433 37.991Z" fill="#1A66B0"/>
            <path fillRule="evenodd" clipRule="evenodd" d="M219.26 17.2729H219.084L206.393 46.7072H213.443L215.951 40.8909H229.442L231.95 46.7072H239L226.134 17.2729H219.26ZM222.697 25.2447L226.935 35.0745H218.459L222.697 25.2447Z" fill="white"/>
            <path fillRule="evenodd" clipRule="evenodd" d="M169.732 46.7072H177.135H177.84L184.009 27.4956L190.178 46.7072H197.581L206.922 17.2729H199.519L193.282 36.9276L187.005 17.2729H181.013L174.383 38.0349L167.794 17.2729H160.391L169.732 46.7072Z" fill="white"/>
            <path fillRule="evenodd" clipRule="evenodd" d="M136.421 22.913H145.938V17.2729H136.421H129.194H119.853V22.913H129.194V46.7072H136.421V22.913Z" fill="white"/>
            <path fillRule="evenodd" clipRule="evenodd" d="M92.1808 17.2729V46.7072H99.4072V38.247L103.041 34.519L112.626 46.7072H120.91L107.626 29.8154L119.853 17.2729H112.121L99.5891 30.1291L99.4072 30.3156V29.8978V17.2729H92.1808Z" fill="white"/>
            <path fillRule="evenodd" clipRule="evenodd" d="M68.7391 17.2729L56.0488 46.7072H63.099L65.6066 40.8909H79.098L81.6056 46.7072H88.6558L75.9655 17.2729H75.7892H68.9153H68.7391ZM72.3523 25.2447L76.5903 35.0745H68.1143L72.3523 25.2447Z" fill="white"/>
            <path fillRule="evenodd" clipRule="evenodd" d="M149.463 46.7072V17.2729H156.69V46.7072H149.463Z" fill="white"/>
            <defs>
              <linearGradient id="paint0_linear_280_200" x1="25.1161" y1="0" x2="25.1161" y2="47.0597" gradientUnits="userSpaceOnUse">
                <stop offset="0.509615" stopColor="#7CD30B"/>
                <stop offset="1" stopColor="#C6FA00"/>
              </linearGradient>
              <linearGradient id="paint1_linear_280_200" x1="25.1161" y1="0" x2="25.1161" y2="47.0597" gradientUnits="userSpaceOnUse">
                <stop stopColor="#0AFCF5"/>
                <stop offset="1" stopColor="#0D88F1"/>
              </linearGradient>
            </defs>
          </svg>
        </div>

        <p className="text-xl md:text-2xl text-gray-300 max-w-xl font-light">
          Mais que contabilidade. Tecnologia e estratégia para o seu negócio crescer com segurança.
        </p>

        <div className="flex flex-col md:flex-row gap-6 md:gap-12 text-[#8ec63f] font-medium text-lg mt-2">
          <a href="mailto:suporte@aktiwa.com.br" className="flex items-center gap-3 hover:text-[#a2dc51] transition-colors">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <rect width="20" height="16" x="2" y="4" rx="2" />
              <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
            </svg>
            suporte@aktiwa.com.br
          </a>
          <a href="https://wa.me/5517996501530" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 hover:text-[#a2dc51] transition-colors">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
            </svg>
            17 99650-1530
          </a>
        </div>

        <div className="flex flex-wrap gap-6 text-sm text-gray-500 mt-4 uppercase tracking-wider font-semibold">
          <Link to="/aviso-privacidade" className="hover:text-gray-300 transition-colors">Aviso de Privacidade</Link>
          <Link to="/aviso-privacidade-whatsapp" className="hover:text-gray-300 transition-colors">Aviso de Privacidade WhatsApp</Link>
          <Link to="/termos-uso" className="hover:text-gray-300 transition-colors">Termos de Uso</Link>
        </div>
      </div>
    </footer>
  );
}
