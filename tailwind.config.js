import { nextui } from '@nextui-org/react';

/** @type {import('tailwindcss').Config} */

module.exports = {
	content: [
		'./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}',
		'./src/**/*.{js,ts,jsx,tsx,mdx}',
	], // #8f07cf
	theme: {
		extend: {
			fontFamily: {
				// 'code': ['Fira_Code'],
				'code': ['var(--font-code)'],
				'inter': ['var(--font-inter)'],
			},
		},
	},
	darkMode: 'class',
	plugins: [
		nextui({
			themes: {
				"light": {
					extend: "light", // <- inherit default values from light theme
					colors: {
						background: "#FCFBFD",
						foreground: "#0E0A13",
						primary: {
							50: "#EDD7F7",
							100: "#e9cdf5",
							200: "#d29cec",
							300: "#bc6ae2",
							400: "#a539d9",
							500: "#8f07cf",
							600: "#7206a6",
							700: "#56047c",
							800: "#390353",
							900: "#1d0129",
							DEFAULT: "#8f07cf",
							// foreground: "#0E0A13",
							foreground: "#FCFBFD", // contrast color (light)
						},
						focus: "#7206a6",
						secondary: {
							50: "#F7D7F1",
							100: "#f5cdee",
							200: "#ec9cdd",
							300: "#e26acd",
							400: "#d939bc",
							500: "#cf07ab",
							600: "#a60689",
							700: "#7c0467",
							800: "#530344",
							900: "#290122",
							DEFAULT: "#cf07ab",
							// foreground: "#0E0A13",
							foreground: "#FCFBFD", // contrast color (light)
						},
						success: {
							foreground: "#FFFFFF", // contrast color (light)
						}
					},
					// layout: {}
				},
				"dark": {
					extend: "dark", // <- inherit default values from dark theme
					colors: {
						// background: "#251930",
						// background: "#1D1426",
						background: "#0F0815",
						foreground: "#FFFEF7",
						primary: {
							50: "#1d0129",
							100: "#390353",
							200: "#56047c",
							300: "#7206a6",
							400: "#8f07cf",
							500: "#a539d9",
							600: "#bc6ae2",
							700: "#d29cec",
							800: "#e9cdf5",
							900: "#EDD7F7",
							DEFAULT: "#a539d9",
							foreground: "#FFFEF7",
						},
						focus: "#7206a6",
						secondary: {
							50: "#290122",
							100: "#530344",
							200: "#7c0467",
							300: "#a60689",
							400: "#cf07ab",
							500: "#d939bc",
							600: "#e26acd",
							700: "#ec9cdd",
							800: "#f5cdee",
							900: "#F7D7F1",
							DEFAULT: "#d939bc",
							foreground: "#FFFEF7",
						},
						success: {
							foreground: "#FFFFFF", // contrast color (light)
						}
					},
					// layout: {}
				},
				"purple-dark": {
					extend: "dark", // <- inherit default values from dark theme
					colors: {
						background: "#0D001A",
						foreground: "#ffffff",
						primary: {
						  50: "#3B096C",
						  100: "#520F83",
						  200: "#7318A2",
						  300: "#9823C2",
						  400: "#c031e2",
						  500: "#DD62ED",
						  600: "#F182F6",
						  700: "#FCADF9",
						  800: "#FDD5F9",
						  900: "#FEECFE",
						  DEFAULT: "#DD62ED",
						  foreground: "#ffffff",
						},
						focus: "#F182F6",
					},
					layout: {
						disabledOpacity: "0.3",
						radius: {
							small: "4px",
							medium: "6px",
							large: "8px",
						},
						borderWidth: {
							small: "1px",
							medium: "2px",
							large: "3px",
						},
					}
				}
			}
		})
	],
};
