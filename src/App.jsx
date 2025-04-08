import Navbar from './components/Navbar'
import Hero from './components/Hero'

import Experience from './components/Experience'
import Features from './components/Features'
import Product from './components/Product'
import Footer from './components/Footer'

function App() {
  return (
    <div className='min-h-screen bg-white'>
      <Navbar />
      <Hero />
      <Experience />
      <Features />
      <Product />
      <Footer />
    </div>
  )
}

export default App
