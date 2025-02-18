import Image from "next/image";
import logo from '../images/Logo-black.png'
import { FaLinkedin, FaGithub, FaTwitter, FaInstagram } from 'react-icons/fa';

const footer = () => {
    const date = new Date();
    
  return (
    <>
    <div className="flex flex-col p-32 justify-start">
      <h2 className="text-4xl">Kontakt</h2>
      <p>e-mail</p>
    </div>
                        <div className="flex justify-end border-b border-neutral-900 pb-4">
                            <h2 className="my-20 text-center text-4xs">Michał Zajączkowski &copy; {date.getFullYear()}</h2>
                                 <div className="m-8 flex items-center text-2xl gap-4">
                                    <FaLinkedin/>
                                    <FaGithub/>
                                    <FaInstagram/>
                                    <FaTwitter/>
                                </div>
                        <div className="flex flex-wrap">
                    </div>
        </div>
    </>
  )
}

export default footer