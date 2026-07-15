import { CharacterIcon, CoinIcon } from '../common/OriginalIcons'

export function AccountCard({ character, balance, note }: { character: 'bear' | 'pig'; balance: number; note: string }) {
  const name = character === 'bear' ? '小熊' : '小猪'
  const currency = character === 'bear' ? 'BEAR' : 'PIG'
  const currencyName = character === 'bear' ? '熊币' : '猪币'
  const roleNote = character === 'bear' ? '赚取并使用熊币' : '赚取并使用猪币'
  return (
    <article className={`account-card ${character}`}>
      <div className="account-card-head">
        <CharacterIcon character={character} size={68} />
        <div><span className="account-no">ACCOUNT 00{character === 'bear' ? '1' : '2'}</span><h3>{name}的专属存折</h3><p>{note}</p></div>
      </div>
      <div className="balance-grid single-balance">
        <div><CoinIcon currency={currency} /><span><small>{currency} COIN BALANCE</small><strong>{balance}</strong><em>{currencyName}</em></span></div>
      </div>
      <div className="account-total"><span>{roleNote}</span><strong>专属币种</strong><small>不与另一币种互换</small></div>
      <span className="account-stamp" aria-hidden="true">VALID<br />♡</span>
    </article>
  )
}
