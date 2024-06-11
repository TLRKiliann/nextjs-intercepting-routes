import { AllImagesProps } from '@/app/lib/definitions';
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import ImgPage from '@/app/components/img-page';
import ImgBox from '@/app/components/img-box';
import { allCities } from '@/app/lib/cities-data';

export default function City() {
  return (
    <ImgPage>
      <h1 className='w-[430px] text-2xl font-bold bg-clip-text text-transparent text-gradients 
        dark:text-gradients-dark p-4'
      >
        Collection of city images
      </h1>
      <ImgBox>
        {allCities.map((city: AllImagesProps) => (
          <Link key={city.id} href={`/images/city/${city.id}`} 
            className='img-styles transition duration-500 ease-in-out hover:shadow-none active:transition-none'
          >
            <Image src={city.name} width={500} height={500}
              alt={city.description} 
              loading="lazy"
              className='object-cover rounded-lg'
            />
          </Link>
        ))}
      </ImgBox>
    </ImgPage>
  )
}