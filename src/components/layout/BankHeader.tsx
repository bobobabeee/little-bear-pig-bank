import { CharacterIcon } from '../common/OriginalIcons'
import { PendingPanel } from '../bank/PendingPanel'
import { getPendingCount, type PendingDecision } from '../../data/pendingData'
import { DesktopNavigation } from './Navigation'
import type { UserId } from '../../types/bank'
import { Link } from 'react-router-dom'

export function BankHeader({ currentUser, onSwitch, pendingOpen, onPendingOpen, onPendingClose, decisions, onDecision }: {
  currentUser: UserId
  onSwitch: (user: UserId) => void
  pendingOpen: boolean
  onPendingOpen: () => void
  onPendingClose: () => void
  decisions: Record<string, PendingDecision>
  onDecision: (id: string, decision: PendingDecision) => void
}) {
  const pendingCount = getPendingCount(currentUser, decisions)

  return (
    <>
      <div className="utility-strip">
        <span>EST. 2025.05.20</span>
        <span>今日营业中 <i aria-hidden="true">●</i> · <Link to="/">返回银行门口</Link></span>
        <span>认真保存每一份爱 ♡</span>
      </div>
      <header className="bank-header">
        <div className="header-character header-bear"><CharacterIcon character="bear" size={58} /></div>
        <Link className="brand-lockup" to="/" aria-label="返回小熊猪银行门口">
          <span className="brand-kicker">WELCOME TO OUR LITTLE BANK</span>
          <div className="brand-line"><span>✦</span><h1>小熊猪银行</h1><span>✦</span></div>
          <p>KUMA <span>&amp;</span> PIGGY BANK</p>
        </Link>
        <div className="header-character header-pig"><CharacterIcon character="pig" size={58} /></div>
        <div className="header-operator-tools">
          <div className="header-switcher" aria-label="当前操作人">
            <span>当前操作人</span>
            <div>
              <button className={currentUser === 'bear' ? 'active' : ''} onClick={() => onSwitch('bear')}>小熊</button>
              <button className={currentUser === 'pig' ? 'active' : ''} onClick={() => onSwitch('pig')}>小猪</button>
            </div>
          </div>
          <button className="pending-trigger" type="button" onClick={onPendingOpen} aria-expanded={pendingOpen}>
            待办 <strong>{pendingCount}</strong>
          </button>
        </div>
      </header>
      <DesktopNavigation />
      {pendingOpen && <div className="pending-backdrop" role="presentation" onMouseDown={onPendingClose}>
        <aside className="pending-drawer" role="dialog" aria-modal="true" aria-labelledby="pending-drawer-title" onMouseDown={(event) => event.stopPropagation()}>
          <div className="pending-drawer-heading"><div><span>ACTION INBOX</span><h2 id="pending-drawer-title">{currentUser === 'bear' ? '小熊' : '小猪'}的待处理</h2></div><button className="ghost-button" type="button" onClick={onPendingClose} aria-label="关闭待办">×</button></div>
          <PendingPanel currentUser={currentUser} decisions={decisions} onDecision={onDecision} />
        </aside>
      </div>}
    </>
  )
}
