import { useState } from 'react';
import { useI18n } from '../i18n/context';
import { FlashCard } from '../components/FlashCard';
import { LanguageToggle } from '../components/LanguageToggle';
import { BASIC_CARDS, DETAILED_CARDS } from '../data/flashcards';

interface TestMeProps {
  onBack: () => void;
}

export function TestMe({ onBack }: TestMeProps) {
  const { t, isArabic } = useI18n();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [activeTab, setActiveTab] = useState<'basic' | 'detailed'>('basic');
  const [maxBasicReached, setMaxBasicReached] = useState(0);

  const basicCompleted = maxBasicReached >= BASIC_CARDS.length - 1;
  const cards = activeTab === 'basic' ? BASIC_CARDS : DETAILED_CARDS;

  function handleTabSwitch(tab: 'basic' | 'detailed') {
    if (tab === 'detailed' && !basicCompleted) return;
    setActiveTab(tab);
    setCurrentIndex(0);
  }

  function handlePrev() {
    if (currentIndex > 0) {
      setCurrentIndex(i => i - 1);
    }
  }

  function handleNext() {
    if (currentIndex < cards.length - 1) {
      const nextIndex = currentIndex + 1;
      setCurrentIndex(nextIndex);
      if (activeTab === 'basic' && nextIndex > maxBasicReached) {
        setMaxBasicReached(nextIndex);
      }
    }
  }

  const pixelFont: React.CSSProperties = {
    fontFamily: "'Press Start 2P', monospace",
  };

  const progressFraction = cards.length > 0 ? (currentIndex + 1) / cards.length : 1;

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        flex: 1,
        minHeight: 0,
        backgroundColor: '#faf3e0',
        ...pixelFont,
      }}
    >
      {/* Top bar */}
      <div
        style={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          padding: '12px 16px',
          flexShrink: 0,
        }}
      >
        <button
          onClick={onBack}
          style={{
            ...pixelFont,
            fontFamily: isArabic ? "'Amiri', serif" : "'Press Start 2P', monospace",
            fontSize: isArabic ? '1.2rem' : '0.65rem',
            color: '#faf3e0',
            backgroundColor: '#8B4513',
            border: 'none',
            boxShadow: '4px 4px 0 0 #5c2d0a',
            padding: '10px 16px',
            cursor: 'pointer',
            minHeight: 40,
          }}
          onMouseDown={(e) => { (e.currentTarget as HTMLButtonElement).style.transform = 'translateY(2px)'; }}
          onMouseUp={(e) => { (e.currentTarget as HTMLButtonElement).style.transform = ''; }}
          onMouseLeave={(e) => { (e.currentTarget as HTMLButtonElement).style.transform = ''; }}
          onTouchStart={(e) => { (e.currentTarget as HTMLButtonElement).style.transform = 'translateY(2px)'; }}
          onTouchEnd={(e) => { (e.currentTarget as HTMLButtonElement).style.transform = ''; }}
        >
          {t('back')}
        </button>

        <span
          style={{
            fontFamily: isArabic ? "'Amiri', serif" : "'Press Start 2P', monospace",
            fontSize: isArabic ? '1.4rem' : '0.75rem',
            color: '#2d1a00',
          }}
        >
          {t('testMe')}
        </span>

        <LanguageToggle />
      </div>

      {/* Tab row */}
      <div
        style={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'center',
          gap: 8,
          padding: '0 16px 12px',
          flexShrink: 0,
        }}
      >
        <button
          onClick={() => handleTabSwitch('basic')}
          style={{
            fontFamily: isArabic ? "'Amiri', serif" : "'Press Start 2P', monospace",
            fontSize: isArabic ? '1.2rem' : '0.6rem',
            padding: '10px 18px',
            border: '2px solid #8B4513',
            cursor: 'pointer',
            backgroundColor: activeTab === 'basic' ? '#4a7c23' : '#c8b99a',
            color: activeTab === 'basic' ? '#faf3e0' : '#2d1a00',
          }}
        >
          {t('basicCards')}
        </button>

        <button
          onClick={() => handleTabSwitch('detailed')}
          disabled={!basicCompleted}
          style={{
            fontFamily: isArabic ? "'Amiri', serif" : "'Press Start 2P', monospace",
            fontSize: isArabic ? '1.2rem' : '0.6rem',
            padding: '10px 18px',
            border: '2px solid #8B4513',
            cursor: basicCompleted ? 'pointer' : 'not-allowed',
            backgroundColor: !basicCompleted
              ? '#e0d5c0'
              : activeTab === 'detailed'
              ? '#4a7c23'
              : '#c8b99a',
            color: !basicCompleted
              ? '#9a8a7a'
              : activeTab === 'detailed'
              ? '#faf3e0'
              : '#2d1a00',
          }}
        >
          {t('detailedCards')}
        </button>
      </div>

      {/* Progress text */}
      <div
        style={{
          textAlign: 'center',
          fontFamily: isArabic ? "'Amiri', serif" : "'Press Start 2P', monospace",
          fontSize: isArabic ? '1.1rem' : '0.55rem',
          color: '#2d1a00',
          marginBottom: 6,
          flexShrink: 0,
        }}
      >
        {currentIndex + 1} {t('cardOf')} {cards.length}
      </div>

      {/* Progress bar */}
      <div
        style={{
          height: 8,
          backgroundColor: '#c8b99a',
          margin: '0 16px 12px',
          border: '2px solid #8B4513',
          flexShrink: 0,
        }}
      >
        <div
          style={{
            height: '100%',
            width: `${progressFraction * 100}%`,
            backgroundColor: '#4a7c23',
            transition: 'width 0.2s',
          }}
        />
      </div>

      {/* FlashCard */}
      <div
        style={{
          flex: 1,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'stretch',
          padding: '0 16px',
          justifyContent: 'center',
          minHeight: 0,
        }}
      >
        <FlashCard
          key={`${activeTab}-${currentIndex}`}
          card={cards[currentIndex]}
          locked={activeTab === 'detailed' && !basicCompleted}
        />
      </div>

      {/* Prev / Next buttons */}
      <div
        style={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          padding: '12px 16px',
          gap: 12,
          flexShrink: 0,
        }}
      >
        <button
          onClick={handlePrev}
          disabled={currentIndex === 0}
          style={{
            fontFamily: isArabic ? "'Amiri', serif" : "'Press Start 2P', monospace",
            fontSize: isArabic ? '1.2rem' : '0.65rem',
            color: '#faf3e0',
            backgroundColor: '#8B4513',
            border: 'none',
            boxShadow: '4px 4px 0 0 #5c2d0a',
            padding: '10px 20px',
            cursor: currentIndex === 0 ? 'default' : 'pointer',
            minHeight: 48,
            opacity: currentIndex === 0 ? 0.5 : 1,
          }}
          onMouseDown={(e) => {
            if (currentIndex !== 0) (e.currentTarget as HTMLButtonElement).style.transform = 'translateY(2px)';
          }}
          onMouseUp={(e) => { (e.currentTarget as HTMLButtonElement).style.transform = ''; }}
          onMouseLeave={(e) => { (e.currentTarget as HTMLButtonElement).style.transform = ''; }}
          onTouchStart={(e) => {
            if (currentIndex !== 0) (e.currentTarget as HTMLButtonElement).style.transform = 'translateY(2px)';
          }}
          onTouchEnd={(e) => { (e.currentTarget as HTMLButtonElement).style.transform = ''; }}
        >
          {t('prev')}
        </button>

        <span
          style={{
            fontFamily: isArabic ? "'Amiri', serif" : "'Press Start 2P', monospace",
            fontSize: isArabic ? '1rem' : '0.45rem',
            color: '#8B4513',
            textAlign: 'center',
            flex: 1,
          }}
        >
          {t('tapToFlip')}
        </span>

        <button
          onClick={handleNext}
          disabled={currentIndex === cards.length - 1}
          style={{
            fontFamily: isArabic ? "'Amiri', serif" : "'Press Start 2P', monospace",
            fontSize: isArabic ? '1.2rem' : '0.65rem',
            color: '#faf3e0',
            backgroundColor: '#8B4513',
            border: 'none',
            boxShadow: '4px 4px 0 0 #5c2d0a',
            padding: '10px 20px',
            cursor: currentIndex === cards.length - 1 ? 'default' : 'pointer',
            minHeight: 48,
            opacity: currentIndex === cards.length - 1 ? 0.5 : 1,
          }}
          onMouseDown={(e) => {
            if (currentIndex !== cards.length - 1) (e.currentTarget as HTMLButtonElement).style.transform = 'translateY(2px)';
          }}
          onMouseUp={(e) => { (e.currentTarget as HTMLButtonElement).style.transform = ''; }}
          onMouseLeave={(e) => { (e.currentTarget as HTMLButtonElement).style.transform = ''; }}
          onTouchStart={(e) => {
            if (currentIndex !== cards.length - 1) (e.currentTarget as HTMLButtonElement).style.transform = 'translateY(2px)';
          }}
          onTouchEnd={(e) => { (e.currentTarget as HTMLButtonElement).style.transform = ''; }}
        >
          {t('next')}
        </button>
      </div>
    </div>
  );
}
