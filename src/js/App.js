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
        <ColorSelect 
          label="Link Color"
          name="linkcolor" 
        />
        <ColorSelect 
          label="Link Hover Color"
          name="hovercolor" 
        />        
        <Preferences />
      </div>

      <ColorMatrix />
    </StyledForm>
  )
}

export default App
