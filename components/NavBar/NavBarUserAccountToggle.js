import { faCoins } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

export default function NavBarUserAccountToggle() {
  return (
    <div className='flex justify-center text-xs'>
      <div className='flex flex-row h-[25px] w-[120px] rounded-2xl border-2 border-slate-400'>
        <div className='flex h-full w-1/2 items-center justify-center rounded-2xl '>
          <FontAwesomeIcon icon={faCoins} />
          <span>150</span>
        </div>
        <div className='flex h-full w-1/2 items-center justify-center rounded-2xl bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500'>
          <span>Manage</span>
        </div>
      </div>
    </div>
  )
}
