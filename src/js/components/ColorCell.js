import InfoCell from './InfoCell'
import { useSelector } from 'react-redux'
import PropTypes from 'prop-types'
import tw from 'twin.macro'

const ColorCell = ({ colors }) => {
  const { bgcolor, fgcolor, linkcolor, fgbgratio, linkfgratio, linkbgratio, failed } = colors

  const largeTreatment = useSelector(state => state.largeTreatment)

  let swatchFontSize = '1rem'
  let swatchFontWeight = 'normal'
  let linkFontSize = '1rem'
  let linkFontWeight = 'normal'

  if (fgbgratio >= 3 && fgbgratio < 4.5) {
    if (largeTreatment === 'larger') {
      swatchFontSize = `1.5rem` // 18pt is 24px (roughly)
    } else if (largeTreatment === 'bold') {
      swatchFontSize = '1.15625rem' // 14pt is 18.5px (roughly)
      swatchFontWeight = 'bold'
    }
  }

  if (linkbgratio >= 3 && linkbgratio < 4.5) {
    if (largeTreatment === 'larger') {
      linkFontSize = `1.5rem` // 18pt is 24px (roughly)
    } else if (largeTreatment === 'bold') {
      linkFontSize = '1.15625rem' // 14pt is 18.5px (roughly)
      linkFontWeight = 'bold'
    }
  }

  const linkDecoration = linkfgratio <= 3 ? 'underline' : 'none'

  return (
    <div
      tw="flex flex-col justify-between border-2"
      css={[failed && tw`border-red-500`]}
      style={{ backgroundColor: bgcolor }}>
      <div tw="p-2" style={{ color: fgcolor, fontSize: swatchFontSize, fontWeight: swatchFontWeight }}>
        Harry, jogging quickly, axed zen monks with beef vapor.{' '}
        {linkcolor && (
          <a
            style={{
              textDecoration: linkDecoration,
              color: linkcolor,
              fontSize: linkFontSize,
              fontWeight: linkFontWeight
            }}
            onClick={e => {
              e.preventDefault()
            }}
            href="http://www.example.com">
            Click Here for More Info
          </a>
        )}
      </div>
      <div tw="grid grid-cols-2 p-2 bg-black text-white text-sm">
        <dl>
          <InfoCell label={'BG'}>{bgcolor}</InfoCell>
          <InfoCell label={'FG'}>{fgcolor}</InfoCell>
          {linkcolor && <InfoCell label={'A'}>{linkcolor}</InfoCell>}
        </dl>
        <dl>
          <InfoCell label={'FG:BG'}>{fgbgratio}</InfoCell>
          {linkcolor && <InfoCell label={'A:BG'}>{linkbgratio}</InfoCell>}
          {linkcolor && <InfoCell label={'A:FG'}>{linkfgratio}</InfoCell>}
        </dl>
      </div>
    </div>
  )
}

ColorCell.propTypes = {
  colors: PropTypes.object.isRequired
}

export default ColorCell
