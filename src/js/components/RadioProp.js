import { useSelector, useDispatch } from 'react-redux'
import { setProp } from '../store'

export default function RadioProp({label,name,options}) {
  const currentValue = useSelector(state => state[name]);
  const dispatch = useDispatch();

  return (
    <fieldset>
      <legend>{ label }</legend>
      {
        options.map(o => 
          <label className="block" key={`${name}-${o.value}`}>
            <input 
              checked={(o.value === currentValue)} 
              type="radio" 
              onChange={() => dispatch(setProp({name, value:o.value}))}
              name={name} 
              value={o.value} /> {o.label}
          </label>
        )
      }
    </fieldset>
  )
}
