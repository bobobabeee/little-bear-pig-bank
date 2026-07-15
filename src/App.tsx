import { useState } from 'react'
import { Navigate, Route, Routes, useLocation } from 'react-router-dom'
import { SiteLayout } from './components/layout/SiteLayout'
import HomePage from './pages/HomePage'
import EarnPage from './pages/EarnPage'
import RewardsPage from './pages/RewardsPage'
import TransactionsPage from './pages/TransactionsPage'
import OurRoomPage from './pages/OurRoomPage'
import WelcomePage from './pages/WelcomePage'
import type { UserId } from './types/bank'

export default function App() {
  const [currentUser, setCurrentUser] = useState<UserId>('bear')
  const location = useLocation()

  if (location.pathname === '/' || location.pathname === '/welcome') {
    return <WelcomePage />
  }

  return (
    <SiteLayout currentUser={currentUser} onSwitch={setCurrentUser}>
      <Routes>
        <Route path="/bank" element={<HomePage currentUser={currentUser} />} />
        <Route path="/earn" element={<EarnPage currentUser={currentUser} />} />
        <Route path="/rewards" element={<RewardsPage currentUser={currentUser} onSwitch={setCurrentUser} />} />
        <Route path="/transactions" element={<TransactionsPage />} />
        <Route path="/our-room" element={<OurRoomPage />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </SiteLayout>
  )
}
