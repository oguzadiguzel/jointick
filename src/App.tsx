import { Route, Routes } from 'react-router-dom'

import { AboutPage } from '@/pages/About'
import { HomePage } from '@/pages/Home'
import { NotFoundPage } from '@/pages/NotFound'
import { PrivacyPage } from '@/pages/Privacy'

export function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/about" element={<AboutPage />} />
      <Route path="/privacy" element={<PrivacyPage />} />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  )
}
