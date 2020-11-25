import {useSelector, useDispatch} from 'react-redux'
import { setBoolProp } from '../store'

export default function ToggleProp({label, name, disabled=false}) {
  const propValue = useSelector(state => state[name]);
  const dispatch = useDispatch();
  
  return (
    <div className={`${(disabled) ? 'text-gray-500' : 'text-black' }`}>
      <label>
        <input 
          type="checkbox" 
          checked={propValue} 
          value={propValue}
          disabled={disabled}
          onChange={() => dispatch(setBoolProp({name, value:!propValue}))} /> {label}</label>
    </div>
  )
}
