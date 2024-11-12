function Testimonial({review}) {
  

  return (
    <div className="reviews-testimonial">
        <div className="testimonial-quotes">
            <img src="images/Desktop_Only/section2/quotes.svg" alt="quotes" />
        </div>
        <div className="testimonial-box">
            <div className="testimonial-rating">
                <img src={review.starRating === 4 ? "images/Desktop_Only/section2/rating1.svg" : "images/Desktop_Only/section2/rating2.svg"} alt={review.starRating === 4 ? "4 stars": "5 stars"} />
            </div>
            <div className="testimonial-text">
                {review.comment}
            </div>
            <div className="testimonial-user">
                <div className="testimonial-user-face">
                    <img src={`${review.avatarUrl}`} alt="face 1" />
                </div>
                <div className="testimonial-user-details">
                    <h4> {review.author} </h4>
                    <p> {review.jobRole} </p>
                </div>
            </div>
        </div>
    </div>
  )
}
export default Testimonial