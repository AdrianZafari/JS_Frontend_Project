

function Mode_toggle({changeMode}) {
  

  return (
    <>
      <p className="color-theme">Light Mode</p>
      <label className="switch">
        <input type="checkbox" onChange={changeMode} />
        <span className="slider round"></span>
      </label>
    </>
  )
}
export default Mode_toggle