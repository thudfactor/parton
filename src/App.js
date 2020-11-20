import ColorMatrix from "./components/ColorMatrix"
import ColorSelect from "./components/ColorSelect"
import StyledForm from "./styles"

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
      </div>

      <ColorMatrix />
    </StyledForm>
  )
}

export default App
