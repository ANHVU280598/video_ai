import React from 'react'
import NavBarUserAccountLogo from './NavBarUserAccountLogo'
import NavBarUserAccountToggle from './NavBarUserAccountToggle'

export default function NavBarUserAccount() {
    return (
        <div className='flex flex-col w-full p-5 space-y-5'>
                <NavBarUserAccountLogo/>
                <NavBarUserAccountToggle/>
    
        </div>
    )
}
