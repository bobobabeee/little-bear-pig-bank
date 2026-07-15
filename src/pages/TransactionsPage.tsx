import { useMemo, useState } from 'react'
import { PageIntro } from '../components/common/Panel'
import { CoinIcon } from '../components/common/OriginalIcons'
import { transactions } from '../data/demoData'
import type { TransactionKind } from '../types/bank'

type Filter = 'all' | TransactionKind

const filters: { label: string; value: Filter }[] = [
  { label: '全部', value: 'all' }, { label: '收入', value: 'income' }, { label: '支出', value: 'expense' }, { label: '待确认', value: 'pending' }, { label: '兑换', value: 'redemption' }, { label: '退款', value: 'refund' },
]

export default function TransactionsPage() {
  const [filter, setFilter] = useState<Filter>('all')
  const shown = useMemo(() => filter === 'all' ? transactions : transactions.filter((item) => item.kind === filter || (filter === 'expense' && item.amount < 0)), [filter])

  return (
    <div className="page-stack transactions-page">
      <PageIntro label="TRANSACTIONS / 004" title="翻开两个人的流水存折" description="每一次增加、兑换与退还，都有一行认真留下的记录。" />
      <div className="ledger-summary">
        <div><span>本月共记录</span><strong>18<small>笔</small></strong><em>MONTHLY RECORDS</em></div>
        <div><span>小熊熊币净变化</span><strong>+12<small>熊币</small></strong><em>KUMA · BEAR COIN</em></div>
        <div><span>小猪猪币净变化</span><strong>+55<small>猪币</small></strong><em>PIGGY · PIG COIN</em></div>
      </div>
      <section className="ledger-book" aria-label="流水账本">
        <div className="ledger-binding" aria-hidden="true">{Array.from({ length: 12 }, (_, index) => <span key={index} />)}</div>
        <div className="ledger-heading"><div><span>PASSBOOK NO. 2026-07</span><h2>小熊猪银行流水簿</h2><p>共 {shown.length} 笔演示记录</p></div><div className="filter-tabs ledger-filters" aria-label="流水类型">{filters.map((item) => <button key={item.value} className={filter === item.value ? 'active' : ''} onClick={() => setFilter(item.value)}>{item.label}</button>)}</div></div>
        <div className="table-scroll">
          <table className="transaction-table">
            <thead><tr><th>日期 / TIME</th><th>交易内容 / DESCRIPTION</th><th>账户</th><th>币种</th><th>金额</th><th>状态</th></tr></thead>
            <tbody>{shown.map((item) => <tr key={item.id}>
              <td><strong>{item.date}</strong><small>{item.time}</small></td>
              <td><strong>{item.title}</strong><small>{item.detail}</small><em>{item.id}</em></td>
              <td><strong>{item.accountOwnerId === 'bear' ? '小熊账户' : '小猪账户'}</strong><small>{item.actorId === 'bear' ? '小熊记录' : '小猪记录'}</small></td>
              <td><CoinIcon currency={item.currency} size={25} /><span>{item.currency === 'BEAR' ? '熊币' : '猪币'}</span></td>
              <td className={item.amount > 0 ? 'positive' : 'negative'}>{item.amount > 0 ? '+' : ''}{item.amount}</td>
              <td><span className={`status status-${item.status}`}>{item.status}</span></td>
            </tr>)}</tbody>
          </table>
        </div>
        {shown.length === 0 && <div className="empty-state"><span>⌕</span><strong>这页暂时没有相应流水</strong><p>换一个筛选条件，再翻翻存折吧。</p></div>}
      </section>
    </div>
  )
}
