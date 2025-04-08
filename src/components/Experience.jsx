import React from "react";
import { ThumbsDown, ThumbsUp } from "lucide-react";
import review from '../img/review.png'
import review2 from '../img/review-2.png'
import review3 from '../img/review-3.png'
const Experience = ()=> {
  return (
    <section className='w-full py-20 px-8 md:px-24 bg-white'>
      <div className='max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center'>
        <div className='space-y-8'>
          <h2 className='text-2xl md:text-3xl font-bold text-gray-800 leading-tight'>
            Most of your online and real-life experiences are shaped by
            reviews—reviews that can't be verified.
          </h2>
          <p className='text-xl text-gray-700'>
            They're easily manipulated by review platforms, the businesses they
            serve, or even their competitors.
          </p>
        </div>
        <div className='flex justify-center lg:justify-end'>
          <img
            src={review}
            alt='Broken computer screen'
            className='w-full max-w-xl object-contain'
          />
        </div>
        {/* <div className="relative">
          <div className="bg-gray-100 rounded-xl p-6 shadow-lg">
            <div className="bg-gray-800 rounded-lg p-4 mb-4">
              <div className="flex items-center mb-2">
                <div className="w-8 h-8 rounded-full bg-yellow-500 flex items-center justify-center mr-3">
                  <span className="text-xs text-white">JL</span>
                </div>
                <div>
                  <p className="text-white font-medium">Jane Lephta</p>
                  <p className="text-gray-400 text-xs">Influencer</p>
                </div>
                <div className="ml-auto">
                  <span className="text-gray-400 text-xs">Others</span>
                </div>
              </div>
              <p className="text-white">Nandos Has The Best Chicken Burger</p>
              <div className="flex items-center mt-2">
                <div className="flex items-center mr-4">
                  <ThumbsUp className="w-4 h-4 text-gray-400 mr-1" />
                  <span className="text-gray-400 text-xs">500</span>
                </div>
                <div className="flex items-center">
                  <ThumbsDown className="w-4 h-4 text-gray-400 mr-1" />
                  <span className="text-gray-400 text-xs">5k</span>
                </div>
              </div>
            </div>
            
            <div className="mb-4">
              <div className="flex items-center mb-2">
                <div className="w-8 h-8 rounded-full bg-blue-500 flex items-center justify-center mr-3">
                  <span className="text-xs text-white">AG</span>
                </div>
                <p className="text-gray-800 font-medium">Austin Graham</p>
                <div className="ml-auto">
                  <div className="bg-purple-600 text-white rounded-full px-3 py-1 text-xs">Suno</div>
                </div>
              </div>
              <p className="text-gray-800">Nandos Has The Worst Chicken Burger</p>
              <div className="flex items-center mt-2">
                <div className="flex items-center mr-4">
                  <ThumbsUp className="w-4 h-4 text-gray-800 mr-1" />
                  <span className="text-gray-800 text-xs">5k</span>
                </div>
                <div className="flex items-center">
                  <ThumbsDown className="w-4 h-4 text-gray-800 mr-1" />
                  <span className="text-gray-800 text-xs">500</span>
                </div>
              </div>
            </div>
            
            <div className="bg-gray-700 rounded-lg h-16"></div>
          </div>
        </div> */}
      </div>

      <div className='max-w-7xl mx-auto mt-24 grid grid-cols-1 lg:grid-cols-3 gap-8'>
        <div className='flex justify-center lg:justify-end'>
          <img
            src={review2}
            alt='Broken computer screen'
            className='w-full max-w-xl object-contain'
          />
        </div>
        {/* <div className='bg-black rounded-xl p-6 text-white relative overflow-hidden'>
          <div className='absolute top-2 left-2'>
            <div className='bg-white text-black px-3 py-1 rounded-full text-xs font-bold'>
              TRADECENT
            </div>
          </div>
          <div className='mt-10 text-center'>
            <p className='text-gray-400 uppercase text-sm mb-4'>REVIEW</p>
            <div className='flex justify-center mb-4'>
              <div className='w-16 h-16 rounded-full bg-gray-300 flex items-center justify-center'>
                <span className='text-gray-800 text-xs'>ES</span>
              </div>
            </div>
            <p className='font-medium mb-2'>Edward Soprano</p>
            <div className='flex justify-center mb-4'>
              {[...Array(4)].map((_, i) => (
                <span key={i} className='text-yellow-400'>
                  ★
                </span>
              ))}
            </div>
            <p className='text-sm'>
              "Super fast, lowest swap fees & almost no slippage on all of my
              trades, couldn't recommend anything better for a trader of any
              size :)"
            </p>
          </div>
        </div> */}

        <div className='bg-white border-t border-b border-gray-200 lg:col-span-1 flex flex-col justify-center p-8'>
          <h2 className='text-3xl font-bold text-center mb-4'>
            That's why, despite glowing reviews, your experiences with products
            and services often fall flat.
          </h2>
          <p className='text-3xl font-bold text-center text-purple-600'>
            It's time for a change.
          </p>
        </div>
        <div className='flex justify-center lg:justify-end'>
          <img
            src={review3}
            alt='Broken computer screen'
            className='w-full max-w-xl object-contain'
          />
        </div>
        {/* <div className='bg-gray-100 rounded-xl p-6 relative'>
          <p className='uppercase text-sm font-semibold mb-6 text-center'>
            EXPERIENCE
          </p>
          <div className='bg-white rounded-lg p-4 mb-6 text-center'>
            <p className='italic'>
              "I lost all my money trading on
              <span className='text-orange-600 font-bold'> TRADECENT</span>!"
            </p>
          </div>
          <div className='flex justify-center'>
            <img
              src='/public/lovable-uploads/e7fb3847-6c3d-4d7d-a692-e054cb598c50.png'
              alt='Disappointed user'
              className='w-48 h-48 object-cover'
            />
          </div>
        </div> */}
      </div>
    </section>
  )
};
export default Experience