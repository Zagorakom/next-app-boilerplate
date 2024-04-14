import Image from 'next/image';
import styles from './page.module.scss';
import { env_isPROD, env_isDEV } from '@constants/envVars';
import { logEnvVars } from '@utils/log';
import Link from 'next/link';
import useTranslation from 'next-translate/useTranslation';
import ClientCode from '@components/client-code';
import { logBoldGreen } from '@utils/log';

export default async function HomePage() {
	// await sleep(2000); // simulate slow page load to show loading page

	logEnvVars();

	return <Home />;
}

function sleep(ms: number) {
	return new Promise(resolve => setTimeout(resolve, ms));
}

export const metadata = {
	title: 'Home Page | Next App',
};

const Home: React.FC = () => {
	const { t, lang } = useTranslation('home');
	logBoldGreen(`HOME PAGE lang = ${lang}`);

	return (
		<div className={styles.main}>
			<div className='w-full flex'>
				<p className='text-default-100 bg-default-700 text-sm px-6 py-3 rounded-xl'>
					<code>Home page&nbsp; <b className='text-danger-400'>app/page.tsx</b></code>
				</p>
			</div>

			<div className={styles.gridCustom}>
				<div>
					<p>{t('title')}</p>
				</div>
				<div>
					<ClientCode />
				</div>
				<div>
					<div>
						<Link href='/en'>English</Link>
					</div>

					<div>
						<Link href='/ru'>Russian</Link>
					</div>
				</div>
				<div>
					<Link href={`/${lang}/about`}>About ➡️</Link>
				</div>
			</div>

			<div className={styles.grid}>
				<h2>APP MODE: {/* <span>-&gt;</span> */}</h2>
				<h2 className={styles.modeName}>
					{env_isDEV && 'DEV'}
					{env_isPROD && 'PROD'}
				</h2>
			</div>
		</div>
	);
};
