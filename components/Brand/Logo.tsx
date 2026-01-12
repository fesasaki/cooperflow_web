import React from 'react'
import logo from '@/public/img/brand/cooperflow_logo.png';
import Image from 'next/image'

export default function Logo() {
    return (
        <>
            <Image src={logo} alt="Cooperflow Logo" className="w-36" />
        </>
    )
}
