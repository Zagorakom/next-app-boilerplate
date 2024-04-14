import '@styles/globals.scss';
import styles from './layout.module.scss';
import Footer from '@blocks/Footer';
import Header from '@blocks/Header';
import type { Metadata } from 'next';
import { cookies } from 'next/headers';
import { ReduxProvider } from '@providers/ReduxProvider';
import UserProvider from '@providers/UserProvider';
import { Providers } from '@providers/providers';
import { getUser } from '@fetchApi/server/getUser';
import { DevToolsController } from '@utils/devTools/component';
import { logBoldGreen } from '@utils/log';
import useTranslation from 'next-translate/useTranslation';

export const metadata: Metadata = {
	title: 'Next App | Main',
};

export default async function MainLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	// const user = await getUser();

	// const user = { // mockData from mockapi endpoint
	// 	"id": "1",
	// 	"data": {
	// 	  "fullName": "Jimmy Veum",
	// 	  "firstName": "Hiram",
	// 	  "lastName": "O'Connell",
	// 	  "createdAt": "2024-04-06T08:04:18.617Z",
	// 	  "role": "role 1",
	// 	  "id": "1"
	// 	},
	// 	"status": "ok"
	// }

	// const user = {
	// 	data: {
	// 		user_id: 4
	// 	},
	// 	status: 'ok',
	// };

	const user: any = {};

	console.log('layoutMain -> user.status', user?.status);
	console.log('layoutMain -> user_id', user?.data?.id);
	console.log('layoutMain -> user_fullname', user?.data?.fullName);

	// eslint-disable-next-line
	const { t, lang } = useTranslation('common');
	logBoldGreen(`MainLayout lang = ${lang}`);

	return (
		<Providers>
			<ReduxProvider>
				<UserProvider userData={user?.data}>
					<div className={styles.layout} data-lang={lang}>
						<DevToolsController />
						<Header />
						<main className={styles.main}>
							{children}
						</main>
						<Footer />
					</div>
				</UserProvider>
			</ReduxProvider>
		</Providers>
	);
}
