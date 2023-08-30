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

    window.addEventListener("keydown", onKeyDown)
    window.addEventListener("keyup", onKeyUp)

    return () => {
      window.removeEventListener("keydown", onKeyDown)
      window.removeEventListener("keyup", onKeyUp)
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
