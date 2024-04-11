import '@styles/globals.scss';
import type { Metadata } from 'next';
import localFont from 'next/font/local';
import cn from 'classnames';
// import useTranslation from 'next-translate/useTranslation';

const fontInter = localFont({
	src: '../shared/styles/fonts/InterVariable.woff2',
	variable: '--font-inter',
});

// const fontGramatika = localFont({
// 	src: [
// 		{
// 			path: '../shared/styles/fonts/GramatikaRegular.woff',
// 			weight: '400',
//       		style: 'normal',
// 		},
// 		{
// 			path: '../shared/styles/fonts/GramatikaBold.woff',
// 			weight: '700',
//       		style: 'normal',
// 		}
// 	],
// 	variable: '--font-gramatika'
// });

export const metadata: Metadata = {
	title: 'Next App',
	description: 'Next App Boilerplate',
	icons: [{ url: '/assets/images/favicon.svg' }],
	metadataBase: new URL('http://local-doit.wb.ru'), // TEMP
	alternates: {
		canonical: '/',
		languages: {
			'en-US': '/en',
			'ru-RU': '/ru',
		},
	},
	openGraph: {
		title: 'Next App Boilerplate',
		description: 'Next App Boilerplate by https://github.com/Zagorakiss',
		images: '/assets/images/favicon.svg',
	},
};

export default async function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	// eslint-disable-next-line
	// const { t, lang } = useTranslation('common');
	// console.log('RootLayout lang = ', lang);

	return (
		// <html lang={lang}>
		<html>
			<body className={cn(
				fontInter.className,
				fontInter.variable,
				// fontGramatika.variable,
			)}>
				{children}
			</body>
		</html>
	);
}
