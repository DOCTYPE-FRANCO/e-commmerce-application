import { useState } from 'react'
import reactLogo from './assets/react.svg'
import { Routes, Route } from 'react-router-dom'
import Homepage from './Components/Homepage'
import Header from './Components/Header'
import Footer from './Components/Footer'


function App(){

  return (
    <div className="min-h-screen w-full relative">
      {/* Dashed Center Fade Grid */}
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `
            linear-gradient(to right, #e7e5e4 1px, transparent 1px),
            linear-gradient(to bottom, #e7e5e4 1px, transparent 1px)
          `,
          backgroundSize: "20px 20px",
          backgroundPosition: "0 0, 0 0",
          maskImage: `
          repeating-linear-gradient(
                  to right,
                  black 0px,
                  black 3px,
                  transparent 3px,
                  transparent 8px
                ),
                repeating-linear-gradient(
                  to bottom,
                  black 0px,
                  black 3px,
                  transparent 3px,
                  transparent 8px
                ),
              radial-gradient(ellipse 60% 60% at 50% 50%, #000 30%, transparent 70%)
          `,
          WebkitMaskImage: `
          repeating-linear-gradient(
                  to right,
                  black 0px,
                  black 3px,
                  transparent 3px,
                  transparent 8px
                ),
                repeating-linear-gradient(
                  to bottom,
                  black 0px,
                  black 3px,
                  transparent 3px,
                  transparent 8px
                ),
              radial-gradient(ellipse 60% 60% at 50% 50%, #000 30%, transparent 70%)
          `,
          maskComposite: "intersect",
          WebkitMaskComposite: "source-in",
        }}
      />
      {/* Your Content/Components */}
      <div>
        <Header />
        <div className='relative z-30'>
          <Routes>
            <Route path='/' element={<Homepage />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </div>
  )
}

export default App
