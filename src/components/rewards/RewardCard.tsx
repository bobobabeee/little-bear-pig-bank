import type { DemoReward } from '../../types/bank'
import { CoinIcon } from '../common/OriginalIcons'

export function RewardCard({ reward, onRedeem }: { reward: DemoReward; onRedeem: (reward: DemoReward) => void }) {
  return (
    <article className="reward-card">
      <div className="reward-topline"><span>{reward.category}</span><small>{reward.id}</small></div>
      <div className="reward-main">
        <div className="reward-icon" aria-hidden="true">{reward.icon}</div>
        <div><h3>{reward.title}</h3><p>{reward.description}</p></div>
      </div>
      <dl>
        <div><dt>提供者</dt><dd>{reward.provider}</dd></div>
        <div><dt>次数限制</dt><dd>{reward.limit}</dd></div>
        <div><dt>履约安排</dt><dd>{reward.appointment}</dd></div>
      </dl>
      <div className="reward-price">
        <span><CoinIcon currency="BEAR" size={26} /><strong>{reward.bearPrice}</strong> 熊币</span>
        <em>OR</em>
        <span><CoinIcon currency="PIG" size={26} /><strong>{reward.pigPrice}</strong> 猪币</span>
      </div>
      <button className="primary-button reward-button" type="button" onClick={() => onRedeem(reward)}>兑换这张券 <span>→</span></button>
    </article>
  )
}
