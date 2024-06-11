import { Metadata } from 'next';
import React from 'react';

export const metadata: Metadata = {
    title: "City Img",
    description: "all images of city",
};

export default function LayoutCity(props: {
    modal: React.ReactNode,
    children: React.ReactNode
}) {
    return (
        <>
            {props.modal}
            {props.children}
        </>
    )
}
