import { useMemo, useState } from 'react'
import { PageIntro } from '../components/common/Panel'
import { RewardCard } from '../components/rewards/RewardCard'
import { rewards } from '../data/demoData'
import type { DemoReward, UserId } from '../types/bank'

const categories = ['全部', '日常小券', '用心奖励', '礼物与旅行'] as const

export default function RewardsPage({ currentUser, onSwitch }: { currentUser: UserId; onSwitch: (user: UserId) => void }) {
  const [category, setCategory] = useState<(typeof categories)[number]>('全部')
  const [selected, setSelected] = useState<DemoReward | null>(null)
  const [feedback, setFeedback] = useState<string | null>(null)
  const buyer = currentUser === 'bear' ? '小熊' : '小猪'
  const shownRewards = useMemo(() => rewards.filter((reward) => reward.audience === buyer && (category === '全部' || reward.category === category)), [buyer, category])

  function confirmDemoReward() {
    if (!selected) return
    setFeedback(selected.requiresApproval ? `「${selected.title}」会送到首页待处理，等待${selected.provider}确认。` : `「${selected.title}」演示兑换成功。`)
    setSelected(null)
    window.setTimeout(() => setFeedback(null), 4500)
  }

  return (
    <div className="page-stack rewards-page">
      <PageIntro label="REWARD SHOP / 003" title="欢迎光临今日奖励商店" description="这里出售的是额外陪伴、小惊喜，还有一起期待的特别日子。" />
      <div className="shop-buyer-switch" aria-label="选择购买身份">
        <span>现在由谁购买？</span>
        <div><button className={currentUser === 'bear' ? 'active' : ''} onClick={() => onSwitch('bear')}>小熊 · 用熊币</button><button className={currentUser === 'pig' ? 'active' : ''} onClick={() => onSwitch('pig')}>小猪 · 用猪币</button></div>
      </div>
      <p className="shop-simple-note"><strong>兑换规则：</strong>日常小券直接兑换；礼物和旅行送到首页“待处理”。基本尊重与爱不需要花币。</p>
      <div className="filter-tabs shop-filters" aria-label="奖励分类">
        {categories.map((item) => <button key={item} className={category === item ? 'active' : ''} onClick={() => setCategory(item)}>{item}</button>)}
      </div>
      <div className="results-note"><span>{currentUser === 'bear' ? 'KUMA' : 'PIGGY'} COUPON CATALOG</span><p>{buyer}可以兑换 <strong>{shownRewards.length}</strong> 张奖励券</p></div>
      <div className="reward-grid">{shownRewards.map((reward) => <RewardCard key={reward.id} reward={reward} onRedeem={setSelected} />)}</div>

      {selected && <div className="modal-backdrop" role="presentation" onMouseDown={() => setSelected(null)}>
        <div className="demo-modal" role="dialog" aria-modal="true" aria-labelledby="redeem-title" onMouseDown={(event) => event.stopPropagation()}>
          <button className="modal-close" onClick={() => setSelected(null)} aria-label="关闭">×</button>
          <span className="modal-ticket-icon">{selected.icon}</span>
          <small>DEMO REDEMPTION</small>
          <h2 id="redeem-title">想兑换「{selected.title}」吗？</h2>
          <p>{selected.price} {selected.currency === 'BEAR' ? '熊币' : '猪币'} · {selected.provider}提供。{selected.requiresApproval ? `提交后先等待${selected.provider}确认预算与时间，本轮不会扣除余额。` : '这是一张日常奖励，本轮仅演示兑换，不会扣除余额。'}</p>
          {selected.protectionNote && <p className="modal-protection">{selected.protectionNote}</p>}
          <div><button onClick={() => setSelected(null)}>再想一想</button><button className="primary-button" onClick={confirmDemoReward}>{selected.requiresApproval ? '送去确认' : '确认兑换'} ♡</button></div>
        </div>
      </div>}
      {feedback && <div className="toast-message" role="status"><span>✓</span><div><strong>演示操作完成</strong><p>{feedback}</p></div><button onClick={() => setFeedback(null)} aria-label="关闭提示">×</button></div>}
    </div>
  )
}
