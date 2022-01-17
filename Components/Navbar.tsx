import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { FunctionComponent, useEffect, useState } from 'react';

const NavItem: FunctionComponent<{
    activeItem: string
    setActiveItem: Function
    name: string
    route: string
}> = ({ activeItem, setActiveItem, name, route }) => {
    return activeItem !== name ? (
        <Link href={route}>
            <a>
                <span
                    className='mx-2 cursor-pointer hover:border-b-4 hover:text-green hover:border-green'
                    onClick={() => setActiveItem(name)}>
                    {name}
                </span>
            </a>
        </Link>
    ) : null
}

const Navbar = () => {

    const [activeItem, setactiveItem] = useState('');

    const { pathname } = useRouter();

    useEffect(() => {
        if (pathname === '/') {
            setactiveItem('About');
        }
        if (pathname === '/About') {
            setactiveItem('About');
        }
        if (pathname === '/Projects') {
            setactiveItem('Projects');
        } if (pathname === '/Resume') {
            setactiveItem('Resume');
        }
    }, [])

    return (
        <div className='flex justify-between py-3 my-1'>
            <span className='text-xl font-bold border-b-4 md:text-2xl text-green border-green'>{activeItem}</span>
            <div className='text-base font-normal md:text-xl'>
                <NavItem activeItem={activeItem}
                    setActiveItem={setactiveItem}
                    name='About'
                    route='/' />
                <NavItem activeItem={activeItem}
                    setActiveItem={setactiveItem}
                    name='Projects'
                    route='/Projects' />
                <NavItem activeItem={activeItem}
                    setActiveItem={setactiveItem}
                    name='Resume'
                    route='/Resume' />
            </div>
        </div>
    );
};

export default Navbar;