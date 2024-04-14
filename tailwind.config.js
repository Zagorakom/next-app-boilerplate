import { nextui } from '@nextui-org/react';

/** @type {import('tailwindcss').Config} */

module.exports = {
	content: [
        './node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}',
		'./src/app/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/blocks/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/components/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/shared/**/*.{js,ts,jsx,tsx,mdx}',
    ],
	theme: {
		extend: {},
	},
	darkMode: 'class',
	plugins: [nextui()],
};