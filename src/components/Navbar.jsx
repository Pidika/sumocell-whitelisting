
import { ArrowRight } from 'lucide-react'

const Navbar = () => {
  return (
    <nav className='flex justify-between items-center py-6 px-8 md:px-24 max-w-7xl mx-auto w-full'>
      <div className='flex items-center'>
        <div className='bg-black rounded-full h-10 w-24 flex items-center justify-center'>
          <div className='bg-white w-16 h-2 rounded-full'></div>
        </div>
        <span className='ml-2 text-black font-medium text-xl'>sumocell</span>
      </div>
      <a
        href='/'
        className='bg-purple-600 hover:bg-purple-700 transition-colors text-white px-6 py-3 rounded-full flex items-center'
      >
        Join us <ArrowRight className='ml-2 h-4 w-4' />
      </a>
    </nav>
  )
}

export default Navbar