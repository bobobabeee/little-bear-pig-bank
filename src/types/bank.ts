export type UserId = 'bear' | 'pig'
export type CurrencyCode = 'BEAR' | 'PIG'
export type TransactionKind = 'income' | 'expense' | 'pending' | 'redemption' | 'refund'

export interface DemoTransaction {
  id: string
  date: string
  time: string
  title: string
  detail: string
  user: string
  currency: CurrencyCode
  amount: number
  status: '已入账' | '待确认' | '已完成' | '已退款'
  kind: TransactionKind
}

export interface DemoReward {
  id: string
  title: string
  icon: string
  category: '小小奖励' | '陪伴服务' | '特别权限' | '约会体验' | '长期愿望'
  description: string
  provider: string
  bearPrice: number
  pigPrice: number
  limit: string
  appointment: string
}
