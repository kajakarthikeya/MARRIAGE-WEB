export const DESIGN_TOKENS = {
  colors: {
    primary: {
      ivory: '#FAF7F2',
      cream: '#F5EFE6',
      warmWhite: '#FAF8F5',
      softGold: '#D4AF37',
      darkMaroon: '#4A0E17',
      burgundy: '#800020',
      mutedBrown: '#6E5D4F',
    },
    secondary: {
      lightFloralPink: '#F4E3E6',
      champagneGold: '#F7E7CE',
      softBeige: '#EAE0D5',
    },
    background: {
      texturedIvory: '#FBF9F5',
      cream: '#F7F3EC',
      gradientWhite: 'linear-gradient(135deg, #FAF8F5 0%, #F5EFE6 50%, #FAF7F2 100%)',
    },
    text: {
      darkBrown: '#3D2E24',
      darkMaroon: '#4A0E17',
      mutedGray: '#766E65',
    },
    accent: {
      goldGlow: 'rgba(212, 175, 55, 0.35)',
      softGlow: 'rgba(247, 231, 206, 0.5)',
    },
  },
  typography: {
    fonts: {
      display: 'var(--font-cormorant), Georgia, serif',
      heading: 'var(--font-playfair), Georgia, serif',
      body: 'var(--font-poppins), sans-serif',
    },
  },
  shadows: {
    luxury: '0 20px 40px -15px rgba(74, 14, 23, 0.08)',
    goldGlow: '0 0 25px rgba(212, 175, 55, 0.3)',
    softCard: '0 10px 30px rgba(61, 46, 36, 0.05)',
    elevated: '0 25px 50px -12px rgba(61, 46, 36, 0.12)',
  },
  borderRadius: {
    sm: '0.375rem',
    md: '0.75rem',
    lg: '1.25rem',
    xl: '2rem',
    full: '9999px',
  },
  transitions: {
    smooth: 'all 0.4s cubic-bezier(0.16, 1, 0.3, 1)',
    fast: 'all 0.2s cubic-bezier(0.16, 1, 0.3, 1)',
    slow: 'all 0.7s cubic-bezier(0.16, 1, 0.3, 1)',
  },
} as const;
