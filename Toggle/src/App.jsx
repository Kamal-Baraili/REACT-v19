import { useEffect, useState } from 'react'
import './App.css'

function App() {
  const [isClicked, setIsClicked] = useState(false);

  const handleClick = () => {
    setIsClicked((prev) => !prev);
  }

  return (
    <>
      <div onClick={handleClick} className={`toggle_container`} style={isClicked ? {background: "green"} : {background: "gray"}}>
        <div className={`toggle_switch ${isClicked ? 'on' : 'off'}`}>
          <span>{isClicked ? 'On' : 'Off'}</span>
        </div>
      </div>
    </>
  )
}

export default App
