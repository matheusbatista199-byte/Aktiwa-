import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

export function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  return (
    <header className="w-full bg-white border-b border-gray-100 py-4 px-6 md:px-12 flex items-center justify-between sticky top-0 z-50">
      <div className="flex items-center justify-between w-full md:w-auto">
        <Link to="/">
          <svg width="239" height="48" viewBox="0 0 239 48" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-[150px] md:w-[180px] h-auto">
            <path fillRule="evenodd" clipRule="evenodd" d="M36.9698 21.3215L29.806 31.7045L24.5624 39.3045L30.5763 33.1994L38.7925 24.8588L36.9698 21.3215Z" fill="#65AF1F"/>
            <path fillRule="evenodd" clipRule="evenodd" d="M38.7925 24.8588L30.5763 33.1994L24.5624 39.3045H33.7222L37.7183 47.0597H50.2323L38.7925 24.8588Z" fill="url(#paint0_linear_280_200)"/>
            <path fillRule="evenodd" clipRule="evenodd" d="M0 26.6232L7.84329 37.991L5.09227 41.9782L1.58628 47.0597H14.1003L19.7404 38.8851L27.6207 27.4636L34.7846 17.0806L41.9484 6.6976L46.5694 0L29.4344 6.6976L22.2705 17.0806L13.4834 29.8164L5.64012 18.4486L0 26.6232Z" fill="url(#paint1_linear_280_200)"/>
            <path fillRule="evenodd" clipRule="evenodd" d="M7.8433 37.991L14.1003 47.0597L5.09229 41.9782L7.8433 37.991Z" fill="#1A66B0"/>
            <path fillRule="evenodd" clipRule="evenodd" d="M219.26 17.2729H219.084L206.393 46.7072H213.443L215.951 40.8909H229.442L231.95 46.7072H239L226.134 17.2729H219.26ZM222.697 25.2447L226.935 35.0745H218.459L222.697 25.2447Z" fill="#122951"/>
            <path fillRule="evenodd" clipRule="evenodd" d="M169.732 46.7072H177.135H177.84L184.009 27.4956L190.178 46.7072H197.581L206.922 17.2729H199.519L193.282 36.9276L187.005 17.2729H181.013L174.383 38.0349L167.794 17.2729H160.391L169.732 46.7072Z" fill="#122951"/>
            <path fillRule="evenodd" clipRule="evenodd" d="M136.421 22.913H145.938V17.2729H136.421H129.194H119.853V22.913H129.194V46.7072H136.421V22.913Z" fill="#122951"/>
            <path fillRule="evenodd" clipRule="evenodd" d="M92.1808 17.2729V46.7072H99.4072V38.247L103.041 34.519L112.626 46.7072H120.91L107.626 29.8154L119.853 17.2729H112.121L99.5891 30.1291L99.4072 30.3156V29.8978V17.2729H92.1808Z" fill="#122951"/>
            <path fillRule="evenodd" clipRule="evenodd" d="M68.7391 17.2729L56.0488 46.7072H63.099L65.6066 40.8909H79.098L81.6056 46.7072H88.6558L75.9655 17.2729H75.7892H68.9153H68.7391ZM72.3523 25.2447L76.5903 35.0745H68.1143L72.3523 25.2447Z" fill="#122951"/>
            <path fillRule="evenodd" clipRule="evenodd" d="M149.463 46.7072V17.2729H156.69V46.7072H149.463Z" fill="#122951"/>
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
        </Link>
        <button 
          className="md:hidden text-gray-700 hover:text-[#009fe3]"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle mobile menu"
        >
          {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>
      
      <nav className="hidden md:flex items-center gap-8 text-[15px] font-medium text-gray-700">
        <div className="relative group">
          <button className="hover:text-[#009fe3] transition-colors py-6 cursor-pointer font-medium flex items-center gap-1">
            Especialidades
          </button>
          <div className="absolute top-[80%] -left-6 w-[280px] bg-white border border-[#009fe3] rounded-2xl shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:top-full group-hover:visible transition-all duration-200 flex flex-col z-50 py-2">
            <Link to="/simples-nacional" className="px-6 py-4 text-[#009fe3] hover:bg-[#eaf5fc] hover:font-bold transition-all">Simples Nacional</Link>
            <Link to="/lucro-presumido" className="px-6 py-4 text-[#009fe3] hover:bg-[#eaf5fc] hover:font-bold transition-all">Lucro Presumido</Link>
            <Link to="/lucro-real" className="px-6 py-4 text-[#009fe3] hover:bg-[#eaf5fc] hover:font-bold transition-all">Lucro Real</Link>
            <Link to="/sistema-gestao" className="px-6 py-4 text-[#009fe3] hover:bg-[#eaf5fc] hover:font-bold transition-all">Sistema de gestão integrado</Link>
          </div>
        </div>
        <Link to="/#planos" className="hover:text-[#009fe3] transition-colors py-6">Planos</Link>
        <Link to="/quem-somos" className="hover:text-[#009fe3] transition-colors py-6">Quem somos</Link>
      </nav>

      {/* Mobile Menu */}
      <div 
        className={`absolute top-full left-0 w-full bg-white shadow-lg md:hidden flex flex-col z-50 transition-all duration-300 ease-in-out overflow-hidden origin-top ${
          isMobileMenuOpen 
            ? 'max-h-[500px] opacity-100 border-b border-gray-100' 
            : 'max-h-0 opacity-0 border-transparent'
        }`}
      >
        <Link 
          to="/simples-nacional" 
          className="px-6 py-4 text-gray-700 hover:text-[#009fe3] hover:bg-gray-50 border-b border-gray-50"
          onClick={() => setIsMobileMenuOpen(false)}
        >
          Simples Nacional
        </Link>
        <Link 
          to="/lucro-presumido" 
          className="px-6 py-4 text-gray-700 hover:text-[#009fe3] hover:bg-gray-50 border-b border-gray-50"
          onClick={() => setIsMobileMenuOpen(false)}
        >
          Lucro Presumido
        </Link>
        <Link 
          to="/lucro-real" 
          className="px-6 py-4 text-gray-700 hover:text-[#009fe3] hover:bg-gray-50 border-b border-gray-50"
          onClick={() => setIsMobileMenuOpen(false)}
        >
          Lucro Real
        </Link>
        <Link 
          to="/sistema-gestao" 
          className="px-6 py-4 text-gray-700 hover:text-[#009fe3] hover:bg-gray-50 border-b border-gray-50"
          onClick={() => setIsMobileMenuOpen(false)}
        >
          Sistema de gestão integrado
        </Link>
        <Link 
          to="/#planos" 
          className="px-6 py-4 text-gray-700 hover:text-[#009fe3] hover:bg-gray-50 border-b border-gray-50"
          onClick={() => setIsMobileMenuOpen(false)}
        >
          Planos
        </Link>
        <Link 
          to="/quem-somos" 
          className="px-6 py-4 text-gray-700 hover:text-[#009fe3] hover:bg-gray-50"
          onClick={() => setIsMobileMenuOpen(false)}
        >
          Quem somos
        </Link>
      </div>
    </header>
  );
}
