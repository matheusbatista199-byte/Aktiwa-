/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { Home } from './pages/Home';
import { SimplesNacional } from './pages/SimplesNacional';
import { LucroPresumido } from './pages/LucroPresumido';
import { LucroReal } from './pages/LucroReal';
import { SistemaGestao } from './pages/SistemaGestao';
import { QuemSomos } from './pages/QuemSomos';

import { AvisoPrivacidade } from './pages/AvisoPrivacidade';
import { AvisoPrivacidadeWhatsApp } from './pages/AvisoPrivacidadeWhatsApp';
import { TermosUso } from './pages/TermosUso';

function ScrollToAnchor() {
  const { hash, pathname } = useLocation();

  useEffect(() => {
    if (hash) {
      // Need a small timeout to ensure the DOM is rendered before scrolling, 
      // especially when navigating from another page
      setTimeout(() => {
        const element = document.getElementById(hash.replace('#', ''));
        if (element) {
          // Adjust for header offset if needed, or just standard scrollIntoView
          const headerOffset = 100;
          const elementPosition = element.getBoundingClientRect().top;
          const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
  
          window.scrollTo({
            top: offsetPosition,
            behavior: "smooth"
          });
        }
      }, 100);
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, [hash, pathname]);

  return null;
}

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToAnchor />
      <div className="font-sans antialiased text-gray-900 bg-white min-h-screen flex flex-col">
        <Header />
        <div className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/simples-nacional" element={<SimplesNacional />} />
            <Route path="/lucro-presumido" element={<LucroPresumido />} />
            <Route path="/lucro-real" element={<LucroReal />} />
            <Route path="/sistema-gestao" element={<SistemaGestao />} />
            <Route path="/quem-somos" element={<QuemSomos />} />
            <Route path="/aviso-privacidade" element={<AvisoPrivacidade />} />
            <Route path="/aviso-privacidade-whatsapp" element={<AvisoPrivacidadeWhatsApp />} />
            <Route path="/termos-uso" element={<TermosUso />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </BrowserRouter>
  );
}
