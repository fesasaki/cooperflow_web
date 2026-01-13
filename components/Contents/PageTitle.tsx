import React from 'react'
import Icon from '../Icons/Icon'

interface Props {
    name: string
    icon: string
}

export default function PageTitle({ name, icon }: Props) {
    return (
        <div className='flex items-center gap-2'>
            <Icon name={icon} className={'w-5 h-5'} />
            <div className='pb-0.5'>
                <span className='text-xl font-medium text-gray-700'>{ name }</span>
            </div>
        </div>
    )
}
