import Image from 'next/image'
import React from 'react'
import logoImg from '../../public/logo.jpg'
export default function TextGenerationImagePrompt() {
    return (
        <div className='relative h-[24px] w-[24px] p-2 rounded-full border-2 border-slate-50/30'>
          <Image
            className='rounded-full'
            alt=''
            src={logoImg}
            fill
            objectFit='cover'/>
        </div>
    )
}
