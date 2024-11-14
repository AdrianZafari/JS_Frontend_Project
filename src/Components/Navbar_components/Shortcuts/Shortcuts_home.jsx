import Shortcut from "./Shortcut"

function Shortcuts() {
  return (
    <ul className="links">
          <Shortcut href={"#hero"} href_name={'Home'} />
          <Shortcut href={"#brands"} href_name={'Features'} />
          <Shortcut href={"#functions"} href_name={'Functions'} /> 
          <Shortcut href={"#reviews"} href_name={'Reviews'} /> 
          <Shortcut href={"#FAQ"} href_name={'FAQ'} /> 
          <Shortcut href={"#subscribe"} href_name={'Subscribe'} /> 
          <hr className="seperator"/>
          <Shortcut href={"/Contact"} href_name={'Contact'} /> 
      </ul>
  )
}
export default Shortcuts