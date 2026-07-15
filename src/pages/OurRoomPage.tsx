import { useState, type FormEvent } from 'react'
import { AchievementBadge } from '../components/common/AchievementBadge'
import { PageIntro } from '../components/common/Panel'
import { CharacterIcon, StampDecoration } from '../components/common/OriginalIcons'
import { SharedGoalCard } from '../components/goals/SharedGoalCard'
import { diaryNotes } from '../data/demoData'
import type { UserId } from '../types/bank'

const rules = ['不能给自己发币', '不随意扣除对方余额', '所有余额变化都有流水', '错误交易只撤销不删除', '未完成奖励可以退款', '基本尊重和爱不能购买']

function SectionHeading({ label, title }: { label: string; title: string }) {
  return <div className="scrapbook-heading"><span>{label}</span><h2>{title}</h2></div>
}

function nameOf(user: UserId) {
  return user === 'bear' ? '小熊' : '小猪'
}

export default function OurRoomPage({ currentUser }: { currentUser: UserId }) {
  const [composerOpen, setComposerOpen] = useState(false)
  const [content, setContent] = useState('')
  const [submitted, setSubmitted] = useState(false)

  function submitDiary(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setSubmitted(true)
    setContent('')
    window.setTimeout(() => setSubmitted(false), 4200)
  }

  return (
    <div className="page-stack our-room-page">
      <PageIntro label="OUR ROOM / 005" title="欢迎回到我们的小屋" description="这里用文字贴纸收藏两个人一起经营的日子，不添加或上传图片。" />
      <section className="room-hero">
        <div className="room-couple-badge"><CharacterIcon character="bear" size={82} /><span>♡</span><CharacterIcon character="pig" size={82} /><small>K + P</small></div>
        <div className="room-copy"><span>OUR LITTLE SECRET BASE</span><h2>小熊猪银行营业中</h2><p>小熊和小猪共同经营的可爱银行。小猪把对小熊的在意藏进每天温柔的小细节里，两个人也认真收藏彼此的付出。</p><dl><div><dt>成立日期</dt><dd>2025.05.20</dd></div><div><dt>经营天数</dt><dd>421 天</dd></div><div><dt>固定汇率</dt><dd>1 熊币 = 5 猪币</dd></div><div><dt>银行成员</dt><dd>小熊 &amp; 小猪</dd></div></dl></div>
        <StampDecoration />
      </section>

      <section className="wish-note"><span className="tape" aria-hidden="true" /><SectionHeading label="OUR SHARED WISH" title="共同愿望便签" /><SharedGoalCard /></section>

      <section className="diary-wall">
        <div className="diary-wall-heading"><SectionHeading label="DIARY STICKER WALL" title="小熊猪日记贴纸墙" /><button className={composerOpen ? 'secondary-button' : 'primary-button'} type="button" onClick={() => setComposerOpen((open) => !open)}>{composerOpen ? '收起贴纸' : '＋ 写一张贴纸'}</button></div>
        {composerOpen && <form className="diary-compose" onSubmit={submitDiary}>
          <div className="diary-compose-heading"><span>TEXT NOTE ONLY</span><strong>{nameOf(currentUser)}的新贴纸</strong><p>只记录文字，正文最多200字，不支持添加图片。</p></div>
          <div className="form-grid two-columns"><label><span>标题</span><input name="title" required maxLength={30} placeholder="给今天取一个小标题" /></label><label><span>日期</span><input name="date" type="date" required defaultValue="2026-07-15" /></label></div>
          <div className="form-grid two-columns"><label><span>心情</span><select name="mood" defaultValue="开心 ✦"><option>开心 ✦</option><option>安心 ♡</option><option>感动 ☀</option><option>平静 ♪</option></select></label><label><span>贴纸颜色</span><select name="stickerStyle" defaultValue="pink"><option value="pink">草莓粉</option><option value="blue">天空蓝</option><option value="green">嫩芽绿</option><option value="yellow">奶油黄</option></select></label></div>
          <label><span>短标签</span><input name="tags" maxLength={40} placeholder="例如：散步、被陪伴" /></label>
          <label><span>日记正文</span><textarea name="content" value={content} onChange={(event) => setContent(event.target.value)} maxLength={200} rows={5} required placeholder="写下今天想一起记住的小事……" /><small>{content.length} / 200字</small></label>
          <div className="diary-compose-actions"><button className="ghost-button" type="button" onClick={() => setComposerOpen(false)}>取消</button><button className="primary-button" type="submit">贴到墙上（演示）</button></div>
        </form>}
        <div className="diary-grid">{diaryNotes.map((note) => <article key={note.id} className={`diary-sticker sticker-${note.stickerStyle}`}>
          <div className="diary-meta"><span className={`author-seal ${note.authorId}`}>{nameOf(note.authorId)}</span><time>{note.date}</time><em>{note.mood}</em></div>
          <h3>{note.title}</h3><p>{note.content}</p>
          <div className="diary-tags">{note.tags.map((tag) => <span key={tag}>#{tag}</span>)}</div>
          {note.relatedTransactionId && <small>关联流水：{note.relatedTransactionId}</small>}
        </article>)}</div>
      </section>

      <section className="stamp-book"><SectionHeading label="ACHIEVEMENT COLLECTION" title="银行成就邮票册" /><div className="achievement-grid">
        <AchievementBadge icon="1st" title="第一笔心意" description="完成银行的第一笔奖励记录" tone="yellow" />
        <AchievementBadge icon="10" title="认真记录家" description="累计完成 10 笔交易" tone="blue" />
        <AchievementBadge icon="♡" title="第一张小券" description="完成第一次奖励兑换" tone="pink" />
        <AchievementBadge icon="7D" title="连续营业" description="一起经营小银行 7 天" tone="green" />
      </div></section>

      <div className="room-desk-grid">
        <section className="calendar-page monthly-report"><SectionHeading label="MONTHLY REPORT" title="六月小报告" /><div className="calendar-rings" aria-hidden="true"><span /><span /><span /><span /></div><div className="report-month"><span>2026</span><strong>06</strong><small>JUNE</small></div><div className="report-stats"><div><span>交易总数</span><strong>18</strong><small>笔</small></div><div><span>小熊获得熊币</span><strong>24</strong><small>枚</small></div><div><span>小猪获得猪币</span><strong>95</strong><small>枚</small></div><div><span>完成奖励</span><strong>6</strong><small>份</small></div></div><div className="report-highlight"><span>本月关键词</span><strong>「认真陪伴」</strong><p>最受欢迎奖励：陪散步半小时</p></div></section>
        <details className="rules-book"><summary><span>HOUSE RULES</span><strong>银行营业守则</strong><em>翻开小册子 ＋</em></summary><ol>{rules.map((rule, index) => <li key={rule}><span>{String(index + 1).padStart(2, '0')}</span><p>{rule}</p></li>)}</ol><p>硬币记录额外的用心；尊重、沟通和拥抱，是不需要硬币的底金。</p></details>
      </div>
      {submitted && <div className="toast-message" role="status"><span>✓</span><div><strong>演示贴纸已经写好</strong><p>本轮不会保存，刷新后不会出现在贴纸墙。</p></div><button className="ghost-button" onClick={() => setSubmitted(false)} aria-label="关闭提示">×</button></div>}
    </div>
  )
}
