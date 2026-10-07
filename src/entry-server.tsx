import { renderToString } from 'react-dom/server'
import { StrictMode } from 'react'
import { MemoryRouter } from 'react-router-dom'

import { App } from '@/App'

export function render(url: string) {
  return renderToString(
    <StrictMode>
      <MemoryRouter initialEntries={[url]}>
        <App />
      </MemoryRouter>
    </StrictMode>,
  )
}
