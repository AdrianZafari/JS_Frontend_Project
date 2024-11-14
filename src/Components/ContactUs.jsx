// import { useState } from "react";
import Breadcrumbs from "./Breadcrumbs"
import ContactUs_left_panel from "./ContactUs_Components/ContactUs_left_panel"

function ContactUs() {
  // const [formData, setFormData] = useState({
  //   fullName: '',
  //   email: '',
  //   specialist: '',
  // });

  // const handleChange = (e) => {
  //   const { name, value } = e.target;
  //   setFormData({ ...formData, [name]: value });
  // };

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   console.log("Form submitted:", formData);
  //   // Add form submission logic here, such as API calls
  // };
  return (
   
  <div id="contactUs">
    <Breadcrumbs />

    <div className="contactUs-parent-container">
      <ContactUs_left_panel />

      <div className="ContactUs-right">
      <h2>Get Online Consultation</h2>

      </div>

    </div>



  </div>

  )
}
export default ContactUs