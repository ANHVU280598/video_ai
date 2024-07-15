import { faAudioDescription, faCamera, faEdit, faFileText, faHouseFloodWaterCircleArrowRight, faImages, faTextHeight, faTextSlash, faVideoCamera, faVoicemail } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Link from 'next/link'
import React from 'react'

export default function HomePageHeaderNavBar() {
  return (
    <div className='flex w-full justify-center items-center text-[10px]'>
      <div className='flex flex-row h-[65px] w-[700px] justify-center items-center border-[2px] border-blue-950 rounded-l-full rounded-r-full bg-slate-900'>
        <Link href='/Text-Generation'><div className='flex flex-col h-[65px] w-[100px] justify-center items-center border-r-[2px] border-blue-950'>
          <FontAwesomeIcon icon={faFileText} fontSize={'24px'} />
          <span>Text Gen</span></div></Link>
        <Link href='/Audio2Txt'><div className='flex flex-col h-[65px] w-[100px] justify-center items-center border-r-[2px] border-blue-950 '><FontAwesomeIcon icon={faAudioDescription} fontSize={'24px'} />
          <span>Audio to Text</span></div></Link>
        <Link href='/Txt2Speech'><div className='flex flex-col h-[65px] w-[100px] justify-center items-center'><FontAwesomeIcon icon={faVoicemail} fontSize={'24px'} />
          <span>Text to Speech</span></div></Link>
        <Link href='/Image-Generation'><div className='flex flex-col h-[100px] w-[100px] justify-center items-center border-[2px] border-blue-950  bg-black rounded-full z-10'>
          <FontAwesomeIcon icon={faImages} fontSize={'28px'} />
          <span>Image Creation</span>
        </div></Link>
        <Link href='/Video-Editor'><div className='flex flex-col h-[65px] w-[100px] justify-center items-center border-r-[2px] border-blue-950 '><FontAwesomeIcon icon={faVideoCamera} fontSize={'24px'} />
          <span>Video Editor</span></div></Link>
        <Link href='/Image-Editor'><div className='flex flex-col h-[65px] w-[100px] justify-center items-center border-r-[2px] border-blue-950 '><FontAwesomeIcon icon={faEdit} fontSize={'24px'} />
          <span>Image Editor</span></div></Link>
        <Link href='/Personal-Feed'><div className='flex flex-col h-[65px] w-[100px] justify-center items-center'><FontAwesomeIcon icon={faHouseFloodWaterCircleArrowRight} fontSize={'24px'} />
          <span>Personal Feed</span></div></Link>
      </div>
    </div>
  )
}
