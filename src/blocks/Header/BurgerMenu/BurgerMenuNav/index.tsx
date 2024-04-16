import styles from './BurgerMenuNav.module.scss';
import cn from 'classnames';
import Link from 'next/link';
import useTranslation from 'next-translate/useTranslation';
import { NAVIGATION_LIST, NAVIGATION_TRANSLATION_NS } from '@configs/navigation';

interface IProps {
	setIsModalVisible: React.Dispatch<React.SetStateAction<boolean>>;
}

const BurgerMenuNav: React.FC<IProps> = ({setIsModalVisible}) => {
    const { t, lang } = useTranslation(NAVIGATION_TRANSLATION_NS);

    return (
        <div className={styles.burgerMenuNav}>
            {NAVIGATION_LIST.map((navItem, index) => {
                return (
                    <Link
                        href={`/${lang}${navItem.url}`}
                        // href={`${navItem.url}`}
                        // prefetch={false}
                        key={`burger-nav-item-${index}`}
                        onClick={() => setIsModalVisible(false)}
                        className={styles.burgerMenuNavLink}
                    >
                        <div className={cn(
                            !navItem.isNew ? styles.burgerMenuNavItem : styles.burgerMenuNavItemNew
                        )}>
                            {t(navItem.labelTranslationKey)}
                            {navItem.isNew &&
                                <span className={styles.burgerMenuNavBadge}>
                                    New
                                </span>
                            }
                        </div>
                    </Link>
                );
            })}
        </div>
    );
};

export default BurgerMenuNav;
