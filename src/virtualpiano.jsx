import { useState, useRef, useEffect } from "react"
import "./virtualpiano.css"
import PianoKey from "./pianokey"
import { SplendidGrandPiano } from "smplr"

function VirtualPiano() {
  const [status, setStatus] = useState("start")
  const [piano, setPiano] = useState(undefined)

  const loadPiano = () => {
    if (piano) return
    setStatus("loading")
    const newPiano = new SplendidGrandPiano(new AudioContext())
    setPiano(newPiano)
    newPiano.loaded().then(() => {
      setStatus("ready")
    })
  }
  return (
    <div>
      <div>{status}</div>
      <button onClick={() => loadPiano()}>Start</button>
      <button onClick={() => piano?.start({ note: "C3" })}>Play</button>
      <div className="container">
        <PianoKey
          onPress={() => {
            console.log("C3")
            piano?.start({ note: "C3" })
          }}
        >
          Q
        </PianoKey>

        <PianoKey keyType="black">2</PianoKey>
        <PianoKey>W</PianoKey>
        <PianoKey keyType="black">3</PianoKey>
        <PianoKey>E</PianoKey>
        <PianoKey>R</PianoKey>
        <PianoKey keyType="black">5</PianoKey>
        <PianoKey>T</PianoKey>
        <PianoKey keyType="black">6</PianoKey>
        <PianoKey>Y</PianoKey>
        <PianoKey keyType="black">7</PianoKey>
        <PianoKey>U</PianoKey>
      </div>
    </div>
  )
}

export default VirtualPiano
