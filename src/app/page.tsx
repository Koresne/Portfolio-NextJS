"use client"

import Image from "next/image";

import Header from '../app/components/ui/Header';
import Hero from './components/ui/Hero';
import About from './components/ui/About';
import Technologies from './components/ui/Technologies'
import Experience from './components/ui/Experience'
import Footer from './components/ui/footer';
import Project from './components/ui/Projects';

import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

export function animation() {
  useEffect(() => {
    AOS.init();
  }, []);
}

export default function Home() {
  return (
    <div className="overflow-x-hidden antialiased">
      <div className="fixed top-0 -z-10 h-full w-full">
      <div className="absolute top-0 z-[-2] h-screen w-screen bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]">
      </div>
      </div>
      
          <div className="container mx-auto px-8">
            <Header />
            <Hero />
            <Technologies />
            <Experience />
            <Project />
            <About />
            
            <Footer />
          </div>
        </div>
  );
}
