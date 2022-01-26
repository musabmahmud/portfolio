import React from 'react';
import {AiOutlineDownload,AiFillGithub,AiOutlineWhatsApp,AiFillLinkedin} from "react-icons/ai";
import {ImLocation2,ImEnvelop} from "react-icons/im";
import {SiFiverr,SiUpwork} from "react-icons/si";
import {FiPhoneCall} from "react-icons/fi";
import Image from 'next/image';
import image_path from './../public/picture.jpg';
const Sidebar = () => {
    return (
        <div>
            <div className='p-1 mx-auto mt-3 bg-green-500 rounded-full'>
                <Image
                    src={image_path}
                    alt='MD MUSAB MAHMUD | FULL STACK WEB DEVELOPER' 
                    className="rounded-full cursor-pointer"
                    width={300}
                    height={300}
                    priority
                    layout='responsive'
                />
            </div>
            <h3 className='my-4 text-3xl font-bold tracking-wider font-monospace'>
                <span className='text-green-500'>Musab</span> Mahmud
            </h3>
            <p className='p-2 my-3 bg-gray-200 rounded-full'>MERN STACK DEVELOPER</p>
            <a className='flex items-center justify-center p-2 my-3 bg-gray-200 rounded-full' 
            href='./assets/musabmahmud.pdf'
            download="musabmahmud.pdf"><AiOutlineDownload className='text-green-500'/> RESUME</a>
            {/* Social Icons*/}
            <div className='flex items-center justify-around w-9/12 mx-auto my-5 text-center text-green-500 md:w-full'>
                <a href="//">
                    <AiOutlineWhatsApp className="w-8 h-8"/>
                </a>
                <a href="//">
                    <SiFiverr className="w-8 h-8"/>
                </a>
                <a href="//">
                    <SiUpwork className="w-8 h-8"/>
                </a>
                <a href="//">
                    <AiFillGithub className="w-8 h-8"/>
                </a>
                <a href="//">
                    <AiFillLinkedin className="w-8 h-8"/>
                </a>
            </div>
            <div className='px-2 py-5 my-5 bg-gray-200' style={{overflow: 'hidden',margin: "0 -1rem"}}>
                <div className='flex items-center justify-center my-2 space-x-1'>
                    <ImLocation2 className='text-green-500'/><span>Dhaka, Bangladesh</span>
                </div>
                <div className='flex items-center justify-center my-2 space-x-1'>
                    <ImEnvelop className='text-green-500'/><span>md.musabmahmud100@gmail.com</span>
                </div>
                <div className='flex items-center justify-center my-2 space-x-1 cursor-pointer' onClick={() => window.open('tel:+8801309633888')}>
                    <FiPhoneCall className='text-green-500'/><span>+88 - 01309633888</span>
                </div>
            </div>
                <button className='w-8/12 px-4 py-3 mt-4 mb-2 text-white rounded-full bg-gradient-to-bl from-green-500 to-blue-500' onClick={() => window.open('mailto:md.musabmahmud100@gmail.com')}>Email Me</button>
        </div>
    );
};
export default Sidebar;