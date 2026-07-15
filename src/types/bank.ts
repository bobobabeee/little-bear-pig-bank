export type UserId = 'bear' | 'pig'
export type CurrencyCode = 'BEAR' | 'PIG'
export type TransactionKind = 'income' | 'expense' | 'pending' | 'redemption' | 'refund'

export interface DemoTransaction {
  id: string
  date: string
  time: string
  title: string
  detail: string
  actorId: UserId
  accountOwnerId: UserId
  counterpartyId?: UserId
  relatedOrderId?: string
  currency: CurrencyCode
  amount: number
  status: '已入账' | '待确认' | '已完成' | '已退款'
  kind: TransactionKind
}

export type StickerStyle = 'pink' | 'blue' | 'green' | 'yellow' | 'caramel'

export interface DiaryNote {
  id: string
  authorId: UserId
  date: string
  title: string
  content: string
  mood: string
  stickerStyle: StickerStyle
  tags: string[]
  relatedTransactionId?: string
}

export type RedemptionStatus = '预约中' | '待兑现' | '已完成' | '已退款'

export interface DemoRedemption {
  id: string
  userId: UserId
  rewardTitle: string
  status: RedemptionStatus
  date: string
  currency: CurrencyCode
  amount: number
}

export interface DemoReward {
  id: string
  title: string
  icon: string
  category: '日常奖励' | '服务奖励' | '礼物奖励' | '旅行奖励'
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
