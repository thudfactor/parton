import ToggleProp from './ToggleProp';
import { useSelector } from 'react-redux'

export default function Preferences() {
  const colors = useSelector(state => state.color);

  return (
    <div>
      <ToggleProp name="hideFailures" label="Hide Failures" />
      <ToggleProp disabled={colors.length < 4} name="testLinks" label="Test Link Colors" />
    </div>
  )
}
