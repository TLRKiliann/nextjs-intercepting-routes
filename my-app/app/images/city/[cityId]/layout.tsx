import { Metadata } from 'next';
import React from 'react';

export const generateMetadata = async ({params}: {
    params: {cityId: string}
}): Promise<Metadata> => {
    const title = await new Promise((resolve) => {
        setTimeout(() => {
            resolve(` - City - ${params.cityId}`);
        }, 300);
    })
    return {
        title: `Img ${title}`
    }
}

export default function LayoutCity({children}: {
    params: {cityId: string},
    children: React.ReactNode
}) {

    return (
        <div>
            {children}
        </div>
    )
}
