import { useState, useEffect } from "react"
import Navbar_contact from "../Components/Navbar_contact"
import Footer from "../Components/Footer"
import ContactUs from "../Components/ContactUs"
import Location from "../Components/Location"




const Contact = () => {
  
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
        <Navbar_contact className='navbar' mode = {mode} changeMode={changeMode}/>
        <ContactUs />
        <Location />
        <Footer />
      </body>
    </>
  )
}
export default Contact