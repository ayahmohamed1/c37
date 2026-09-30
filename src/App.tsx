import { Routes, Route, Navigate } from 'react-router-dom'
import GiftPage from './pages/GiftPage'
import NotFound from './pages/NotFound'

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<GiftPage />} />
      <Route path="/gift/:id" element={<Navigate to="/" replace />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  )
}
