import type { DemoReward } from '../../types/bank'
import { CoinIcon } from '../common/OriginalIcons'

export function RewardCard({ reward, onRedeem }: { reward: DemoReward; onRedeem: (reward: DemoReward) => void }) {
  const currencyName = reward.currency === 'BEAR' ? '熊币' : '猪币'
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
      {reward.requiresApproval && <p className="reward-protection">需确认预算与时间</p>}
      <div className="reward-checkout">
        <span><CoinIcon currency={reward.currency} size={28} /><strong>{reward.price}</strong><small>{currencyName}</small></span>
        <button className="primary-button reward-button" type="button" onClick={() => onRedeem(reward)}>兑换 <span>→</span></button>
      </div>
    </article>
  )
}
