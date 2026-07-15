type CharacterIconProps = {
  character: 'bear' | 'pig'
  size?: number
}

export function CharacterIcon({ character, size = 72 }: CharacterIconProps) {
  if (character === 'bear') {
    return (
      <svg className="character-icon" width={size} height={size} viewBox="0 0 88 88" role="img" aria-label="原创小熊头像">
        <circle cx="23" cy="22" r="13" fill="#b9855b" stroke="#6f5142" strokeWidth="2" />
        <circle cx="65" cy="22" r="13" fill="#b9855b" stroke="#6f5142" strokeWidth="2" />
        <circle cx="44" cy="45" r="33" fill="#d9ae82" stroke="#6f5142" strokeWidth="2" />
        <circle cx="33" cy="42" r="3" fill="#59483f" />
        <circle cx="55" cy="42" r="3" fill="#59483f" />
        <ellipse cx="44" cy="56" rx="13" ry="10" fill="#f5dec2" />
        <path d="M40 53 Q44 49 48 53 Q44 58 40 53Z" fill="#6f5142" />
        <path d="M44 56v4m0 0q-5 5-9 0m9 0q5 5 9 0" fill="none" stroke="#6f5142" strokeWidth="2" strokeLinecap="round" />
        <path d="M20 69 Q44 78 68 69" fill="none" stroke="#f7e5a7" strokeWidth="5" strokeLinecap="round" />
        <path d="M58 13c-6-7-11-2-8 5 2 4 7 4 10 1m2-1c4-6 10-4 9 3-1 5-7 6-11 2" fill="#f6cbd4" stroke="#8c5f5e" strokeWidth="1.4" />
        <circle cx="60" cy="20" r="3.2" fill="#fde8ed" stroke="#8c5f5e" strokeWidth="1.2" />
      </svg>
    )
  }

  return (
    <svg className="character-icon" width={size} height={size} viewBox="0 0 88 88" role="img" aria-label="原创小猪头像">
      <path d="M19 31Q8 13 28 18M69 31Q80 13 60 18" fill="#f6cbd4" stroke="#8c5f5e" strokeWidth="2" />
      <circle cx="44" cy="45" r="33" fill="#f6cbd4" stroke="#8c5f5e" strokeWidth="2" />
      <circle cx="33" cy="41" r="3" fill="#59483f" />
      <circle cx="55" cy="41" r="3" fill="#59483f" />
      <ellipse cx="44" cy="55" rx="14" ry="10" fill="#f9aeba" stroke="#8c5f5e" strokeWidth="1.5" />
      <ellipse cx="39" cy="55" rx="2" ry="3" fill="#8c5f5e" />
      <ellipse cx="49" cy="55" rx="2" ry="3" fill="#8c5f5e" />
      <path d="M29 72l13 5-8 8-8-9zm30 0-13 5 8 8 8-9z" fill="#cfe5ef" stroke="#6f7480" strokeWidth="1.2" />
      <circle cx="44" cy="77" r="5" fill="#edf7fa" stroke="#6f7480" strokeWidth="1.2" />
    </svg>
  )
}

export function CoinIcon({ currency, size = 34 }: { currency: 'BEAR' | 'PIG'; size?: number }) {
  const isBear = currency === 'BEAR'
  return (
    <svg className="coin-icon" width={size} height={size} viewBox="0 0 44 44" role="img" aria-label={isBear ? '原创熊币图标' : '原创猪币图标'}>
      <circle cx="22" cy="22" r="19" fill={isBear ? '#f7e5a7' : '#fde8ed'} stroke={isBear ? '#b9855b' : '#c96c72'} strokeWidth="2" />
      <circle cx="22" cy="22" r="15" fill="none" stroke={isBear ? '#d0a64c' : '#e2a6b0'} strokeDasharray="2 2" />
      {isBear ? (
        <>
          <circle cx="16" cy="15" r="4" fill="#b9855b" /><circle cx="28" cy="15" r="4" fill="#b9855b" />
          <circle cx="22" cy="23" r="10" fill="#d9ae82" /><circle cx="18" cy="21" r="1.4" fill="#59483f" /><circle cx="26" cy="21" r="1.4" fill="#59483f" />
          <ellipse cx="22" cy="26" rx="4" ry="3" fill="#f5dec2" /><circle cx="22" cy="25" r="1.2" fill="#59483f" />
        </>
      ) : (
        <>
          <path d="M13 19Q9 10 17 13M31 19Q35 10 27 13" fill="#f5a9b6" stroke="#8c5f5e" />
          <circle cx="22" cy="23" r="10" fill="#f6cbd4" /><circle cx="18" cy="21" r="1.4" fill="#59483f" /><circle cx="26" cy="21" r="1.4" fill="#59483f" />
          <ellipse cx="22" cy="26" rx="4.5" ry="3" fill="#f5a9b6" /><circle cx="20.5" cy="26" r=".8" fill="#8c5f5e" /><circle cx="23.5" cy="26" r=".8" fill="#8c5f5e" />
        </>
      )}
    </svg>
  )
}

export function StampDecoration() {
  return (
    <svg className="stamp-decoration" viewBox="0 0 82 96" aria-hidden="true">
      <path d="M5 5h8l4 4 4-4h8l4 4 4-4h8l4 4 4-4h8l4 4 4-4h8v8l-4 4 4 4v8l-4 4 4 4v8l-4 4 4 4v8l-4 4 4 4v8h-8l-4-4-4 4h-8l-4-4-4 4h-8l-4-4-4 4h-8l-4-4-4 4H5v-8l4-4-4-4v-8l4-4-4-4v-8l4-4-4-4v-8l4-4-4-4z" fill="#edf7fa" stroke="#91aeb8" strokeWidth="2" />
      <circle cx="41" cy="43" r="21" fill="#fffdf8" stroke="#91aeb8" strokeDasharray="3 2" />
      <path d="M41 28l4 9 10 1-8 6 3 10-9-5-9 5 3-10-8-6 10-1z" fill="#f6cbd4" />
      <text x="41" y="78" textAnchor="middle" fontSize="8" fill="#6f7480">KUMA POST</text>
    </svg>
  )
}
