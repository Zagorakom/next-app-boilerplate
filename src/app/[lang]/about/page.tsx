import styles from './page.module.scss';
import Spinner from '@components/Spinner';
import { ESpinnerVariants } from '@typings/Spinner';
import Link from 'next/link';
import useTranslation from 'next-translate/useTranslation';
import cn from 'classnames';

export default function AboutPage() {
    const { t, lang } = useTranslation('about');
    return (
		<div className={cn(styles.about)}>
			<div className={styles.description}>
				<p>
					About page&nbsp;
					<code className={styles.code}>app/about/page.tsx</code>
				</p>
			</div>

			<div className={styles.grid}>
				<h2>Loader example: {/* <span>-&gt;</span> */}</h2>
				<h2 className={styles.modeName}>
					<div className={styles.spinnerWrapper}>
						<Spinner
							variant={ESpinnerVariants.Warning}
							size='xl'
							animation='grow'
						/>
						<Spinner
							variant={ESpinnerVariants.Danger}
							animation='grow'
						/>
						<Spinner
							variant={ESpinnerVariants.Primary}
							size='sm'
							animation='grow'
						/>
					</div>
				</h2>
				<h2 className={styles.modeName}>
					<div className={styles.spinnerWrapper}>
						<Spinner
							variant={ESpinnerVariants.Warning}
							size='xl'
							animation='border'
						/>
						<Spinner
							variant={ESpinnerVariants.Danger}
							animation='border'
						/>
						<Spinner
							variant={ESpinnerVariants.Primary}
							size='sm'
							animation='border'
						/>
					</div>
				</h2>
			</div>

			<div className={styles.grid50}>
				<div>{t`title`}</div>
				<div>
					<Link href={`/${lang}`}>Back to Home page ⬅️</Link>
				</div>
			</div>
		</div>
	);
};
