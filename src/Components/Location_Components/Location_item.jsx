function Location_item( {title, address, phoneNo, week_opening, week_closing, weekend_opening, weekend_closing} ) {

  return (
    <div className="location-item">
      <h3>{title}</h3>
            
      <div className="location-item-textbox">
        <p> <img src="images\contact\Location.svg" alt="Location" /> {address}</p>

        <p><img src="images\contact\Telephone.svg" alt="Location" /> {phoneNo}</p>
        
        <div className="location-item-times">
          

        <i className="fa-regular fa-clock"></i>
          <div className="location-item-timeValues">
            <p>Mon – Fri: {week_opening} – {week_closing}</p>
            <p>Sat – Sun: {weekend_opening} – {weekend_closing}</p>
          </div>


        </div>  
      
      </div>
    </div>
  )
}
export default Location_item