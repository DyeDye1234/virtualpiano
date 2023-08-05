import { useState, useEffect } from 'react'

function PianoKey({ type, children, onPress }) {
    const [pressed, setPressed] = useState(false)
    useEffect(() => {
        const onKeyDown = (event) => {
            console.log(event.key)
            if (event.key.toUpperCase() === children) {
                setPressed(true)
                onPress?.()
            }
        }

        const onKeyUp = (event) => {
            if (event.key.toUpperCase() === children) {
                setPressed(false)
            }
        }

        window.addEventListener("keydown", onKeyDown)
        window.addEventListener("keyup", onKeyUp)

        return () => {
            window.removeEventListener("keydown", onKeyDown)
            window.removeEventListener("keyup", onKeyUp)
        }

    }, [])

    const pressedStyle = pressed ? "pressed" : " "
    const keyStyle = type === "black" ? "bkey" : "wkey"
    return <button onMouseDown={function () { setPressed(true) }} onMouseUp={function () { setPressed(false) }} className={`key ${keyStyle} ${pressedStyle}`}>{children}</button>
}

export default PianoKey