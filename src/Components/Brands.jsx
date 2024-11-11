import Brand from "./Hero_Components/Brand"

function Brands() {
  return (
    <div id="brands">
      <Brand className={'brand'} src={'images/brand_icons/light/logo1.svg'} alt={"brand 1"}/>
      <Brand className={'brand'} src={'images/brand_icons/light/logo2.svg'} alt={"brand 2"}/>
      <Brand className={'brand'} src={'images/brand_icons/light/logo3.svg'} alt={"brand 3"}/>
      <Brand className={'brand'} src={'images/brand_icons/light/logo4.svg'} alt={"brand 4"}/>

      <Brand className={'brand brand-5'} src={'images/brand_icons/light/desktop_only/logo5.svg'} alt={"brand 5"}/>
      <Brand className={'brand brand-6'} src={'images/brand_icons/light/desktop_only/logo6.svg'} alt={"brand 6"}/>
    </div>
  )
}
export default Brands