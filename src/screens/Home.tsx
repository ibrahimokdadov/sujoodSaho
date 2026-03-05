import React from 'react';
import { useI18n } from '../i18n/context';
import { PixelTree } from '../components/PixelTree';
import { PixelGround } from '../components/PixelGround';
import { LanguageToggle } from '../components/LanguageToggle';

interface HomeProps {
  onGuideMe: () => void;
  onTestMe: () => void;
}

function PixelMosque() {
  return (
    <svg
      width="80"
      height="60"
      viewBox="0 0 80 60"
      xmlns="http://www.w3.org/2000/svg"
      style={{ display: 'block' }}
    >
      {/* Left minaret */}
      <rect x="4" y="20" width="10" height="40" fill="#8B4513" />
      <rect x="3" y="16" width="12" height="6" fill="#654321" />
      <rect x="5" y="12" width="8" height="6" fill="#8B4513" />
      <rect x="6" y="8" width="6" height="5" fill="#654321" />
      <rect x="8" y="4" width="2" height="6" fill="#8B4513" />

      {/* Right minaret */}
      <rect x="66" y="20" width="10" height="40" fill="#8B4513" />
      <rect x="65" y="16" width="12" height="6" fill="#654321" />
      <rect x="67" y="12" width="8" height="6" fill="#8B4513" />
      <rect x="68" y="8" width="6" height="5" fill="#654321" />
      <rect x="70" y="4" width="2" height="6" fill="#8B4513" />

      {/* Main body */}
      <rect x="16" y="30" width="48" height="30" fill="#8B4513" />

      {/* Dome base */}
      <rect x="18" y="22" width="44" height="10" fill="#654321" />

      {/* Dome arc */}
      <path d="M18 22 Q40 2 62 22 Z" fill="#8B4513" />
      <path d="M18 22 Q40 4 62 22" fill="none" stroke="#654321" strokeWidth="2" />

      {/* Dome crescent */}
      <rect x="38" y="0" width="4" height="6" fill="#654321" />
      <rect x="37" y="6" width="2" height="2" fill="#654321" />
      <rect x="41" y="6" width="2" height="2" fill="#654321" />

      {/* Main door */}
      <rect x="33" y="42" width="14" height="18" fill="#654321" />
      <path d="M33 42 Q40 34 47 42 Z" fill="#654321" />

      {/* Windows */}
      <rect x="20" y="35" width="8" height="8" fill="#654321" />
      <rect x="52" y="35" width="8" height="8" fill="#654321" />
    </svg>
  );
}

export function Home({ onGuideMe, onTestMe }: HomeProps) {
  const { t, isArabic } = useI18n();
  const [guidePressing, setGuidePressing] = React.useState(false);
  const [testPressing, setTestPressing] = React.useState(false);

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        flex: 1,
        minHeight: 0,
        background: 'linear-gradient(to bottom, #87CEEB 0%, #b0e0ff 70%, #d4f1ff 100%)',
        position: 'relative',
      }}
    >
      {/* Language Toggle */}
      <div style={{ position: 'absolute', top: 12, right: 12, zIndex: 10 }}>
        <LanguageToggle />
      </div>

      {/* Upper content: title + buttons */}
      <div
        style={{
          flex: 1,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '48px 16px 16px 16px',
          gap: 28,
          minHeight: 0,
        }}
      >
        {/* Title Panel */}
        <div
          style={{
            backgroundColor: '#c8a46e',
            border: '4px solid #8B4513',
            boxShadow: '4px 4px 0 0 #654321',
            padding: '14px 24px',
            textAlign: 'center',
            direction: isArabic ? 'rtl' : 'ltr',
          }}
        >
          <p
            style={{
              fontFamily: isArabic ? "'Amiri', serif" : "'Press Start 2P', monospace",
              fontSize: isArabic ? '1.4rem' : '0.75rem',
              color: '#2d1a00',
              margin: 0,
              lineHeight: 1.8,
            }}
          >
            {t('homeWelcome')}
          </p>
          <p
            style={{
              fontFamily: isArabic ? "'Amiri', serif" : "'Press Start 2P', monospace",
              fontSize: isArabic ? '1.9rem' : '1rem',
              color: '#2d1a00',
              margin: '8px 0 0 0',
              lineHeight: 1.5,
              fontWeight: isArabic ? 700 : 400,
            }}
          >
            {t('homeWelcomeLine2')}
          </p>
        </div>

        {/* Buttons */}
        <div style={{ display: 'flex', flexDirection: 'row', gap: 20, justifyContent: 'center' }}>
          <button
            onMouseDown={() => setGuidePressing(true)}
            onMouseUp={() => { setGuidePressing(false); onGuideMe(); }}
            onMouseLeave={() => setGuidePressing(false)}
            onTouchStart={() => setGuidePressing(true)}
            onTouchEnd={() => { setGuidePressing(false); onGuideMe(); }}
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              minHeight: 64,
              minWidth: 150,
              backgroundColor: '#4a7c23',
              boxShadow: guidePressing ? '0 0 0 0 #2d5016' : '4px 4px 0 0 #2d5016',
              transform: guidePressing ? 'translateY(2px)' : 'translateY(0)',
              color: '#faf3e0',
              fontFamily: isArabic ? "'Amiri', serif" : "'Press Start 2P', monospace",
              fontSize: isArabic ? '1.3rem' : '0.65rem',
              border: 'none',
              cursor: 'pointer',
              padding: '12px 16px',
              outline: 'none',
              transition: 'transform 0.05s, box-shadow 0.05s',
              direction: isArabic ? 'rtl' : 'ltr',
            }}
          >
            <span>{t('homeGuideBtn')} 🌳</span>
            <span style={{
              fontFamily: isArabic ? "'Amiri', serif" : "'Press Start 2P', monospace",
              fontSize: isArabic ? '1rem' : '0.5rem',
              marginTop: 6,
              color: '#d4f0b0',
            }}>
              {t('homeGuideSub')}
            </span>
          </button>

          <button
            onMouseDown={() => setTestPressing(true)}
            onMouseUp={() => { setTestPressing(false); onTestMe(); }}
            onMouseLeave={() => setTestPressing(false)}
            onTouchStart={() => setTestPressing(true)}
            onTouchEnd={() => { setTestPressing(false); onTestMe(); }}
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              minHeight: 64,
              minWidth: 150,
              backgroundColor: '#8B4513',
              boxShadow: testPressing ? '0 0 0 0 #654321' : '4px 4px 0 0 #654321',
              transform: testPressing ? 'translateY(2px)' : 'translateY(0)',
              color: '#faf3e0',
              fontFamily: isArabic ? "'Amiri', serif" : "'Press Start 2P', monospace",
              fontSize: isArabic ? '1.3rem' : '0.65rem',
              border: 'none',
              cursor: 'pointer',
              padding: '12px 16px',
              outline: 'none',
              transition: 'transform 0.05s, box-shadow 0.05s',
              direction: isArabic ? 'rtl' : 'ltr',
            }}
          >
            <span>{t('homeTestBtn')} 🃏</span>
            <span style={{
              fontFamily: isArabic ? "'Amiri', serif" : "'Press Start 2P', monospace",
              fontSize: isArabic ? '1rem' : '0.5rem',
              marginTop: 6,
              color: '#f0d0b0',
            }}>
              {t('homeTestSub')}
            </span>
          </button>
        </div>
      </div>

      {/* Mosque + Trees row — pinned to ground */}
      <div
        style={{
          width: '100%',
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'flex-end',
          justifyContent: 'center',
        }}
      >
        {/* Left tree */}
        <div style={{ flex: 1, display: 'flex', justifyContent: 'flex-end', alignItems: 'flex-end', paddingRight: 8 }}>
          <PixelTree size="sm" variant={1} />
        </div>

        {/* Center: mosque only, trees flank it */}
        <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'flex-end', gap: 4 }}>
          <PixelTree size="md" variant={3} />
          <PixelMosque />
          <PixelTree size="lg" variant={2} />
        </div>

        {/* Right tree */}
        <div style={{ flex: 1, display: 'flex', justifyContent: 'flex-start', alignItems: 'flex-end', paddingLeft: 8 }}>
          <PixelTree size="sm" variant={1} />
        </div>
      </div>

      {/* Ground */}
      <PixelGround />
    </div>
  );
}
