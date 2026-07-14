import { CharacterIcon, CoinIcon } from '../common/OriginalIcons'

export function AccountCard({ character, bear, pig, note }: { character: 'bear' | 'pig'; bear: number; pig: number; note: string }) {
  const name = character === 'bear' ? '小熊' : '小猪'
  const total = bear + pig / 5
  return (
    <article className={`account-card ${character}`}>
      <div className="account-card-head">
        <CharacterIcon character={character} size={68} />
        <div><span className="account-no">ACCOUNT 00{character === 'bear' ? '1' : '2'}</span><h3>{name}的存折</h3><p>{note}</p></div>
      </div>
      <div className="balance-grid">
        <div><CoinIcon currency="BEAR" /><span><small>BEAR COIN</small><strong>{bear}</strong><em>熊币</em></span></div>
        <div><CoinIcon currency="PIG" /><span><small>PIG COIN</small><strong>{pig}</strong><em>猪币</em></span></div>
      </div>
      <div className="account-total"><span>折算总值</span><strong>{total.toFixed(1)} 熊币</strong><small>仅作展示</small></div>
      <span className="account-stamp" aria-hidden="true">VALID<br />♡</span>
    </article>
  )
}
