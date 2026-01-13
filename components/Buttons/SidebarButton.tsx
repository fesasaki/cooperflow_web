import React from 'react'
import Icon from '../Icons/Icon'

interface SidebarButtonProps {
    name: string
    icon: string
    openSideBar: boolean
    onClick?: () => void
}

export default function SidebarButton({
    name,
    icon,
    openSideBar,
    onClick
}: SidebarButtonProps) {
    return (
        <div
            key={name}
            onClick={onClick}
            className={`
                flex items-center justify-center md:justify-start
                hover:cursor-pointer hover:bg-menu-hover
                px-2 py-1 rounded-xl text-gray-800 
                ${openSideBar ? 'justify-start' : ''}
            `}
        >
            <div className="p-1">
                <Icon name={icon} className={''} />
            </div>

            <span
                className={`
                    hidden md:inline whitespace-nowrap
                    transition-all duration-100 ease-out
                    ${openSideBar
                        ? 'opacity-100 translate-x-0 delay-200 inline'
                        : 'opacity-1000 translate-x-2 pointer-events-none'
                    }
                `}
            >
                {name}
            </span>
        </div>
    )
}
