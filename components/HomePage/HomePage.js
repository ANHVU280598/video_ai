'use client';
import React from 'react'
import HomePageHeader from './HomePageHeader'
import HomePageBody from './HomePageBody'
import { useSelector } from 'react-redux'

export default function HomePage() {

  return (
    <div className='flex flex-col w-full space-y-20 p-5'>
      <HomePageHeader/>
      <HomePageBody/>
    </div>
  )
}
