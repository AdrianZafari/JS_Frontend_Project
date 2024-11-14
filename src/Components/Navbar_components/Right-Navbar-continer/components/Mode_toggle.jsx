

function Mode_toggle({changeMode, mode}) {
  
  return (
    <>
      <p className="color-theme">{mode === 'light' ? 'Light Mode' : 'Dark Mode'}</p>
      <label className="switch">
        <input type="checkbox" onChange={changeMode} checked={mode === 'dark'}/>
        <span className="slider round"></span>
      </label>
    </>
  )
}
export default Mode_toggle