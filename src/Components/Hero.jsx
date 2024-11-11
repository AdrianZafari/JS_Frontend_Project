import Light_Dark_img from "./Hero_Components/Light_Dark_img"

function Hero() {
  return (
    <div id="hero">
    
      <div className="hero-title-tablet">
          <h1>Manage All Your <br/>Money in One App</h1>
      </div>
            
          <div className="hero-container-desktop">
              <div className="hero-left-panel">
                  <div className="hero-left-panel-top">
                      <div className="hero-title">
                          <h1>Manage All Your <br/>Money in One App</h1>
                      </div>
                      
                      <p className="hero-description">We offer you a new generation of mobile banking.<br/>Save, spend & manage money in your pocket.</p>
                      
                      <p className="hero-description-mobile">We offer you a new generation of mobile banking. Save, spend & manage money in your pocket.</p>
                      
                      <div className="hero-appstore">

                          <div className="appstore-icon">
                            <Light_Dark_img lightSrc={"images/ManageAll_phone/AppStore.svg"}
                                            darkSrc={"images/ManageAll_phone/dark/AppStore.svg"}
                                            alt={"Apple App Store"}/>
                          </div>

                          <div className="appstore-icon">
                            <Light_Dark_img lightSrc={"images/ManageAll_phone/Googleplay/GooglePlay.svg"}
                                            darkSrc={"images/ManageAll_phone/dark/Googleplay.svg"}
                                            alt={"Google Play Store"}/>
                          </div>

                      </div>

                      <div className="hero-appstore-mobile">

                          <div className="appstore-icon">
                            <Light_Dark_img lightSrc={"images/ManageAll_phone/AppStore.svg"}
                                                darkSrc={"images/ManageAll_phone/dark/AppStore.svg"}
                                                alt={"Apple App Store"}/>
                          </div>
      
                          <div className="appstore-icon">
                            <Light_Dark_img lightSrc={"images/ManageAll_phone/Googleplay/GooglePlay.svg"}
                                                darkSrc={"images/ManageAll_phone/dark/Googleplay.svg"}
                                                alt={"Google Play Store"}/>
                          </div>
                      </div>
                  </div>

                  <div className="discover-button">
                      <a href="#brands">
                          <img src="images/ManageAll_phone/next-btn.svg" alt="dropdown_button" className="light-show" /> 
                          <img src="images/ManageAll_phone/dark/chevron.svg" alt="dropdown_button" className="dark-show" />
                      </a>
                  <div><label htmlFor="img" className="button-text">Discover more</label></div>
                      
                  </div>
              </div>

              <div className="hero-right-panel">
                      <img src="images/ManageAll_phone/phones.svg" alt="two phones" />
              </div>
          </div>
    </div>
  )
}
export default Hero