import styled from 'styled-components'
import tw from 'twin.macro'

export const $ColorSample = styled.div`
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
