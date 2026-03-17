import { ImageResponse } from 'next/og';

export const runtime = 'edge';
export const alt = 'Math Up | Les maths autrement';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: 'linear-gradient(135deg, #059669 0%, #047857 50%, #065f46 100%)',
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          fontFamily: 'Inter, sans-serif',
        }}
      >
        {/* Logo */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '20px',
            marginBottom: '40px',
          }}
        >
          <div
            style={{
              width: '80px',
              height: '80px',
              background: 'white',
              borderRadius: '20px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <svg width="50" height="50" viewBox="0 0 300 300">
              <path
                d="M 215,95 L 119,95 A 42,55 0 0 0 119,205 L 215,205"
                fill="none"
                stroke="#059669"
                strokeWidth="36"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
          <div
            style={{
              fontSize: '64px',
              fontWeight: 800,
              color: 'white',
              display: 'flex',
            }}
          >
            Math Up
          </div>
        </div>

        {/* Tagline */}
        <div
          style={{
            fontSize: '36px',
            color: 'rgba(255,255,255,0.9)',
            fontWeight: 600,
            marginBottom: '20px',
          }}
        >
          Les maths autrement
        </div>

        {/* Description */}
        <div
          style={{
            fontSize: '22px',
            color: 'rgba(255,255,255,0.7)',
            textAlign: 'center',
            maxWidth: '700px',
          }}
        >
          Plateforme éducative adaptée au niveau de chaque élève
        </div>
      </div>
    ),
    { ...size }
  );
}
