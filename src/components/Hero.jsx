import React from 'react'
import Dividers from './Dividers'
import heroImg from '../img/header-img.png'
import productBg from '../img/product-bg.png'
const Hero = () => {
  return (
    <div>
      <div
        style={{ backgroundImage: `url(${productBg})` }}
        className='bg-cover bg-center w-full min-h-[calc(100vh-100px)] grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 py-12 px-8 md:px-24 items-center max-w-7xl mx-auto'
      >
        <div>
          <h1 className='text-5xl md:text-6xl lg:text-7xl font-bold text-gray-800 leading-tight mb-8'>
            Our Online Experience Is Broken
          </h1>
          <p className='text-xl text-gray-700 mb-2'>
            Ever Feel Like You&apos;ve Been Sold A Lie?
          </p>
          <p className='text-xl text-gray-700'>You&apos;re Not Alone.</p>
        </div>
        <div className='flex justify-center lg:justify-end'>
          <img
            src={heroImg}
            alt='Broken computer screen'
            className=' lg:w-[1163px] w-full max-w-xl object-contain'
          />
        </div>
      </div>
      <Dividers />
    </div>
  )
}

export default Hero
