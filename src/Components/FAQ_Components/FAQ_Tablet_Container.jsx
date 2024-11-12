function FAQ_Tablet_Container() {
  return (
    <div className="FAQ-tablet-container">
      <div className="left-container-boxes">
          <div className="contact-box">
              <div className="contact-icon">
                  <img src="images/FAQ_icons/call_icon.svg" alt="call" />
              </div>
              <p>Still have questions?</p>
              <a href="#call-page">
                  <span id="call">Call Us</span>
                  <img src="images/FAQ_icons/call_arrow.svg" alt="arrow" /> 
              </a>
          </div>
          <div className="contact-box">
              <div className="contact-icon">
                  <img src="images/FAQ_icons/message_icon.svg" alt="message" />
              </div>
              <p> Don&apos;t like phone calls? </p>
              <a href="#message-page">
                  <span id="message">Message us</span>
                  <img src="images/FAQ_icons/message_arrow.svg" alt="arrow" /> 
              </a>
          </div>
      </div>
    </div>
  )
}
export default FAQ_Tablet_Container