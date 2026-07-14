import type { ReactNode } from 'react'
import { BankHeader } from './BankHeader'
import { Sidebar } from './Sidebar'
import { MobileNavigation } from './Navigation'
import type { UserId } from '../../types/bank'

export function SiteLayout({ currentUser, onSwitch, children }: { currentUser: UserId; onSwitch: (user: UserId) => void; children: ReactNode }) {
  return (
    <div className="site-shell">
      <a className="skip-link" href="#main-content">跳到主要内容</a>
      <BankHeader currentUser={currentUser} onSwitch={onSwitch} />
      <div className="layout-grid">
        <Sidebar currentUser={currentUser} onSwitch={onSwitch} />
        <main id="main-content" className="main-content">{children}</main>
      </div>
      <footer className="site-footer">
        <span>小熊猪银行 · KUMA &amp; PIGGY BANK</span>
        <span>Made with tiny coins &amp; big love ♡</span>
        <span>阶段一视觉原型 · 演示数据</span>
      </footer>
      <MobileNavigation />
    </div>
  )
}
