function Features_row_item( {src, alt, h3, text} ) {
  return (
    <div className="features-row-item">
        <div className="features-row-item-img"><img src= {src} alt= {alt} /></div>
        <div className="features-row-item-text">
            <h3>{h3}</h3>
            <p>{text}</p>
        </div>
    </div>
  )
}
export default Features_row_item