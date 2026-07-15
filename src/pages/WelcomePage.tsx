import { Link } from 'react-router-dom'
import { CharacterIcon, CoinIcon } from '../components/common/OriginalIcons'

export default function WelcomePage() {
  return (
    <main className="welcome-page">
      <div className="welcome-sky" aria-hidden="true">
        <span className="welcome-cloud welcome-cloud-one" />
        <span className="welcome-cloud welcome-cloud-two" />
        <span className="welcome-star welcome-star-one">✦</span>
        <span className="welcome-star welcome-star-two">✦</span>
      </div>

      <header className="welcome-heading">
        <span>WELCOME TO OUR LITTLE TOWN · SINCE 2025</span>
        <h1>沿着格纹小路，来到两个人的银行</h1>
        <p>今天也认真营业，替小熊和小猪保管每一份值得记住的心意。</p>
      </header>

      <section className="bank-scene" aria-label="童话化的小熊猪银行门面">
        <div className="bank-roof">
          <span className="roof-heart">♡</span>
          <div className="bank-signboard">
            <small>WELCOME</small>
            <strong>小熊猪银行</strong>
            <span>KUMA &amp; PIGGY BANK</span>
          </div>
        </div>

        <div className="bank-building">
          <div className="bank-upper-window left"><span className="window-curtain" /><span className="window-curtain" /><b className="window-detail">✿</b></div>
          <div className="bank-upper-window right"><span className="window-curtain" /><span className="window-curtain" /><b className="window-detail">♡</b></div>

          <div className="welcome-couple">
            <div className="welcome-character"><CharacterIcon character="bear" size={62} /><small>小熊</small></div>
            <span className="pig-letter" title="小猪留给小熊的一封小信">♡</span>
            <div className="welcome-character"><CharacterIcon character="pig" size={62} /><small>小猪</small></div>
          </div>

          <div className="bank-awning" aria-hidden="true">
            {Array.from({ length: 11 }, (_, index) => <span key={index} />)}
          </div>

          <div className="bank-ground-window">
            <h2>COIN &amp; LOVE</h2>
            <div className="window-rate"><CoinIcon currency="BEAR" size={30} /><strong>1 = 5</strong><CoinIcon currency="PIG" size={30} /></div>
            <p>仅作虚拟价值尺度 · 不是真实货币</p>
          </div>

          <div className="bank-door">
            <span className="door-glass"><b className="open-sign">今日营业中</b></span>
            <span className="door-knob" />
            <Link className="enter-bank-button" to="/bank">进入银行 <b>→</b></Link>
          </div>

          <div className="bank-notice-window">
            <h2>今日银行公告</h2>
            <div className="notice-lines"><span>小熊赚熊币</span><span>小猪赚猪币</span></div>
            <p>OPEN · 欢迎光临</p>
          </div>
        </div>

        <div className="welcome-mailbox" aria-label="小猪留给小熊的一封小信">
          <div className="mailbox-box"><span className="mailbox-flag" /></div><span />
        </div>

        <div className="welcome-planter left"><span className="flower">✿</span><span className="flower">✿</span><span className="flower">✿</span><span className="pot" /></div>
        <div className="welcome-planter right"><span className="flower">✿</span><span className="flower">✿</span><span className="flower">✿</span><span className="pot" /></div>

        <div className="bank-path" aria-hidden="true" />
      </section>

      <footer className="welcome-footer-note">
        <p><span>※</span> 熊币和猪币只用于记录心意与兑换奖励，不涉及充值、提现或金融服务。</p>
        <Link to="/bank">ENTER THE BANK · 轻轻推门进去</Link>
      </footer>
    </main>
  )
}
