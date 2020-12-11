import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addColor } from '../store'
import PropTypes from 'prop-types'

const ColorSelect = ({ label, name }) => {
  const colors = useSelector(state => state.color)
  const dispatch = useDispatch()

  const [color, setColor] = useState(colors[colors.length - 1])

  const colorPresent = colors.indexOf(color) !== -1
  const maxItems = colors.length >= 10

  return (
    <div className="w-full text-center">
      <div className="my-6">
        <label htmlFor={`cs-${name}`} className="">
          {label}
        </label>
        <input
          value={color}
          type="color"
          name={name}
          id={`cs-${name}`}
          className="h-20 w-20"
          onChange={e => setColor(e.target.value)}
        />
        <br />
        <button
          className={`my-3 p-3 rounded-lg  text-white font-bold ${
            colorPresent || maxItems
              ? 'text-gray-500 bg-gray-200 pointer-events-none'
              : 'text-black bg-blue-900 hover:bg-blue-700 '
          }`}
          disabled={colorPresent || maxItems}
          onClick={() => dispatch(addColor(color))}
          id="bgAdd">
          Add
        </button>
      </div>
      <div>
        {maxItems && <p>You have reached the maximum of ten colors.</p>}
        {!maxItems && <p>Select a color and click the “add” button.</p>}
      </div>
    </div>
  )
}

ColorSelect.propTypes = {
  label: PropTypes.string,
  name: PropTypes.string
}

export default ColorSelect
