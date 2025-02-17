"use client"

import {RiReactjsLine} from 'react-icons/ri';
import {TbBrandNextjs} from 'react-icons/tb';
import { DiGit } from "react-icons/di";
import { DiDatabase } from "react-icons/di";
import { DiPython } from "react-icons/di";
import { DiGithubBadge } from "react-icons/di";
import { DiVisualstudio } from "react-icons/di";
import { DiMysql } from "react-icons/di";
import { DiJsBadge } from "react-icons/di";



import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';


const Technologies = () => {
  useEffect(() => {
          AOS.init();
        }, []);
  return (
    <div className="border-b border-neutral-800 pb-24">
      <h2 className="my-20 text-center text-4xl"></h2>
      <div className="flex flex-wrap items-center justify-center gap-4">
          <div className="rounded-2xl border-4 border-neutral-800 p-4 " data-aos="fade-down">
              <RiReactjsLine className='text-7xl text-cyan-400'/>
          </div>
          <div className="rounded-2xl border-4 border-neutral-800 p-4" data-aos="fade-up">
              <TbBrandNextjs className='text-7xl text-white-400'/>
          </div>
          <div className="rounded-2xl border-4 border-neutral-800 p-4" data-aos="fade-right">
              <DiDatabase className='text-7xl text-red-400'/>
          </div>
          <div className="rounded-2xl border-4 border-neutral-800 p-4" data-aos="fade-left">
              <DiPython className='text-7xl text-green-400'/>
          </div>
          <div className="rounded-2xl border-4 border-neutral-800 p-4" data-aos="fade-up">
              <DiJsBadge className='text-7xl text-yellow-400'/>
          </div>
          <div className="rounded-2xl border-4 border-neutral-800 p-4" data-aos="fade-down">
              <DiGithubBadge className='text-7xl text-white-400'/>
          </div>
          <div className="rounded-2xl border-4 border-neutral-800 p-4" data-aos="fade-up">
              <DiMysql className='text-7xl text-orange-400'/>
          </div>
          <div className="rounded-2xl border-4 border-neutral-800 p-4" data-aos="fade-right">
              <DiVisualstudio className='text-7xl text-blue-400'/>
          </div>
      </div>
    </div>
  )
}

export default Technologies
