import React from 'react'
import productImg from '../img/product-img.png'
import productImg1 from '../img/product-img1.png'
const Product = () => {
  return (
    <section className='w-full py-20 px-8 md:px-24 bg-white'>
      <div className='max-w-7xl mx-auto text-center space-y-20'>
        <h2 className='text-4xl md:text-5xl font-bold leading-tight'>
          Here's how it works:
        </h2>

        {/* Two-column grid for the illustrations */}
        <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
          {/* Left column - Open-source data flow */}
          <div className='flex justify-center lg:justify-end'>
            <img
              src={productImg}
              alt='Broken computer screen'
              className='w-full max-w-xl object-contain'
            />
          </div>
          {/* <div className='bg-gray-100 rounded-xl p-6 shadow-sm'>
            <h3 className='text-xl md:text-2xl font-bold mb-8'>
              Open-source data flow points - ensure transparency
            </h3>
            <div className='flex justify-center items-center space-x-4'>
              <div className='w-16 h-16 bg-gray-300/70 rounded-lg shadow-md'></div>
              <div className='w-20 h-20 bg-purple-600 rounded-lg shadow-md relative glow-purple'>
                <div className='absolute inset-2 bg-purple-400/50 rounded-sm'></div>
              </div>
              <div className='w-16 h-16 bg-gray-300/70 rounded-lg shadow-md'></div>
              <div className='w-12 h-12 bg-gray-300/70 rounded-lg shadow-md opacity-60'></div>
            </div>
          </div> */}

          {/* Right column - Proof-of-use contribution */}
          <div className='flex justify-center lg:justify-end '>
            <img
              src={productImg1}
              alt='Broken computer screen'
              className='w-full max-w-xl object-contain'
            />
          </div>
          {/* <div className='bg-gray-100 rounded-xl p-6 shadow-sm'>
            <h3 className='text-xl md:text-2xl font-bold mb-8'>
              Proof-of-use contribution mechanisms
            </h3>
            <div className='flex justify-center items-center space-x-2'>
              <div className='flex flex-col items-center'>
                <div className='w-16 h-16 bg-gray-300 rounded-full flex items-center justify-center border-4 border-gray-200'>
                  <span className='text-purple-600 text-xs font-bold'>
                    Review
                  </span>
                </div>
              </div>

              <div className='w-8 border-t-2 border-gray-300 border-dashed'></div>

              <div className='flex flex-col items-center'>
                <div className='w-16 h-16 bg-white rounded-full flex flex-col items-center justify-center border-4 border-gray-200'>
                  <span className='text-purple-600 text-xs font-bold'>
                    Log/
                  </span>
                  <span className='text-purple-600 text-xs font-bold'>
                    verify
                  </span>
                </div>
              </div>

              <div className='w-8 border-t-2 border-gray-300 border-dashed'></div>

              <div className='flex flex-col items-center'>
                <div className='w-16 h-16 bg-gray-300 rounded-full flex flex-col items-center justify-center border-4 border-gray-200'>
                  <span className='text-purple-600 text-xs font-bold'>
                    Public
                  </span>
                  <span className='text-purple-600 text-xs font-bold'>
                    record
                  </span>
                </div>
              </div>
            </div>
          </div> */}
        </div>

        {/* Tagline */}
        <div className='py-10'>
          <h3 className='text-2xl md:text-3xl font-bold'>
            No more guesswork. No more manipulation.
          </h3>
          <h3 className='text-2xl md:text-3xl font-bold'>
            Just real, honest reviews you can trust.
          </h3>
        </div>

        {/* Mission statement and CTA section */}
        <div className='relative bg-[url("/img/product-bg.png")] bg-cover bg-center'>
          <div className='absolute inset-0 -z-10 bg-gradient-to-br from-gray-200 to-gray-300 opacity-80'></div>
          <div className='absolute inset-0 -z-10'>
            <div className='h-full w-full grid grid-cols-[repeat(20,1fr)] grid-rows-[repeat(20,1fr)] opacity-60'>
              {Array.from({ length: 21 }).map((_, colIndex) => (
                <div
                  key={`col-${colIndex}`}
                  className='h-full w-[1px] bg-gray-400'
                  style={{ gridColumn: colIndex + 1 }}
                />
              ))}
              {Array.from({ length: 21 }).map((_, rowIndex) => (
                <div
                  key={`row-${rowIndex}`}
                  className='w-full h-[1px] bg-gray-400'
                  style={{ gridRow: rowIndex + 1 }}
                />
              ))}
            </div>
          </div>

          <div className='bg-black text-white rounded-xl p-12 max-w-3xl mx-auto'>
            <h2 className='text-3xl md:text-4xl font-bold mb-6 leading-tight'>
              We're on a mission to accelerate the verifiable internet—so you
              can finally know what's real.
            </h2>

            <p className='text-gray-300 mb-8'>
              Be part of the movement. Join us early and help shape the future
              of online experiences.
            </p>

            <button className='bg-purple-600 hover:bg-purple-700 text-white px-8 py-6 h-auto text-lg rounded-full'>
              Join us now
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Product
