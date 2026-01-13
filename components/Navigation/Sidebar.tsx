'use client'
import { MAIN_MENU, REGISTER_MENU, ROUTES, SYSTEM_MENU } from '@/constants/paths'
import Logo from '../Brand/Logo'
import Icon from '../Icons/Icon'
import SidebarButton from '../Buttons/SidebarButton'
import { useRouter } from 'next/navigation'

interface Props {
    openSideBar: boolean
    onToggle: () => void
}

export default function Sidebar({ openSideBar, onToggle }: Props) {

    const router = useRouter();

    const goHome = () => {
        router.push(ROUTES.dashboard)
    }

    const navigateTo = (path: string) => {
        router.push(path)
    }

    return (
        <aside
            className={`
                h-full bg-white transition-all duration-300 w-12 md:w-52 py-4 rounded-br-2xl border-l-4 border-primary md:border-l-6
                ${openSideBar ? 'w-52' : ''}
            `}
        >
            {!openSideBar && (
                <div className='flex md:hidden items-center justify-center mb-2'>
                    <Icon name={'brand-mini'} className={'w-7'} />
                </div>
            )}

            <div className="flex justify-center items-center mb-6">

                <div onClick={() => goHome()} className={`
                    md:block hover:bg-menu-hover hover:cursor-pointer px-2 py-2 rounded-2xl
                    ${openSideBar ? 'block' : 'hidden'}
                    `}>
                    <Logo />
                </div>

                <div className="md:hidden hover:cursor-pointer rounded-xl hover:bg-menu-hover p-2" onClick={() => onToggle()}>
                    <Icon name={openSideBar ? 'sidebar-collapse' : 'sidebar-expand'} className={''} />
                </div>
            </div>

            <nav className="px-2 space-y-1">
                {MAIN_MENU.map((m) => (
                    <div key={m.name}>
                        <SidebarButton
                            name={m.name}
                            icon={m.icon}
                            openSideBar={openSideBar}
                            onClick={() => navigateTo(m.path)}
                        />
                    </div>
                ))}

                <div className='w-full h-px bg-gray-300 my-4'></div>

                {REGISTER_MENU.map((m) => (
                    <div key={m.name}>
                        <SidebarButton
                            name={m.name}
                            icon={m.icon}
                            openSideBar={openSideBar}
                            onClick={() => navigateTo(m.path)}
                        />
                    </div>
                ))}

                <div className='w-full h-px bg-gray-300 my-4'></div>

                {SYSTEM_MENU.map((m) => (
                    <div key={m.name}>
                        <SidebarButton
                            name={m.name}
                            icon={m.icon}
                            openSideBar={openSideBar}
                            onClick={() => navigateTo(m.path)}
                        />
                    </div>
                ))}
            </nav>
        </aside>
    )
}
