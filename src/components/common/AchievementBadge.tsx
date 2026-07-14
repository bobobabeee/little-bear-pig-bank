export function AchievementBadge({ icon, title, description, tone = 'pink' }: { icon: string; title: string; description: string; tone?: 'pink' | 'blue' | 'green' | 'yellow' }) {
  return (
    <article className={`achievement-badge tone-${tone}`}>
      <span className="badge-seal" aria-hidden="true">{icon}</span>
      <div><strong>{title}</strong><p>{description}</p><small>UNLOCKED!</small></div>
    </article>
  )
}
