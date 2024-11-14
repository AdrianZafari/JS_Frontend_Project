import Shortcut from "./Shortcut"

function Shortcuts_contact() {
  return (
    <ul className="links">
        <Shortcut href={"#contactUs"} href_name={'Contact'} />
        <Shortcut href={"#location"} href_name={'Location'} />
        <hr className="seperator"/>
        <Shortcut href={"/"} href_name={'Home'} /> 
    </ul>
  )
}
export default Shortcuts_contact