import { useEffect, useState } from "react"
import Testimonial from "./Testimonials_Components/Testimonial"

function Testimonials() {
  
    /* Testimonials is too formal and sounds foreign, called it reviews on the website to make it more recognisable to the user*/
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

  return (
    <section id="reviews">
        <div className="reviews-container">
            <div className="reviews-title">
                <h2>Clients Are <br/> Loving Our App</h2>
            </div>
            {reviews.map((item) => <Testimonial key={item.id} review={item} />)}
        </div>
    </section>
  )
}
export default Testimonials