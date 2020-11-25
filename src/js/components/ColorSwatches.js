import { useSelector, useDispatch } from 'react-redux'
import { removeColor } from '../store'

export default function ColorSwatches() {
  const colors = useSelector(state => state.color)
  const dispatch = useDispatch();

  const cols = 10;
  const staticStyle = {
    width: `${100/cols}vw`,
    height: `${100/cols}vw`
  }

  return(
    <div className='flex items-center flex-wrap'>
      {
        colors.map(c => (
          <div className="flex items-center justify-center p-5" style={{...staticStyle, backgroundColor: c}} key={`color-${c}`}>
            {
              (colors.length > 2) && <button className="bg-white border-2 border-red p-2" onClick={() => dispatch(removeColor(c)) }>Poof</button>
            }
          </div>
        ))
      }
    </div>
  )
}
