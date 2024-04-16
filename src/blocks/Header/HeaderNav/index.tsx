import styles from './HeaderNav.module.scss';
import cn from 'classnames';
import Link from 'next/link';
import useTranslation from 'next-translate/useTranslation';
import { NAVIGATION_LIST, NAVIGATION_TRANSLATION_NS } from '@configs/navigation';

const HeaderNav: React.FC = () => {
    const { t, lang } = useTranslation(NAVIGATION_TRANSLATION_NS);

    return (
        <div className={styles.headerNav}>
            {NAVIGATION_LIST.map((navItem, index) => {
                return (
                    <Link
                        href={`/${lang}${navItem.url}`}
                        // href={`${navItem.url}`}
                        // prefetch={false}
                        key={`header-nav-item-${index}`}
                        className={styles.headerNavLink}
                    >
                        <div className={cn(
                            !navItem.isNew ? styles.headerNavItem : styles.headerNavItemNew
                        )}>
                            {t(navItem.labelTranslationKey)}
                            {navItem.isNew &&
                                <span className={styles.headerNavBadge}>
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

export default HeaderNav;
