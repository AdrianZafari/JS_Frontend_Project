function Light_Dark_img( { lightSrc, alt, darkSrc } ) {
  return (
    <>
      <img src={lightSrc} alt={alt} className="light-show" />
      <img src={darkSrc} alt={alt} className="dark-show" />
    </>
  )
}
export default Light_Dark_img