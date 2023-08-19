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
      <div className="piano-container">
        <PianoKey
          onPress={() => {
            console.log(`C${octave}`)
            piano?.start({ note: `C${octave}` })
          }}
        >
          Q
        </PianoKey>

        <PianoKey
          keyType="black"
          onPress={() => {
            console.log(`C#${octave}`)
            piano?.start({ note: `C#${octave}` })
          }}
        >
          2
        </PianoKey>

        <PianoKey
          onPress={() => {
            console.log(`D${octave}`)
            piano?.start({ note: `D${octave}` })
          }}
        >
          W
        </PianoKey>

        <PianoKey
          keyType="black"
          onPress={() => {
            console.log(`D#${octave}`)
            piano?.start({ note: `D#${octave}` })
          }}
        >
          3
        </PianoKey>

        <PianoKey
          onPress={() => {
            console.log(`E${octave}`)
            piano?.start({ note: `E${octave}` })
          }}
        >
          E
        </PianoKey>

        <PianoKey
          onPress={() => {
            console.log(`F${octave}`)
            piano?.start({ note: `F${octave}` })
          }}
        >
          R
        </PianoKey>

        <PianoKey
          keyType="black"
          onPress={() => {
            console.log(`F#${octave}`)
            piano?.start({ note: `F#${octave}` })
          }}
        >
          5
        </PianoKey>

        <PianoKey
          onPress={() => {
            console.log(`G${octave}`)
            piano?.start({ note: `G${octave}` })
          }}
        >
          T
        </PianoKey>

        <PianoKey
          keyType="black"
          onPress={() => {
            console.log(`G#${octave}`)
            piano?.start({ note: `G#${octave}` })
          }}
        >
          6
        </PianoKey>

        <PianoKey
          onPress={() => {
            console.log(`A${octave}`)
            piano?.start({ note: `A${octave}` })
          }}
        >
          Y
        </PianoKey>

        <PianoKey
          keyType="black"
          onPress={() => {
            console.log(`A#${octave}`)
            piano?.start({ note: `A#${octave}` })
          }}
        >
          7
        </PianoKey>

        <PianoKey
          onPress={() => {
            console.log(`B${octave}`)
            piano?.start({ note: `B${octave}` })
          }}
        >
          U
        </PianoKey>
        <PianoKey
          onPress={() => {
            console.log(`C${octave}`)
            piano?.start({ note: `C${octave}` })
          }}
        >
          Q
        </PianoKey>

        <PianoKey
          keyType="black"
          onPress={() => {
            console.log(`C#${octave}`)
            piano?.start({ note: `C#${octave}` })
          }}
        >
          2
        </PianoKey>

        <PianoKey
          onPress={() => {
            console.log(`D${octave}`)
            piano?.start({ note: `D${octave}` })
          }}
        >
          W
        </PianoKey>

        <PianoKey
          keyType="black"
          onPress={() => {
            console.log(`D#${octave}`)
            piano?.start({ note: `D#${octave}` })
          }}
        >
          3
        </PianoKey>

        <PianoKey
          onPress={() => {
            console.log(`E${octave}`)
            piano?.start({ note: `E${octave}` })
          }}
        >
          E
        </PianoKey>

        <PianoKey
          onPress={() => {
            console.log(`F${octave}`)
            piano?.start({ note: `F${octave}` })
          }}
        >
          R
        </PianoKey>

        <PianoKey
          keyType="black"
          onPress={() => {
            console.log(`F#${octave}`)
            piano?.start({ note: `F#${octave}` })
          }}
        >
          5
        </PianoKey>

        <PianoKey
          onPress={() => {
            console.log(`G${octave}`)
            piano?.start({ note: `G${octave}` })
          }}
        >
          T
        </PianoKey>

        <PianoKey
          keyType="black"
          onPress={() => {
            console.log(`G#${octave}`)
            piano?.start({ note: `G#${octave}` })
          }}
        >
          6
        </PianoKey>

        <PianoKey
          onPress={() => {
            console.log(`A${octave}`)
            piano?.start({ note: `A${octave}` })
          }}
        >
          Y
        </PianoKey>

        <PianoKey
          keyType="black"
          onPress={() => {
            console.log(`A#${octave}`)
            piano?.start({ note: `A#${octave}` })
          }}
        >
          7
        </PianoKey>

        <PianoKey
          onPress={() => {
            console.log(`B${octave}`)
            piano?.start({ note: `B${octave}` })
          }}
        >
          U
        </PianoKey>
      </div>
    </div>
  )
}

export default VirtualPiano
