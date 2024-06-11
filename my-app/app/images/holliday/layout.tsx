import { Metadata } from 'next';
import React from 'react';

export const metadata: Metadata = {
    title: "Hollidays Img",
    description: "all images of hollidays",
};

export default function LayoutHollidays(props: {
    modal: React.ReactNode,
    children: React.ReactNode
}) {
    return (
        <div>
            {props.modal}
            {props.children}
        </div>
    )
}
