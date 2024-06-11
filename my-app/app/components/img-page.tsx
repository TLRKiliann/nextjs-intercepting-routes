import React from 'react';
import Link from 'next/link';
import { FaRegArrowAltCircleRight } from "react-icons/fa";

export default function ImgPage({children}: {children: React.ReactNode}) {
  return (
    <div className='flex flex-col justify-center w-full h-screen bg-page dark:bg-page-dark pb-4'>
      {children}
      <div className='flex flex-col items-center justify-center w-[180px] h-[40px] bottom-10 
        text-purplecolor dark:text-bluecolor 
        bg-purple-500/10 hover:bg-purple-500/20 active:bg-purple-500/30
        dark:bg-slate-900/30 dark:hover:bg-slate-900/50 dark:active:bg-slate-900/70 
        border-none ml-4 rounded-full'>
        <Link href="/" className='flex flex-row items-center'>Back to Home 
          <FaRegArrowAltCircleRight className="ml-2" size={18}/>
        </Link>
      </div>
    </div>
  )
}
