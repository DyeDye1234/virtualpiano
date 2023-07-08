import Sheet1 from "./assets/amazing-grace.png"
import "./Sheet.css"
import React from "react"

function SheetMusic() {
  const containerElement = React.useRef(null)
  return (
    <div>
      <div className="sheet" ref={containerElement}>
        <img src={Sheet1}></img>
      </div>
      <button onClick={() => { containerElement.current.scrollTop += 200 }}>DOWN</button>
    </div>
  )
}
export default SheetMusic
