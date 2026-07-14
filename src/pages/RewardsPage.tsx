import { useMemo, useState } from 'react'
import { PageIntro } from '../components/common/Panel'
import { NoticeBox } from '../components/common/NoticeBox'
import { RewardCard } from '../components/rewards/RewardCard'
import { rewards } from '../data/demoData'
import type { DemoReward } from '../types/bank'

const categories = ['全部', '小小奖励', '陪伴服务', '特别权限', '约会体验', '长期愿望'] as const

export default function RewardsPage() {
  const [category, setCategory] = useState<(typeof categories)[number]>('全部')
  const [selected, setSelected] = useState<DemoReward | null>(null)
  const shownRewards = useMemo(() => category === '全部' ? rewards : rewards.filter((reward) => reward.category === category), [category])

  return (
    <div className="page-stack rewards-page">
      <PageIntro label="REWARD SHOP / 003" title="欢迎光临今日奖励商店" description="这里出售的是额外陪伴、小惊喜，还有一起期待的特别日子。" />
      <div className="shop-marquee"><span>OPEN</span><p>今日商店营业中 · 本月已兑换 6 张小券</p><em>♡ NEW COUPONS ♡</em></div>
      <NoticeBox tone="pink"><strong>温柔提醒</strong><p>基本尊重、正常沟通和爱永远不是商品。商店只收藏额外的小惊喜。</p></NoticeBox>
      <div className="filter-tabs shop-filters" aria-label="奖励分类">
        {categories.map((item) => <button key={item} className={category === item ? 'active' : ''} onClick={() => setCategory(item)}>{item}</button>)}
      </div>
      <div className="results-note"><span>COUPON CATALOG</span><p>找到 <strong>{shownRewards.length}</strong> 张可爱的奖励券</p></div>
      <div className="reward-grid">{shownRewards.map((reward) => <RewardCard key={reward.id} reward={reward} onRedeem={setSelected} />)}</div>

      {selected && <div className="modal-backdrop" role="presentation" onMouseDown={() => setSelected(null)}>
        <div className="demo-modal" role="dialog" aria-modal="true" aria-labelledby="redeem-title" onMouseDown={(event) => event.stopPropagation()}>
          <button className="modal-close" onClick={() => setSelected(null)} aria-label="关闭">×</button>
          <span className="modal-ticket-icon">{selected.icon}</span>
          <small>DEMO REDEMPTION</small>
          <h2 id="redeem-title">想兑换「{selected.title}」吗？</h2>
          <p>这是一张阶段一演示券。确认后不会扣除余额，也不会创建兑换订单。</p>
          <div><button onClick={() => setSelected(null)}>再想一想</button><button className="primary-button" onClick={() => setSelected(null)}>收下演示券 ♡</button></div>
        </div>
      </div>}
    </div>
  )
}
