import { AllImagesProps } from '@/app/lib/definitions';
import React from 'react';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import { allHollyDays } from '@/app/lib/hollydays-data';
import CardImgById from '@/app/components/card-img-id';

export default function HollidayId({params}: {params: {hollidayId: string}}) {

    if (parseInt(params.hollidayId) !== Number(params.hollidayId)) {
        throw new Error("Error: number is more greater than total of all holliday img");
    }

    if (parseInt(params.hollidayId) > Number(allHollyDays.length)) {
        notFound();
    }

    return (
        <div>
            {allHollyDays.map((holliday: AllImagesProps) => {
                return Number(holliday.id) === parseInt(params.hollidayId) ? (
                    <CardImgById 
                        key={holliday.id} 
                        cityImgId={parseInt(params.hollidayId)} 
                        familyImgToLink="holliday"
                    >
                        <Image
                            src={holliday.name}
                            width={1920}
                            height={1200}
                            alt={holliday.description}
                            loading="lazy"
                            className='object-cover mt-10 rounded-tl-lg rounded-tr-lg'
                        />
                        <p className='flex flex-col items-end text-slate-700/90 dark:text-slate-300 bg-purple-300/50 dark:bg-slate-800/50 px-4 py-2 
                            rounded-bl-lg rounded-br-lg'>
                            {holliday.description}
                        </p>
                    </CardImgById>
                ) : null
            })}
        </div>
    )
}
