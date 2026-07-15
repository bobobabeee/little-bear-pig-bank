import type { DemoTransaction } from '../../types/bank'
import { CoinIcon } from '../common/OriginalIcons'

export function TransactionList({ items }: { items: DemoTransaction[] }) {
  return (
    <div className="transaction-list">
      {items.map((item) => (
        <article className="transaction-row" key={item.id}>
          <time><strong>{item.date}</strong><small>{item.time}</small></time>
          <CoinIcon currency={item.currency} size={30} />
          <div className="transaction-copy"><strong>{item.title}</strong><span>{item.accountOwnerId === 'bear' ? '小熊账户' : '小猪账户'}｜{item.actorId === 'bear' ? '小熊记录' : '小猪记录'}｜{item.amount > 0 ? '+' : ''}{item.amount}{item.currency === 'BEAR' ? '熊币' : '猪币'}</span></div>
          <span className={`status status-${item.status}`}>{item.status}</span>
          <strong className={item.amount > 0 ? 'amount positive' : 'amount negative'}>{item.amount > 0 ? '+' : ''}{item.amount} <small>{item.currency === 'BEAR' ? '熊币' : '猪币'}</small></strong>
        </article>
      ))}
    </div>
  )
}
