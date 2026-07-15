import type { DemoRedemption, DemoReward, DemoTransaction, DiaryNote } from '../types/bank'

export const transactions: DemoTransaction[] = [
  { id: 'TX-0714', date: '07.14', time: '21:08', title: '认真听完今日烦恼', detail: '主动关心 · 行为奖励', actorId: 'bear', accountOwnerId: 'pig', counterpartyId: 'bear', currency: 'PIG', amount: 10, status: '已入账', kind: 'income' },
  { id: 'TX-0713', date: '07.13', time: '19:30', title: '今晚电影选择权', detail: '奖励商店 · 奖励兑换', actorId: 'bear', accountOwnerId: 'bear', counterpartyId: 'pig', relatedOrderId: 'ORD-0713', currency: 'BEAR', amount: -3, status: '已完成', kind: 'redemption' },
  { id: 'TX-0712', date: '07.12', time: '08:15', title: '准备了爱心早餐', detail: '制造惊喜 · 行为奖励', actorId: 'pig', accountOwnerId: 'bear', counterpartyId: 'pig', currency: 'BEAR', amount: 2, status: '已入账', kind: 'income' },
  { id: 'TX-0711', date: '07.11', time: '22:42', title: '陪伴完成学习计划', detail: '申请记录自己的付出', actorId: 'pig', accountOwnerId: 'pig', counterpartyId: 'bear', currency: 'PIG', amount: 15, status: '待确认', kind: 'pending' },
  { id: 'TX-0710', date: '07.10', time: '18:20', title: '抱抱券取消返还', detail: '奖励兑换 · 退款流水', actorId: 'bear', accountOwnerId: 'pig', counterpartyId: 'bear', relatedOrderId: 'ORD-0710', currency: 'PIG', amount: 5, status: '已退款', kind: 'refund' },
  { id: 'TX-0709', date: '07.09', time: '20:06', title: '一起收拾了小屋', detail: '承担家务 · 双人共同奖励', actorId: 'pig', accountOwnerId: 'bear', counterpartyId: 'pig', currency: 'BEAR', amount: 2, status: '已入账', kind: 'income' },
  { id: 'TX-0708', date: '07.08', time: '12:10', title: '帮忙拿了一次外卖', detail: '服务奖励 · 已完成', actorId: 'pig', accountOwnerId: 'pig', counterpartyId: 'bear', relatedOrderId: 'ORD-0708', currency: 'PIG', amount: -10, status: '已完成', kind: 'expense' },
]

export const diaryNotes: DiaryNote[] = [
  { id: 'D01', authorId: 'pig', date: '2026.07.14', title: '雨停以后一起走回家', content: '回家的路还有一点湿，小熊认真听我讲完今天的烦恼。路灯一盏一盏亮起来，忽然觉得普通的一天也很值得收藏。', mood: '安心 ♡', stickerStyle: 'blue', tags: ['散步', '被陪伴'], relatedTransactionId: 'TX-0714' },
  { id: 'D02', authorId: 'bear', date: '2026.07.12', title: '早餐藏着一枚小惊喜', content: '小猪悄悄准备了早餐，还把最好看的那一份放在我面前。今天的熊币记录给这份早起的用心。', mood: '甜甜的 ☀', stickerStyle: 'yellow', tags: ['早餐', '小惊喜'], relatedTransactionId: 'TX-0712' },
  { id: 'D03', authorId: 'bear', date: '2026.07.06', title: '慢慢看完一部旧电影', content: '没有赶时间，也没有一直看手机。电影结束后我们还聊了很久，最喜欢的居然是同一个小片段。', mood: '温柔 ♪', stickerStyle: 'pink', tags: ['电影夜', '认真约会'] },
  { id: 'D04', authorId: 'pig', date: '2026.06.28', title: '一起把小屋收拾干净', content: '本来觉得会很累，结果边收拾边聊天，很快就完成了。干净的小屋和并排放好的拖鞋，看起来都特别可爱。', mood: '满足 ✓', stickerStyle: 'green', tags: ['共同完成', '小屋'] },
  { id: 'D05', authorId: 'pig', date: '2026.06.22', title: '夏天的第一支冰淇淋', content: '我们坐在树荫下面分着吃冰淇淋。小猪记住了小熊最喜欢的口味，也记住了那天风吹过来的方向。', mood: '开心 ✦', stickerStyle: 'caramel', tags: ['夏日', '约会'] },
  { id: 'D06', authorId: 'bear', date: '2026.06.01', title: '第一张奖励券', content: '第一次兑换的是十分钟认真抱抱。银行的小存折从这一天开始，不只记录硬币，也记录彼此愿意停下来陪伴的时间。', mood: '纪念日 〒', stickerStyle: 'pink', tags: ['第一次', '银行纪念'] },
]

export const redemptions: DemoRedemption[] = [
  { id: 'ORD-0715', userId: 'bear', rewardTitle: '肩颈放松券', status: '预约中', date: '07.15', currency: 'BEAR', amount: 5 },
  { id: 'ORD-0714', userId: 'bear', rewardTitle: '小礼物愿望卡', status: '待兑现', date: '07.14', currency: 'BEAR', amount: 20 },
  { id: 'ORD-0713', userId: 'bear', rewardTitle: '今晚电影选择权', status: '已完成', date: '07.13', currency: 'BEAR', amount: 3 },
  { id: 'ORD-0712', userId: 'bear', rewardTitle: '今日选歌权', status: '已退款', date: '07.12', currency: 'BEAR', amount: 1 },
  { id: 'ORD-0711', userId: 'pig', rewardTitle: '不看手机的认真约会', status: '预约中', date: '07.11', currency: 'PIG', amount: 50 },
  { id: 'ORD-0709', userId: 'pig', rewardTitle: '今日认真夸夸', status: '已完成', date: '07.09', currency: 'PIG', amount: 5 },
  { id: 'ORD-0710', userId: 'pig', rewardTitle: '陪散步半小时', status: '已退款', date: '07.10', currency: 'PIG', amount: 15 },
  { id: 'ORD-0707', userId: 'pig', rewardTitle: '学习陪伴一小时', status: '待兑现', date: '07.07', currency: 'PIG', amount: 25 },
]

export const rewards: DemoReward[] = [
  { id: 'R01', title: '十分钟认真抱抱', icon: '♡', category: '日常奖励', description: '小猪放下手机，给小熊一个安安静静的拥抱。', provider: '小猪', audience: '小熊', currency: 'BEAR', price: 1, limit: '每周 2 次', fulfillment: '无需预约', requiresApproval: false },
  { id: 'R02', title: '今日选歌权', icon: '♪', category: '日常奖励', description: '接下来的一小时，小猪陪小熊听她选的歌。', provider: '小猪', audience: '小熊', currency: 'BEAR', price: 1, limit: '每日 1 次', fulfillment: '即刻使用', requiresApproval: false },
  { id: 'R03', title: '肩颈放松券', icon: '♨', category: '服务奖励', description: '小猪为辛苦一天的小熊准备十五分钟轻松时间。', provider: '小猪', audience: '小熊', currency: 'BEAR', price: 5, limit: '每周 1 次', fulfillment: '当天商量', requiresApproval: false },
  { id: 'R04', title: '秘密约会策划', icon: '✿', category: '服务奖励', description: '目的地先保密，小熊只要带着期待准时出发。', provider: '小猪', audience: '小熊', currency: 'BEAR', price: 15, limit: '每月 1 次', fulfillment: '提前 7 天', requiresApproval: false },
  { id: 'R05', title: '小礼物愿望卡（50元内）', icon: '▧', category: '礼物奖励', description: '提出一份金额上限明确的小礼物愿望。', provider: '小猪', audience: '小熊', currency: 'BEAR', price: 20, limit: '每月 1 次', fulfillment: '确认预算后购买', requiresApproval: true, protectionNote: '提交愿望后由小猪确认预算和购买时间。' },
  { id: 'R06', title: '中礼物愿望卡（200元内）', icon: '◇', category: '礼物奖励', description: '提出一份中等礼物愿望，同一时间只保留一张待兑现。', provider: '小猪', audience: '小熊', currency: 'BEAR', price: 80, limit: '同时 1 张', fulfillment: '确认预算和时间', requiresApproval: true, protectionNote: '超出金额上限的部分需要另行商量。' },
  { id: 'R07', title: '大礼物愿望卡（500元内）', icon: '✦', category: '礼物奖励', description: '为长期积累准备的大礼物愿望额度。', provider: '小猪', audience: '小熊', currency: 'BEAR', price: 220, limit: '半年或一年 1 次', fulfillment: '可延期或退款', requiresApproval: true, protectionNote: '需要确认现实预算；延期或退款不视为违约。' },
  { id: 'R08', title: '旅行提议卡', icon: '〒', category: '旅行奖励', description: '提出一个旅行愿望，安排一次认真讨论。', provider: '小猪', audience: '小熊', currency: 'BEAR', price: 20, limit: '长期愿望', fulfillment: '启动一次讨论', requiresApproval: true, protectionNote: '只创建规划商讨，不保证立即出发，也不表示由小猪承担全部费用。' },
  { id: 'R09', title: '短途旅行规划卡', icon: '⌑', category: '旅行奖励', description: '共同商量目的地、日期、预算、交通、住宿和费用分担。', provider: '小猪', audience: '小熊', currency: 'BEAR', price: 80, limit: '长期愿望', fulfillment: '共同制定计划', requiresApproval: true, protectionNote: '只启动规划，不自动生成行程或付款义务。' },
  { id: 'R10', title: '长途旅行规划卡', icon: '△', category: '旅行奖励', description: '建立长期旅行目标、时间表和预算方案。', provider: '小猪', audience: '小熊', currency: 'BEAR', price: 200, limit: '长期冷却', fulfillment: '共同制定计划', requiresApproval: true, protectionNote: '规划后仍可因预算、时间或现实条件延期取消。' },
  { id: 'R11', title: '今日认真夸夸', icon: '✦', category: '日常奖励', description: '小熊送给小猪一段具体又认真的今日夸奖。', provider: '小熊', audience: '小猪', currency: 'PIG', price: 5, limit: '每日 1 次', fulfillment: '即刻使用', requiresApproval: false },
  { id: 'R12', title: '陪散步半小时', icon: '☘', category: '服务奖励', description: '小熊陪小猪沿着熟悉的小路，慢慢聊聊今天。', provider: '小熊', audience: '小猪', currency: 'PIG', price: 15, limit: '每周 2 次', fulfillment: '当天商量', requiresApproval: false },
  { id: 'R13', title: '学习陪伴一小时', icon: '✎', category: '服务奖励', description: '小熊陪小猪一起专注，完成一项拖延很久的计划。', provider: '小熊', audience: '小猪', currency: 'PIG', price: 25, limit: '每周 2 次', fulfillment: '提前 1 天', requiresApproval: false },
  { id: 'R14', title: '下一次餐厅选择权', icon: '♧', category: '服务奖励', description: '从街角小店到心愿餐厅，这一次由小猪决定。', provider: '小熊', audience: '小猪', currency: 'PIG', price: 25, limit: '每月 2 次', fulfillment: '提前 2 天', requiresApproval: false },
  { id: 'R15', title: '不看手机的认真约会', icon: '♥', category: '服务奖励', description: '小熊为小猪留出完整的两个小时，只关注彼此。', provider: '小熊', audience: '小猪', currency: 'PIG', price: 50, limit: '每月 2 次', fulfillment: '提前 3 天', requiresApproval: false },
]

export const navItems = [
  { to: '/bank', en: 'BANK HOME', zh: '银行首页', short: '首页', icon: '⌂' },
  { to: '/earn', en: 'RECORD A MOMENT', zh: '记一笔心意', short: '记录', icon: '＋' },
  { to: '/rewards', en: 'REWARD SHOP', zh: '奖励商店', short: '奖励', icon: '◇' },
  { to: '/transactions', en: 'TRANSACTIONS', zh: '流水账本', short: '流水', icon: '▤' },
  { to: '/our-room', en: 'OUR ROOM', zh: '我们的小屋', short: '我们', icon: '♡' },
]
