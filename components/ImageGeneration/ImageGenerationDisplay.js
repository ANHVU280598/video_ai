'use client'
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'

export default function ImageGenerationDisplay() {
    const date = new Date()
    const { imagesHistory, status, error } = useSelector((state) => state.imageGenerationApi)
    const [display, setDisplay] = useState([])

    useEffect(() => {
        if (status === 'succeeded' && imagesHistory.length >= 1) {
            const last_index = imagesHistory.length - 1
            setDisplay(prevDisplay => [...prevDisplay, {
                prompt: imagesHistory[last_index].prompt,
                revised_prompt: imagesHistory[last_index].revised_prompt,
                url: imagesHistory[last_index].url
            }]
            )
        }
    }, [imagesHistory, status])

    return (
        <div className='flex flex-col h-[800px] w-full space-y-5 overflow-roll'>
            <div className='flex flex-col items-center'>
                <span className='text-sm     text-slate-600'>Generation history</span>
                <span className='text-[12px] text-slate-600'>{date.toDateString()}</span>
            </div>
            {
                (display.length >= 1) &&
                <div className="columns-2 gap-10 space-y-5">
                    {
                        display.map((value, index) => (
                            <img className={`w-full ${(index % 2 == 0) ? 'aspect-video' : 'aspect-square'} `} src={value.url} key={index} />
                        ))
                    }
                </div>
            }
        </div>
    )
}
