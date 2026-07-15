import type { DemoReward, UserId } from '../../types/bank'
import { CoinIcon } from '../common/OriginalIcons'

export type RewardAction = 'redeem' | 'wish'

const actionLabels = { '日常奖励': '立即兑换', '服务奖励': '预约兑换', '礼物奖励': '提交愿望', '旅行奖励': '发起规划' } as const
const flowCopy = {
  '日常奖励': '立即兑换，确认后直接进入已兑换状态。',
  '服务奖励': '预约兑换，提供者接受时间后才扣币。',
  '礼物奖励': '提交愿望，预算和时间确认后才扣币。',
  '旅行奖励': '发起规划，双方达成规划后才扣币。',
} as const

export function RewardCard({ reward, currentUser, balance, onAction }: { reward: DemoReward; currentUser: UserId; balance: number; onAction: (reward: DemoReward, action: RewardAction) => void }) {
  const currencyName = reward.currency === 'BEAR' ? '熊币' : '猪币'
  const currentName = currentUser === 'bear' ? '小熊' : '小猪'
  const isOwnReward = reward.audience === currentName
  const canAfford = balance >= reward.price
  const canSaveWish = isOwnReward && !canAfford && (reward.category === '礼物奖励' || reward.category === '旅行奖励')
  const shortage = Math.max(0, reward.price - balance)
  const buttonLabel = !isOwnReward ? `仅${reward.audience}可操作` : canAfford ? actionLabels[reward.category] : canSaveWish ? '加入长期愿望' : `还差${shortage}${currencyName}`

  return (
    <article className="reward-card">
      <div className="reward-topline"><span>{reward.category}</span><small>{reward.audience}可兑换 · {reward.id}</small></div>
      <div className="reward-main"><div className="reward-icon" aria-hidden="true">{reward.icon}</div><div><h3>{reward.title}</h3><p>{reward.description}</p></div></div>
      <div className="reward-brief"><span>{reward.provider}提供</span><span>{reward.limit}</span><span>{reward.fulfillment}</span></div>
      <p className="reward-flow">{flowCopy[reward.category]}</p>
      {reward.category === '旅行奖励' && <p className="reward-protection">只代表规划商讨，不表示提供者承担全部费用，也不表示必须立即出行。</p>}
      <div className="reward-checkout">
        <span><CoinIcon currency={reward.currency} size={28} /><strong>{reward.price}</strong><small>{currencyName}</small></span>
        <button className={canSaveWish ? 'secondary-button reward-button' : 'primary-button reward-button'} type="button" disabled={!isOwnReward || (!canAfford && !canSaveWish)} onClick={() => onAction(reward, canSaveWish ? 'wish' : 'redeem')}>{buttonLabel} <span>→</span></button>
      </div>
    </article>
  )
}
