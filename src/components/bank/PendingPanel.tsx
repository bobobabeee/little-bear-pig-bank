import { useState } from 'react'
import type { UserId } from '../../types/bank'
import { pendingItems, type PendingDecision } from '../../data/pendingData'

type PendingTab = 'actionable' | 'created' | 'history'

const tabs: { id: PendingTab; label: string }[] = [
  { id: 'actionable', label: '待我处理' },
  { id: 'created', label: '我发起的' },
  { id: 'history', label: '历史记录' },
]

function nameOf(user: UserId) {
  return user === 'bear' ? '小熊' : '小猪'
}

export function PendingPanel({ currentUser, decisions, onDecision }: {
  currentUser: UserId
  decisions: Record<string, PendingDecision>
  onDecision: (id: string, decision: PendingDecision) => void
}) {
  const [tab, setTab] = useState<PendingTab>('actionable')
  const decisionFor = (id: string) => decisions[id] ?? pendingItems.find((item) => item.id === id)?.initialDecision
  const shownItems = pendingItems.filter((item) => {
    const decision = decisionFor(item.id)
    if (tab === 'actionable') return item.reviewer === currentUser && item.creator !== currentUser && !decision
    if (tab === 'created') return item.creator === currentUser && !decision
    return Boolean(decision) && (item.creator === currentUser || item.reviewer === currentUser)
  })

  return (
    <div className="pending-center">
      <div className="pending-tabs" role="tablist" aria-label="待办分类">
        {tabs.map((item) => <button type="button" role="tab" aria-selected={tab === item.id} className={tab === item.id ? 'active' : ''} key={item.id} onClick={() => setTab(item.id)}>{item.label}</button>)}
      </div>
      <div className="pending-list">
        {shownItems.map((item) => {
          const decision = decisionFor(item.id)
          const currencyName = item.currency === 'BEAR' ? '熊币' : '猪币'
          return <article key={item.id} className="pending-item">
            <span className="pending-item-icon" aria-hidden="true">{item.icon}</span>
            <div className="pending-item-copy">
              <strong>{item.title}</strong>
              <dl><div><dt>发起人</dt><dd>{nameOf(item.creator)}</dd></div><div><dt>账户</dt><dd>{nameOf(item.accountOwnerId)}账户</dd></div><div><dt>金额</dt><dd className={item.amount >= 0 ? 'positive' : 'negative'}>{item.amount > 0 ? '+' : ''}{item.amount}{currencyName}</dd></div></dl>
              <p>{item.approvalResult}</p>
            </div>
            <div className="pending-actions">
              {decision === 'approved' && <em className="decision-approved">已批准（演示）</em>}
              {decision === 'rejected' && <em className="decision-rejected">已退回（演示）</em>}
              {!decision && tab === 'actionable' && <><button className="primary-button" type="button" onClick={() => onDecision(item.id, 'approved')}>批准</button><button className="secondary-button" type="button" onClick={() => onDecision(item.id, 'rejected')}>退回</button></>}
              {!decision && tab === 'created' && <em>等待{nameOf(item.reviewer)}处理</em>}
            </div>
          </article>
        })}
        {shownItems.length === 0 && <div className="pending-empty"><span>♡</span><strong>这里暂时没有事项</strong><p>处理完成的内容会收进历史记录。</p></div>}
      </div>
      <p className="demo-caption">所有操作只演示状态变化，刷新后不会保存。</p>
    </div>
  )
}
