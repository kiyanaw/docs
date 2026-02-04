'use client'

import Link from 'next/link'

export function CardGrid({ children }) {
  return (
    <div
      style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
        gap: '24px',
        marginTop: '16px',
        marginBottom: '24px',
      }}
    >
      {children}
    </div>
  )
}

export function Card({ image, title, subtitle, children, badge, href }) {
  const cardContent = (
    <div
      style={{
        border: '1px solid #e5e7eb',
        borderRadius: '12px',
        overflow: 'hidden',
        backgroundColor: '#fff',
        height: '100%',
        transition: 'box-shadow 0.2s, border-color 0.2s',
        display: 'flex',
        flexDirection: 'column',
      }}
      onMouseEnter={(e) => {
        if (href) {
          e.currentTarget.style.boxShadow = '0 4px 12px rgba(0,0,0,0.1)'
          e.currentTarget.style.borderColor = '#d1d5db'
        }
      }}
      onMouseLeave={(e) => {
        if (href) {
          e.currentTarget.style.boxShadow = 'none'
          e.currentTarget.style.borderColor = '#e5e7eb'
        }
      }}
    >
      {image && (
        <div
          style={{
            height: '160px',
            backgroundColor: '#f3f4f6',
            display: 'flex',
            alignItems: 'flex-start',
            justifyContent: 'center',
            overflow: 'hidden',
          }}
        >
          <img
            src={image}
            alt={title}
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              objectPosition: 'top',
            }}
          />
        </div>
      )}
      <div style={{ padding: '16px', display: 'flex', flexDirection: 'column', flex: 1 }}>
        <h3 style={{ margin: 0, fontSize: '18px', fontWeight: '600', marginBottom: '8px' }}>{title}</h3>
        <div className="card-description">
          {children}
        </div>
        {(subtitle || badge || href) && (
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginTop: '12px' }}>
            {subtitle && (
              <span
                style={{
                  fontSize: '11px',
                  fontWeight: '500',
                  color: '#6b7280',
                  textTransform: 'uppercase',
                  letterSpacing: '0.05em',
                }}
              >
                {subtitle}
              </span>
            )}
            {badge}
            {href && (
              <span
                style={{
                  fontSize: '12px',
                  fontWeight: '500',
                  color: '#3b82f6',
                  marginLeft: 'auto',
                }}
              >
                Learn more →
              </span>
            )}
          </div>
        )}
      </div>
    </div>
  )

  if (href) {
    return (
      <Link href={href} className="card-link" style={{ textDecoration: 'none', color: 'inherit', display: 'block' }}>
        {cardContent}
      </Link>
    )
  }

  return cardContent
}
