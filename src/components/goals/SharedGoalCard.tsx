import { CoinIcon } from '../common/OriginalIcons'

const goalParts = [
  { currency: 'BEAR' as const, owner: '小熊', current: 18, target: 30, progress: 60 },
  { currency: 'PIG' as const, owner: '小猪', current: 85, target: 150, progress: 57 },
]

export function SharedGoalCard({ compact = false }: { compact?: boolean }) {
  return (
    <article className={`shared-goal ${compact ? 'compact' : ''}`}>
      <div className="goal-ticket-edge" aria-hidden="true" />
      <div className="goal-heading">
        <div className="goal-icon" aria-hidden="true">♥</div>
        <div><span>OUR SHARED WISH #001</span><h3>周末特别约会计划</h3><p>想去看海，再吃一顿慢慢聊的晚餐。</p></div>
      </div>
      <div className="dual-goal-progress">
        {goalParts.map((part) => <div className={`goal-part ${part.currency.toLowerCase()}`} key={part.currency}>
          <div><CoinIcon currency={part.currency} size={27} /><strong>{part.owner}</strong><span>{part.current} / {part.target}{part.currency === 'BEAR' ? '熊币' : '猪币'}</span><em>{part.progress}%</em></div>
          <div className="progress-track" role="progressbar" aria-label={`${part.owner}目标进度`} aria-valuenow={part.progress} aria-valuemin={0} aria-valuemax={100}><span style={{ width: `${part.progress}%` }} /></div>
        </div>)}
      </div>
      <p className="goal-completion-rule">小熊和小猪的两条进度都达到100%后，共同目标才算完成。</p>
      <div className="goal-foot"><span>预计实现：2026年8月 · 一起努力中</span><button className="ghost-button" type="button" onClick={() => document.getElementById('goal-note')?.showPopover()}>查看心愿</button></div>
      <div id="goal-note" popover="auto" className="popover-card"><strong>心愿便签 ♡</strong><p>等天气不太热的时候，带上喜欢的零食去海边走走。</p></div>
    </article>
  )
}
