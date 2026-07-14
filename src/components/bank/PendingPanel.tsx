const pendingItems = [
  { icon: '✎', title: '陪伴完成学习计划', meta: '小猪 · +15 猪币', action: '等待小熊确认' },
  { icon: '◇', title: '对方策划一次小约会', meta: '小熊发起兑换', action: '等待小猪接受' },
  { icon: '↺', title: '抱抱券取消返还', meta: '退款申请 · 5 猪币', action: '等待确认' },
]

export function PendingPanel() {
  return (
    <div className="pending-list">
      {pendingItems.map((item) => (
        <div key={item.title}>
          <span aria-hidden="true">{item.icon}</span>
          <p><strong>{item.title}</strong><small>{item.meta}</small></p>
          <em>{item.action}</em>
        </div>
      ))}
      <p className="demo-caption">阶段一仅展示事项，确认操作将在阶段二接入。</p>
    </div>
  )
}
