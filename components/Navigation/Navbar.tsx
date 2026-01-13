import React from 'react'
import Icon from '../Icons/Icon'
import { Button } from '../Buttons/Button'

export default function Navbar() {
    return (
        <div className='h-12 flex items-center justify-between px-2'>
            <div>

            </div>
            <div>
                <div>
                    <Button variant={'ghost'} className='flex items-center justify-start'>
                        <Icon name={'user'} className={'opacity-80 h-7 w-7'} />c asdasd
                    </Button>
                </div>
            </div>
        </div>
    )
}
