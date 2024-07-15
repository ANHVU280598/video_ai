import Image from 'next/image'
import React from 'react'
import headerImg from '../../public/banner.jpg'
import HomePageHeaderNavBar from './HomePageHeaderNavBar'
import HomePageBody from './HomePageBody'
export default function HomePageHeader() {
    return (
        <div className='flex flex-col w-full space-y-28'>
            <div className='relative items-center justify-center h-[200px] w-full rounded-xl border-[2px] border-slate-500'>
                <Image
                    className='opacity-45 rounded-xl'
                    alt='a'
                    src={headerImg}
                    fill
                     />

                <div className='flex flex-col h-full w-full items-center justify-center'>
                    <span className='text-white text-[46px] font-semibold tracking-widest z-10'>All AI Needs In One Place</span>
                </div>
                <div className='absolute inset-0 flex items-center justify-center top-[200px]'>
                    <HomePageHeaderNavBar />
                </div>
            </div>
        </div>
    )
}
