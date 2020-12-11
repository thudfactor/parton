import { useSelector, useDispatch } from 'react-redux'
import { removeColor } from '../store'
import { BiTrash } from 'react-icons/bi'
import { ColorSample, ColorSamples } from '../styles'

export default function ColorSwatches() {
  const colors = useSelector(state => state.color)
  const dispatch = useDispatch()

  return (
    <ColorSamples>
      {colors.map(c => (
        <ColorSample bgcolor={c} key={`color-${c}`}>
          {colors.length > 2 && (
            <button onClick={() => dispatch(removeColor(c))}>
              <BiTrash />
              <span className="sr-only">Remove Color</span>
            </button>
          )}
        </ColorSample>
      ))}
    </ColorSamples>
  )
}
