'use client'

import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import { getAuth } from '@/services/auth.storage'
import Sidebar from '@/components/Navigation/Sidebar'
import Navbar from '@/components/Navigation/Navbar'
import Content from '@/components/Contents/Content'

interface Props {
    children: React.ReactNode
}

export default function UserLayout({ children }: Props) {
    const router = useRouter()
    const [openSideBar, setOpenSideBar] = useState(false)

    useEffect(() => {
        const auth = getAuth()

        if (!auth?.access_token) {
            router.replace('/login')
        }
    }, [router])

    return (
        <section className="flex h-screen overflow-hidden">

            {openSideBar && (
                <div
                    className="fixed inset-0 z-40 md:hidden bg-black/20 backdrop-blur-sm"
                    onClick={() => setOpenSideBar(false)}
                />
            )}


            <aside className="fixed h-full md:relative left-0 top-0 z-40">
                <Sidebar openSideBar={openSideBar} onToggle={() => setOpenSideBar(s => !s)} />
            </aside>

            <div className='w-full h-screen flex'>
                <div className='w-12 md:w-0'></div>
                <div className="flex flex-col flex-1 ">
                    <Navbar />
                    <main className="flex-1 overflow-y-auto rounded-tl-4xl bg-blue-50/50">
                        <Content>
                            {children}
                        </Content>
                    </main>
                </div>
            </div>
        </section>
    )
}
