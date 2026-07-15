import { useMemo, useState } from 'react'
import { PageIntro } from '../components/common/Panel'
import { CharacterIcon, CoinIcon } from '../components/common/OriginalIcons'
import { RewardCard, type RewardAction } from '../components/rewards/RewardCard'
import { redemptions, rewards } from '../data/demoData'
import type { DemoReward, UserId } from '../types/bank'

const categories = ['全部', '日常奖励', '服务奖励', '礼物奖励', '旅行奖励'] as const
const actionLabels = { '日常奖励': '立即兑换', '服务奖励': '预约兑换', '礼物奖励': '提交愿望', '旅行奖励': '发起规划' } as const
const flowCopy = {
  '日常奖励': '确认后立即进入兑换记录。',
  '服务奖励': '先预约时间，提供者接受后才扣币。',
  '礼物奖励': '先提交愿望，预算和时间确认后才扣币。',
  '旅行奖励': '只发起规划，双方达成规划后才扣币。',
} as const

export default function RewardsPage({ currentUser }: { currentUser: UserId }) {
  const [category, setCategory] = useState<(typeof categories)[number]>('全部')
  const [directory, setDirectory] = useState<'mine' | 'other'>('mine')
  const [selected, setSelected] = useState<{ reward: DemoReward; action: RewardAction } | null>(null)
  const [feedback, setFeedback] = useState<string | null>(null)
  const [redemptionsOpen, setRedemptionsOpen] = useState(false)
  const currentName = currentUser === 'bear' ? '小熊' : '小猪'
  const otherName = currentUser === 'bear' ? '小猪' : '小熊'
  const balance = currentUser === 'bear' ? 18 : 85
  const targetAudience = directory === 'mine' ? currentName : otherName
  const shownRewards = useMemo(() => rewards.filter((reward) => reward.audience === targetAudience && (category === '全部' || reward.category === category)), [category, targetAudience])
  const myRedemptions = redemptions.filter((item) => item.userId === currentUser)

  function confirmDemoReward() {
    if (!selected) return
    const { reward, action } = selected
    setFeedback(action === 'wish' ? `「${reward.title}」已加入长期愿望。` : `「${reward.title}」已${actionLabels[reward.category]}。${flowCopy[reward.category]}`)
    setSelected(null)
    window.setTimeout(() => setFeedback(null), 4500)
  }

  return (
    <div className="page-stack rewards-page">
      <PageIntro label="REWARD SHOP / 003" title="欢迎光临两个人的奖励目录" description="默认展示当前操作人能兑换的奖励；浏览对方目录不会切换身份，也不能代替对方兑换。" />
      <div className="shop-account-strip">
        <div><CharacterIcon character={currentUser} size={44} /><span><small>当前操作人</small><strong>{currentName}</strong></span><CoinIcon currency={currentUser === 'bear' ? 'BEAR' : 'PIG'} size={27} /><b>{balance} {currentUser === 'bear' ? '熊币' : '猪币'}</b></div>
        <button className="secondary-button" type="button" onClick={() => setRedemptionsOpen(true)}>我的兑换</button>
      </div>
      <div className="shop-directory-tabs" role="tablist" aria-label="奖励目录">
        <button type="button" role="tab" aria-selected={directory === 'mine'} className={directory === 'mine' ? 'active' : ''} onClick={() => setDirectory('mine')}>我能兑换的</button>
        <button type="button" role="tab" aria-selected={directory === 'other'} className={directory === 'other' ? 'active' : ''} onClick={() => setDirectory('other')}>看看对方的目录</button>
      </div>
      <div className="filter-tabs shop-filters" aria-label="奖励分类">{categories.map((item) => <button key={item} className={category === item ? 'active' : ''} onClick={() => setCategory(item)}>{item}</button>)}</div>
      <p className="directory-note">正在查看：<strong>{targetAudience}的奖励目录</strong>{directory === 'other' && `。当前操作人仍是${currentName}，此目录只能浏览。`}</p>
      <div className="reward-grid">{shownRewards.map((reward) => <RewardCard key={reward.id} reward={reward} currentUser={currentUser} balance={balance} onAction={(item, action) => setSelected({ reward: item, action })} />)}</div>

      {selected && <div className="modal-backdrop" role="presentation" onMouseDown={() => setSelected(null)}><div className="demo-modal" role="dialog" aria-modal="true" aria-labelledby="redeem-title" onMouseDown={(event) => event.stopPropagation()}><button className="modal-close ghost-button" onClick={() => setSelected(null)} aria-label="关闭">×</button><span className="modal-ticket-icon">{selected.reward.icon}</span><small>DEMO REQUEST</small><h2 id="redeem-title">{selected.action === 'wish' ? '加入长期愿望' : actionLabels[selected.reward.category]}「{selected.reward.title}」？</h2><p>{selected.reward.price} {selected.reward.currency === 'BEAR' ? '熊币' : '猪币'} · {selected.reward.provider}提供。本轮只演示流程，不扣除余额。</p><p className="modal-flow-copy">{selected.action === 'wish' ? '余额暂时不足，先收藏为长期愿望，不创建扣款。' : flowCopy[selected.reward.category]}</p>{selected.reward.category === '旅行奖励' && <p className="modal-travel-rule">旅行只代表规划商讨，不表示提供者承担全部费用，也不表示必须立即出行。</p>}<div><button className="secondary-button" onClick={() => setSelected(null)}>再想一想</button><button className="primary-button" onClick={confirmDemoReward}>{selected.action === 'wish' ? '加入愿望' : actionLabels[selected.reward.category]} ♡</button></div></div></div>}

      {redemptionsOpen && <div className="modal-backdrop" role="presentation" onMouseDown={() => setRedemptionsOpen(false)}><section className="redemption-modal" role="dialog" aria-modal="true" aria-labelledby="redemption-title" onMouseDown={(event) => event.stopPropagation()}><div className="redemption-heading"><div><span>MY REDEMPTIONS</span><h2 id="redemption-title">{currentName}的兑换记录</h2></div><button className="ghost-button" type="button" onClick={() => setRedemptionsOpen(false)} aria-label="关闭我的兑换">×</button></div><div className="redemption-list">{myRedemptions.map((item) => <article key={item.id}><div><strong>{item.rewardTitle}</strong><small>{item.date} · {item.id}</small></div><span className={`redemption-status status-${item.status}`}>{item.status}</span><b>{item.amount}{item.currency === 'BEAR' ? '熊币' : '猪币'}</b></article>)}</div><p>预约、兑现、完成和退款均为演示状态，不会改变余额。</p></section></div>}
      {feedback && <div className="toast-message" role="status"><span>✓</span><div><strong>演示操作完成</strong><p>{feedback}本轮不会保存。</p></div><button className="ghost-button" onClick={() => setFeedback(null)} aria-label="关闭提示">×</button></div>}
    </div>
  )
}
