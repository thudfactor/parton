import { useDispatch, useSelector } from "react-redux";
import { changeFailureDisplay } from '../store';

export default function Preferences() {

  const hideFailures = useSelector(state => state.hideFailures);
  const dispatch = useDispatch();

  return (
    <div>
      <label>
        <input 
          type="checkbox" 
          checked={hideFailures} 
          value={hideFailures}
          onChange={() => dispatch(changeFailureDisplay())} />
        Hide Failures
      </label>
    </div>
  )
}
