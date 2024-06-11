import { AllImagesProps } from '@/app/lib/definitions';
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import ImgPage from '@/app/components/img-page';
import ImgBox from '@/app/components/img-box';
import { allHollyDays } from '@/app/lib/hollydays-data';

export default function Holliday() {
  return (
    <ImgPage>
      <h1 className='w-[430px] text-2xl font-bold bg-clip-text text-transparent text-gradients 
        dark:text-gradients-dark p-4'
      >
        Collection of holliday images
      </h1>
      <ImgBox>
        {allHollyDays.map((holliday: AllImagesProps) => (
          <Link key={holliday.id} href={`/images/holliday/${holliday.id}`} 
            className='img-styles transition duration-500 ease hover:shadow-none active:transition-none'
          >
            <Image src={holliday.name} width={1920} height={1200}
              alt={holliday.description} 
              loading="lazy"
              className='object-cover rounded-lg'
            />
          </Link>
        ))}
      </ImgBox>
    </ImgPage>
  )
}
