import { useState } from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import { SiteLayout } from './components/layout/SiteLayout'
import HomePage from './pages/HomePage'
import EarnPage from './pages/EarnPage'
import RewardsPage from './pages/RewardsPage'
import TransactionsPage from './pages/TransactionsPage'
import OurRoomPage from './pages/OurRoomPage'
import type { UserId } from './types/bank'

export default function App() {
  const [currentUser, setCurrentUser] = useState<UserId>('bear')

  return (
    <SiteLayout currentUser={currentUser} onSwitch={setCurrentUser}>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/earn" element={<EarnPage currentUser={currentUser} />} />
        <Route path="/rewards" element={<RewardsPage />} />
        <Route path="/transactions" element={<TransactionsPage />} />
        <Route path="/our-room" element={<OurRoomPage />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </SiteLayout>
  )
}
