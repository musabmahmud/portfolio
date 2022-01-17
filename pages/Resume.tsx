import React from 'react';
import Bar from '../Components/Bar';
import { languages, tools } from '../data';
import {motion} from 'framer-motion';
import {fadeInUp} from './../animates';
import Link from 'next/link';
const resume = () => {

    return (
        <div className='p-4 overflow-y-scroll' style={{height: '70vh'}}>
            {/* education */}
            <h5 className='text-2xl font-bold uppercase mb-2'>Education</h5>
            <div className='grid gap-6 sm:grid-cols-2 mb-5'>
                <div>
                    <h5 className='text-lg font-bold'>1. B.Sc in Computer Science and Engineering</h5>
                    <p className='font-semibold'>Academic of Technology(2018-2022)</p>
                    <p className='pt-2'>I&apos;m completed a B.tech in <b>Computer Science and Engineering</b> from <b>City University</b></p>
                </div>
                <div>
                    <h5 className='text-lg font-bold'>2. Higher Secondary School Certificate (HSC)</h5>
                    <p className='font-semibold'>Academic of Technology(2015-2017)</p>
                    <p className='pt-2'>I&apos;m completed my HSC, <b>Science Background</b> from <b>Sheik Borhanudding College</b></p>
                </div>
            </div>
            <h5 className='text-2xl font-bold uppercase mb-2'>Experience</h5>
            <div className='grid gap-6 sm:grid-cols-2 mb-5'>
                <div>
                    <a href='//www.fiverr.com/musabmahmud' target="_blank" rel="noreferrer">
                        <h5 className='text-lg font-bold uppercase'>1. FrontEnd Developer</h5>
                        Fiverr (2020-continued)
                        <p className='pt-2'>
                            I&apos;m working as a web designer which is my passion.
                        </p>
                    </a>
                </div>
                <div>
                    <a href='//www.upwork.com/freelancers/~01e95241d6d90e6f0c' target="_blank" rel="noreferrer">
                        <h5 className='text-lg font-bold uppercase'>2. Full Stack Web Developer (MERN)</h5>
                        Fiverr (2020-continued)
                        <p className='pt-2'>
                            I&apos;m working as a Full Stack Web Developer.
                        </p>
                    </a>
                </div>
            </div>
            <h5 className='text-2xl font-bold uppercase mb-2'>Certified Courses</h5>
            <div className='grid gap-6 sm:grid-cols-3 mb-5'>
                <div>
                    <h5 className='text-lg font-bold'>Web Development</h5>
                    <p className='font-semibold'>Node, Express, React and Mongodb <br />(July, 2021 - Dec, 2021) from Programming Hero</p>
                </div>
                <div>
                    <h5 className='text-lg font-bold'>Web Application Development</h5>
                    <p className='font-semibold'>PHP AND LARAVEL <br />(Dec, 2020 – June, 2021) from Creative IT Institute</p>
                </div>
                <div>
                    <h5 className='text-lg font-bold'>Web Design and Development</h5>
                    <p className='font-semibold'>PHP AND LARAVEL <br />(May, 2018 - Nov, 2018) from SEIP (NIET)</p>
                </div>
            </div>

            {/* language and tools */}
            <div className='grid gap-6 sm:grid-cols-2'>
                <div>
                    <h5 className='my-3 text-2xl font-bold'>
                        Languages and Framework
                    </h5>
                    <div className='my-2'>
                    {languages.map((language) => (
                        <Bar data={language} key={language.id}/>
                    ))}
                    </div>
                </div>
                <div>
                    <h5 className='my-3 text-2xl font-bold'>
                        Tools and Software
                    </h5>
                    <div className='my-2'>
                    {tools.map((tool) => (
                        <Bar data={tool} key={tool.id}/>
                    ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default resume;