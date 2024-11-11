import Logo from "./Navbar_components/Logo"
import Right_navbar_container from "./Navbar_components/Right-Navbar-continer/Right_navbar_container"
import Shortcuts_home from "./Navbar_components/Shortcuts/Shortcuts_home"

function Navbar({changeMode}) {


  return (
    <div className="navbar">
    
            <Logo  />
            
            {/* Shortcuts */}
            <Shortcuts_home />
    
            <Right_navbar_container changeMode={changeMode}/>
    
        </div>
  )
}
export default Navbar