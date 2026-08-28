import React from 'react';
import { Hero } from '../components/Hero';
import { Solutions } from '../components/Solutions';
import { Pricing } from '../components/Pricing';
import { Benefits } from '../components/Benefits';

export function Home() {
  return (
    <main>
      <Hero />
      <Solutions />
      <Pricing />
      <Benefits />
    </main>
  );
}
