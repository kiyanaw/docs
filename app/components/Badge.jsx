'use client'

const variants = {
  default: { backgroundColor: '#e0e7ff', color: '#3730a3' },
  warning: { backgroundColor: '#fef3c7', color: '#92400e' },
  success: { backgroundColor: '#d1fae5', color: '#065f46' },
  neutral: { backgroundColor: '#e5e7eb', color: '#374151' },
  danger: { backgroundColor: '#fee2e2', color: '#991b1b' },
  // Issue type variants (pill style with borders)
  newWord: {
    backgroundColor: '#f0fdf4',
    color: '#166534',
    border: '2px solid #166534',
    pill: true
  },
  needsHelp: {
    backgroundColor: '#fef2f2',
    color: '#dc2626',
    border: '2px solid #dc2626',
    pill: true
  },
  indexing: {
    backgroundColor: '#fffbeb',
    color: '#c2410c',
    border: '2px solid #c2410c',
    pill: true
  },
}

export function Callout({ children }) {
  return (
    <span
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#dc2626',
        color: '#ffffff',
        width: '22px',
        height: '22px',
        borderRadius: '50%',
        fontSize: '13px',
        fontWeight: '700',
        lineHeight: 1,
      }}
    >
      {children}
    </span>
  )
}

export function Badge({ children, variant = 'default' }) {
  const { pill, ...colors } = variants[variant] || variants.default

  const baseStyle = pill
    ? {
        padding: '2px 10px',
        borderRadius: '9999px',
        fontSize: '12px',
        fontWeight: '600',
        textTransform: 'uppercase',
        letterSpacing: '0.025em',
      }
    : {
        padding: '1px 5px',
        borderRadius: '3px',
        fontSize: '9px',
        fontWeight: '500',
        textTransform: 'uppercase',
      }

  return (
    <span
      style={{
        ...colors,
        ...baseStyle,
        display: 'inline-block',
      }}
    >
      {children}
    </span>
  )
}
