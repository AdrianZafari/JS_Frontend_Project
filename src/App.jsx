import { useEffect, useState } from 'react'
import './App.css'
import Navbar from './Components/Navbar_home'
import Hero from './Components/Hero'
import Brands from './Components/Brands'
import Features from './Components/Features'
import How_does_it_work from './Components/How_does_it_work'
import Functions from './Components/Functions'
import Footer from './Components/Footer'
import Testimonial from './Components/Testimonial'
import AccordionItem from './Components/FAQ_Components/AccordionItem'
import FAQ_Tablet_Container from './Components/FAQ_Components/FAQ_Tablet_Container'
import FAQ_Mobile_container from './Components/FAQ_Components/FAQ_Mobile_container'
import FAQ_Pre_Accordion from './Components/FAQ_Components/FAQ_Pre_Accordion'


function App() {

  const [mode, setMode] = useState('light')

  const changeMode = () => {
    setMode( mode === 'light' ? 'dark' : 'light')
  }

  /* Testimonials is too formal and sounds foreign, called it reviews here to make it more recognisable*/
  const [reviews, setReviews] = useState([])
    
  useEffect(() => {
    const fetchReviews = async () => {
        try {
            const response = await fetch('https://win24-assignment.azurewebsites.net/api/testimonials')
            const data = await response.json()
            setReviews(data) 
        } catch(error) {
            console.error('Failed to fetch Testimonials:', error)
        }
    }
    fetchReviews()
  }, [])

  /* This is for the FAQ section, FAQ is a terrible variable name so I called it concerns */
  const [concerns, setConcerns] = useState([])

  useEffect(() => {
    const fetchConcerns = async () => {
      try {
        const response = await fetch('https://win24-assignment.azurewebsites.net/api/faq')
        const data = await response.json()
        setConcerns(data)
      } catch(error) {
        console.error('Failed to fetch FAQ;', error)
      }
    }
    fetchConcerns()
  }, [])

  /* This is for validating the email for the subscription and sending the confirmation message  */





  return (

      <body className={`${mode}-theme`}>

        <header>
          <Navbar className='navbar' changeMode={changeMode}/>
        </header>

        <Hero /> 

        <Brands />
        
        <Features />

        <How_does_it_work />

        <Functions />

        <section id="reviews">
            <div className="reviews-container">
                <div className="reviews-title">
                    <h2>Clients Are <br/> Loving Our App</h2>
                </div>
                {reviews.map((item) => <Testimonial key={item.id} review={item} />)}
            </div>
        </section>

        <section id="FAQ">
          <FAQ_Pre_Accordion />

          <div className="FAQ-right-container">
            {concerns.map((item) => <AccordionItem key={item.id} concern={item}/>)}
          </div>

          <FAQ_Tablet_Container />
          <FAQ_Mobile_container />
        </section>

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

                <form action="#" method="post" className="subscribe-email-bar">
                    <input 
                        type="email" 
                        placeholder="Your Email" 
                        className="email-input" 
                        pattern="^[^@\s]+@[^@\s]+\.[^@\s]+$" 
                        title="Please enter a valid email address." 
                        required 
                    />
                    <input type="submit" value="Subscribe" className="subscribe-button" />
                </form>
            </div>
            
        </section>

        {/* {console.log(subscribeForm)} */}

        <Footer />

      </body>
  )
}

export default App


