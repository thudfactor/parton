import { ColorCellWrapper, Swatch, Details, Link } from '../styles/'
import InfoCell from './InfoCell';

export default function ColorCell({colors}) {

  const {
    bgcolor,
    fgcolor,
    linkcolor,
    hovercolor,
    fgbgratio,    
    linkfgratio,
    linkbgratio,
    hoverbgratio,
    failed   
  } = colors;

  return (
  <ColorCellWrapper 
    bgcolor={bgcolor}
    failed={failed}
  >
    <Swatch fgcolor={fgcolor} fgbgratio={fgbgratio}>
      Harry, jogging quickly, axed zen monks with beef vapor. 
      { linkcolor && <Link 
        linkcolor={linkcolor}
        hovercolor={hovercolor || linkcolor}
        linkfgratio={linkfgratio}      
        onClick={(e)=> { e.preventDefault() } }
        onMouseOver={(e) => e.target.style.color = hovercolor } 
        onMouseOut={(e) => e.target.style.color = linkcolor }
        href="http://www.example.com">jogging quickly</Link> 
      }
    </Swatch>
    <Details>
      <dl>
        <InfoCell label={"BG"}>{bgcolor}</InfoCell>
        <InfoCell label={"FG"}>{fgcolor}</InfoCell>
        { linkcolor && <InfoCell label={"A"}>{linkcolor}</InfoCell> }
        { hovercolor && <InfoCell label={"Ah"}>{hovercolor}</InfoCell> }
      </dl>
      <dl>
        <InfoCell label={"FG:BG"}>{fgbgratio}</InfoCell>
        { linkcolor && <InfoCell label={"A:BG"}>{linkbgratio}</InfoCell> }
        { linkcolor && <InfoCell label={"A:FG"}>{linkfgratio}</InfoCell> }
        { hovercolor && <InfoCell label={"Ah:BG"}>{hoverbgratio}</InfoCell> }
      </dl>
    </Details>
  </ColorCellWrapper>
  )
}
