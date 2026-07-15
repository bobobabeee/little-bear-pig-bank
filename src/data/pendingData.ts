import type { UserId } from '../types/bank'

export type PendingDecision = 'approved' | 'rejected'

export const pendingItems: { id: string; icon: string; title: string; meta: string; creator: UserId; reviewer: UserId }[] = [
  { id: 'P01', icon: '✎', title: '申请记录：陪伴完成学习计划', meta: '小猪申请自己的付出 · +15 猪币', creator: 'pig', reviewer: 'bear' },
  { id: 'P02', icon: '▧', title: '小礼物愿望卡（50元内）', meta: '小熊提交愿望 · 20 熊币', creator: 'bear', reviewer: 'pig' },
  { id: 'P03', icon: '♡', title: '奖励记录：准备爱心早餐', meta: '小猪记录给小熊 · +2 熊币', creator: 'pig', reviewer: 'bear' },
]

export function getPendingCount(currentUser: UserId, decisions: Record<string, PendingDecision>) {
  return pendingItems.filter((item) => item.reviewer === currentUser && !decisions[item.id]).length
}
