import Features_rows from "./Features_Components/Features_rows"

function Features() {
    return (
    <section id="app_features">
      <div className="features-container">
          
          <div className="left-features-container">
              <img src="images/features_icons/desktop_only/phoneLeft.svg" alt="Image of Phone" />
          </div>

          <div className="right-features-container">

              <div className="features-title-container">
                  <div className="features-title"><h3>App Features</h3></div>

                  <div className="features-subtitle"><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus vitae quae molestiae ex, voluptates consequuntur inventore officiis quas odit molestias tempore eligendi ab? Id sunt hic quasi nostrum, reiciendis doloremque.</p></div>
              </div>

              <Features_rows />

          </div>
      </div>
    </section>
  )
}
export default Features