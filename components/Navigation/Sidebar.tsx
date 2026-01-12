'use client'
import { MENU } from '@/constants/paths'
import Logo from '../Brand/Logo'
import Icon from '../Icons/Icon'
import { useState } from 'react'

export default function Sidebar() {

    const [openSideBar, setOpenSidebar] = useState(false);
    

    return (
        <aside
            className={  }
        >
            <div className="flex justify-center items-center mb-6">
                <div className="hidden md:block">
                    <Logo />
                </div>

                <div className="md:hidden" onClick={() => setOpenSidebar(true)}>
                    <Icon name="sidebar" className={''}/>
                </div>
            </div>

            <nav className="px-2 space-y-1">
                {MENU.map((m, index) => (
                    <div
                        key={index}
                        className="flex items-center justify-center md:justify-start gap-3 hover:cursor-pointer hover:bg-menu-hover px-2 py-2 rounded-xl text-gray-600"
                    >
                        <Icon name={m.icon} className={''} />

                        <span className="hidden md:inline mb-0.5">
                            {m.name}
                        </span>
                    </div>
                ))}
            </nav>
        </aside>
    )
}
