"use client";
import { resetStatus, textGenerationApi } from '@/redux/slice/textGenerateApi';
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import TextGenerationPromptResponse from './TextGenerationPromptResponse';
import TextGenerationImagePrompt from './TextGenerationImagePrompt';

export default function TextGeneration() {
  const [getQuestion, setQuestion] = useState("")
  const [display, setDisplay] = useState([])
  const dispatch = useDispatch()
  const { textGenHistory, status, error } = useSelector((state) => state.textGenerationApi);

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      dispatch(textGenerationApi({ getQuestion }));
      setQuestion("")
    }
  }

  useEffect(() => {
    if (status === 'succeeded') {
      if (textGenHistory.length >= 1)
        setDisplay(prevDisplay => [...prevDisplay, {
          prompt: textGenHistory[textGenHistory.length - 1].prompt,
          response: textGenHistory[textGenHistory.length - 1].response
        }]
        )
        dispatch(resetStatus())
    }
  }, [status, textGenHistory])

  return (
    <div className='flex flex-col h-full w-full items-center justify-around'>
      <div className='flex flex-col h-[700px] w-[1000px] text-slate-300  overflow-auto'>
        {/* <div>{textGenHistory.length}</div> */}
        <div className='flex justify-start items-center p-2 min-h-[30px] min-w-[400px] max-w-[800px] bg-gradient-to-r from-indigo-500/10 via-purple-500/10 to-pink-500/10 rounded-2xl'>
          <TextGenerationImagePrompt /> <span className='ml-5'>Welcome to Pentagon AI, How I can help you ? </span></div>
          {status}
        {
          (display.length >= 1) && <>

            {

              display.map((value, index) => (
                <div className='flex flex-col' key={index}>

                  <div className='flex justify-end mt-5 mb-5 items-center'>
                    <div className='flex justify-end items-center min-h-[30px] min-w-[100px] max-w-[800px]  bg-gradient-to-l from-indigo-500/10 via-purple-500/10 to-pink-500/10 rounded-2xl'><span className=''>{value.prompt}</span></div>
                  </div>
                  <div className='flex justify-start min-h-[30px] min-w-[400px] max-w-[800px] bg-gradient-to-r from-indigo-500/10 via-purple-500/10 to-pink-500/10 rounded-2xl'>
                    <TextGenerationImagePrompt /> <span className='ml-5'>{value.response}</span> </div>
                </div>
              ))
            }
          </>
        }

      </div>
      <div className='flex w-full justify-center'>
        <input value={getQuestion} type='text' name='question' className='bg-gray-500/70 text-white h-[35px] w-[800px] border-2 border-white rounded-lg' onChange={txt => setQuestion(txt.target.value)} onKeyDown={handleKeyDown} />
      </div>
    </div>
  )
}
