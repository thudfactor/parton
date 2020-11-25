import styled from 'styled-components'
import tw from 'twin.macro'

export const StyledForm = styled.main.attrs({
    className: "flex flex-col justify-center items-start bg-gray-100",
})`
  & {
    form {
      ${tw`bg-white text-center rounded py-8 px-5 shadow max-w-xs`}
    }
  }
`;

export const Link = styled.a.attrs(
  props =>({
    style: {
      textDecoration: (props.linkfgratio >= 3) ? 'none' : 'underline',
      fontSize: (props.linkfgratio < 4.5 && props.linkfgratio >= 3) ? '1.5rem' : '1rem',
      color: props.linkcolor
    }
  }))``

export const Swatch = styled.div.attrs(
  props =>({
    style: {
      color: props.fgcolor,
      fontSize: (props.fgbgratio < 4.5 && props.fgbgratio >= 3) ? '1.5rem' : '1rem'
    }
  })
)`${tw`p-2`}`

export const Details = styled.div`${tw`grid grid-cols-2 p-2 bg-black text-white text-sm`}`

export const ColorCellWrapper = styled.div.attrs(
  props => ({
    style: {
      backgroundColor: props.bgcolor,
      border: (props.failed) ? '1px #f00 dashed' : '1px #000 solid',
    }
  }))`${tw`flex flex-col justify-between border-2`}`

