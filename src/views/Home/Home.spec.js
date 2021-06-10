import { render } from '@/utils/tests'
import '@testing-library/jest-dom/extend-expect'
import Home from './Home'

describe('HomeView', () => {
  const build = () => render(Home, { props: {} })

  it('should display "Home" title', async () => {
    const { findByTestId } = build()
    expect(await findByTestId('title')).toBeInTheDocument()
  })
})
