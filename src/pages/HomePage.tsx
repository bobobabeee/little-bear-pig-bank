import { Link } from 'react-router-dom'
import { AccountCard } from '../components/bank/AccountCard'
import { PendingPanel } from '../components/bank/PendingPanel'
import { TransactionList } from '../components/bank/TransactionList'
import { Panel, PageIntro } from '../components/common/Panel'
import { SharedGoalCard } from '../components/goals/SharedGoalCard'
import { transactions } from '../data/demoData'

const stats = [
  { icon: '✦', value: '+6', unit: '熊币', label: '本周收入', tone: 'yellow' },
  { icon: '♡', value: '+30', unit: '猪币', label: '本周收入', tone: 'pink' },
  { icon: '◇', value: '2', unit: '次', label: '本周兑换', tone: 'blue' },
  { icon: '✓', value: '3', unit: '份', label: '完成奖励', tone: 'green' },
]

export default function HomePage() {
  return (
    <div className="page-stack home-page">
      <PageIntro label="BANK HOME / 001" title="欢迎回到两个人的小银行" description="把今天值得珍藏的心意，也轻轻存进这里吧。" />

      <div className="account-pair">
        <AccountCard character="bear" bear={18} pig={25} note="蜂蜜色的认真存折" />
        <AccountCard character="pig" bear={6} pig={85} note="草莓粉的心意存折" />
      </div>

      <div className="weekly-stats">
        {stats.map((stat) => <article key={stat.label + stat.unit} className={`stat-card tone-${stat.tone}`}><span>{stat.icon}</span><div><strong>{stat.value}<small>{stat.unit}</small></strong><p>{stat.label}</p></div></article>)}
      </div>

      <Panel title="快捷营业窗口" eyebrow="QUICK SERVICE">
        <div className="quick-actions">
          <Link to="/earn"><span>＋</span><strong>记录一笔奖励</strong><small>把心意存进来</small></Link>
          <Link to="/rewards"><span>◇</span><strong>去奖励商店</strong><small>看看今日小券</small></Link>
          <Link to="/transactions"><span>▤</span><strong>查看全部流水</strong><small>翻开两人存折</small></Link>
          <a href="#pending"><span>!</span><strong>查看待确认</strong><small>目前有 3 项</small></a>
        </div>
      </Panel>

      <Panel title="最近流水" eyebrow="RECENT TRANSACTIONS">
        <TransactionList items={transactions.slice(0, 5)} />
        <Link className="text-link" to="/transactions">翻看完整流水账本 <span>→</span></Link>
      </Panel>

      <div className="home-bottom-grid">
        <Panel title="待确认事项" eyebrow="PENDING / 03" className="pending-panel" >
          <div id="pending"><PendingPanel /></div>
        </Panel>
        <Panel title="共同目标" eyebrow="OUR LITTLE GOAL" className="goal-panel">
          <SharedGoalCard compact />
        </Panel>
      </div>
    </div>
  )
}
