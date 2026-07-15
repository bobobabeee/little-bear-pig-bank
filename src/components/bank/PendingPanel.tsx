import { useState } from 'react'
import type { UserId } from '../../types/bank'

const pendingItems: { id: string; icon: string; title: string; meta: string; reviewer: UserId }[] = [
  { id: 'P01', icon: '✎', title: '陪伴完成学习计划', meta: '赚币记录 · 小猪 +15 猪币', reviewer: 'bear' },
  { id: 'P02', icon: '▧', title: '小礼物愿望卡（50元内）', meta: '商店兑换 · 小熊 20 熊币', reviewer: 'pig' },
  { id: 'P03', icon: '↺', title: '抱抱券取消返还', meta: '退款申请 · 5 猪币', reviewer: 'bear' },
]

export function PendingPanel({ currentUser }: { currentUser: UserId }) {
  const [decisions, setDecisions] = useState<Record<string, 'approved' | 'rejected'>>({})

  return (
    <div className="pending-list">
      {pendingItems.map((item) => (
        <div key={item.id}>
          <span aria-hidden="true">{item.icon}</span>
          <p><strong>{item.title}</strong><small>{item.meta}</small></p>
          <div className="pending-actions">
            {decisions[item.id] === 'approved' && <em className="decision-approved">已批准（演示）</em>}
            {decisions[item.id] === 'rejected' && <em className="decision-rejected">已退回（演示）</em>}
            {!decisions[item.id] && item.reviewer === currentUser && <><button onClick={() => setDecisions((current) => ({ ...current, [item.id]: 'approved' }))}>批准</button><button onClick={() => setDecisions((current) => ({ ...current, [item.id]: 'rejected' }))}>退回</button></>}
            {!decisions[item.id] && item.reviewer !== currentUser && <em>等待{item.reviewer === 'bear' ? '小熊' : '小猪'}处理</em>}
          </div>
        </div>
      ))}
      <p className="demo-caption">这里是唯一的批准入口；按钮仅演示状态变化，刷新后不会保存。</p>
    </div>
  )
}
