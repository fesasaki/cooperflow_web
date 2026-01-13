import React from 'react'

interface Props {
    children: React.ReactNode
}

export default function Content({ children }: Props) {
    return (
        <div className='w-full h-full px-5.5 py-4'>
            { children }
        </div>
    )
}
