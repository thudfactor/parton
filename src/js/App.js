import ColorMatrix from "./components/ColorMatrix"
import ColorSelect from "./components/ColorSelect"
import Preferences from "./components/Preferences"
import ColorSwatches from "./components/ColorSwatches"
import { StyledForm } from "./styles"

function App() {

  return (
    <StyledForm>
      <ColorSelect />
      <ColorSwatches />
      <div className="forms">
        <Preferences />
      </div>

      <ColorMatrix />
    </StyledForm>
  )
}

export default App
