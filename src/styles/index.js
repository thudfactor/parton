import styled from 'styled-components'
import tw from 'twin.macro'

const StyledForm = styled.main.attrs({
    className: "flex flex-col h-screen justify-center items-center bg-gray-100",
})`
  & {
    form {
      ${tw`bg-white text-center rounded py-8 px-5 shadow max-w-xs`}
    }
  }
`;

export default StyledForm
