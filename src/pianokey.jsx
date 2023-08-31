import { useState, useEffect } from "react"

function PianoKey({ keyType, children, keyToPress : defaultKeyToPress, onPress }) {
  const keyToPress = defaultKeyToPress || children

  const [pressed, setPressed] = useState(false)
  useEffect(() => {
    const onKeyDown = (event) => {
      event.preventDefault()
      console.log(event.key, event.repeat)
      if (event.key.toUpperCase() === keyToPress.toUpperCase() && !event.repeat) {
        setPressed(true)
        console.log("onPress")
        onPress?.()
      }
    }

    const onKeyUp = (event) => {
      if (event.key.toUpperCase() === keyToPress.toUpperCase()) {
        setPressed(false)
      }
    }

    const handleTouchStart = (event) => {
      event.preventDefault();
      event.changedTouches.forEach((touch) => {
        const key = touch.target.dataset.key;
        setPressed(true)
        handleKeyPress(key);
      });
    };

    const handleTouchEnd = (event) => {
      event.preventDefault();
      event.changedTouches.forEach((touch) => {
        const key = touch.target.dataset.key;
        setPressed(true)
        handleKeyPress(key);
      });
    };

    window.addEventListener("keydown", onKeyDown)
    window.addEventListener("keyup", onKeyUp)
    // window.addEventListener("touchstart",handleTouchStart)
    // window.addEventListener("touchend",handleTouchEnd)

    return () => {
      window.removeEventListener("keydown", onKeyDown)
      window.removeEventListener("keyup", onKeyUp)
      // window.removeEventListener("touchstart",handleTouchStart)
      // window.removeEventListener("touchend",handleTouchEnd)
    }
  }, [keyToPress, onPress])

  const pressedStyle = pressed ? "pressed" : " "
  const keyStyle = keyType === "black" ? "bkey" : "wkey"
  return (
    <button
      onMouseDown={function () {
        setPressed(true)
        onPress?.()
      }}
      onMouseUp={function () {
        setPressed(false)
      }}
      className={`key ${keyStyle} ${pressedStyle}`}
    >
      {children}
    </button>
  )
}

export default PianoKey
