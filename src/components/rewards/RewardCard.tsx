import type { DemoReward, UserId } from '../../types/bank'
import { CoinIcon } from '../common/OriginalIcons'

const actionLabels = { '日常奖励': '立即兑换', '服务奖励': '预约兑换', '礼物奖励': '提交愿望', '旅行奖励': '发起规划' } as const

export function RewardCard({ reward, currentUser, onRedeem }: { reward: DemoReward; currentUser: UserId; onRedeem: (reward: DemoReward) => void }) {
  const currencyName = reward.currency === 'BEAR' ? '熊币' : '猪币'
  const currentName = currentUser === 'bear' ? '小熊' : '小猪'
  const canUse = reward.audience === currentName
  return (
    <article className="reward-card">
      <div className="reward-topline"><span>{reward.category}</span><small>{reward.audience}可兑换 · {reward.id}</small></div>
      <div className="reward-main">
        <div className="reward-icon" aria-hidden="true">{reward.icon}</div>
        <div><h3>{reward.title}</h3><p>{reward.description}</p></div>
      </div>
      <div className="reward-brief">
        <span>{reward.provider}提供</span><span>{reward.limit}</span><span>{reward.fulfillment}</span>
      </div>
      {reward.requiresApproval && <p className="reward-protection">{reward.category === '旅行奖励' ? '只发起规划商讨' : '需确认预算与时间'}</p>}
      <div className="reward-checkout">
        <span><CoinIcon currency={reward.currency} size={28} /><strong>{reward.price}</strong><small>{currencyName}</small></span>
        <button className="primary-button reward-button" type="button" disabled={!canUse} onClick={() => onRedeem(reward)}>{canUse ? actionLabels[reward.category] : `仅${reward.audience}可操作`} <span>→</span></button>
      </div>
    </article>
  )
}
