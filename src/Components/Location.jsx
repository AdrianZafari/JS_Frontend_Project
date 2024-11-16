import Location_item from "./Location_Components/Location_item"
import Location_socials from "./Location_Components/Location_socials"

function Location() {
  return (
    <div id="location">
      
      <div className="location-parent-container">
        <div className="location-image">
          <img src="/images/contact/Map.svg" alt="map" />
        </div>
  
        <div className="location-right-container">
          
          <div className="location-items-container">

            <Location_item title={'Medical Center 1'}
                             address={'4517 Washington Ave. Manchester, Kentucky 39495'}
                             phoneNo={'(406) 555-0120'} 
                             week_opening={"9:00"}
                             week_closing={"22:00"}
                             weekend_opening={"9:00"}
                             weekend_closing={"20:00"}
                             />


            <Location_item title={'Medical Center 2'}
                             address={'2464 Royal Ln. Mesa, New Jersey 45463'}
                             phoneNo={'(406) 544-0123'} 
                             week_opening={"9:00"}
                             week_closing={"22:00"}
                             weekend_opening={"9:00"}
                             weekend_closing={"20:00"}
                             />
            

          </div>
  
          <Location_socials />
          
        </div>
      </div>
    
    </div>
  )
}
export default Location