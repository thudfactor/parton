import { useSelector } from "react-redux";
import ColorCell from '../components/ColorCell';

export default function ColorMatrix() {
  const bgcolors = useSelector(state => state.bgcolor)
  const fgcolors = useSelector(state => state.fgcolor)
  const linkcolors = useSelector(state => state.linkcolor)
  const hovercolors = useSelector(state => state.hovercolor)

  const addBgRow = (bgcolor) => {
    return fgcolors.map((fgcolor) => {
      return linkcolors.map((linkcolor) => {
        return hovercolors.map((hovercolor) => {
          if (hovercolor === linkcolor) return '';
          return (
            <ColorCell hovercolor={hovercolor} linkcolor={linkcolor} fgcolor={fgcolor} bgcolor={bgcolor} key={`cell-${bgcolor}-${fgcolor}-${linkcolor}=${hovercolor}`} />
          )
        })
      })
    })
  }

  let gridClasses = 'w-full grid gap-2 ';

  switch(fgcolors.length) {
    case 1:
      gridClasses += `grid-cols-1`;
    break;
    case 2:
      gridClasses += `grid-cols-2`;
    break;
    case 3:
      gridClasses += `grid-cols-2 md:grid-cols-3`;
    break;
    case 4:
    default:
      gridClasses += `grid-cols-2 md:grid-cols-4`;
    break;
    /*
    case 5:
      gridClasses += `grid-cols-2 md:grid-cols-4 lg:grid-cols-5`;
    break;
    case 6:
      gridClasses += `grid-cols-2 md:grid-cols-3 lg:grid-cols-6`;
    break;
    case 7:
      gridClasses += `grid-cols-7`;
    break;
    case 8:
      gridClasses += `grid-cols-8`;
    break;
    */
  }

  return (
    <div className={gridClasses}>
      { bgcolors.map(addBgRow) }
    </div>
  )
}
