import { useMemo, useState } from 'react'
import { PageIntro } from '../components/common/Panel'
import { CharacterIcon, CoinIcon } from '../components/common/OriginalIcons'
import { RewardCard } from '../components/rewards/RewardCard'
import { rewards } from '../data/demoData'
import type { DemoReward, UserId } from '../types/bank'

const categories = ['全部', '日常奖励', '服务奖励', '礼物奖励', '旅行奖励'] as const
const actionLabels = { '日常奖励': '立即兑换', '服务奖励': '预约兑换', '礼物奖励': '提交愿望', '旅行奖励': '发起规划' } as const

export default function RewardsPage({ currentUser }: { currentUser: UserId }) {
  const [category, setCategory] = useState<(typeof categories)[number]>('全部')
  const [selected, setSelected] = useState<DemoReward | null>(null)
  const [feedback, setFeedback] = useState<string | null>(null)
  const currentName = currentUser === 'bear' ? '小熊' : '小猪'
  const shownRewards = useMemo(() => rewards.filter((reward) => category === '全部' || reward.category === category), [category])

  function confirmDemoReward() {
    if (!selected) return
    const action = actionLabels[selected.category]
    setFeedback(selected.category === '日常奖励' ? `「${selected.title}」已完成演示兑换。` : `「${selected.title}」已${action}，后续将由双方商量安排。`)
    setSelected(null)
    window.setTimeout(() => setFeedback(null), 4500)
  }

  return (
    <div className="page-stack rewards-page">
      <PageIntro label="REWARD SHOP / 003" title="欢迎光临两个人的奖励目录" description="当前操作人可以购买自己的奖励，也可以浏览对方目录而不改变身份。" />
      <div className="shop-account-strip">
        <div><CharacterIcon character={currentUser} size={44} /><span><small>当前操作人</small><strong>{currentName}</strong></span><CoinIcon currency={currentUser === 'bear' ? 'BEAR' : 'PIG'} size={27} /><b>{currentUser === 'bear' ? '18 熊币' : '85 猪币'}</b></div>
        <div className="filter-tabs shop-filters" aria-label="奖励分类">{categories.map((item) => <button key={item} className={category === item ? 'active' : ''} onClick={() => setCategory(item)}>{item}</button>)}</div>
      </div>
      <div className="reward-grid">{shownRewards.map((reward) => <RewardCard key={reward.id} reward={reward} currentUser={currentUser} onRedeem={setSelected} />)}</div>

      {selected && <div className="modal-backdrop" role="presentation" onMouseDown={() => setSelected(null)}>
        <div className="demo-modal" role="dialog" aria-modal="true" aria-labelledby="redeem-title" onMouseDown={(event) => event.stopPropagation()}>
          <button className="modal-close" onClick={() => setSelected(null)} aria-label="关闭">×</button>
          <span className="modal-ticket-icon">{selected.icon}</span><small>DEMO REQUEST</small>
          <h2 id="redeem-title">{actionLabels[selected.category]}「{selected.title}」？</h2>
          <p>{selected.price} {selected.currency === 'BEAR' ? '熊币' : '猪币'} · {selected.provider}提供。本轮只演示流程，不扣除余额。</p>
          {selected.category === '旅行奖励' && <p className="modal-travel-rule">旅行奖励只创建一次规划商讨请求，不表示提供者承担全部费用，也不表示双方必须立即出行。</p>}
          {selected.protectionNote && <p className="modal-protection">{selected.protectionNote}</p>}
          <div><button onClick={() => setSelected(null)}>再想一想</button><button className="primary-button" onClick={confirmDemoReward}>{actionLabels[selected.category]} ♡</button></div>
        </div>
      </div>}
      {feedback && <div className="toast-message" role="status"><span>✓</span><div><strong>演示操作完成</strong><p>{feedback}本轮不会保存。</p></div><button onClick={() => setFeedback(null)} aria-label="关闭提示">×</button></div>}
    </div>
  )
}
