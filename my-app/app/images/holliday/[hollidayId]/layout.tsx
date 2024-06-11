import { Metadata } from 'next';
import React from 'react';

export const generateMetadata = async ({params}: {
    params: {hollidayId: string}
}): Promise<Metadata> => {
    const title = await new Promise((resolve) => {
        setTimeout(() => {
            resolve(` - Holliday - ${params.hollidayId}`);
        }, 300);
    })
    return {
        title: `Img ${title}`
    }
}

export default function LayoutHolliday({children}: {
    params: {hollidayId: string},
    children: React.ReactNode
}) {

    return (
        <div>
            {children}
        </div>
    )
}
