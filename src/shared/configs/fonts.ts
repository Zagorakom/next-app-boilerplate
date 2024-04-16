import { Fira_Code } from 'next/font/google';
import localFont from 'next/font/local';

export const fontInter = localFont({
	src: '../styles/fonts/InterVariable.woff2',
	variable: '--font-inter',
});

export const fontCode = Fira_Code({
	subsets: ['latin'],
	variable: '--font-code',
});

export const fontGramatika = localFont({
	src: [
		{
			path: '../styles/fonts/GramatikaRegular.woff',
			weight: '400',
      		style: 'normal',
		},
		{
			path: '../styles/fonts/GramatikaBold.woff',
			weight: '700',
      		style: 'normal',
		}
	],
	variable: '--font-gramatika'
});
