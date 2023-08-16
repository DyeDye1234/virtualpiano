import { useState, useRef, useEffect } from "react"
import "./virtualpiano.css"
import PianoKey from "./pianokey"
import { SplendidGrandPiano } from "smplr"

function VirtualPiano() {
  const [status, setStatus] = useState("start")
  const [piano, setPiano] = useState(undefined)
  const [octave, setOctave] = useState(3)

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
      <button onClick={() => setOctave(octave - 1)}>Down</button>
      <button onClick={() => setOctave(octave + 1)}>Up</button>
      <div className="container">
        <PianoKey
          onPress={() => {
            console.log(`C${octave}`)
            piano?.start({ note: `C${octave}` })
          }}>Q</PianoKey>

        <PianoKey keyType="black" onPress={() => {
          console.log(`C#${octave}`)
          piano?.start({ note: `C#${octave}` })
        }}>2</PianoKey>

        <PianoKey onPress={() => {
          console.log("D3")
          piano?.start({ note: "D" })
        }}>W</PianoKey>

        <PianoKey keyType="black" onPress={() => {
          console.log("D#3")
          piano?.start({ note: "D#" })
        }}>3</PianoKey>

        <PianoKey onPress={() => {
          console.log("E3")
          piano?.start({ note: "E" })
        }}>E</PianoKey>

        <PianoKey onPress={() => {
          console.log("F3")
          piano?.start({ note: "F" })
        }}>R</PianoKey>

        <PianoKey keyType="black" onPress={() => {
          console.log("F#3")
          piano?.start({ note: "F#" })
        }}>5</PianoKey>

        <PianoKey onPress={() => {
          console.log("G3")
          piano?.start({ note: "G3" })
        }}>T</PianoKey>

        <PianoKey keyType="black" onPress={() => {
          console.log("G#3")
          piano?.start({ note: "G#3" })
        }}>6</PianoKey>

        <PianoKey onPress={() => {
          console.log("A3")
          piano?.start({ note: "A3" })
        }}>Y</PianoKey>

        <PianoKey keyType="black" onPress={() => {
          console.log("A#3")
          piano?.start({ note: "A#3" })
        }}>7</PianoKey>

        <PianoKey onPress={() => {
          console.log("B3")
          piano?.start({ note: "B3" })
        }}>U</PianoKey>

      </div>
    </div>
  )
}

export default VirtualPiano
