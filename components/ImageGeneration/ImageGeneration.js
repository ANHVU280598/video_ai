'use client'
import { imageGenerationApi } from '@/redux/slice/imageGenerateApi';
import Image from 'next/image';
import React, { useEffect, useRef, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { AttachMoneyRounded, AutoAwesome, ImageSearch, KeyboardDoubleArrowUpOutlined, LocalConvenienceStore, StarBorderOutlined, TokenRounded } from '@mui/icons-material';
import ImageGenerationDisplay from './ImageGenerationDisplay';

export default function ImageGeneration() {
    const dispatch = useDispatch()
    const [prompt, setPrompt] = useState('')
    const [onMenu, setMenu] = useState(false)
    const menuRef = useRef(null)

    const handleClickOutside = (event) => {
        if (menuRef.current && !menuRef.current.contains(event.target)) {
          setMenu(false);
        }
      };


    const generateImg = (event) => {
        if ((event.key === "Enter" || event.type === "click") && prompt != "") {
            dispatch(imageGenerationApi(prompt))
            setPrompt('')
        }
    }

    useEffect(() => {
        document.addEventListener('click', handleClickOutside, true);
        return () => {
          document.removeEventListener('click', handleClickOutside, true);
        };
      }, []);
    return (
        <div className='flex flex-col w-full h-full items-center p-5 space-y-10'>
            <div className='flex justify-center items-center h-[52px] w-[902px] bg-gradient-to-l from-indigo-500 via-purple-500 to-pink-500 rounded-2xl'>

                <div className='flex flex-row justify-around items-center p-5 h-[50px] w-[900px] bg-blue-950 rounded-2xl'>
                    <ImageSearch sx={{ fontSize: 24 }} />
                    <input type='text' value={prompt} className='flex items-center pl-2 pr-2 h-[35px] w-[600px] bg-blue-900/10 rounded-xl'
                        placeholder='Type a prompt.....' onChange={(e) => setPrompt(e.target.value)} onKeyDown={generateImg} />
                    <div className='relative flex  items-center justify-center h-[35px] w-[35px] bg-black rounded-md shadow-white/20 shadow-lg cursor-pointer'>
                        <KeyboardDoubleArrowUpOutlined sx={{ fontSize: 18 }} onClick={()=> setMenu(!onMenu)}/>

                        {/* Menu line improve prompt */}
                        {
                            (onMenu) ?
                                <div ref={menuRef} className='absolute flex flex-col top-[30px] right-[0px] h-[180px] w-[250px] bg-black shadow-white/20 shadow-lg border-[2px] border-blue-900/20 rounded-xl'>
                                    <div className='flex flex-col h-[60px] w-full p-2  border-b border-slate-700 '>
                                        <div className='flex flex-row items-center space-x-2'>
                                            <StarBorderOutlined sx={{ fontSize: 20 }} />
                                            <span className='text-xs'>Improve prompt</span>
                                        </div>
                                        <span className='text-xs text-slate-400'>Improve your current prompt</span>
                                    </div>
                                    <div className='flex flex-col h-[60px] w-full p-2  border-b border-slate-700 '>
                                        <div className='flex flex-row items-center space-x-2'>
                                            <AutoAwesome sx={{ fontSize: 20 }} />
                                            <span className='text-xs'>New random prompt</span>
                                        </div>
                                        <span className='text-xs text-slate-400'>Generate a random prompt with AI</span>
                                    </div>
                                </div> : <></>
                        }

                        {/* Menu line improve prompt - END */}

                    </div>
                    <div onClick={generateImg} className={`flex justify-center items-center h-[35px] w-[150px] text-[12px] pl-2 pr-2 ${(prompt == "") ? "bg-slate-500" : "bg-gradient-to-l from-indigo-500 via-purple-500 to-pink-500 cursor-pointer"}  rounded-md`}>
                        <span className='text-[16px] tracking-widest mr-2'>Generated</span><TokenRounded sx={{ fontSize: 10 }} />25
                    </div>
                </div>
            </div>
            <ImageGenerationDisplay />
        </div>

    )
}
