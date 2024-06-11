"use client";

import React, { useEffect, useState } from 'react';
import { useTheme } from 'next-themes';
import { FiMoon } from "react-icons/fi";
import { FiSun } from "react-icons/fi";
import Link from 'next/link';
import Image from 'next/image';
import logoImg from '@/public/assets/holliday/waterfall.jpg';

export default function Header() {
    
    const { theme, setTheme } = useTheme();
    const [mounted, setMounted] = useState<boolean>(false);

    useEffect(() => {
        setMounted(true);
        return () => console.log("Clean-up mounted (header)");
    }, []);

    return (
        <header className='fixed z-10 w-full h-[120px] -top-[80px] 
            transition ease transform duration-300 hover:translate-y-20'>
            <div className='flex flex-row items-center justify-between w-[100%] h-[80px]
                bg-gradients dark:bg-gradients-dark border-b border-slate-200 dark:border-slate-700'>
                <div className='w-[128px] h-auto'>
                    <Image src={logoImg} width={500} height={500} alt="logo" className='object-fit' />
                </div>
                <nav className='w-3/5'>
                    <ul className='flex flex-row items-center justify-end'>
                        <li className='text-xl header-links mr-12'>
                            <Link href="/">Home</Link>
                        </li>
                        <li className='text-xl header-links mr-12'>
                            <Link href="/images/city">City</Link>
                        </li>
                        <li className='text-xl header-links mr-12'>
                            <Link href="/images/holliday">Hollidays</Link>
                        </li>

                        {mounted === true ? (
                            <span 
                                onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
                                className='w-auto h-auto flex flex-col items-center justify-center text-lg
                                    darkmode-icon-color transition duration-100 ease-in-out hover:scale-105 
                                    mr-10 p-2 rounded-full'
                            >
                                {theme === 'light' 
                                    ? <FiMoon size={26} />
                                    : <FiSun size={26} />
                                }
                            </span>
                        ) : null}
                    </ul>
                </nav>
            </div>
        </header>
    )
}
