/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        // METACODE design tokens
        background: '#F5F7FA',
        foreground: '#1E293B',
        card: '#FFFFFF',
        primary: {
          DEFAULT: '#2563EB',
          hover: '#1D4ED8',
          light: '#3B82F6',
        },
        secondary: {
          DEFAULT: '#172B4D',
          hover: '#1E3A5F',
        },
        muted: '#64748B',
        borderline: '#E5E7EB',
        success: '#22C55E',
        warning: '#F59E0B',
        destructive: '#EF4444',
      },
      fontFamily: {
        sans: ['Inter', 'Cairo', 'system-ui', 'sans-serif'],
        heading: ['Inter', 'Cairo', 'system-ui', 'sans-serif'],
        arabic: ['Cairo', 'Inter', 'system-ui', 'sans-serif'],
      },
      container: {
        center: true,
        padding: {
          DEFAULT: '1.5rem',
          sm: '2rem',
          lg: '2.5rem',
        },
        screens: {
          '2xl': '1200px',
        },
      },
      borderRadius: {
        base: '12px',
        card: '16px',
        cardlg: '20px',
      },
      boxShadow: {
        card: '0 1px 2px rgba(0,0,0,0.05)',
        lift: '0 12px 30px rgba(15,23,42,0.1)',
        cinematic: '0 24px 60px rgba(15,23,42,0.18)',
        primary: '0 8px 20px rgba(37,99,235,0.35)',
      },
      backgroundImage: {
        'primary-gradient': 'linear-gradient(135deg, #2563EB, #6366F1)',
        'secondary-gradient': 'linear-gradient(135deg, #172B4D, #1E3A5F)',
      },
    },
  },
  plugins: [],
};
