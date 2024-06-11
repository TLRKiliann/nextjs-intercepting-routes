import { AllImagesProps } from '@/app/lib/definitions';
import React from 'react';
import Image from 'next/image';
import { allHollyDays } from '@/app/lib/hollydays-data';
import Modal from '@/app/components/modal';

export default function PhotoModalHollidays({params: {id}}: {params: {id: string}}) {

    const photo: AllImagesProps = allHollyDays.find((p) => p.id === Number(id))!;

    return (
        <Modal>
            <Image
                src={photo.name} 
                width={1920}
                height={1200}
                alt={photo.description}
                loading="lazy"
                className='object-cover rounded-lg'
            />
        </Modal>
    )
}