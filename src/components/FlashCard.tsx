import { useState } from 'react';
import type { Flashcard } from '../data/flashcards';
import { useI18n } from '../i18n/context';

interface FlashCardProps {
  card: Flashcard;
  locked?: boolean;
}

export function FlashCard({ card, locked }: FlashCardProps) {
  const [flipped, setFlipped] = useState(false);
  const { t, isArabic } = useI18n();

  const timingColor = card.timing === 'before' ? '#4a7c23' : card.timing === 'after' ? '#d97706' : '#8B4513';
  const timingShadow = card.timing === 'before' ? '#2d5016' : card.timing === 'after' ? '#92400e' : '#654321';
  const bgFront = '#faf3e0';
  const bgBack = card.timing === 'before' ? '#f0f9e8' : card.timing === 'after' ? '#fff7ed' : '#faf3e0';

  const handleFlip = () => {
    if (!locked) setFlipped(f => !f);
  };

  return (
    <div
      className="flashcard-container w-full"
      style={{ height: 280, cursor: locked ? 'not-allowed' : 'pointer' }}
      onClick={handleFlip}
    >
      <div className={`flashcard-inner ${flipped ? 'flipped' : ''}`} style={{ height: '100%' }}>
        {/* Front */}
        <div
          className="flashcard-front"
          style={{
            background: bgFront,
            border: `4px solid #8B4513`,
            boxShadow: '4px 4px 0 0 #654321',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            padding: 24,
            gap: 16,
          }}
        >
          {locked && (
            <div style={{
              fontFamily: "'Press Start 2P', monospace",
              fontSize: '0.55rem',
              color: '#8B4513',
              background: '#f5e6c8',
              padding: '6px 10px',
              border: '2px solid #8B4513',
            }}>
              🔒 {t('locked')}
            </div>
          )}

          {/* Pixel praying figure */}
          <svg width="48" height="56" viewBox="0 0 48 56" style={{ imageRendering: 'pixelated' }}>
            {/* Head */}
            <rect x={18} y={0} width={12} height={12} fill="#c8a46e" />
            {/* Kufi/cap */}
            <rect x={18} y={0} width={12} height={4} fill="#4a7c23" />
            {/* Body in sujud position */}
            <rect x={10} y={12} width={28} height={8} fill="#4a7c23" />
            {/* Arms stretched */}
            <rect x={2} y={20} width={44} height={6} fill="#4a7c23" />
            {/* Legs */}
            <rect x={14} y={20} width={8} height={20} fill="#2d5016" />
            <rect x={26} y={20} width={8} height={20} fill="#2d5016" />
            {/* Feet / sajdah point */}
            <rect x={8} y={40} width={32} height={8} fill="#8B4513" />
            {/* Head touching ground */}
            <rect x={18} y={36} width={12} height={8} fill="#c8a46e" />
          </svg>

          <p
            style={{
              fontFamily: isArabic ? "'Amiri', serif" : "'Press Start 2P', monospace",
              fontSize: isArabic ? '1.5rem' : '0.65rem',
              color: '#2d1a00',
              textAlign: 'center',
              lineHeight: isArabic ? 1.8 : 2,
              direction: isArabic ? 'rtl' : 'ltr',
            }}
          >
            {isArabic ? card.frontAr : card.front}
          </p>

          <p style={{
            fontFamily: "'Press Start 2P', monospace",
            fontSize: '0.55rem',
            color: '#8B4513',
          }}>
            {t('tapToFlip')} ▶
          </p>
        </div>

        {/* Back */}
        <div
          className="flashcard-back"
          style={{
            background: bgBack,
            border: `4px solid ${timingColor}`,
            boxShadow: `4px 4px 0 0 ${timingShadow}`,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            padding: 24,
            gap: 12,
          }}
        >
          {card.timing !== 'none' && (
            <div style={{
              background: timingColor,
              color: '#faf3e0',
              fontFamily: "'Press Start 2P', monospace",
              fontSize: '0.65rem',
              padding: '8px 14px',
              boxShadow: `2px 2px 0 0 ${timingShadow}`,
            }}>
              {card.timing === 'before'
                ? (isArabic ? 'قبل السلام' : 'BEFORE Salam')
                : (isArabic ? 'بعد السلام' : 'AFTER Salam')
              }
            </div>
          )}

          <p
            style={{
              fontFamily: isArabic ? "'Amiri', serif" : "'Press Start 2P', monospace",
              fontSize: isArabic ? '1.5rem' : '0.65rem',
              color: '#2d1a00',
              textAlign: 'center',
              lineHeight: isArabic ? 1.8 : 2,
              direction: isArabic ? 'rtl' : 'ltr',
            }}
          >
            {isArabic ? card.backAr : card.back}
          </p>
        </div>
      </div>
    </div>
  );
}
