import React from 'react';
import Link from 'next/link';
import { FaRegArrowAltCircleRight } from "react-icons/fa";

export default function CardImgId({children, cityImgId, familyImgToLink}: {
    children: React.ReactNode;
    cityImgId: number;
    familyImgToLink: string;
}) {
    return (
        <div className='flex flex-col justify-between w-full h-screen bg-gradient-to-br from-slate-50 
            from-10% to-slate-100 to-90% dark:bg-page-dark pb-4'>

            <h1 className='w-[300px] text-2xl font-bold bg-clip-text text-transparent text-gradients 
                dark:text-gradients-dark px-4 pt-4'>
                {familyImgToLink.toUpperCase()} image: {cityImgId}
            </h1>

            <div className='sm:w-[70%] md:w-[70%] lg:w-[60%] xl:w-[70%] h-auto 
                    border-none rounded-lg m-auto'>
                {children}
            </div>

            <div className={`flex flex-col items-center justify-center 
                ${familyImgToLink === "city" ? "w-[160px]" : "w-[200px]"} h-[40px] bottom-10 
                text-purplecolor dark:text-bluecolor 
                bg-purple-500/10 hover:bg-purple-500/20 active:bg-purple-500/30
                dark:bg-slate-900/30 dark:hover:bg-slate-900/50 dark:active:bg-slate-900/70 
                border-none ml-4 rounded-full`}>
                <Link href={`/images/${familyImgToLink}`} className='flex flex-row items-center'>
                    Back to {familyImgToLink}
                    <FaRegArrowAltCircleRight className="ml-2" size={18}/>
                </Link>
            </div>
        </div>
    )
}
