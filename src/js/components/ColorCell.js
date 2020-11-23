import { useSelector } from 'react-redux'
import { hex, score } from 'wcag-contrast'

export default function ColorCell({fgcolor,bgcolor}) {

  const hideFailures = useSelector(state => state.hideFailures);

  const ratio = Math.round(hex(fgcolor,bgcolor) * 10) / 10;
  const rating = score(ratio);

  const textSize = (rating === 'AA Large') ? 'text-2xl' : 'text-base';
  const borderColor = (rating === 'Fail') ? 'border-red-400 border-dashed': 'border-gray-300';
  const hideCell = (hideFailures && rating === 'Fail') ? 'invisible' : 'visible';

  return (
  <div 
    style={{backgroundColor: bgcolor, color: fgcolor }}
    className={`flex flex-col justify-between border-2 ${borderColor} ${hideCell}`}
  >
    <div className={`p-4 ${textSize}`}>Harry, jogging quickly, axed zen monks with beef vapor.</div>
    <div className={`p-4 bg-black text-white text-sm`}>
      <b>Foreground</b>: {fgcolor}<br />
      <b>Background</b>: {bgcolor}<br />
      <b>Text/Bg</b>: {ratio} ({rating})
    </div>
  </div>
  )
}
