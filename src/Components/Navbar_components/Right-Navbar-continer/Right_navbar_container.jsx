import { useState } from "react"
import Mode_toggle from "./components/Mode_toggle"

function Right_navbar_container( {changeMode} ) {

  const [isOpen, setIsOpen] = useState(false)

  const handleToggle = () => {
    setIsOpen(!isOpen)
  }

  return (
    <div className="right-navbar-container">
      <div className="theme-toggle-container">

          <Mode_toggle changeMode={changeMode} />
    
          <a href="#Sign-in" className="action_btn">
              <div className="user-icon">
                  <img src="images/Header/desktop_only/User_Icon.svg" alt="User icon" />
              </div>
              <p className="sign-in-text">Sign in/up</p>
          </a>

          {/* Dropdown Menu Contents */}
          <div className={`dropdown_menu ${isOpen ? "open" : ""}`}>
            <li><a href="#hero">Home</a></li>
            <li><a href="#brands">Features</a></li>
            <li id="dropdown-reviews"><a href="#reviews">Reviews</a></li>
            <li><a href="#FAQ">FAQ</a></li>
            <li><a href="#subscribe">Subscribe</a></li>
            <hr className="seperator-dropdown"/>
            <li ><a href="#Contact"> Contact </a></li>
            <a href="#Sign-in" className="action_btn" id="action_btn_dropdown">
              <div className="user-icon">
                <img src="images/Header/desktop_only/User_Icon.svg" alt="User icon" />
              </div>
              <p className="sign-in-text">Sign in/up</p>
            </a>
          </div>

          <div className="toggle_btn" onClick={handleToggle}>
            <i className={`fa-solid ${isOpen ? "fa-xmark" : "fa-bars"}`}></i>
          </div>
          
      </div>
    </div>
  )
}
export default Right_navbar_container