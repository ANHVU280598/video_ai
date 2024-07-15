import Image from 'next/image'
import React from 'react'
import logoImg from '../../public/logo.jpg'

export default function NavBarLogo() {
  return (
    <div className='flex flex-col h-[100px] w-full items-center justify-around'>
      <div className='flex items-center space-x-2'>
        <div className='relative h-[50px] w-[50px] rounded-full border-2 border-slate-50/30'>
          <Image
            className='rounded-full'
            alt=''
            src={logoImg}
            objectFit='cover'/>
        </div>
        <span className='text-[24px]'>Pentagon AI</span>
      </div>
      <div className='h-[1px] w-5/6 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500' />
    </div>
  )
}
