import ColorMatrix from './components/ColorMatrix'
import ColorSelect from './components/ColorSelect'
import Preferences from './components/Preferences'
import ColorSwatches from './components/ColorSwatches'
import 'twin.macro'

function App() {
  return (
    <main tw="flex flex-col justify-center items-start bg-gray-100">
      <ColorSelect />
      <ColorSwatches />
      <div className="forms">
        <Preferences />
      </div>

      <ColorMatrix />
    </main>
  )
}

export default App
