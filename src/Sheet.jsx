import Sheet1 from "./assets/amazing-grace.png"
import "./Sheet.css"
import React, { useState, useEffect, useRef } from "react"

function SheetMusic() {
  const containerElement = useRef(null)
  const [count, setCount] = useState(10)
  const [interval, setInterval] = useState(1000)

  useEffect(() => {
    const scrollInterval = setInterval(() => {
      if (containerElement.current) {
        containerElement.current.scrollTop += count;
      }
    }, interval)

    return () => clearInterval(scrollInterval)

  }, [count, interval])

  return (
    <>
      <div className="sheet" ref={containerElement}>
        <img src={Sheet1} alt="sheet music"></img>
      </div>
      <button onClick={() => {
        setCount(20)
        console.log("Arrow function")
      }}>Scroll</button>
      <div>
        <label>Set Interval: </label>
        <input
          type="number"
          value={interval}
          onChange={(e) => setInterval(Number(e.target.value))}
        />
      </div>
    </>
  )
}

export default SheetMusic
