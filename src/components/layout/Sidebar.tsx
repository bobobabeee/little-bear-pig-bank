import type { UserId } from '../../types/bank'
import { Link } from 'react-router-dom'
import { CharacterIcon, CoinIcon } from '../common/OriginalIcons'
import { getPendingCount, type PendingDecision } from '../../data/pendingData'

export function Sidebar({ currentUser, decisions, onOpenPending }: { currentUser: UserId; decisions: Record<string, PendingDecision>; onOpenPending: () => void }) {
  const isBear = currentUser === 'bear'
  const pendingCount = getPendingCount(currentUser, decisions)

  return (
    <aside className="sidebar">
      <section className={`sidebar-passbook ${isBear ? 'bear' : 'pig'}`}>
        <div className="passbook-title"><span>CURRENT PASSBOOK</span><strong>{isBear ? '熊币存折' : '猪币存折'}</strong></div>
        <div className="passbook-owner"><CharacterIcon character={currentUser} size={64} /><div><small>当前操作人</small><h2>{isBear ? '小熊' : '小猪'}</h2></div></div>
        <div className="passbook-balance"><span>可用余额</span><div><CoinIcon currency={isBear ? 'BEAR' : 'PIG'} size={30} /><strong>{isBear ? '18' : '85'}</strong><small>{isBear ? '熊币' : '猪币'}</small></div></div>
        <Link className="primary-button passbook-action" to="/earn">＋ 记一笔心意</Link>
        <button className="passbook-pending" type="button" onClick={onOpenPending}><span>待处理事项</span><strong>{pendingCount}</strong></button>
        <p className="passbook-note">“今天被认真看见的心意，也值得盖一枚小小的章。”</p>
      </section>
    </aside>
  )
}
