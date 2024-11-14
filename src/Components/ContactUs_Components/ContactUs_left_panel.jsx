import ContactUs_item from "./ContactUs_item"

function ContactUs_left_panel() {
  return (
    <div className="contactUs-left-container">
        <h2>Contact Us</h2>
        <div className="contactUs-items-Container">
          <ContactUs_item 
                          itemTitle={'Email us'}
                          itemContent={'Please feel free to drop us a line. We will respond as soon as possible.'}
                          linkText={'Leave a message'}
                          icon={"fa-regular fa-envelope"}
          />

          <ContactUs_item 
                          itemTitle={'Careers'}
                          itemContent={'Sit ac ipsum leo lorem magna nunc mattis maecenas non vestibulum.'}
                          linkText={'Send an application'}
                          icon={"fa-solid fa-user-plus"}
          />
        </div>
      </div>
  )
}
export default ContactUs_left_panel