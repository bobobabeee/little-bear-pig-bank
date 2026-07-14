import { AchievementBadge } from '../components/common/AchievementBadge'
import { NoticeBox } from '../components/common/NoticeBox'
import { PageIntro, Panel } from '../components/common/Panel'
import { CharacterIcon, StampDecoration } from '../components/common/OriginalIcons'
import { SharedGoalCard } from '../components/goals/SharedGoalCard'

const memories = [
  { date: '2024.02.14', label: 'FIRST MEET', title: '第一次好好认识彼此', note: '“原来和你聊天，时间会过得这么快。”', icon: '✦' },
  { date: '2025.05.20', label: 'BANK OPEN', title: '小熊猪银行正式成立', note: '签下第一张营业守则，盖上两枚爱心章。', icon: '〒' },
  { date: '2025.06.01', label: 'FIRST COUPON', title: '兑换第一张奖励券', note: '是一张十分钟认真抱抱券。', icon: '♡' },
  { date: '2026.06.22', label: 'SPECIAL DATE', title: '完成一次夏日小约会', note: '看了落日，也吃到了想念很久的冰淇淋。', icon: '☀' },
]

const rules = ['不能给自己发币', '不随意扣除对方余额', '所有余额变化都有流水', '错误交易只撤销不删除', '未完成奖励可以退款', '基本尊重和爱不能购买']

export default function OurRoomPage() {
  return (
    <div className="page-stack our-room-page">
      <PageIntro label="OUR ROOM / 005" title="欢迎回到我们的小屋" description="银行打烊以后，这里还收藏着两个人一起经营的日子。" />
      <section className="room-hero">
        <div className="room-photo"><CharacterIcon character="bear" size={92} /><span>♡</span><CharacterIcon character="pig" size={92} /><small>K + P</small></div>
        <div className="room-copy"><span>OUR LITTLE SECRET BASE</span><h2>小熊猪银行营业中</h2><p>一间由小熊和小猪共同经营的可爱银行，认真记录幸福的点点滴滴。</p><dl><div><dt>成立日期</dt><dd>2025.05.20</dd></div><div><dt>经营天数</dt><dd>421 天</dd></div><div><dt>固定汇率</dt><dd>1 熊币 = 5 猪币</dd></div><div><dt>银行成员</dt><dd>小熊 &amp; 小猪</dd></div></dl></div>
        <StampDecoration />
      </section>

      <Panel title="共同愿望" eyebrow="OUR SHARED WISH">
        <SharedGoalCard />
      </Panel>

      <Panel title="情侣纪念卡片" eyebrow="MEMORIES WE KEEP">
        <div className="memory-grid">{memories.map((memory, index) => <article key={memory.date} className={`memory-card memory-${index + 1}`}><div className="memory-image"><span>{memory.icon}</span><small>PHOTO<br />PLACEHOLDER</small></div><time>{memory.date}</time><span>{memory.label}</span><h3>{memory.title}</h3><p>{memory.note}</p></article>)}</div>
      </Panel>

      <Panel title="银行成就" eyebrow="ACHIEVEMENT COLLECTION">
        <div className="achievement-grid">
          <AchievementBadge icon="1st" title="第一笔心意" description="完成银行的第一笔奖励记录" tone="yellow" />
          <AchievementBadge icon="10" title="认真记录家" description="累计完成 10 笔交易" tone="blue" />
          <AchievementBadge icon="♡" title="第一张小券" description="完成第一次奖励兑换" tone="pink" />
          <AchievementBadge icon="7D" title="连续营业" description="一起经营小银行 7 天" tone="green" />
        </div>
      </Panel>

      <div className="room-lower-grid">
        <Panel title="六月小报告" eyebrow="MONTHLY REPORT" className="monthly-report">
          <div className="report-month"><span>2026</span><strong>06</strong><small>JUNE</small></div>
          <div className="report-stats"><div><span>交易总数</span><strong>18</strong><small>笔</small></div><div><span>获得熊币</span><strong>24</strong><small>枚</small></div><div><span>获得猪币</span><strong>95</strong><small>枚</small></div><div><span>完成奖励</span><strong>6</strong><small>份</small></div></div>
          <div className="report-highlight"><span>本月关键词</span><strong>「认真陪伴」</strong><p>最受欢迎奖励：陪散步半小时</p></div>
        </Panel>
        <Panel title="银行营业守则" eyebrow="HOUSE RULES" className="rules-panel">
          <ol>{rules.map((rule, index) => <li key={rule}><span>{String(index + 1).padStart(2, '0')}</span><p>{rule}</p></li>)}</ol>
        </Panel>
      </div>
      <NoticeBox tone="green"><strong>写在最后</strong><p>硬币记录的是额外的用心；不需要硬币的尊重、沟通和拥抱，才是这间银行最重要的底金。</p></NoticeBox>
    </div>
  )
}
