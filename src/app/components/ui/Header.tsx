import Image from "next/image";
import Link from 'next/link';
import React from 'react';
import logo from '../images/Logo-black.png'

import { FaLinkedin, FaGithub, FaTwitter, FaInstagram } from 'react-icons/fa';

export default function Header() {
    return (
        <nav className="bg-black-900 mb-20 flex items-center justify-between py-6">
            <div className="flex flex-shrink-0 items-center">
                <Image className="rounded-full" src={logo} width={90} height={90} alt="logo"/>
            </div>
            <div className="m-8 flex items-center justify-center text-2xl gap-4">
                <FaLinkedin/>
                <FaGithub/>
                <FaInstagram/>
                <FaTwitter/>
            </div>
        </nav>
    );
}
