import React from 'react'
import background from './../public/img/background.jpg'
import Image from 'next/image'

interface Props {
    children: React.ReactNode
}

export default function LoginLayout({ children }: Props) {
    return (
        <section className="min-h-screen grid grid-cols-1 lg:grid-cols-2 bg-background transition-colors duration-300">
            <div className="flex flex-col justify-center items-center px-6 py-12 sm:px-12 lg:px-20">
                <div className="w-full max-w-md">
                    {children}
                </div>
            </div>

            <div className="hidden lg:flex items-center justify-center">
                <div className="relative h-full w-full overflow-hidden rounded-l-[75px]">
                    <Image
                        src={background}
                        alt="Login background"
                        fill
                        className="object-cover"
                        priority
                    />
                    <div className="absolute inset-0 from-black/10 to-transparent pointer-events-none" />
                </div>
            </div>

        </section>
    )
}