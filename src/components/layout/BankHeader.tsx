import { CharacterIcon, CoinIcon } from '../common/OriginalIcons'
import { DesktopNavigation } from './Navigation'
import type { UserId } from '../../types/bank'
import { Link } from 'react-router-dom'

export function BankHeader({ currentUser, onSwitch }: { currentUser: UserId; onSwitch: (user: UserId) => void }) {
  return (
    <>
      <div className="utility-strip">
        <span>EST. 2025.05.20</span>
        <span>今日营业中 <i aria-hidden="true">●</i> · <Link to="/">返回银行门口</Link></span>
        <span>认真保存每一份爱 ♡</span>
      </div>
      <header className="bank-header">
        <div className="header-character header-bear"><CharacterIcon character="bear" size={58} /></div>
        <Link className="brand-lockup" to="/" aria-label="返回小熊猪银行门口">
          <span className="brand-kicker">WELCOME TO OUR LITTLE BANK</span>
          <div className="brand-line"><span>✦</span><h1>小熊猪银行</h1><span>✦</span></div>
          <p>KUMA <span>&amp;</span> PIGGY BANK</p>
        </Link>
        <div className="header-character header-pig"><CharacterIcon character="pig" size={58} /></div>
        <div className="rate-ticket">
          <CoinIcon currency="BEAR" size={27} />
          <strong>1</strong><span>=</span><strong>5</strong>
          <CoinIcon currency="PIG" size={27} />
        </div>
        <div className="header-switcher" aria-label="当前身份">
          <span>当前营业员</span>
          <div>
            <button className={currentUser === 'bear' ? 'active' : ''} onClick={() => onSwitch('bear')}>小熊</button>
            <button className={currentUser === 'pig' ? 'active' : ''} onClick={() => onSwitch('pig')}>小猪</button>
          </div>
        </div>
      </header>
      <DesktopNavigation />
    </>
  )
}
