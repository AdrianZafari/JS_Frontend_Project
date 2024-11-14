import Logo from "./Navbar_components/Logo"
import Right_navbar_home from "./Navbar_components/Right-Navbar-continer/Right_navbar_home"
import Shortcuts_home from "./Navbar_components/Shortcuts/Shortcuts_home"

function Navbar_home({changeMode, mode}) {


  return (

      <header>
        <div className="navbar">
            <Logo  />
            <Shortcuts_home />
            <Right_navbar_home mode = {mode} changeMode={changeMode}/>
        </div>
      </header>
  )
}
export default Navbar_home