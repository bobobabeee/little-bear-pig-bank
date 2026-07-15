import { useState, type FormEvent } from 'react'
import { PageIntro, Panel } from '../components/common/Panel'
import { NoticeBox } from '../components/common/NoticeBox'
import { CoinIcon } from '../components/common/OriginalIcons'
import type { UserId } from '../types/bank'

const categories = ['主动关心', '认真倾听', '提供帮助', '制造惊喜', '陪伴学习', '承担家务', '完成约定', '共同活动', '矛盾修复', '特别纪念', '其他']

export default function EarnPage({ currentUser }: { currentUser: UserId }) {
  const [submitted, setSubmitted] = useState(false)
  const [receiver, setReceiver] = useState<UserId>(currentUser === 'bear' ? 'pig' : 'bear')
  const recorderName = currentUser === 'bear' ? '小熊' : '小猪'
  const currency = receiver === 'bear' ? 'BEAR' : 'PIG'
  const receiverName = receiver === 'bear' ? '小熊' : '小猪'

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setSubmitted(true)
    window.setTimeout(() => setSubmitted(false), 4200)
  }

  return (
    <div className="page-stack earn-page">
      <PageIntro label="EARN COINS / 002" title="记录一份值得看见的心意" description="不是给爱标价，只是认真记住那些额外的关心与付出。" />
      <NoticeBox tone="yellow"><strong>阶段一演示表单</strong><p>填写和提交可以体验，但记录不会保存，也不会改变余额。</p></NoticeBox>
      <Panel title="奖励记录单" eyebrow="A LITTLE THING WORTH SAVING" className="form-panel">
        <form className="earn-form" onSubmit={handleSubmit}>
          <fieldset>
            <legend><span>01</span> 记录谁的这份心意</legend>
            <div className="form-grid two-columns">
              <label><span>记录人 <em>*</em></span><select value={recorderName} disabled><option>小熊</option><option>小猪</option></select><small>当前视觉身份：{recorderName}</small></label>
              <label><span>获得奖励的人 <em>*</em></span><select value={receiver} onChange={(event) => setReceiver(event.target.value as UserId)}><option value="bear">小熊（赚熊币）</option><option value="pig">小猪（赚猪币）</option></select><small>币种跟随获得者固定，不是由记录人发行。</small></label>
            </div>
          </fieldset>

          <fieldset>
            <legend><span>02</span> 奖励多少专属硬币</legend>
            <div className={`assigned-currency ${currency === 'BEAR' ? 'bear' : 'pig'}`}>
              <CoinIcon currency={currency} />
              <span><small>AUTOMATIC CURRENCY</small><strong>{receiverName}只赚取并使用{currency === 'BEAR' ? '熊币' : '猪币'}</strong></span>
              <em>币种由获得奖励的人自动确定</em>
            </div>
            <input type="hidden" name="currency" value={currency} />
            <div className="form-grid two-columns">
              <label><span>数量 <em>*</em></span><div className="input-with-unit"><input key={currency} name="amount" type="number" min="1" step="1" defaultValue={currency === 'BEAR' ? 3 : 15} required /><b>{currency === 'BEAR' ? '熊币' : '猪币'}</b></div><small>1熊币 = 5猪币，仅作为价值校准，不可自由兑换。</small></label>
              <label><span>行为分类 <em>*</em></span><select name="category" defaultValue="主动关心">{categories.map((category) => <option key={category}>{category}</option>)}</select><small>选择最接近的一项</small></label>
            </div>
          </fieldset>

          <fieldset>
            <legend><span>03</span> 写下这份小小心意</legend>
            <label className="full-field"><span>奖励原因 <em>*</em></span><input name="reason" type="text" required placeholder="例如：下雨天特意来接我回家" /><small>具体的描述，会让以后翻存折时更开心。</small></label>
            <div className="form-grid two-columns">
              <label><span>日期和时间 <em>*</em></span><input name="date" type="datetime-local" defaultValue="2026-07-14T20:30" required /></label>
              <label><span>自定义标签</span><input name="tag" type="text" placeholder="#雨天  #被照顾" /></label>
            </div>
            <label className="full-field"><span>详细备注</span><textarea name="note" rows={4} placeholder="还想为今天留下一点什么？（可选）" /></label>
          </fieldset>

          <div className="confirmation-choice">
            <label><input type="checkbox" /><span><strong>这笔记录需要对方确认</strong><small>一般记录可直接提交；重要记录勾选后由对方在首页处理。</small></span></label>
            <div className="photo-placeholder"><span>▧</span><p><strong>纪念照片占位</strong><small>照片上传将在后续版本开放</small></p></div>
          </div>

          <div className="form-actions"><p>提交即表示：这是一份真诚的正向记录 ♡</p><button className="primary-button" type="submit">盖章并提交 <span>→</span></button></div>
        </form>
      </Panel>
      {submitted && <div className="toast-message" role="status"><span>✓</span><div><strong>演示记录已提交！</strong><p>需要确认的记录会出现在首页“待处理”；本轮不会保存。</p></div><button onClick={() => setSubmitted(false)} aria-label="关闭提示">×</button></div>}
    </div>
  )
}
