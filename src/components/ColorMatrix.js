import { useSelector } from "react-redux";
import ColorCell from '../components/ColorCell';

export default function ColorMatrix() {
  const bgcolors = useSelector(state => state.bgcolor)
  const fgcolors = useSelector(state => state.fgcolor)

  /*
  function buildMatrix() {
    const { fg, bg } = colors;
    matrix.style.gridTemplateColumns = `repeat(${bg.length}, 1fr)`;
    matrix.innerHTML = null;
    const working = document.createDocumentFragment();
    const delBGButton = document.createElement("button");
    const delBGText = document.createTextNode("X Background");
    delBGButton.appendChild(delBGText);
    delBGButton.classList.add("remove-background");
  
    const delFGButton = document.createElement("button");
    const delFGText = document.createTextNode("X Color");
    delFGButton.appendChild(delFGText);
    delFGButton.classList.add("remove-color");
  
    fg.forEach((fgc, fgi) => {
      const cellTemplate = document.createElement("div");
      const fgText = document.createElement("p");
      const colorText = document.createTextNode(`text: ${fgc}`);
      fgText.appendChild(colorText);
      cellTemplate.style.color = fgc;
      cellTemplate.appendChild(delFGButton.cloneNode(true));
      cellTemplate.appendChild(delBGButton.cloneNode(true));
      cellTemplate.appendChild(fgText);
  
      bg.forEach((bgc, bgi) => {
        const cell = cellTemplate.cloneNode(true);
        const bgText = document.createElement("p");
        bgText.innerHTML = `background: ${bgc}`;
        cell.style.backgroundColor = bgc;
        cell.dataset.bgindex = bgi;
        cell.dataset.fgindex = fgi;
  
        cell.appendChild(bgText);
        working.appendChild(cell);
      });
    });
    matrix.appendChild(working);
  }
  */

  const addBgRow = (bgcolor,index) => {
    return fgcolors.map((fgcolor,index) => {
      return (
        <ColorCell fgcolor={fgcolor} bgcolor={bgcolor} key={`cell-${bgcolor}-${fgcolor}`} />
      )
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
      gridClasses += `grid-cols-2 md:grid-cols-4`;
    break;
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
    default:
      gridClasses += `grid-cols-8`;
  }

  return (
    <div className={gridClasses}>
      { bgcolors.map(addBgRow) }
    </div>
  )
}
