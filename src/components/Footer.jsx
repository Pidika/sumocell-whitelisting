import React from 'react'
import { ArrowRight } from 'lucide-react'
const Footer = () => {
  return (
    <footer className='bg-black text-white'>
      {/* Main footer content */}
      <div className='max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center py-8 px-8 md:px-24 border-b border-gray-800'>
        <div className='flex items-center mb-6 md:mb-0'>
          <div className='bg-gray-200 rounded-full w-12 h-8 flex items-center justify-center mb-2 md:mb-0 mr-3'>
            <div className='bg-black rounded-full w-6 h-2'></div>
          </div>
          <span className='text-xl font-medium'>sumocell</span>
        </div>

        <div className='flex flex-col md:flex-row items-center gap-4 md:gap-10 justify-center'>
          <h2 className='text-xl md:text-xl font-semibold text-center md:text-left'>
            We&apos;re Shaping The Future Of Your Online Experience—
          </h2>
          <a
            href='/'
            className='bg-purple-600 hover:bg-purple-700 transition-colors text-white px-6 py-3 rounded-full flex items-center whitespace-nowrap'
          >
            Join us <ArrowRight className='ml-2 h-4 w-4' />
          </a>
        </div>
      </div>

      {/* Copyright section */}
      <div className='max-w-7xl mx-auto py-6 px-8 md:px-24 text-center text-gray-500 text-sm'>
        Copyright © 2024 Sumocell Inc. All Rights
        Reserved.
      </div>
    </footer>
  )
}

export default Footer
