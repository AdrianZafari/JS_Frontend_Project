import { useState, useEffect } from 'react'

import Navbar_home from '../Components/Navbar_home'
import Hero from '../Components/Hero'
import Brands from '../Components/Brands'
import Features from '../Components/Features'
import How_does_it_work from '../Components/How_does_it_work'
import Functions from '../Components/Functions'
import Footer from '../Components/Footer'
import Subscribe from '../Components/Subscribe'
import FAQ from '../Components/FAQ'
import Testimonials from '../Components/Testimonials'

function Home() {

  const [mode, setMode] = useState( localStorage.getItem('theme') ||'light')

  const changeMode = () => {
    setMode( mode === 'light' ? 'dark' : 'light')
    localStorage.setItem('theme', mode === 'light' ? 'dark' : 'light' ) // stores choice in local storage, overwriting itself each time
  }

  // Immediately applies the theme upon refreshing or returning to the page. 
  useEffect(() => {
    document.body.className = `${mode}-theme`
  }, [mode])

  return (
    <>
      <body className={`${mode}-theme`}>
        <Navbar_home className='navbar' mode = {mode} changeMode={changeMode}/>
          <Hero /> 
          <Brands />
          <Features />
          <How_does_it_work />
          <Functions />
          <Testimonials />
          <FAQ />
          <Subscribe />
        <Footer />
      </body>
    </>
  )
}
export default Home