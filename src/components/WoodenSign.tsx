interface WoodenSignProps {
  ruling: string;
  rulingAr?: string;
  timing: 'before' | 'after' | 'none';
  timingLabel: string;
  timingLabelAr?: string;
  isArabic?: boolean;
}

export function WoodenSign({ ruling, rulingAr, timing, timingLabel, timingLabelAr, isArabic }: WoodenSignProps) {
  const borderColor = timing === 'before' ? '#4a7c23' : timing === 'after' ? '#d97706' : '#8B4513';
  const shadowColor = timing === 'before' ? '#2d5016' : timing === 'after' ? '#92400e' : '#654321';
  const bgColor = timing === 'before' ? '#f0f9e8' : timing === 'after' ? '#fff7ed' : '#faf3e0';
  const labelBg = timing === 'before' ? '#4a7c23' : timing === 'after' ? '#d97706' : '#8B4513';

  return (
    <div className="flex flex-col items-center">
      {/* Main sign */}
      <div
        style={{
          background: bgColor,
          border: `4px solid ${borderColor}`,
          boxShadow: `4px 4px 0 0 ${shadowColor}, 8px 8px 0 0 rgba(0,0,0,0.15)`,
          padding: '20px 24px',
          maxWidth: 360,
          width: '100%',
          position: 'relative',
        }}
      >
        {/* Corner nails */}
        {[{t:6,l:6},{t:6,r:6},{b:6,l:6},{b:6,r:6}].map((pos, i) => (
          <div key={i} style={{
            position: 'absolute',
            top: pos.t, bottom: pos.b,
            left: pos.l, right: pos.r,
            width: 8, height: 8,
            background: '#654321',
            boxShadow: '1px 1px 0 0 #3d2a10',
          }} />
        ))}

        {/* Timing badge */}
        {timing !== 'none' && (
          <div
            style={{
              background: labelBg,
              color: '#faf3e0',
              fontFamily: isArabic ? "'Amiri', serif" : "'Press Start 2P', monospace",
              fontSize: isArabic ? '1.2rem' : '0.55rem',
              padding: '6px 12px',
              marginBottom: 12,
              display: 'inline-block',
              boxShadow: `2px 2px 0 0 ${shadowColor}`,
            }}
          >
            {isArabic && timingLabelAr ? timingLabelAr : timingLabel}
          </div>
        )}

        {/* Ruling text */}
        {isArabic && rulingAr ? (
          <p
            style={{
              fontFamily: "'Amiri', serif",
              fontSize: '1.6rem',
              color: '#2d1a00',
              direction: 'rtl',
              lineHeight: 1.8,
              margin: 0,
            }}
          >
            {rulingAr}
          </p>
        ) : (
          <p
            style={{
              fontFamily: "'Press Start 2P', monospace",
              fontSize: '0.55rem',
              color: '#2d1a00',
              lineHeight: 2,
              margin: 0,
            }}
          >
            {ruling}
          </p>
        )}
      </div>

      {/* Post */}
      <div style={{
        width: 16, height: 32,
        background: '#8B4513',
        boxShadow: '2px 0 0 0 #654321',
      }} />

      {/* Base */}
      <div style={{
        width: 48, height: 8,
        background: '#654321',
        boxShadow: '2px 2px 0 0 #3d2a10',
      }} />
    </div>
  );
}
