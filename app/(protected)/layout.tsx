import UserLayout from '@/layout/UserLayout'
import React from 'react'

interface Props {
    children: React.ReactNode
}

export default function ProtectedLayout({ children }: Props) {
    return (
        <UserLayout>
            { children }
        </UserLayout>
    )
}
