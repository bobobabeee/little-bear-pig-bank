import { useState, type FormEvent } from 'react'
import { PageIntro, Panel } from '../components/common/Panel'
import { CharacterIcon, CoinIcon } from '../components/common/OriginalIcons'
import type { CurrencyCode, UserId } from '../types/bank'

const categories = ['主动关心', '认真倾听', '提供帮助', '制造惊喜', '陪伴学习', '承担家务', '完成约定', '共同活动', '矛盾修复', '特别纪念', '其他']

function nameOf(user: UserId) {
  return user === 'bear' ? '小熊' : '小猪'
}

export default function EarnPage({ currentUser }: { currentUser: UserId }) {
  const [submitted, setSubmitted] = useState(false)
  const [mode, setMode] = useState<'give' | 'self-request'>('give')
  const [amount, setAmount] = useState('')
  const [customAmount, setCustomAmount] = useState(false)
  const [needsConfirmation, setNeedsConfirmation] = useState(false)
  const otherUser: UserId = currentUser === 'bear' ? 'pig' : 'bear'
  const receiver = mode === 'give' ? otherUser : currentUser
  const currency: CurrencyCode = receiver === 'bear' ? 'BEAR' : 'PIG'
  const presets = currency === 'BEAR' ? [1, 2, 3] : [5, 10, 15]

  function changeMode(nextMode: 'give' | 'self-request') {
    setMode(nextMode)
    setAmount('')
    setCustomAmount(false)
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setSubmitted(true)
    window.setTimeout(() => setSubmitted(false), 4200)
  }

  return (
    <div className="page-stack earn-page">
      <PageIntro label="EARN COINS / 002" title="记录一份值得看见的心意" description="由当前操作人给对方记录奖励；自己的付出则送给对方确认。" />
      <Panel title="银行心意凭单" eyebrow="A LITTLE THING WORTH SAVING" className="form-panel bank-voucher">
        <form className="earn-form" onSubmit={handleSubmit}>
          <div className="voucher-mode">
            <div><small>当前记录方式</small><strong>{mode === 'give' ? `给${nameOf(otherUser)}奖励` : '申请记录自己的付出'}</strong><p>{mode === 'give' ? `${nameOf(currentUser)}记录，奖励自动进入${nameOf(otherUser)}的账户。` : `申请会交给${nameOf(otherUser)}处理，发起人不能批准自己的申请。`}</p></div>
            <button type="button" className="secondary-button" onClick={() => changeMode(mode === 'give' ? 'self-request' : 'give')}>{mode === 'give' ? '申请记录自己的付出' : '返回给对方奖励'}</button>
          </div>

          <section className="voucher-section">
            <div className="voucher-section-title"><span>01</span><h3>确认这笔心意去向</h3></div>
            <div className="voucher-route">
              <div><CharacterIcon character={currentUser} size={52} /><span><small>当前操作人</small><strong>{nameOf(currentUser)}</strong></span></div>
              <b>{mode === 'give' ? '给出奖励 →' : '提出申请 →'}</b>
              <div><CharacterIcon character={receiver} size={52} /><span><small>{mode === 'give' ? '奖励对象' : '申请人'}</small><strong>{nameOf(receiver)}</strong></span></div>
              <div className={`assigned-currency ${currency === 'BEAR' ? 'bear' : 'pig'}`}><CoinIcon currency={currency} /><span><small>自动币种</small><strong>{currency === 'BEAR' ? '熊币' : '猪币'}</strong></span></div>
            </div>
            {mode === 'self-request' && <p className="request-rule-note">※ 这是次级申请入口。提交后必须由{nameOf(otherUser)}确认，{nameOf(currentUser)}不能批准自己的申请。</p>}
          </section>

          <section className="voucher-section">
            <div className="voucher-section-title"><span>02</span><h3>选择奖励数量</h3></div>
            <input type="hidden" name="currency" value={currency} />
            <div className="amount-picker" role="group" aria-label={`选择${currency === 'BEAR' ? '熊币' : '猪币'}数量`}>
              {presets.map((preset) => <button type="button" key={preset} className={!customAmount && amount === String(preset) ? 'active' : ''} onClick={() => { setAmount(String(preset)); setCustomAmount(false) }}>{preset}<small>{currency === 'BEAR' ? '熊币' : '猪币'}</small></button>)}
              <button type="button" className={customAmount ? 'active' : ''} onClick={() => { setCustomAmount(true); setAmount('') }}>自定义</button>
            </div>
            {customAmount && <label className="custom-amount"><span>自定义数量 <em>*</em></span><div className="input-with-unit"><input name="amount" type="number" min="1" step="1" value={amount} onChange={(event) => setAmount(event.target.value)} required /><b>{currency === 'BEAR' ? '熊币' : '猪币'}</b></div></label>}
            {!customAmount && <input name="amount" type="hidden" value={amount} required />}
          </section>

          <section className="voucher-section">
            <div className="voucher-section-title"><span>03</span><h3>写下发生了什么</h3></div>
            <div className="form-grid two-columns">
              <label><span>行为分类 <em>*</em></span><select name="category" defaultValue="主动关心">{categories.map((category) => <option key={category}>{category}</option>)}</select></label>
              <label><span>日期 <em>*</em></span><input name="date" type="date" defaultValue="2026-07-15" required /></label>
            </div>
            <label className="full-field"><span>奖励原因 <em>*</em></span><input name="reason" type="text" required placeholder="例如：下雨天特意来接我回家" /><small>具体一点，以后翻存折时会更开心。</small></label>
            <label className="full-field"><span>留一句备注</span><textarea name="note" rows={3} placeholder="还有什么想一起记住？（可选）" /></label>
          </section>

          {mode === 'give' ? <label className="confirmation-line"><input type="checkbox" checked={needsConfirmation} onChange={(event) => setNeedsConfirmation(event.target.checked)} /><span><strong>提交后请对方确认</strong><small>一般奖励可直接记录；重要事项可以交给对方确认。</small></span></label> : <div className="confirmation-line locked"><span aria-hidden="true">✓</span><span><strong>必须由对方确认</strong><small>申请人没有批准按钮，避免自己直接给自己发币。</small></span></div>}

          <div className="form-actions"><p>{mode === 'give' ? `${nameOf(currentUser)}正在给${nameOf(otherUser)}记录一份心意。` : `这份申请将送给${nameOf(otherUser)}。`}</p><button className="primary-button" type="submit" disabled={!amount}>盖章并提交 <span>→</span></button></div>
        </form>
      </Panel>
      {submitted && <div className="toast-message" role="status"><span>✓</span><div><strong>{mode === 'give' ? '演示记录已提交！' : '演示申请已送出！'}</strong><p>{mode === 'self-request' || needsConfirmation ? `将由${nameOf(otherUser)}在顶部待办中确认；` : '这笔奖励将直接记录；'}本轮不会保存或改变余额。</p></div><button onClick={() => setSubmitted(false)} aria-label="关闭提示">×</button></div>}
    </div>
  )
}
