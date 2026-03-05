import { PixelTree } from './PixelTree';

interface TreeSignProps {
  question: string;
  questionAr?: string;
  subtext?: string;
  subtextAr?: string;
  isArabic?: boolean;
}

export function TreeSign({ question, questionAr, subtext, subtextAr, isArabic }: TreeSignProps) {
  return (
    <div className="flex flex-col items-center gap-2">
      {/* Sign board */}
      <div
        className="wooden-sign relative w-full max-w-sm"
        style={{
          background: 'linear-gradient(135deg, #c8a46e 0%, #b8904a 50%, #c8a46e 100%)',
          border: '4px solid #8B4513',
          boxShadow: '4px 4px 0 0 #654321, 8px 8px 0 0 rgba(0,0,0,0.2)',
          padding: '16px 20px',
          position: 'relative',
        }}
      >
        {/* Nail decorations */}
        <div style={{
          position: 'absolute', top: 6, left: 6,
          width: 8, height: 8, background: '#654321',
          boxShadow: '1px 1px 0 0 #3d2a10'
        }} />
        <div style={{
          position: 'absolute', top: 6, right: 6,
          width: 8, height: 8, background: '#654321',
          boxShadow: '1px 1px 0 0 #3d2a10'
        }} />

        {/* Question text */}
        {isArabic && questionAr ? (
          <p
            className="text-center"
            style={{
              fontFamily: "'Amiri', serif",
              fontSize: '1.5rem',
              color: '#2d1a00',
              textAlign: 'center',
              direction: 'rtl',
              lineHeight: 1.6,
              margin: 0,
            }}
          >
            {questionAr}
          </p>
        ) : (
          <p
            className="text-center leading-relaxed"
            style={{
              fontFamily: "'Press Start 2P', monospace",
              fontSize: '0.7rem',
              color: '#2d1a00',
              textAlign: 'center',
              margin: 0,
            }}
          >
            {question}
          </p>
        )}

        {(subtext || subtextAr) && (
          <p
            className="text-center mt-2"
            style={{
              fontFamily: isArabic ? "'Amiri', serif" : "'Press Start 2P', monospace",
              fontSize: isArabic ? '1.2rem' : '0.55rem',
              color: '#5a3a10',
              direction: isArabic ? 'rtl' : 'ltr',
            }}
          >
            {isArabic ? (subtextAr ?? subtext) : subtext}
          </p>
        )}
      </div>

      {/* Post */}
      <div style={{
        width: 12, height: 24,
        background: '#8B4513',
        boxShadow: '2px 0 0 0 #654321',
      }} />

      {/* Tree */}
      <PixelTree size="lg" variant={2} />
    </div>
  );
}
