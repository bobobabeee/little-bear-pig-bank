import type { UserId } from '../../types/bank'
import { pendingItems, type PendingDecision } from '../../data/pendingData'

export function PendingPanel({ currentUser, decisions, onDecision }: {
  currentUser: UserId
  decisions: Record<string, PendingDecision>
  onDecision: (id: string, decision: PendingDecision) => void
}) {

  return (
    <div className="pending-list">
      {pendingItems.map((item) => (
        <div key={item.id}>
          <span aria-hidden="true">{item.icon}</span>
          <p><strong>{item.title}</strong><small>{item.meta}</small></p>
          <div className="pending-actions">
            {decisions[item.id] === 'approved' && <em className="decision-approved">已批准（演示）</em>}
            {decisions[item.id] === 'rejected' && <em className="decision-rejected">已退回（演示）</em>}
            {!decisions[item.id] && item.reviewer === currentUser && item.creator !== currentUser && <><button onClick={() => onDecision(item.id, 'approved')}>批准</button><button onClick={() => onDecision(item.id, 'rejected')}>退回</button></>}
            {!decisions[item.id] && item.creator === currentUser && <em>由你发起，等待对方处理</em>}
            {!decisions[item.id] && item.reviewer !== currentUser && item.creator !== currentUser && <em>等待{item.reviewer === 'bear' ? '小熊' : '小猪'}处理</em>}
          </div>
        </div>
      ))}
      <p className="demo-caption">这里是唯一的批准入口；按钮仅演示状态变化，刷新后不会保存。</p>
    </div>
  )
}
