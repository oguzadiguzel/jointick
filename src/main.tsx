import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'

import '@fontsource-variable/instrument-sans'
import { App } from '@/App'
import '@/index.css'

function enableAnalytics() {
  const token = import.meta.env.VITE_CF_BEACON_TOKEN?.trim()
  if (!token) return

  const script = document.createElement('script')
  script.defer = true
  script.src = 'https://static.cloudflareinsights.com/beacon.min.js'
  script.dataset.cfBeacon = JSON.stringify({ token })
  document.body.appendChild(script)
}

enableAnalytics()

const root = document.getElementById('root')
if (!root) throw new Error('Root element missing')

createRoot(root).render(
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>,
)
