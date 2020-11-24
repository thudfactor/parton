import {useSelector, useDispatch} from 'react-redux'
import { setBoolProp } from '../store'

export default function ToggleProp({label, name}) {
  const propValue = useSelector(state => state[name]);
  const dispatch = useDispatch();
  
  return (
    <label>
      <input 
        type="checkbox" 
        checked={propValue} 
        value={propValue}
        onChange={() => dispatch(setBoolProp({name, value:!propValue}))} />
      {label}
    </label>
  )
}
