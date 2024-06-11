import React from 'react';

export default function ImgBox({children}: {children: React.ReactNode}) {
  return (
    <div className='grid grid-cols-3 w-[90%] h-auto gap-4 bg-slate-50 border-none shadow-inset rounded-xl 
      m-auto p-4'>
        {children}
    </div>
  )
}
