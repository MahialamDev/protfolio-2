import { ImageResponse } from 'next/og'

export const runtime = 'edge'

export const size = {
  width: 180,
  height: 180,
}

export const contentType = 'image/png'

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          background: 'linear-gradient(135deg, #3b82f6 0%, #8b5cf6 50%, #ec4899 100%)',
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          borderRadius: '32px',
          boxShadow: '0 8px 32px rgba(0,0,0,0.2)',
          position: 'relative',
        }}
      >
        {/* Inner glow */}
        <div
          style={{
            position: 'absolute',
            inset: '8px',
            background: 'rgba(255,255,255,0.1)',
            borderRadius: '24px',
          }}
        />
        
        {/* Letter M */}
        <div
          style={{
            color: 'white',
            fontSize: '96px',
            fontWeight: 'bold',
            fontFamily: 'Arial, sans-serif',
            textShadow: '0 4px 8px rgba(0,0,0,0.3)',
          }}
        >
          M
        </div>
        
        {/* Online indicator */}
        <div
          style={{
            position: 'absolute',
            top: '16px',
            right: '16px',
            width: '32px',
            height: '32px',
            background: '#10b981',
            borderRadius: '50%',
            border: '4px solid white',
            boxShadow: '0 2px 8px rgba(0,0,0,0.2)',
          }}
        />
      </div>
    ),
    {
      ...size,
    }
  )
}