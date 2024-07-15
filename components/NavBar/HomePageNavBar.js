import React from 'react'
import NavBarLogo from './NavBarLogo'
import NavBarUserAccount from './NavBarUserAccount'
import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAudioDescription, faDiamond, faEdit, faFeed, faFileText, faGear, faHome, faImage, faNewspaper, faQuestion, faVideo, faVoicemail } from '@fortawesome/free-solid-svg-icons'
import FacebookIcon from '@mui/icons-material/Facebook';
import AppleIcon from '@mui/icons-material/Apple';
import GoogleIcon from '@mui/icons-material/Google';
import YouTubeIcon from '@mui/icons-material/YouTube';
export default function HomePageNavBar() {
  return (
    <div className='flex flex-col h-full w-[250px] items-center bg-slate-900'>
      <NavBarLogo />
      <NavBarUserAccount />
      <div className='flex flex-col w-full pl-5'>
        <ul className=''>
          <li><Link href="/" ><div className='flex h-[40px] items-center text-lg'><FontAwesomeIcon icon={faHome} /><span className='ml-3'>Home</span></div></Link></li>
          <li><Link href="/" ><div className='flex h-[40px] items-center text-lg text-slate-400'><FontAwesomeIcon icon={faFeed} /><span className='ml-3'>Personal Feed</span></div></Link></li>
        </ul>
        <div className='text-xl mt-5'>AI Tools</div>
        <ul className=''>
          <li><Link href="/Text-Generation" ><div className='flex h-[40px] items-center text-lg text-slate-400'><FontAwesomeIcon icon={faFileText} /><span className='ml-3'>Text Generation</span></div></Link></li>
          <li><Link href="/Image-Generation" ><div className='flex h-[40px] items-center text-lg text-slate-400'><FontAwesomeIcon icon={faImage} /><span className='ml-3'>Image Generation</span></div></Link></li>
          <li><Link href="/" ><div className='flex h-[40px] items-center text-lg text-slate-400'><FontAwesomeIcon icon={faAudioDescription} /><span className='ml-3'>Audio To Text</span></div></Link></li>
          <li><Link href="/" ><div className='flex h-[40px] items-center text-lg text-slate-400'><FontAwesomeIcon icon={faVoicemail} /><span className='ml-3'>Text To Speech</span></div></Link></li>
          <li><Link href="/" ><div className='flex h-[40px] items-center text-lg text-slate-400'><FontAwesomeIcon icon={faFeed} /><span className='ml-3'>Personal Feed</span></div></Link></li>
        </ul>

        <div className='text-xl mt-5'>Advanced</div>
        <ul className=''>
          <li><Link href="/" ><div className='flex h-[40px] items-center text-lg text-slate-400'><FontAwesomeIcon icon={faVideo} /><span className='ml-3'>Video Editor</span></div></Link></li>
          <li><Link href="/" ><div className='flex h-[40px] items-center text-lg text-slate-400'><FontAwesomeIcon icon={faEdit} /><span className='ml-3'>Image Editor</span></div></Link></li>
        </ul>

        <div className='h-[1px] w-5/6 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 mt-5' />

        <ul className=''>
          <li><Link href="/" ><div className='flex h-[40px] items-center text-lg text-slate-400'><FontAwesomeIcon icon={faDiamond} /><span className='ml-3'>Premium Plans</span></div></Link></li>
          <li><Link href="/" ><div className='flex h-[40px] items-center text-lg text-slate-400'><FontAwesomeIcon icon={faNewspaper} /><span className='ml-3'>What's New</span></div></Link></li>
          <li><Link href="/" ><div className='flex h-[40px] items-center text-lg text-slate-400'><FontAwesomeIcon icon={faGear} /><span className='ml-3'>Settings</span></div></Link></li>
          <li><Link href="/" ><div className='flex h-[40px] items-center text-lg text-slate-400'><FontAwesomeIcon icon={faQuestion} /><span className='ml-3'>FAQ & Help</span></div></Link></li>
        </ul>

        <div className='h-[1px] w-5/6 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 mt-5' />
      </div>
      <div className='flex flex-row mt-5 w-full justify-around'>
        <FacebookIcon />
        <AppleIcon/>
        <GoogleIcon/>
        <YouTubeIcon/>
     

      </div>
    </div>
  )
}


