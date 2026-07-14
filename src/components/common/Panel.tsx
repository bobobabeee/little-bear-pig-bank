import type { ReactNode } from 'react'

export function Panel({ title, eyebrow, children, className = '' }: { title: string; eyebrow?: string; children: ReactNode; className?: string }) {
  return (
    <section className={`panel ${className}`}>
      <div className="panel-titlebar">
        <span aria-hidden="true">✦</span>
        <div>
          <h2>{title}</h2>
          {eyebrow && <small>{eyebrow}</small>}
        </div>
        <span className="title-dots" aria-hidden="true">•••</span>
      </div>
      <div className="panel-body">{children}</div>
    </section>
  )
}

export function PageIntro({ label, title, description }: { label: string; title: string; description: string }) {
  return (
    <header className="page-intro">
      <div>
        <span className="pixel-label">{label}</span>
        <h1>{title}</h1>
        <p>{description}</p>
      </div>
      <span className="page-intro-mark" aria-hidden="true">♡</span>
    </header>
  )
}
