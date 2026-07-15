import { Link } from 'react-router-dom'
import { AccountCard } from '../components/bank/AccountCard'
import { getPendingCount, type PendingDecision } from '../data/pendingData'
import { TransactionList } from '../components/bank/TransactionList'
import { PageIntro } from '../components/common/Panel'
import { SharedGoalCard } from '../components/goals/SharedGoalCard'
import { transactions } from '../data/demoData'
import type { UserId } from '../types/bank'

const stats = [
  { icon: '✦', value: '+6', unit: '熊币', label: '小熊本周赚取', tone: 'yellow' },
  { icon: '♡', value: '+30', unit: '猪币', label: '小猪本周赚取', tone: 'pink' },
  { icon: '◇', value: '2', unit: '次', label: '本周兑换', tone: 'blue' },
  { icon: '✓', value: '3', unit: '份', label: '完成奖励', tone: 'green' },
]

export default function HomePage({ currentUser, decisions, onOpenPending }: { currentUser: UserId; decisions: Record<string, PendingDecision>; onOpenPending: () => void }) {
  const pendingCount = getPendingCount(currentUser, decisions)

  return (
    <div className="page-stack home-page">
      <PageIntro label="BANK HOME / 001" title="欢迎回到两个人的小银行" description="把今天值得珍藏的心意，也轻轻存进这里吧。" />

      <div className="account-pair">
        <AccountCard character="bear" balance={18} note="蜂蜜色的熊币存折" />
        <AccountCard character="pig" balance={85} note="草莓粉的猪币存折" />
      </div>

      <button className="home-pending-summary" type="button" onClick={onOpenPending}>
        <span><b>!</b><span><small>ACTION INBOX</small><strong>{currentUser === 'bear' ? '小熊' : '小猪'}有 {pendingCount} 项待处理</strong></span></span><em>打开待办 →</em>
      </button>

      <div className="weekly-strip" aria-label="本周统计">
        <span>本周小结</span>{stats.map((stat) => <p key={stat.label + stat.unit}><b>{stat.icon}</b><strong>{stat.value} {stat.unit}</strong><small>{stat.label}</small></p>)}
      </div>

      <nav className="home-primary-actions" aria-label="主要操作">
        <Link to="/earn"><span>＋</span><div><strong>给对方奖励</strong><small>记录一份被看见的心意</small></div><b>→</b></Link>
        <Link to="/rewards"><span>◇</span><div><strong>去兑换奖励</strong><small>翻翻两个人的奖励目录</small></div><b>→</b></Link>
      </nav>

      <section className="home-main-sheet">
        <div className="home-transactions"><div className="simple-section-heading"><span>RECENT TRANSACTIONS</span><h2>最近流水</h2></div><TransactionList items={transactions.slice(0, 3)} /><Link className="text-link" to="/transactions">翻看完整流水账本 <span>→</span></Link></div>
        <div className="home-goal-note"><span className="tape" aria-hidden="true" /><div className="simple-section-heading"><span>OUR LITTLE GOAL</span><h2>共同目标</h2></div><SharedGoalCard compact /></div>
      </section>
    </div>
  )
}
