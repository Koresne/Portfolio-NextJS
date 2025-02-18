"use client"

import { abouts } from '../data/data'; // Upewnij się, że ścieżka jest poprawna
import Image from "next/image";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

const FeatureCard = ({ title, description, icon }) => {
    return (
        <div className="feature-card p-6 w-full ">
            <div className="text-5xl mb-4 text-cyan-400 feature-icon  w-full flex justify-center">
                <Image className="rounded-full" src={icon} width={200} height={200} alt="ss" data-aos="fade-down" />
            </div>
            <div className="">
                <h3 className="text-2xl font-bold mb-2 text-center bg-gradient-to-r from-pink-300 via-slate-500 to-orange-500 bg-clip-text tracking-right text-transparent" data-aos="fade-down">{title}</h3>
                <p className="text-gray-300 text-center" data-aos="fade-down">{description}</p>
            </div>
        </div>
    );
}

const About = () => {
    useEffect(() => {
        AOS.init();
      }, []);
  return (
    <div className="border-b border-neutral-900 pb-4">
        <h2 className="my-20 text-center text-4xl">Osiągnięcia 
            <span className="text-neutral-500"> &e87d1 </span>
        </h2>
        <div className="flex flex-wrap">
            <div className="w-full lg:w-full lg:p-8">
                <div className="">
                    <div className="container mx-auto px-4 " >
                        <div className="flex justify-center " >
                            {abouts && abouts.length > 0 ? (
                                abouts.map((about, index) => (
                                    <FeatureCard
                                        key={index}
                                        title={about.title}
                                        description={about.description}
                                        icon={about.icon}
                                    />
                                ))
                            ) : (
                                <p>No features available.</p> // Komunikat, gdy brak funkcji
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div> 
  );
}

export default About;