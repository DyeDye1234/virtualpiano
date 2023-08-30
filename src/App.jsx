import "./App.css"
import SheetMusic from "./Sheet"
import VirtualPiano from "./virtualpiano"

function App() {
  return <SheetMusic keyboard={<VirtualPiano />} />
}

export default App
