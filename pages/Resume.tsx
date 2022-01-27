import React from 'react';
import Bar from './../components/Bar';
import { languages, tools } from '../data';
import {motion} from 'framer-motion';
import {fadeInUp} from './../animates';
import Link from 'next/link';
const resume = () => {

    return (
        <div className='px-4 overflow-y-scroll' style={{height: '75vh'}}>
            {/* Certified */}
            
            {/* Education */}
            <h5 className='my-2 text-lg font-semibold uppercase'>Education &amp; Certification</h5>
            <div className='grid gap-3 sm:grid-cols-2 px-5'>
                <div className='p-4 bg-gray-100 rounded'>
                    <h5 className='font-semibold text-green-500'>B.Sc in Computer Science and Engineering</h5>
                    <p>Academic of Technology(2018-2022)</p>
                    <p className='pt-2'>I&apos;m completed a B.tech in <b>Computer Science &amp; Engineering</b> from <span className='text-green-500'>City University</span></p>
                </div>
                <div className='p-4 bg-gray-100 rounded'>
                    <h5 className='font-semibold text-green-500'>Web Development</h5>
                    <p><span className='font-semibold'>React, React, Firebase, Mongodb, Tailwind, Node, Express</span> <br />(July, 2021 - Dec, 2021) from <span className='text-green-500'>Programming Hero</span></p>
                </div>
                <div className='p-4 bg-gray-100 rounded'>
                    <h5 className='font-semibold text-green-500'>Web Application Development</h5>
                    <p><span className='font-semibold'>PHP AND LARAVEL</span> <br />(Dec, 2020 – June, 2021) from <span className='text-green-500'>Creative IT Institute</span></p>
                </div>
                <div className='p-4 bg-gray-100 rounded'>
                    <h5 className='font-bold text-green-500'>Web Design and Development</h5>
                    <p ><span className='font-semibold'>Html, CSS, JS, JQUERY, Bootstrap, PHP and Wordpress</span> <br />(May, 2018 - Nov, 2018) from <span className='text-green-500'>SEIP(NIET)</span></p>
                </div>
            </div>
            <h5 className='my-2 text-lg font-semibold uppercase'>Experience</h5>
            <div className='grid gap-3 sm:grid-cols-2 px-5'>
                <div className='p-4 bg-gray-100 rounded'>
                    <a href='//www.fiverr.com/musabmahmud' target="_blank" rel="noreferrer">
                        <h5 className='font-semibold uppercase'>1. Frontend Developer</h5>
                        <span className='font-semibold text-green-500'>Fiverr (2021-continued)</span>
                        <p>
                            I&apos;m working as a FrontEnd Developer which is my passion (Freelancing).
                        </p>
                    </a>
                </div>
                <div className='p-4 bg-gray-100 rounded'>
                    <a href='//www.upwork.com/freelancers/~01e95241d6d90e6f0c' target="_blank" rel="noreferrer">
                        <h5 className='font-semibold uppercase'>2. Full Stack Web Developer (MERN)</h5>
                        <span className='font-semibold text-green-500'>Upwork (2021-continued)</span>
                        <p>
                            I&apos;m working as a Full Stack Web Developer (Freelancing).
                        </p>
                    </a>
                </div>
            </div>

            {/* language*/}
  
            <h5 className='my-2 text-lg font-bold'>
                Languages and Framework
            </h5>
            <div className='grid gap-y-3 gap-x-5 sm:grid-cols-2'>
            {languages.map((language) => (
                <Bar data={language} key={language.id}/>
            ))}
            </div>
            
            {/* tools */}
            <h5 className='my-2 text-lg font-bold'>
                Tools and Software
            </h5>
            <div className='grid gap-y-3 gap-x-5 sm:grid-cols-2'>
            {tools.map((tool) => (
                <Bar data={tool} key={tool.id}/>
            ))}
            </div>
        </div>
    );
};

export default resume;