"use client"

import { HERO_SECTION } from '../data/data.js';
import Image from "next/image";
import { TextGenerateEffect } from "../ui/text-generate-effect";
import HeroPic from '../images/Hero.jpg';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
import Link from 'next/link';

export function animation() {
  useEffect(() => {
    AOS.init();
  }, []);
}

export function TextGenerateEffectDemo() {
  return <TextGenerateEffect words={HERO_SECTION[0].Description} />;
}

export default function Hero() {
  useEffect(() => {
    AOS.init();
  }, []);

 return (
  <>
    <div className="border-b border-neutral-900 pb-4 lg:mb-35">
      <div className="flex flex-wrap">
        <div className="w-full lg:w-1/2">
          <div className="flex flex-col items-center lg:items-start">
            <h1 className="pb-24 text-6xl font-thin tracking-tight lg:mt-12" data-aos="fade-left">{HERO_SECTION[0].Name}</h1>
            <span className="bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-4xl tracking-right text-transparent">{HERO_SECTION[0].Alt}</span>
            <TextGenerateEffectDemo className='my-2 max-w-xl py-6 font-light tracking-tighter text-center' />
            <div className="relative p-0.5 inline-flex items-center justify-center font-bold overflow-hidden group rounded-md top-20 mb-8"> {/* Dodano mb-8 */}
              <span className="w-full h-full bg-gradient-to-br from-[#ff8a05] via-[#ff5478] to-[#ff00c6] group-hover:from-[#ff00c6] group-hover:via-[#ff5478] group-hover:to-[#ff8a05] absolute"></span>
              <div className="relative px-6 py-3 transition-all ease-out bg-gray-900 rounded-md group-hover:bg-opacity-0 duration-400">
                   <a 
                    href="https://www.linkedin.com/in/michał-zajączkowski-759b1a308/" 
                    className="relative text-white " 
                    target="_blank" 
                    rel="noopener noreferrer"
                    aria-label="Visit Michał Zajączkowski's LinkedIn profile"
                  >
                  Dowiedz się więcej!
                  </a>
                </div>
            </div>
          </div>
        </div>
        <div className="w-full lg:w-1/2 lg:p-12 p-20">
          <div className="flex justify-center flex-col w-full items-center" data-aos="fade-down">
            <Image src={HeroPic} width={500} height={500} alt='s' />
          </div>
        </div>
      </div>
    </div>
  </>
);
}