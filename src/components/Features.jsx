import React from 'react'
import { StopCircle, Star, CheckCircle, ThumbsUp } from 'lucide-react'
const Features = () => {
  return (
    <section className='w-full py-20 px-8 md:px-24 bg-black text-white'>
      <div className='max-w-7xl mx-auto text-center space-y-12'>
        <div className='space-y-4'>
          <h2 className='text-4xl md:text-5xl font-bold leading-tight'>
            Introducing Sumocell—A User-Defined Protocol Revolutionizing The Way
            We Experience The Internet.
          </h2>

          <p className='text-xl max-w-4xl mx-auto'>
            With Sumocell, Every Review Is Verifiable, Tamper-Proof, And
            Controlled By *You*, The User.
          </p>
        </div>

        <div className='bg-gray-900/60 rounded-xl p-8 border border-gray-800'>
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8'>
            <div className='flex items-center gap-3'>
              <div className='text-red-500'>
                <StopCircle size={24} />
              </div>
              <span className='text-lg'>stop the madness</span>
            </div>

            <div className='flex items-center gap-3'>
              <div className='text-amber-500'>
                <Star size={24} />
              </div>
              <span className='text-lg'>trust through verification</span>
            </div>

            <div className='flex items-center gap-3'>
              <div className='text-purple-500'>
                <CheckCircle size={24} />
              </div>
              <span className='text-lg'>no more fake reviews</span>
            </div>

            <div className='flex items-center gap-3'>
              <div className='text-green-500'>
                <ThumbsUp size={24} />
              </div>
              <span className='text-lg'>real experiences only</span>
            </div>
          </div>

          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-16 text-3xl font-bold'>
            <div>int</div>
            <div>Zachxbt expose</div>
            <div>Length of use</div>
            <div>Proof of stake</div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Features
