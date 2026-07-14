export function SharedGoalCard({ compact = false }: { compact?: boolean }) {
  return (
    <article className={`shared-goal ${compact ? 'compact' : ''}`}>
      <div className="goal-ticket-edge" aria-hidden="true" />
      <div className="goal-heading">
        <div className="goal-icon" aria-hidden="true">♥</div>
        <div><span>OUR SHARED WISH #001</span><h3>周末特别约会基金</h3><p>想去看海，再吃一顿慢慢聊的晚餐。</p></div>
      </div>
      <div className="goal-numbers"><strong>34</strong><span>/ 50 熊币</span><em>68%</em></div>
      <div className="progress-track" role="progressbar" aria-label="共同目标进度" aria-valuenow={68} aria-valuemin={0} aria-valuemax={100}><span style={{ width: '68%' }} /></div>
      <div className="goal-foot"><span>预计实现：2026年8月</span><button type="button" onClick={() => document.getElementById('goal-note')?.showPopover()}>查看心愿</button></div>
      <div id="goal-note" popover="auto" className="popover-card"><strong>心愿便签 ♡</strong><p>等天气不太热的时候，带上相机去海边走走。</p></div>
    </article>
  )
}
