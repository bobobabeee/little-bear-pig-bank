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
  { id: 'R01', title: '十分钟认真抱抱', icon: '♡', category: '日常小券', description: '小猪放下手机，给小熊一个安安静静的拥抱。', provider: '小猪', audience: '小熊', currency: 'BEAR', price: 1, limit: '每周 2 次', fulfillment: '无需预约', requiresApproval: false },
  { id: 'R02', title: '今日选歌权', icon: '♪', category: '日常小券', description: '接下来的一小时，小猪陪小熊听她选的歌。', provider: '小猪', audience: '小熊', currency: 'BEAR', price: 1, limit: '每日 1 次', fulfillment: '即刻使用', requiresApproval: false },
  { id: 'R03', title: '肩颈放松券', icon: '♨', category: '用心奖励', description: '小猪为辛苦一天的小熊准备十五分钟轻松时间。', provider: '小猪', audience: '小熊', currency: 'BEAR', price: 5, limit: '每周 1 次', fulfillment: '当天商量', requiresApproval: false },
  { id: 'R04', title: '秘密约会策划', icon: '✿', category: '用心奖励', description: '目的地先保密，小熊只要带着期待准时出发。', provider: '小猪', audience: '小熊', currency: 'BEAR', price: 15, limit: '每月 1 次', fulfillment: '提前 7 天', requiresApproval: false },
  { id: 'R05', title: '小礼物愿望卡（50元内）', icon: '▧', category: '礼物与旅行', description: '提出一份金额上限明确的小礼物愿望。', provider: '小猪', audience: '小熊', currency: 'BEAR', price: 20, limit: '每月 1 次', fulfillment: '确认预算后购买', requiresApproval: true, protectionNote: '兑换后由小猪确认预算和购买时间。' },
  { id: 'R06', title: '中礼物愿望卡（200元内）', icon: '◇', category: '礼物与旅行', description: '提出一份中等礼物愿望，同一时间只保留一张待兑现。', provider: '小猪', audience: '小熊', currency: 'BEAR', price: 80, limit: '同时 1 张', fulfillment: '确认预算和时间', requiresApproval: true, protectionNote: '超出金额上限的部分需要另行商量。' },
  { id: 'R07', title: '大礼物愿望卡（500元内）', icon: '✦', category: '礼物与旅行', description: '为长期积累准备的大礼物愿望额度。', provider: '小猪', audience: '小熊', currency: 'BEAR', price: 220, limit: '半年或一年 1 次', fulfillment: '可延期或退款', requiresApproval: true, protectionNote: '需要确认现实预算；延期或退款不视为违约。' },
  { id: 'R08', title: '旅行提议卡', icon: '〒', category: '礼物与旅行', description: '提出一个旅行愿望，安排一次认真讨论。', provider: '小猪', audience: '小熊', currency: 'BEAR', price: 20, limit: '长期愿望', fulfillment: '启动一次讨论', requiresApproval: true, protectionNote: '不保证立即出发，也不承诺由小猪承担费用。' },
  { id: 'R09', title: '短途旅行规划卡', icon: '⌑', category: '礼物与旅行', description: '共同商量目的地、日期、预算、交通、住宿和费用分担。', provider: '小猪', audience: '小熊', currency: 'BEAR', price: 80, limit: '长期愿望', fulfillment: '共同制定计划', requiresApproval: true, protectionNote: '只启动规划，不自动生成行程或付款义务。' },
  { id: 'R10', title: '长途旅行规划卡', icon: '△', category: '礼物与旅行', description: '建立长期旅行目标、时间表和预算方案。', provider: '小猪', audience: '小熊', currency: 'BEAR', price: 200, limit: '长期冷却', fulfillment: '共同制定计划', requiresApproval: true, protectionNote: '规划后仍可因预算、时间或现实条件延期取消。' },
  { id: 'R11', title: '今日认真夸夸', icon: '✦', category: '日常小券', description: '小熊送给小猪一段具体又认真的今日夸奖。', provider: '小熊', audience: '小猪', currency: 'PIG', price: 5, limit: '每日 1 次', fulfillment: '即刻使用', requiresApproval: false },
  { id: 'R12', title: '陪散步半小时', icon: '☘', category: '日常小券', description: '小熊陪小猪沿着熟悉的小路，慢慢聊聊今天。', provider: '小熊', audience: '小猪', currency: 'PIG', price: 15, limit: '每周 2 次', fulfillment: '当天商量', requiresApproval: false },
  { id: 'R13', title: '学习陪伴一小时', icon: '✎', category: '用心奖励', description: '小熊陪小猪一起专注，完成一项拖延很久的计划。', provider: '小熊', audience: '小猪', currency: 'PIG', price: 25, limit: '每周 2 次', fulfillment: '提前 1 天', requiresApproval: false },
  { id: 'R14', title: '下一次餐厅选择权', icon: '♧', category: '用心奖励', description: '从街角小店到心愿餐厅，这一次由小猪决定。', provider: '小熊', audience: '小猪', currency: 'PIG', price: 25, limit: '每月 2 次', fulfillment: '提前 2 天', requiresApproval: false },
  { id: 'R15', title: '不看手机的认真约会', icon: '♥', category: '用心奖励', description: '小熊为小猪留出完整的两个小时，只关注彼此。', provider: '小熊', audience: '小猪', currency: 'PIG', price: 50, limit: '每月 2 次', fulfillment: '提前 3 天', requiresApproval: false },
]

export const navItems = [
  { to: '/bank', en: 'BANK HOME', zh: '银行首页', short: '首页', icon: '⌂' },
  { to: '/earn', en: 'EARN COINS', zh: '赚币记录', short: '赚币', icon: '＋' },
  { to: '/rewards', en: 'REWARD SHOP', zh: '奖励商店', short: '奖励', icon: '◇' },
  { to: '/transactions', en: 'TRANSACTIONS', zh: '流水账本', short: '流水', icon: '▤' },
  { to: '/our-room', en: 'OUR ROOM', zh: '我们的小屋', short: '我们', icon: '♡' },
]
