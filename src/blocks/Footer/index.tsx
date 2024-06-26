import styles from './Footer.module.scss';
import Link from 'next/link';
import Image from 'next/image';
// import logoImage from '@public/assets/icons/logo_white.svg';
import useTranslation from 'next-translate/useTranslation';
import { NAVIGATION_TRANSLATION_NS } from '@configs/navigation';
import cn from 'classnames';
import { Count } from '@ui/Count';

const Footer: React.FC = () => {
	const { t, lang } = useTranslation(NAVIGATION_TRANSLATION_NS);

	return (
		<footer className={cn(
			styles.footer,
			'dark text-foreground-900 bg-background'
		)}>
			<div className={styles.footerContent}>
				<span>Footer</span>
				<Count />
			</div>
		</footer>
	);
};

export default Footer;
