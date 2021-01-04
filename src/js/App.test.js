import { render, screen } from './test-utils'
import App from './App'

test('renders App', () => {
  render(<App />)
  const linkElement = screen.getByText(/Select a color/i)
  expect(linkElement).toBeInTheDocument()
})
