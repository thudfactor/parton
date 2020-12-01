import ToggleProp from './ToggleProp';
import RadioProp from './RadioProp';
import { largeTreatmentOptions } from '../constants/pref-definitions'
import { useSelector } from 'react-redux'

export default function Preferences() {
  const colors = useSelector(state => state.color);
  return (
    <div>
      <ToggleProp name="hideFailures" label="Hide Failures" />
      <ToggleProp disabled={colors.length < 3} name="testLinks" label="Test Link Colors" />
      <RadioProp name="largeTreatment" label="AA Large Treatment" options={largeTreatmentOptions} />
    </div>
  )
}
