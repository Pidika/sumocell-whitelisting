import React from 'react'
import { ArrowRight } from 'lucide-react'

const Dividers = () => {
  return (
    <div>
      <div className='bg-black text-white py-12 px-8 md:px-24'>
        <div className='max-w-7xl mx-auto flex flex-col md:flex-row justify-center gap-10 items-center'>
          <h2 className='text-2xl md:text-3xl font-semibold mb-6 md:mb-0 text-center md:text-left'>
            We&apos;re Shaping The Future Of Your Online Experience—
          </h2>
          <a
            href='/'
            className='bg-purple-600 hover:bg-purple-700 transition-colors text-white px-6 py-3 rounded-[6px] flex items-center'
          >
            Join us <ArrowRight className='ml-2 h-4 w-4' />
          </a>
        </div>
      </div>
    </div>
  )
}

export default Dividers
