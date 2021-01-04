import React from 'react'
import { GlobalStyles } from 'twin.macro'
import store from './store'
import { Provider } from 'react-redux'
import { render } from '@testing-library/react'
import PropTypes from 'prop-types'

const Providers = ({ children }) => {
  return (
    <React.StrictMode>
      <GlobalStyles />
      <Provider store={store}>{children}</Provider>
    </React.StrictMode>
  )
}

Providers.propTypes = {
  children: PropTypes.node
}

const customRender = (ui, options) => {
  render(ui, { wrapper: Providers, ...options })
}

export * from '@testing-library/react'
export { customRender as render }
