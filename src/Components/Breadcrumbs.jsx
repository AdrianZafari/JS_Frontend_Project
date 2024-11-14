function Breadcrumbs() {
  return (
    <div className="breadcrumbs">

      <div className="breadcrumb-item" href="/">
      <a className="breadcrumb-item" href="/">
        <i className="fa-solid fa-house"></i>
          Homepage
      </a>
      </div>

      <img src="images\contact\DoubleRightChevron.svg" alt="Double Chevron" />
      
      <a className="breadcrumb-item current" href="/contact">
        Contact
      </a>
    
    </div>
  )
}
export default Breadcrumbs