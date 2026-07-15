import type { CurrencyCode, UserId } from '../types/bank'

export type PendingDecision = 'approved' | 'rejected'

export interface PendingItem {
  id: string
  icon: string
  title: string
  creator: UserId
  reviewer: UserId
  accountOwnerId: UserId
  amount: number
  currency: CurrencyCode
  approvalResult: string
  initialDecision?: PendingDecision
}

export const pendingItems: PendingItem[] = [
  { id: 'P01', icon: '✎', title: '申请记录：陪伴完成学习计划', creator: 'pig', reviewer: 'bear', accountOwnerId: 'pig', amount: 15, currency: 'PIG', approvalResult: '批准后，小猪账户增加15猪币。' },
  { id: 'P02', icon: '▧', title: '小礼物愿望卡（50元内）', creator: 'bear', reviewer: 'pig', accountOwnerId: 'bear', amount: -20, currency: 'BEAR', approvalResult: '确认预算和时间后才扣除20熊币。' },
  { id: 'P03', icon: '♡', title: '奖励记录：准备爱心早餐', creator: 'pig', reviewer: 'bear', accountOwnerId: 'bear', amount: 2, currency: 'BEAR', approvalResult: '批准后，小熊账户增加2熊币。' },
  { id: 'H01', icon: '✓', title: '认真听完今日烦恼', creator: 'bear', reviewer: 'pig', accountOwnerId: 'pig', amount: 10, currency: 'PIG', approvalResult: '已批准，小猪账户增加10猪币。', initialDecision: 'approved' },
  { id: 'H02', icon: '×', title: '临时增加的奖励申请', creator: 'pig', reviewer: 'bear', accountOwnerId: 'bear', amount: 3, currency: 'BEAR', approvalResult: '已退回，不改变小熊账户余额。', initialDecision: 'rejected' },
]

export function getPendingCount(currentUser: UserId, decisions: Record<string, PendingDecision>) {
  return pendingItems.filter((item) => item.reviewer === currentUser && !item.initialDecision && !decisions[item.id]).length
}
