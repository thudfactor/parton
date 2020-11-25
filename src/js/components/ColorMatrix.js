import { useSelector } from "react-redux";
import ColorCell from '../components/ColorCell';
import { hex, score } from 'wcag-contrast'

const contrast = (c1,c2) => {
  return Math.round(hex(c1,c2) * 10) / 10;
}

const permutations = (colors, permutationSize, hideFailures = false) => {
  const collector = [];
  const colorLength = colors.length;
  const slots = (colorLength > permutationSize) ? permutationSize : colorLength;
  const tempArray = Array(slots);

  const counters = Array(slots).fill(0);
  let iter = 0;
  while (counters[0] < colorLength && iter < 5000) {
    for(let j = 0; j < slots; j++) {
      const color = colors[counters[j] % colorLength];
      tempArray[j] = color;
    }

    if(tempArray.length === new Set(tempArray).size) {
      collector.push([...tempArray]);
    }
    
    // update counters
    for(let carry = slots - 1; carry >= 0; carry--) {
      counters[carry] = (counters[carry] + 1);
      if(counters[carry] % colorLength !== 0) break;
    }
    //console.log(counters);
    iter++;    
  }

  const colorData = collector.map(perm => {
    const [bgcolor,fgcolor,linkcolor=null,hovercolor=null] = perm
    const key = `ColorCell-${perm.join('-')}`
    const fgbgratio = contrast(fgcolor,bgcolor)
    const linkfgratio = (linkcolor) ? contrast(fgcolor,linkcolor) : 100
    const linkbgratio = (linkcolor) ? contrast(linkcolor,bgcolor) : 100
    const hoverbgratio = (hovercolor) ? contrast(hovercolor,bgcolor) : 100
    const failed = (fgbgratio < 3) || (linkbgratio < 3) || (hoverbgratio < 3)

    return {
      key,
      bgcolor,
      fgcolor,
      linkcolor,
      hovercolor,
      fgbgratio,
      linkfgratio,
      linkbgratio,
      hoverbgratio,
      failed,
    }
  })

  return (hideFailures) ? colorData.filter(cd => !cd.failed ) : colorData;
}


export default function ColorMatrix() {
  const colors = useSelector(state => state.color)
  const testLinks = useSelector(state => state.testLinks)
  const hideFailures = useSelector(state => state.hideFailures)

  const cellGenerator = () => {
    const permutationSet = permutations(colors, testLinks ? 3 : 2, hideFailures);

    return permutationSet.map((cellData) => 
      <ColorCell colors={cellData} key={cellData.key} />
    )
  }

  let gridClasses = 'w-full grid gap-2 ';

  switch(colors.length) {
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
      { cellGenerator() }
    </div>
  )
}
