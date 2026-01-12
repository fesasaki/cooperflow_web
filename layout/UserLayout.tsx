'use client'

import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import { getAuth } from '@/services/auth.storage'
import Sidebar from '@/components/Navigation/Sidebar'
import Navbar from '@/components/Navigation/Navbar'

interface Props {
    children: React.ReactNode
}

export default function UserLayout({ children }: Props) {
    const router = useRouter()
    const [sidebarOpen, setSidebarOpen] = useState(false)

    useEffect(() => {
        const auth = getAuth()

        if (!auth?.access_token) {
            router.replace('/login')
        }
    }, [router])

    return (
        <section className="flex h-screen overflow-hidden">

            {sidebarOpen && (
                <div
                    className="fixed inset-0 bg-black/50 z-40 md:hidden"
                    onClick={() => setSidebarOpen(false)}
                />
            )}

            <aside className="fixed h-full md:relative left-0 top-0 z-40">
                <Sidebar />
            </aside>

            <div className="flex flex-col flex-1 bg-blue-50/40">
                <Navbar />
                <main className="flex-1 overflow-y-auto">
                    {children}
                </main>
            </div>
        </section>
    )
}
