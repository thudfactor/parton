import ColorMatrix from "./components/ColorMatrix"
import ColorSelect from "./components/ColorSelect"
import Preferences from "./components/Preferences"
import ColorSwatches from "./components/ColorSwatches"
import { StyledForm } from "./styles"

function App() {

  return (
    <StyledForm>
      <ColorSwatches />
      <div className="forms">
        <ColorSelect />
        <Preferences />
      </div>

      <ColorMatrix />
    </StyledForm>
  )
}

export default App
