import React from 'react'
import {
    CloudUploadIcon,
    DatabaseIcon,
    PaperAirplaneIcon,
    ServerIcon,
} from '@heroicons/react/solid'

import bgImg from '../assets/cek.png'

const Hero = () => {
  return (
    <div name='home' className='w-full h-screen bg-zinc-200 flex flex-col justify-between'>
        <div className='grid md:grid-cols-2 max-w-[1240px] m-auto'>
            <div className='flex flex-col justify-center md:items-start w-full px-2 py-8'>
                <p className='text-6xl md:text-5xl font-bold'>PAKKI</p>
                <h1 className='py-3 text-xl md:text-4xl'>Perhimpunan Ahli Kesehatan Kerja Indonesia</h1>
                <button className='bg-green-500 border-green-500 py-3 px-6 sm:w-[60%] my-4'>Get Started</button>
            </div>
            <div>
                <img className='w-full pt-24' src={bgImg} alt="/" />
            </div>
            <div className='absolute flex flex-col py-8 md:min-w-[1100px] bottom-[-7%]
            mx-1 md:left-1/2 transform md:-translate-x-1/2 bg-zinc-200
            border border-slate-300 rounded-xl text-center shadow-xl'>
                <div className='flex justify-between flex-wrap px-3'>
                    <div><p className='pl-7'><CloudUploadIcon className='h-6 text-green-500' /></p><h1 className='text-3xl font-semibold'>96</h1><p className=' px-4 py- text-slate-500'>Daerah</p></div>
                    <div><p className='pl-8'><CloudUploadIcon className='h-6 text-green-500' /></p><h1 className='text-3xl font-semibold'>96</h1><p className=' px-4 py- text-slate-500'>Cabang</p></div>
                    <div><p className='pl-8'><CloudUploadIcon className='h-6 text-green-500' /></p><h1 className='text-3xl font-semibold'>96</h1><p className=' px-4 py- text-slate-500'>Ranting</p></div>
                    <div><p className='pl-8'><CloudUploadIcon className='h-6 text-green-500' /></p><h1 className='text-3xl font-semibold'>96</h1><p className=' px-4 py- text-slate-500'>Anggota</p></div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Hero