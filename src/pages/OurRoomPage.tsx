import { AchievementBadge } from '../components/common/AchievementBadge'
import { PageIntro } from '../components/common/Panel'
import { CharacterIcon, StampDecoration } from '../components/common/OriginalIcons'
import { SharedGoalCard } from '../components/goals/SharedGoalCard'

const memories = [
  { date: '2024.02.14', label: 'FIRST MEET', title: '第一次好好认识彼此', note: '“原来和你聊天，时间会过得这么快。”', icon: '✦' },
  { date: '2025.05.20', label: 'BANK OPEN', title: '小熊猪银行正式成立', note: '签下第一张营业守则，盖上两枚爱心章。', icon: '〒' },
  { date: '2025.06.01', label: 'FIRST COUPON', title: '兑换第一张奖励券', note: '是一张十分钟认真抱抱券。', icon: '♡' },
  { date: '2026.06.22', label: 'SPECIAL DATE', title: '完成一次夏日小约会', note: '看了落日，也吃到了想念很久的冰淇淋。', icon: '☀' },
]

const rules = ['不能给自己发币', '不随意扣除对方余额', '所有余额变化都有流水', '错误交易只撤销不删除', '未完成奖励可以退款', '基本尊重和爱不能购买']

function SectionHeading({ label, title }: { label: string; title: string }) {
  return <div className="scrapbook-heading"><span>{label}</span><h2>{title}</h2></div>
}

export default function OurRoomPage() {
  return (
    <div className="page-stack our-room-page">
      <PageIntro label="OUR ROOM / 005" title="欢迎回到我们的小屋" description="银行打烊以后，这里还收藏着两个人一起经营的日子。" />
      <section className="room-hero">
        <div className="room-photo"><CharacterIcon character="bear" size={92} /><span>♡</span><CharacterIcon character="pig" size={92} /><small>K + P</small></div>
        <div className="room-copy"><span>OUR LITTLE SECRET BASE</span><h2>小熊猪银行营业中</h2><p>小熊和小猪共同经营的可爱银行。小猪把对小熊的在意藏进每天温柔的小细节里，两个人也认真收藏彼此的付出。</p><dl><div><dt>成立日期</dt><dd>2025.05.20</dd></div><div><dt>经营天数</dt><dd>421 天</dd></div><div><dt>固定汇率</dt><dd>1 熊币 = 5 猪币</dd></div><div><dt>银行成员</dt><dd>小熊 &amp; 小猪</dd></div></dl></div>
        <StampDecoration />
      </section>

      <section className="wish-note"><span className="tape" aria-hidden="true" /><SectionHeading label="OUR SHARED WISH" title="共同愿望便签" /><SharedGoalCard /></section>

      <section className="photo-wall"><SectionHeading label="MEMORIES WE KEEP" title="情侣纪念照片墙" /><div className="memory-grid">{memories.map((memory, index) => <article key={memory.date} className={`memory-card memory-${index + 1}`}><div className="memory-image"><span>{memory.icon}</span><small>PHOTO<br />PLACEHOLDER</small></div><time>{memory.date}</time><span>{memory.label}</span><h3>{memory.title}</h3><p>{memory.note}</p></article>)}</div></section>

      <section className="stamp-book"><SectionHeading label="ACHIEVEMENT COLLECTION" title="银行成就邮票册" /><div className="achievement-grid">
        <AchievementBadge icon="1st" title="第一笔心意" description="完成银行的第一笔奖励记录" tone="yellow" />
        <AchievementBadge icon="10" title="认真记录家" description="累计完成 10 笔交易" tone="blue" />
        <AchievementBadge icon="♡" title="第一张小券" description="完成第一次奖励兑换" tone="pink" />
        <AchievementBadge icon="7D" title="连续营业" description="一起经营小银行 7 天" tone="green" />
      </div></section>

      <div className="room-desk-grid">
        <section className="calendar-page monthly-report">
          <SectionHeading label="MONTHLY REPORT" title="六月小报告" />
          <div className="calendar-rings" aria-hidden="true"><span /><span /><span /><span /></div>
          <div className="report-month"><span>2026</span><strong>06</strong><small>JUNE</small></div>
          <div className="report-stats"><div><span>交易总数</span><strong>18</strong><small>笔</small></div><div><span>小熊获得熊币</span><strong>24</strong><small>枚</small></div><div><span>小猪获得猪币</span><strong>95</strong><small>枚</small></div><div><span>完成奖励</span><strong>6</strong><small>份</small></div></div>
          <div className="report-highlight"><span>本月关键词</span><strong>「认真陪伴」</strong><p>最受欢迎奖励：陪散步半小时</p></div>
        </section>
        <details className="rules-book">
          <summary><span>HOUSE RULES</span><strong>银行营业守则</strong><em>翻开小册子 ＋</em></summary>
          <ol>{rules.map((rule, index) => <li key={rule}><span>{String(index + 1).padStart(2, '0')}</span><p>{rule}</p></li>)}</ol>
          <p>硬币记录额外的用心；尊重、沟通和拥抱，是不需要硬币的底金。</p>
        </details>
      </div>
    </div>
  )
}
