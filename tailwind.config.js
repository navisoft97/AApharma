/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: 'var(--color-primary)',
        'primary-hover': 'var(--color-primary-hover)',
        secondary: 'var(--color-secondary)',
        accent: 'var(--color-accent)',
        'accent-hover': 'var(--color-accent-hover)',
        'footer-bg': 'var(--color-footer-bg)',
      },
      fontSize: {
        '2xs': ['0.7rem', { lineHeight: '0.9rem' }],
        '3xs': ['0.625rem', { lineHeight: '0.8rem' }],
        '4xs': ['0.55rem', { lineHeight: '0.7rem' }],
      },
    },
  },
  plugins: [],
}
