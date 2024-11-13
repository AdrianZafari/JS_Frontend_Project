import { useState } from "react"


function Subscribe() {

  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')

  const handleEmailChange = (e) => {
    setEmail(e.target.value)
    setMessage(''); 
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    

    const emailRegex = /^[^@\s]+@[^@\s]+\.[^@\s]+$/
    
    if (!emailRegex.test(email)) { 
      setMessage('Email address not valid')
      
      return
    } 

    try {
      const response = await fetch('https://win24-assignment.azurewebsites.net/api/forms/subscribe', {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({email})
      })

      if (response.ok) { // checks for response in the 200-299 range
        setMessage('Thank you for subscribing!')
        setEmail(''); // clears the field after success
      } else {
        setMessage('Failed to subscribe. Please try again later.')
      }
    }
    catch(error) {
      setMessage('An error has occurred. Please try again later')
      console.error(error)
    }

  }

  return (
    <section id="subscribe">
            <div className="subscribe-container">
                <div className="subscribe-text-container">
                    <div className="subscribe-icon">
                        <img src="images/subscribe/notification-icon-1.svg.svg" alt="bell" />
                    </div>

                    <h3 className="subscribe-desktop-text">
                        Subscribe to our newsletter to stay<br/>informed about latest updates
                    </h3>

                    <h3 className="subscribe-tablet-text">Subscribe to our<br/> newsletter </h3>
                </div>

                <form onSubmit={handleSubmit} method="post" className="subscribe-email-bar">
                    <input 
                        type="email" 
                        placeholder="Your Email" 
                        className="email-input" 
                        value={email}
                        onChange={handleEmailChange} 
                        required 
                        />
                    <input type="submit" value="Subscribe" className="subscribe-button" />
                </form>
            </div>
            {message && 
              <p className={`confirmation-message ${message === "Thank you for subscribing!" ? 'success' : 'failure'}`}>
                {message}
              </p>
            }
        </section>
  )
}

export default Subscribe