/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx,mdx,json}'],
	theme: {
		extend: {
			fontFamily: {
				emoji: ['Segoe UI Emoji', 'Noto Color Emoji', 'Apple Color Emoji', 'sans-serif'],
			},
			animation: {
				pulse: 'pulse 1s cubic-bezier(0.4, 0, 0.6, 1) infinite',
			},
			keyframes: {
				pulse: {
					'0%, 100%': { opacity: 1 },
					'50%': { opacity: 0.4 },
				},
			},
		},
	},
	plugins: [require('@tailwindcss/typography'), require('tailwindcss-animate')],
};
