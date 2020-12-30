import { useSelector, useDispatch } from 'react-redux'
import { removeColor } from '../store'
import { BiTrash } from 'react-icons/bi'
import { $ColorSample } from '../styles'
import 'twin.macro'

export default function ColorSwatches() {
  const colors = useSelector(state => state.color)
  const dispatch = useDispatch()

  return (
    <div tw="w-auto shadow my-6 mx-auto p-5 rounded-xl bg-white flex items-center justify-center">
      {colors.map(c => (
        <$ColorSample style={{ backgroundColor: c }} bgcolor={c} key={`color-${c}`}>
          {colors.length > 2 && (
            <button onClick={() => dispatch(removeColor(c))}>
              <BiTrash />
              <span className="sr-only">Remove Color</span>
            </button>
          )}
        </$ColorSample>
      ))}
    </div>
  )
}
