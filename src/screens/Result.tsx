import { useState } from 'react';
import { useI18n } from '../i18n/context';
import { WoodenSign } from '../components/WoodenSign';
import { LanguageToggle } from '../components/LanguageToggle';
import { PixelTree } from '../components/PixelTree';
import { PixelGround } from '../components/PixelGround';
import { TREE_NODES } from '../data/decision-tree';
import type { ResultNode } from '../data/decision-tree';

interface ResultProps {
  nodeId: string;
  onStartOver: () => void;
}

export function Result({ nodeId, onStartOver }: ResultProps) {
  const { t, isArabic } = useI18n();
  const [showDetail, setShowDetail] = useState(false);

  const node = TREE_NODES[nodeId] as ResultNode;

  const accentShadow = node.timing === 'before' ? '#2d5016' : node.timing === 'after' ? '#92400e' : '#654321';

  const timingLabel =
    node.timing === 'before'
      ? t('resultBeforeSalam' as any)
      : node.timing === 'after'
      ? t('resultAfterSalam' as any)
      : '';

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        flex: 1,
        minHeight: 0,
        backgroundColor: '#faf3e0',
        position: 'relative',
      }}
    >
      {/* Top bar */}
      <div
        style={{
          position: 'absolute',
          top: 12,
          right: 12,
          zIndex: 10,
        }}
      >
        <LanguageToggle />
      </div>

      {/* Scrollable center area */}
      <div
        style={{
          flex: 1,
          overflowY: 'auto',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          padding: '56px 16px 24px 16px',
          gap: 20,
        }}
      >
        {/* Title */}
        <div style={{ textAlign: 'center', maxWidth: 360, width: '100%' }}>
          <p
            style={{
              fontFamily: "'Press Start 2P', monospace",
              fontSize: '0.75rem',
              color: '#2d1a00',
              lineHeight: 2,
              margin: 0,
            }}
          >
            {t(node.titleKey as any)}
          </p>
          {isArabic && (
            <p
              style={{
                fontFamily: "'Amiri', serif",
                fontSize: '1.6rem',
                color: '#2d1a00',
                direction: 'rtl',
                lineHeight: 1.8,
                margin: '6px 0 0 0',
              }}
            >
              {t(node.titleKey as any)}
            </p>
          )}
        </div>

        {/* Trees + WoodenSign row */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'flex-end',
            justifyContent: 'center',
            width: '100%',
            maxWidth: 480,
            gap: 8,
          }}
        >
          {/* Left tree */}
          <div style={{ display: 'flex', alignItems: 'flex-end', paddingBottom: 8 }}>
            <PixelTree size="sm" variant={1} />
          </div>

          {/* Sign */}
          <div style={{ flex: 1, display: 'flex', justifyContent: 'center' }}>
            <WoodenSign
              ruling={t(node.rulingKey as any)}
              rulingAr={t(node.rulingKey as any)}
              timing={node.timing}
              timingLabel={timingLabel}
              timingLabelAr={timingLabel}
              isArabic={isArabic}
            />
          </div>

          {/* Right tree */}
          <div style={{ display: 'flex', alignItems: 'flex-end', paddingBottom: 8 }}>
            <PixelTree size="sm" variant={3} />
          </div>
        </div>

        {/* Detail expandable section */}
        <div style={{ maxWidth: 360, width: '100%' }}>
          {/* Toggle button */}
          <button
            onClick={() => setShowDetail(v => !v)}
            style={{
              fontFamily: isArabic ? "'Amiri', serif" : "'Press Start 2P', monospace",
              fontSize: isArabic ? '1.2rem' : '0.65rem',
              backgroundColor: '#8B4513',
              color: '#faf3e0',
              border: 'none',
              padding: '10px 16px',
              cursor: 'pointer',
              boxShadow: '3px 3px 0 0 #654321',
              width: '100%',
              textAlign: 'center',
              outline: 'none',
              lineHeight: 1.8,
            }}
          >
            {showDetail ? t('hideDetail' as any) : t('showDetail' as any)}
          </button>

          {/* Detail panel */}
          {showDetail && (
            <div
              style={{
                background: '#f5e6c8',
                border: '4px solid #8B4513',
                padding: '16px',
                marginTop: 4,
              }}
            >
              <p
                style={{
                  fontFamily: "'Press Start 2P', monospace",
                  fontSize: '0.65rem',
                  color: '#2d1a00',
                  lineHeight: 2.2,
                  margin: 0,
                }}
              >
                {t(node.detailKey as any)}
              </p>
              {isArabic && (
                <p
                  style={{
                    fontFamily: "'Amiri', serif",
                    fontSize: '1.5rem',
                    color: '#2d1a00',
                    direction: 'rtl',
                    lineHeight: 1.8,
                    margin: '10px 0 0 0',
                  }}
                >
                  {t(node.detailKey as any)}
                </p>
              )}
            </div>
          )}
        </div>

        {/* Start Over button */}
        <button
          onClick={onStartOver}
          style={{
            fontFamily: isArabic ? "'Amiri', serif" : "'Press Start 2P', monospace",
            fontSize: isArabic ? '1.2rem' : '0.7rem',
            backgroundColor: '#4a7c23',
            color: '#faf3e0',
            border: 'none',
            padding: '12px 24px',
            cursor: 'pointer',
            boxShadow: `4px 4px 0 0 ${accentShadow}`,
            outline: 'none',
            lineHeight: 1.8,
            marginTop: 8,
            marginBottom: 16,
          }}
        >
          {t('startOver' as any)}
        </button>
      </div>

      {/* Ground strip */}
      <PixelGround />
    </div>
  );
}
