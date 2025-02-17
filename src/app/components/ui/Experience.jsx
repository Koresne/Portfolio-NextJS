"use client"
import { EXPERIENCES } from '../data/data.js';

import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

const Experience = () => {
    useEffect(() => {
        AOS.init();
      }, []);
    return (
      <>
        <div className="border-b border-neutral-900 pb-4 lg:mb-35" data-aos="fade-down">
          <h2 className="my-20 text-center text-4xl">Doświadczenie</h2>
          <div>
            {EXPERIENCES.map((experience, index) => (
              <div key={index} className="mb-8 flex flex-wrap lg:justify-center">
                <div className="w-full lg:w-1/4">
                  <p className='mb-2 text-sm text-neutral-400'>{experience.years}</p>
                </div>
                <div className="w-full max-w-xl lg:w-3/4">
                    <h6 className="mb-2 font-sembold">
                        {experience.position} - {" "}
                        <span className="text-sm text-purple-100">
                            {experience.company}
                        </span>
                    </h6>
                    <p className='mb-4 text-neutral-400'>{experience.description}</p>
                    <div>
                        {experience.technologies.map((tech, index) => (
                        <span className='text-center mr-2 mt-4 rounded bg-neutral-900 py-1 text-sm font-medium text-purple-400 px-2 ' key={index}> {tech} </span>
                    ))}
                    </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </>
    );
  };

export default Experience