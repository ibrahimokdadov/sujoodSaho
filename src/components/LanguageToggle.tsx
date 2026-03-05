import { useI18n } from '../i18n/context';

export function LanguageToggle() {
  const { lang, toggleLang } = useI18n();

  return (
    <button
      onClick={toggleLang}
      style={{
        fontFamily: "'Press Start 2P', monospace",
        fontSize: '0.5rem',
        padding: '8px 12px',
        background: '#8B4513',
        color: '#faf3e0',
        border: 'none',
        cursor: 'pointer',
        boxShadow: '3px 3px 0 0 #654321',
        minHeight: 48,
        minWidth: 64,
        transition: 'transform 0.1s',
      }}
      onMouseDown={e => (e.currentTarget.style.transform = 'translateY(2px)')}
      onMouseUp={e => (e.currentTarget.style.transform = '')}
      onMouseLeave={e => (e.currentTarget.style.transform = '')}
      aria-label={lang === 'en' ? 'Switch to Arabic' : 'التبديل إلى الإنجليزية'}
    >
      {lang === 'en' ? 'عربي' : 'EN'}
    </button>
  );
}
