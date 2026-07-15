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
  category: '日常小券' | '用心奖励' | '礼物与旅行'
  description: string
  provider: '小熊' | '小猪'
  audience: '小熊' | '小猪'
  currency: CurrencyCode
  price: number
  limit: string
  fulfillment: string
  requiresApproval: boolean
  protectionNote?: string
}
