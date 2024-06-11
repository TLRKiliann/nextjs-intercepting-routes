import { AllImagesProps } from '@/app/lib/definitions';
import React from 'react';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import { allCities } from '@/app/lib/cities-data';
import CardImgById from '@/app/components/card-img-id';

export default function CityId({params}: {params: {cityId: string}}) {

    if (parseInt(params.cityId) !== Number(params.cityId)) {
        throw new Error("Error: number is more greater than total of all city img");
    };

    if (parseInt(params.cityId) > Number(allCities.length)) {
        notFound();
    };

    return (
        <div>
            {allCities.map((city: AllImagesProps) => {
                return Number(city.id) === parseInt(params.cityId) ? (
                    <CardImgById 
                        key={city.id} 
                        cityImgId={parseInt(params.cityId)} 
                        familyImgToLink="city"
                    >
                        <Image
                            src={city.name}
                            width={1920}
                            height={1200}
                            alt={city.description}
                            loading="lazy"
                            className='object-cover mt-10 rounded-tl-lg rounded-tr-lg'
                        />
                        <p className='flex flex-col items-end text-slate-700/90 dark:text-slate-300 bg-purple-300/50 dark:bg-slate-800/50 px-4 py-2 
                            rounded-bl-lg rounded-br-lg'>
                            {city.description}
                        </p>
                    </CardImgById>
                ) : null
            })}
        </div>
    )
}
