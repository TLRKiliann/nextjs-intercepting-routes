import { AllImagesProps } from '@/app/lib/definitions';
import React from 'react';
import Image from 'next/image';
import { allCities } from '@/app/lib/cities-data';
import Modal from '@/app/components/modal';

export default function PhotoModal({params: {id}}: {params: {id: string}}) {

    const photo: AllImagesProps = allCities.find((p) => p.id === Number(id))!;

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