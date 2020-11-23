import ColorMatrix from "./components/ColorMatrix"
import ColorSelect from "./components/ColorSelect"
import Preferences from "./components/Preferences"
import StyledForm from "../styles"

function App() {

  return (
    <StyledForm>
      <div className="forms">
        <ColorSelect 
          label="Background Color" 
          name="bgcolor" 
        />
        <ColorSelect 
          label="Foreground Color"
          name="fgcolor" 
        />
        <Preferences />
      </div>

      <ColorMatrix />
    </StyledForm>
  )
}

export default App
