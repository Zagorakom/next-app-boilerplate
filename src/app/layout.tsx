import '@styles/globals.scss';
import type { Metadata } from 'next';
import { fontInter, fontCode, fontGramatika } from '@configs/fonts';
import cn from 'classnames';
// import useTranslation from 'next-translate/useTranslation';

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
		<html className='light text-foreground bg-background' suppressHydrationWarning>
			<body className={cn(
				fontInter.className,
				fontInter.variable,
				fontCode.variable,
				fontGramatika.variable,
				'antialiased',
			)}>
				{children}
			</body>
		</html>
	);
}
