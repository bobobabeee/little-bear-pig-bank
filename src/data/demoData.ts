import type { DemoReward, DemoTransaction } from '../types/bank'

export const transactions: DemoTransaction[] = [
  { id: 'TX-0714', date: '07.14', time: '21:08', title: '认真听完今日烦恼', detail: '主动关心 · 行为奖励', user: '小猪', currency: 'PIG', amount: 10, status: '已入账', kind: 'income' },
  { id: 'TX-0713', date: '07.13', time: '19:30', title: '今晚电影选择权', detail: '奖励商店 · 奖励兑换', user: '小熊', currency: 'BEAR', amount: -3, status: '已完成', kind: 'redemption' },
  { id: 'TX-0712', date: '07.12', time: '08:15', title: '准备了爱心早餐', detail: '制造惊喜 · 行为奖励', user: '小熊', currency: 'BEAR', amount: 4, status: '已入账', kind: 'income' },
  { id: 'TX-0711', date: '07.11', time: '22:42', title: '陪伴完成学习计划', detail: '陪伴学习 · 行为奖励', user: '小猪', currency: 'PIG', amount: 15, status: '待确认', kind: 'pending' },
  { id: 'TX-0710', date: '07.10', time: '18:20', title: '抱抱券取消返还', detail: '共同金库 · 兑换退款', user: '小猪', currency: 'PIG', amount: 5, status: '已退款', kind: 'refund' },
  { id: 'TX-0709', date: '07.09', time: '20:06', title: '一起收拾了小屋', detail: '承担家务 · 双人共同奖励', user: '小熊', currency: 'BEAR', amount: 2, status: '已入账', kind: 'income' },
  { id: 'TX-0708', date: '07.08', time: '12:10', title: '帮忙拿了一次外卖', detail: '陪伴服务 · 奖励兑换', user: '小猪', currency: 'PIG', amount: -10, status: '已完成', kind: 'expense' },
]

export const rewards: DemoReward[] = [
  { id: 'R01', title: '十分钟认真抱抱', icon: '♡', category: '小小奖励', description: '放下手机，安安静静地抱一会儿。', provider: '对方', bearPrice: 1, pigPrice: 5, limit: '每周 2 次', appointment: '无需预约' },
  { id: 'R02', title: '今日夸夸券', icon: '✦', category: '小小奖励', description: '收获一段具体又认真的今日夸奖。', provider: '对方', bearPrice: 1, pigPrice: 5, limit: '每日 1 次', appointment: '即刻履约' },
  { id: 'R03', title: '今日选歌权', icon: '♪', category: '小小奖励', description: '接下来的一小时由你来当 DJ。', provider: '对方', bearPrice: 1, pigPrice: 5, limit: '每日 1 次', appointment: '即刻履约' },
  { id: 'R04', title: '陪散步半小时', icon: '☘', category: '陪伴服务', description: '沿着熟悉的小路，慢慢聊一聊今天。', provider: '对方', bearPrice: 3, pigPrice: 15, limit: '每周 2 次', appointment: '提前 1 天' },
  { id: 'R05', title: '肩颈放松十五分钟', icon: '♨', category: '陪伴服务', description: '一张适合辛苦工作日的温柔按摩券。', provider: '对方', bearPrice: 4, pigPrice: 20, limit: '每周 1 次', appointment: '当天预约' },
  { id: 'R06', title: '陪伴完成学习任务', icon: '✎', category: '陪伴服务', description: '一起专注，完成一项拖延很久的计划。', provider: '对方', bearPrice: 5, pigPrice: 25, limit: '每周 2 次', appointment: '提前 1 天' },
  { id: 'R07', title: '今晚电影选择权', icon: '▣', category: '特别权限', description: '今晚的片单和零食搭配都听你的。', provider: '小熊', bearPrice: 3, pigPrice: 15, limit: '每周 1 次', appointment: '当天预约' },
  { id: 'R08', title: '下一次餐厅选择权', icon: '♧', category: '特别权限', description: '从街角小店到心愿餐厅，由你决定。', provider: '小猪', bearPrice: 5, pigPrice: 25, limit: '每月 2 次', appointment: '提前 2 天' },
  { id: 'R09', title: '约会主题决定权', icon: '⌑', category: '特别权限', description: '散步、展览或居家野餐，主题由你定。', provider: '对方', bearPrice: 8, pigPrice: 40, limit: '每月 1 次', appointment: '提前 3 天' },
  { id: 'R10', title: '不看手机的认真约会', icon: '♥', category: '约会体验', description: '留出完整的两个小时，只关注彼此。', provider: '共同提供', bearPrice: 10, pigPrice: 50, limit: '每月 2 次', appointment: '提前 3 天' },
  { id: 'R11', title: '对方策划一次小约会', icon: '✿', category: '约会体验', description: '目的地先保密，带着期待准时出发。', provider: '对方', bearPrice: 15, pigPrice: 75, limit: '每月 1 次', appointment: '提前 7 天' },
  { id: 'R12', title: '周末短途旅行', icon: '〒', category: '长期愿望', description: '为两个人积攒一场慢悠悠的小旅行。', provider: '共同计划', bearPrice: 50, pigPrice: 250, limit: '长期目标', appointment: '共同商量' },
]

export const navItems = [
  { to: '/', en: 'BANK HOME', zh: '银行首页', short: '首页', icon: '⌂' },
  { to: '/earn', en: 'EARN COINS', zh: '赚币记录', short: '赚币', icon: '＋' },
  { to: '/rewards', en: 'REWARD SHOP', zh: '奖励商店', short: '奖励', icon: '◇' },
  { to: '/transactions', en: 'TRANSACTIONS', zh: '流水账本', short: '流水', icon: '▤' },
  { to: '/our-room', en: 'OUR ROOM', zh: '我们的小屋', short: '我们', icon: '♡' },
]
