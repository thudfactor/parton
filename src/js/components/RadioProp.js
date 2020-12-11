import { useSelector, useDispatch } from 'react-redux'
import { setProp } from '../store'
import PropTypes from 'prop-types'

const RadioProp = ({ label, name, options }) => {
  const currentValue = useSelector(state => state[name])
  const dispatch = useDispatch()

  return (
    <fieldset>
      <legend>{label}</legend>
      {options.map(o => (
        <label className="block" key={`${name}-${o.value}`}>
          <input
            checked={o.value === currentValue}
            type="radio"
            onChange={() => dispatch(setProp({ name, value: o.value }))}
            name={name}
            value={o.value}
          />{' '}
          {o.label}
        </label>
      ))}
    </fieldset>
  )
}

RadioProp.propTypes = {
  label: PropTypes.string,
  name: PropTypes.string,
  options: PropTypes.object
}

export default RadioProp
