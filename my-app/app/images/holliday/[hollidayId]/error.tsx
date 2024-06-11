"use client";

import { useRouter } from 'next/navigation';
import React from 'react'

export default function ErrorBoundary({error, reset}: {
    error: Error & {digest?: string}, 
    reset: () => void
}) {

    const router = useRouter();
    
    return (
        <div className='flex flex-col items-center justify-center w-full h-screen bg-slate-900'>
            <p className='text-2xl text-orange-500'>Error: {error.message}</p>
            <button 
                type="button" 
                onClick={() => router.back()} 
                className='text-lg font-bold text-cyan-500 hover:text-cyan-600 active:text-cyan-400 
                    bg-slate-700 border border-cyan-500 px-6 py-1 mt-4 rounded'
            >
                Bo Back    
            </button>
        </div>
    )
}
