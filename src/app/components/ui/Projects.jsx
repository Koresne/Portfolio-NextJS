"use client"

import { PROJECTS } from '../data/data'
import Image from "next/image";

import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';


const Projects = () => {
  return (
    <div className="border-b border-neutral-900 pb-4">
        <h2 className="my-20 text-center text-4xl">Projekty</h2>
        <div data-aos="fade-down">
            {PROJECTS.map((project, index) => (
                <div key={index} className='mb-8 flex flex-wrap lg:justify-center'>
                    <div className="w-full lg:w-1/4">
                    <Image width={150} height={150} src={project.image} alt={project.title} className='mb-6 rounded' />
                    </div>
                    <div className="w-full max-w-xl lg:w-3/4">
                        <h6 className='mb-2 font-semibold'>{project.title}</h6>
                        <p className='mb-4 text-neutral-4 00'>{project.description}</p>
                        {project.technologies.map((tech, index) => (
                            <span key={index} className='mr-2 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-400'>{tech}</span>
                        
                        ))}
                    </div>
                </div>
            ))}
        </div>
    </div>
  );
};

export default Projects