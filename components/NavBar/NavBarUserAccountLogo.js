import {faAngleDown, faTurnDown} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

export default function NavBarUserAccountLogo() {
    return (
        <div className='flex w-full items-center justify-between text-xl'>
            <div className='flex items-center space-x-3'>
                <div className='flex h-[40px] w-[40px] items-center justify-center rounded-full bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500'>A</div>
                <div>anhvu2805</div>
            </div>
            <FontAwesomeIcon color='white' icon={faAngleDown} size='lg' />
        </div>
    )
}
