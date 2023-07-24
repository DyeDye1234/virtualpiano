import Sheet1 from "./assets/amazing-grace.png"
import "./Sheet.css"
import { useState, useRef, useEffect } from "react"

function SheetMusic() {
  const containerElement = useRef(null)
  const directionRef = useRef(1)
  const [count, setCount] = useState(10)
  const [duration, setDuration] = useState(1000)
  const [scrollIntervalId, setScrollIntervalId] = useState(null)

  const startScrolling = (newDirection) => {
    stopScrolling() // Stop any previous scrolling
    directionRef.current = newDirection
    const scrollInterval = setInterval(() => {
      if (containerElement.current) {
        containerElement.current.scrollTop += directionRef.current * count
      }
    }, duration)
    setScrollIntervalId(scrollInterval)
  }

  const stopScrolling = () => {
    if (scrollIntervalId) {
      clearInterval(scrollIntervalId)
      setScrollIntervalId(null)
    }
  }

  // Make sure to clear any intervals when the component unmounts
  useEffect(() => {
    return () => {
      stopScrolling()
    }
  }, [])

  return (
    <>
      <div className="sheet" ref={containerElement}>
        <img src={Sheet1} alt="sheet music"></img>
      </div>
      <button
        onClick={() => {
          setCount(20)
          startScrolling(1) // Start scrolling down
        }}
      >
        Scroll Down
      </button>
      <button
        onClick={stopScrolling}
      >
        Stop
      </button>
      <button
        onClick={() => startScrolling(-1)} // Start scrolling up
      >
        Scroll Up
      </button>
      <div>
        <label>Set Interval: </label>
        <input
          type="number"
          value={duration}
          onChange={(e) => setDuration(Number(e.target.value))}
        />
      </div>
    </>
  )
}

export default SheetMusic


