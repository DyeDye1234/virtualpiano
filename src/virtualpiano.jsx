import { useState } from "react"
import "./virtualpiano.css"
import PianoKey from "./pianokey"
import { SplendidGrandPiano } from "smplr"

function VirtualPiano() {
  const [status, setStatus] = useState("Start")
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
    <div style={{ maxWidth: "100%", width: "100%" }}>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          gap: "2rem",
          padding: "0.5rem",
        }}
      >
        <button onClick={() => loadPiano()}>{status}</button>
        <div style={{ display: "flex", gap: "1rem" }}>
          <div>Octave: </div>
          <button onClick={() => setOctave(octave - 1)}>{"<"}</button>
          <div>{octave}</div>
          <button onClick={() => setOctave(octave + 1)}>{">"}</button>
        </div>
      </div>
      <div className="piano-container">
        <PianoKey
          onPress={() => {
            console.log(`C${octave}`)
            piano?.start({ note: `C${octave}` })
          }}
        >
          Tab
        </PianoKey>

        <PianoKey
          keyType="black"
          onPress={() => {
            console.log(`C#${octave}`)
            piano?.start({ note: `C#${octave}` })
          }}
        >
          1
        </PianoKey>

        <PianoKey
          onPress={() => {
            console.log(`D${octave}`)
            piano?.start({ note: `D${octave}` })
          }}
        >
          Q
        </PianoKey>

        <PianoKey
          keyType="black"
          onPress={() => {
            console.log(`D#${octave}`)
            piano?.start({ note: `D#${octave}` })
          }}
        >
          2
        </PianoKey>

        <PianoKey
          onPress={() => {
            console.log(`E${octave}`)
            piano?.start({ note: `E${octave}` })
          }}
        >
          W
        </PianoKey>

        <PianoKey
          onPress={() => {
            console.log(`F${octave}`)
            piano?.start({ note: `F${octave}` })
          }}
        >
          E
        </PianoKey>

        <PianoKey
          keyType="black"
          onPress={() => {
            console.log(`F#${octave}`)
            piano?.start({ note: `F#${octave}` })
          }}
        >
          4
        </PianoKey>

        <PianoKey
          onPress={() => {
            console.log(`G${octave}`)
            piano?.start({ note: `G${octave}` })
          }}
        >
          R
        </PianoKey>

        <PianoKey
          keyType="black"
          onPress={() => {
            console.log(`G#${octave}`)
            piano?.start({ note: `G#${octave}` })
          }}
        >
          5
        </PianoKey>

        <PianoKey
          onPress={() => {
            console.log(`A${octave}`)
            piano?.start({ note: `A${octave}` })
          }}
        >
          T
        </PianoKey>

        <PianoKey
          keyType="black"
          onPress={() => {
            console.log(`A#${octave}`)
            piano?.start({ note: `A#${octave}` })
          }}
        >
          6
        </PianoKey>

        <PianoKey
          onPress={() => {
            console.log(`B${octave}`)
            piano?.start({ note: `B${octave}` })
          }}
        >
          Y
        </PianoKey>
        <PianoKey
          onPress={() => {
            console.log(`C${octave+1}`)
            piano?.start({ note: `C${octave+1}` })
          }}
        >
          U
        </PianoKey>

        <PianoKey
          keyType="black"
          onPress={() => {
            console.log(`C#${octave+1}`)
            piano?.start({ note: `C#${octave+1}` })
          }}
        >
          8
        </PianoKey>

        <PianoKey
          onPress={() => {
            console.log(`D${octave+1}`)
            piano?.start({ note: `D${octave+1}` })
          }}
        >
          I
        </PianoKey>

        <PianoKey
          keyType="black"
          onPress={() => {
            console.log(`D#${octave+1}`)
            piano?.start({ note: `D#${octave+1}` })
          }}
        >
          9
        </PianoKey>

        <PianoKey
          onPress={() => {
            console.log(`E${octave+1}`)
            piano?.start({ note: `E${octave+1}` })
          }}
        >
          O
        </PianoKey>

        <PianoKey
          onPress={() => {
            console.log(`F${octave+1}`)
            piano?.start({ note: `F${octave+1}` })
          }}
        >
          P
        </PianoKey>

        <PianoKey
          keyType="black"
          onPress={() => {
            console.log(`F#${octave+1}`)
            piano?.start({ note: `F#${octave+1}` })
          }}
        >
          -
        </PianoKey>

        <PianoKey
          onPress={() => {
            console.log(`G${octave+1}`)
            piano?.start({ note: `G${octave+1}` })
          }}
        >
          {"["}
        </PianoKey>

        <PianoKey
          keyType="black"
          onPress={() => {
            console.log(`G#${octave+1}`)
            piano?.start({ note: `G#${octave+1}` })
          }}
        >
          =
        </PianoKey>

        <PianoKey
          onPress={() => {
            console.log(`A${octave+1}`)
            piano?.start({ note: `A${octave+1}` })
          }}
        >
          {"]"}
        </PianoKey>

        <PianoKey
          keyType="black"
          onPress={() => {
            console.log(`A#${octave +1}`)
            piano?.start({ note: `A#${octave+1}` })
          }}
          keyToPress="Backspace"
        >
          ⌫
        </PianoKey>

        <PianoKey
          onPress={() => {
            console.log(`B${octave+1}`)
            piano?.start({ note: `B${octave+1}` })
          }}
        >
          \
        </PianoKey>
      </div>
    </div>
  )
}

export default VirtualPiano
