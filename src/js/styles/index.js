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
      textDecoration: props.linkDecoration,
      fontSize: props.fontSize,
      fontWeight: props.fontWeight,
      color: props.linkcolor
    }
  }))``

export const Swatch = styled.div.attrs(
  props =>({
    style: {
      color: props.fgcolor,
      fontSize: props.fontSize,
      fontWeight: props.fontWeight,
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

export const ColorSamples = styled.div`
  ${tw`w-auto shadow my-6 mx-auto p-5 rounded-xl bg-white flex items-center justify-center`}
`

export const ColorSample = styled.div.attrs(
  props => ({
    style: {
      backgroundColor: props.bgcolor
    }
  }))`
  ${tw`flex items-center border-gray-900 border border-l-0 justify-center p-2`}

  width: calc(10vw - 6px);
  height: calc(10vw - 6px);

  &:first-child {
    ${tw`border-l rounded-l-lg`}
  }

  &:last-child {
    ${tw`rounded-r-lg`}
  }

  button {
    ${tw`rounded-lg bg-black border-2 text-xl opacity-0 border-white p-3 text-red-100 transition-opacity`}
  }

  &:hover {
    button {
      ${tw`opacity-100`}
    }
  }
`
  