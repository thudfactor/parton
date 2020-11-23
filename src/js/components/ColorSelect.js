import { useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { addColor } from '../store';

const ColorSelect = ({label, name}) => {

  const colors = useSelector(state => state[name]);
  const dispatch = useDispatch();

  const [ color, setColor ] = useState(colors[colors.length-1]);

  const colorPresent = colors.indexOf(color) !== -1;

  return (
    <div className="p-2">
      <p>
        <label htmlFor={`cs-${name}`} className="" >{ label }</label>
        <input 
          value={color} 
          type="color" 
          name={ name } 
          id={`cs-${name}`} 
          onChange={(e => setColor(e.target.value))} />
        <button className={`${(colorPresent) ? 'text-gray-500' : 'text-black'}`} disabled={colorPresent} onClick={() => dispatch(addColor({name, color}))} id="bgAdd">Add</button>
      </p>
    </div>  
  )
}

export default ColorSelect
