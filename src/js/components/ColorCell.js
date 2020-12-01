import { ColorCellWrapper, Swatch, Details, Link } from '../styles/'
import InfoCell from './InfoCell'
import { useSelector } from 'react-redux'

export default function ColorCell({colors}) {

  const {
    bgcolor,
    fgcolor,
    linkcolor,
    fgbgratio,    
    linkfgratio,
    linkbgratio,
    failed   
  } = colors;

  const largeTreatment = useSelector(state => state.largeTreatment)

  let swatchFontSize = '1rem';
  let swatchFontWeight = 'normal';
  let linkFontSize = '1rem';
  let linkFontWeight = 'normal';  

  if(fgbgratio >= 3 && fgbgratio < 4.5) {
    if (largeTreatment === 'larger') {
      swatchFontSize = `1.5rem`; // 18pt is 24px (roughly)
    } else if (largeTreatment === 'bold') {
      swatchFontSize = '1.15625rem';  // 14pt is 18.5px (roughly)
      swatchFontWeight = 'bold'
    }   
  }

  if(linkbgratio >= 3 && linkbgratio < 4.5) {
    if (largeTreatment === 'larger') {
      linkFontSize = `1.5rem`; // 18pt is 24px (roughly)
    } else if (largeTreatment === 'bold') {
      linkFontSize = '1.15625rem';  // 14pt is 18.5px (roughly)
      linkFontWeight = 'bold'
    }   
  }

  const linkDecoration = (linkfgratio <= 3) ? 'underline' : 'none'

  return (
  <ColorCellWrapper 
    bgcolor={bgcolor}
    failed={failed}
  >
    <Swatch fontSize={swatchFontSize} fontWeight={swatchFontWeight} fgcolor={fgcolor}>
      Harry, jogging quickly, axed zen monks with beef vapor. { linkcolor && 
      <Link 
        fontSize={linkFontSize} 
        fontWeight={linkFontWeight}
        linkcolor={linkcolor}
        linkDecoration={linkDecoration}     
        onClick={(e)=> { e.preventDefault() } }
        href="http://www.example.com">Click Here for More Info</Link> 
      }
    </Swatch>
    <Details>
      <dl>
        <InfoCell label={"BG"}>{bgcolor}</InfoCell>
        <InfoCell label={"FG"}>{fgcolor}</InfoCell>
        { linkcolor && <InfoCell label={"A"}>{linkcolor}</InfoCell> }
      </dl>
      <dl>
        <InfoCell label={"FG:BG"}>{fgbgratio}</InfoCell>
        { linkcolor && <InfoCell label={"A:BG"}>{linkbgratio}</InfoCell> }
        { linkcolor && <InfoCell label={"A:FG"}>{linkfgratio}</InfoCell> }
      </dl>
    </Details>
  </ColorCellWrapper>
  )
}
