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
import type { PendingDecision } from './data/pendingData'

export default function App() {
  const [currentUser, setCurrentUser] = useState<UserId>('bear')
  const [pendingOpen, setPendingOpen] = useState(false)
  const [pendingDecisions, setPendingDecisions] = useState<Record<string, PendingDecision>>({})
  const location = useLocation()

  if (location.pathname === '/' || location.pathname === '/welcome') {
    return <WelcomePage />
  }

  return (
    <SiteLayout currentUser={currentUser} onSwitch={setCurrentUser} pendingOpen={pendingOpen} onPendingOpen={() => setPendingOpen(true)} onPendingClose={() => setPendingOpen(false)} decisions={pendingDecisions} onDecision={(id, decision) => setPendingDecisions((current) => ({ ...current, [id]: decision }))}>
      <Routes>
        <Route path="/bank" element={<HomePage currentUser={currentUser} decisions={pendingDecisions} onOpenPending={() => setPendingOpen(true)} />} />
        <Route path="/earn" element={<EarnPage currentUser={currentUser} />} />
        <Route path="/rewards" element={<RewardsPage currentUser={currentUser} />} />
        <Route path="/transactions" element={<TransactionsPage />} />
        <Route path="/our-room" element={<OurRoomPage />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </SiteLayout>
  )
}
