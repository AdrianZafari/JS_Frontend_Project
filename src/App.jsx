import { useState } from 'react'
import './App.css'
import Navbar from './Components/Navbar_home'
import Hero from './Components/Hero'
import Brands from './Components/Brands'
import Features from './Components/Features'
import How_does_it_work from './Components/How_does_it_work'
import Functions from './Components/Functions'
import Footer from './Components/Footer'


function App() {
  const [mode, setMode] = useState('light')

  const changeMode = () => {
    setMode( mode === 'light' ? 'dark' : 'light')
  }


  return (

      <body className={`${mode}-theme`}>

        <header>
          <Navbar className='navbar' changeMode={changeMode}/>
        </header>

        <Hero /> 

        <Brands />
        
        <Features />

        <How_does_it_work />

        <Functions />
        

        <Footer />

      </body>
  )
}

export default App
