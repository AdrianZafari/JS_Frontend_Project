import Logo from "./Navbar_components/Logo"
import Right_navbar_contact from "./Navbar_components/Right-Navbar-continer/Right_navbar_contact"
import Shortcuts_contact from "./Navbar_components/Shortcuts/Shortcuts_contact"


function Navbar_contact({changeMode, mode}) {


  return (

      <header>
        <div className="navbar">
            <Logo />
            <Shortcuts_contact />
            <Right_navbar_contact mode = {mode} changeMode={changeMode}/>
            
        </div>
      </header>
  )
}
export default Navbar_contact