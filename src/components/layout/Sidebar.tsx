import type { UserId } from '../../types/bank'
import { CharacterIcon, CoinIcon, StampDecoration } from '../common/OriginalIcons'
import { Panel } from '../common/Panel'

export function IdentitySwitcher({ currentUser, onSwitch }: { currentUser: UserId; onSwitch: (user: UserId) => void }) {
  return (
    <div className="identity-switcher">
      <p>正在以谁的身份参观？</p>
      <div>
        <button className={currentUser === 'bear' ? 'active' : ''} onClick={() => onSwitch('bear')}>
          <CharacterIcon character="bear" size={42} /><span>小熊<small>KUMA</small></span>
        </button>
        <button className={currentUser === 'pig' ? 'active' : ''} onClick={() => onSwitch('pig')}>
          <CharacterIcon character="pig" size={42} /><span>小猪<small>PIGGY</small></span>
        </button>
      </div>
      <small className="demo-caption">仅切换视觉身份 · 本轮不保存</small>
    </div>
  )
}

export function Sidebar({ currentUser, onSwitch }: { currentUser: UserId; onSwitch: (user: UserId) => void }) {
  return (
    <aside className="sidebar">
      <Panel title="账户小卡" eyebrow="OUR ACCOUNTS" className="sidebar-card">
        <div className="mini-account">
          <CharacterIcon character="bear" size={46} />
          <div><strong>小熊的存折</strong><span><CoinIcon currency="BEAR" size={20} /> 18 熊币</span><span><CoinIcon currency="PIG" size={20} /> 25 猪币</span></div>
        </div>
        <div className="mini-account">
          <CharacterIcon character="pig" size={46} />
          <div><strong>小猪的存折</strong><span><CoinIcon currency="BEAR" size={20} /> 6 熊币</span><span><CoinIcon currency="PIG" size={20} /> 85 猪币</span></div>
        </div>
      </Panel>

      <Panel title="今日汇率" eyebrow="EXCHANGE RATE" className="sidebar-card rate-card">
        <div className="rate-equation"><CoinIcon currency="BEAR" /><b>1</b><span>=</span><b>5</b><CoinIcon currency="PIG" /></div>
        <p>固定汇率 · 只用于价值展示</p>
        <small>今日没有开放自由换币喔</small>
      </Panel>

      <Panel title="身份切换" eyebrow="WHO ARE YOU?" className="sidebar-card">
        <IdentitySwitcher currentUser={currentUser} onSwitch={onSwitch} />
      </Panel>

      <Panel title="银行公告" eyebrow="NOTICE BOARD" className="sidebar-card notice-board">
        <span className="tape" aria-hidden="true" />
        <p>每一枚硬币都代表一份值得被看见的小小心意。</p>
        <p>基本的尊重、沟通与爱，永远不需要花币购买。</p>
        <time>2026.07.14</time>
      </Panel>

      <div className="sidebar-decor">
        <StampDecoration />
        <p><span>YOU'VE GOT</span><strong>LOVE MAIL!</strong></p>
      </div>
    </aside>
  )
}
