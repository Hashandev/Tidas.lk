import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import PolicyPage from './pages/PolicyPage'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        {/* /privacy-policy, /terms-and-conditions, /refund-policy —
            anything else falls through to PolicyPage, which redirects home */}
        <Route path="/:slug" element={<PolicyPage />} />
      </Routes>
    </BrowserRouter>
  )
}
