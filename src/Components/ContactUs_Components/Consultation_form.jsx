import axios from "axios"
import { useState } from "react"



function Consultation_form() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    specialist: ''
  })

  const [errors, setErrors] = useState({})
  const [confirmation, setConfirmation] = useState('')
  const [error, setError] = useState("")

  const validate = () => {
    const newErrors = {}

    // Validation of "Full name"
    if (!/^[A-Za-z-]+ [A-Za-z-]+$/.test(formData.fullName)) {
      newErrors.fullName = 'Please enter your first and last name. Avoid uneccessary spaces.'
    }

    if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address.'
    }

    if (!formData.specialist) {
      newErrors.specialist = "Please select a specialist."
    }

    setErrors(newErrors)

    return Object.keys(newErrors).length === 0 // Checks if any validation errors were found, 0 means no errors
  }


  const handleChange = (e) => {
    const {name, value} = e.target
    setFormData({
      ...formData, // prevents unwanted mutations when one field is updated
      [name]: value // updates the selected field
    })
    setErrors({...errors, [name]:''})
    setConfirmation("")
  }

  // This function was done with the help of ChatGPT
  const handleSubmit = async (e) => {
    e.preventDefault(); 
    setConfirmation("");
    setError("");

    if (validate()) {
      
      try {
        const response = await axios.post(
          "https://win24-assignment.azurewebsites.net/api/forms/contact",
          formData
        );
        console.log(response.data)
        setConfirmation("Your appointment has been successfully scheduled!");
      } catch (err) {
        console.log(err)
        setError("There was an issue submitting the form. Please try again.");
      }
    }
  };


  return (
    <>
    <form className="contactUs-consultation-form" onSubmit={handleSubmit}>

      <div className="consultation-form">

        <div className="consultation-form-input">
          <p className="field-title">Full name</p>
          <input 
                type="name"
                className="name-input"
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                required  />
          {errors.fullName && <p className="error-message failure">{errors.fullName}</p>}
        </div>
        
        <div className="consultation-form-input">
          <p className="field-title">Email address</p>
          <input 
                type="email"
                className="name-input"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required  />
          {errors.email && <p className="error-message failure">{errors.email}</p>}
        </div>
        
        <div className="consultation-form-input">
          <p className="field-title">Specialist</p>
          <select 
                  name="specialist" 
                  className="name-input"
                  value={formData.specialist}
                  onChange={handleChange}
                  required>

            <option value=""></option>
            <option value="Saul Goodman">Saul Goodman</option>
            <option value="John Silicon">John Silicon</option>
            <option value="Curtis J. Jackson">Curtis J. Jackson</option>
            <option value="Johnny Cash">Johnny Cash</option>
          </select>
          {errors.specialist && <p className="error-message failure">{errors.specialist}</p>}
        </div>
      </div>


      {confirmation && <p className="confirmation-message success">{confirmation}</p>}
      {error && <p className="error-message failure">{error}</p>}
      <input type="submit" value={'Make an appointment'} className="consultation-button"/> 
             
      </form>

    </>
  )
}
export default Consultation_form