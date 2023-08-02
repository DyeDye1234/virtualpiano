import { useState, useRef, useEffect } from "react"
import "./virtualpiano.css"

function VirtualPiano() {
    const [keypressed, setkeypressed] = useState({})
    useEffect(() => {
        addEventListener("keydown", (event) => {
            console.log(event.key)
            setkeypressed((prev) => ({ ...prev, [event.key]: true }))
        });

        addEventListener("keyup", (event) => {
            console.log(event.key)
            setkeypressed((prev) => ({ ...prev, [event.key]: false }))
        });


        return () => { }
    }, [])


    return <div>
        <div className={keypressed["a"] ? "key" : ""}>a</div>
        <div className={keypressed["s"] ? "key" : ""}>s</div>
        <div className={keypressed["d"] ? "key" : ""}>d</div>
        <div className={keypressed["f"] ? "key" : ""}>f</div>
    </div>


}

export default VirtualPiano