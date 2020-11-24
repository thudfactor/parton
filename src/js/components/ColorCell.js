import { useSelector } from 'react-redux'
import { hex, score } from 'wcag-contrast'
import tw from 'twin.macro'
import styled from 'styled-components'

const Link = styled.a.attrs(
  props =>({
    style: {
      textDecoration: (props.linkfgratio >= 3) ? 'none' : 'underline',
      fontSize: (props.linkfgratio < 4.5 && props.linkfgratio >= 3) ? '1.5rem' : '1rem'
    }
  }))`
  &:link, &:visited {
    color: ${p => `${p.linkcolor}`};
  }

  &:active, &:hover {
    color: ${p => `${p.hovercolor}`};
  }  
`

const Swatch = styled.div.attrs(
  props =>({
    style: {
      color: props.fgcolor,
      fontSize: (props.fgbgratio < 4.5 && props.fgbgratio >= 3) ? '1.5rem' : '1rem'
    }
  })
)`${tw`p-2`}`

const Details = styled.div`${tw`grid grid-cols-2 p-2 bg-black text-white text-sm`}`

const ColorCellWrapper = styled.div.attrs(
  props => ({
    style: {
      backgroundColor: props.bgcolor,
      border: (props.failed) ? '1px #f00 dashed' : '1px #000 solid',
    }
  }))`${tw`flex flex-col justify-between border-2`}`

export default function ColorCell({fgcolor,bgcolor,linkcolor, hovercolor}) {
  const hideFailures = useSelector(state => state.hideFailures);

  const fgbgratio = Math.round(hex(fgcolor,bgcolor) * 10) / 10;
  const linkfgratio = Math.round(hex(fgcolor,linkcolor) * 10) / 10;
  const linkbgratio = Math.round(hex(linkcolor,bgcolor) * 10) / 10;
  const hoverbgratio = Math.round(hex(hovercolor,bgcolor) * 10) / 10;

  const failed = (fgbgratio < 3) || (linkbgratio < 3) || (hoverbgratio < 3);

  if(failed && hideFailures) return '';

  return (
  <ColorCellWrapper 
    bgcolor={bgcolor}
    failed={failed}
  >
    <Swatch fgcolor={fgcolor} fgbgratio={fgbgratio}>
      Harry, <Link 
        linkcolor={linkcolor}
        hovercolor={hovercolor}
        linkfgratio={linkfgratio}      
        onClick={(e)=> { e.preventDefault() } } href="http://www.example.com">jogging quickly</Link>, axed zen monks with beef vapor.
    </Swatch>
    <Details>
      <span><b>Foreground</b>: {fgcolor}</span>
      <span><b>Background</b>: {bgcolor}</span>
      <span><b>Link</b>: {linkcolor}</span>
      <span><b>Hover</b>: {hovercolor}</span>
      <span><b>Text/Bg</b>: {fgbgratio} ({score(fgbgratio)})</span>
      <span><b>Link/Bg</b>: {linkbgratio} ({score(linkbgratio)})</span>
      <span><b>Hover/Bg</b>: {hoverbgratio} ({score(hoverbgratio)})</span>
      <span><b>Text/Link</b>: {linkfgratio} {(linkfgratio < 3) ? '(Needs Decoration)' : ''}</span>
    </Details>
  </ColorCellWrapper>
  )
}
