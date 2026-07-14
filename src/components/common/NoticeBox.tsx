import type { ReactNode } from 'react'

export function NoticeBox({ children, tone = 'blue' }: { children: ReactNode; tone?: 'blue' | 'pink' | 'yellow' | 'green' }) {
  return <div className={`notice-box notice-${tone}`}><span aria-hidden="true">※</span><div>{children}</div></div>
}
