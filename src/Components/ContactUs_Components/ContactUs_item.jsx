function ContactUs_item( { icon, itemTitle, itemContent, linkAddress = '', linkText  } ) {
  return (
    <div className="contactUs-item">
        <div className="contactUs-item-img">
          <i className= {icon} ></i>
        </div>
        <div className="contactUs-item-textbox">
            <h3>{itemTitle}</h3>
            <p>{itemContent}</p>
            <a href= {linkAddress}> 
              {linkText}
              <i className="fa-solid fa-arrow-right"></i>
            </a>
        </div>
      </div>
  )
}
export default ContactUs_item