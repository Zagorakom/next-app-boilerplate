import styles from './HeaderNav.module.scss';
import cn from 'classnames';
// import Link from 'next/link';
import { Link, Button, Badge } from '@nextui-org/react';
import useTranslation from 'next-translate/useTranslation';
import { NAVIGATION_LIST, NAVIGATION_TRANSLATION_NS } from '@configs/navigation';

const HeaderNav: React.FC = () => {
    const { t, lang } = useTranslation(NAVIGATION_TRANSLATION_NS);

    return (
        <div className={styles.headerNav}>
            {NAVIGATION_LIST.map((navItem) => {
                return (
                    // <Link
                    //     href={`/${lang}${navItem.url}`}
                    //     // href={`${navItem.url}`}
                    //     // prefetch={false}
                    //     key={navItem.url}
                    //     className={styles.headerNavLink}
                    // >
                    //     <div className={cn(
                    //         !navItem.isNew ? styles.headerNavItem : styles.headerNavItemNew
                    //     )}>
                    //         {t(navItem.labelTranslationKey)}
                    //         {navItem.isNew &&
                    //             <span className={styles.headerNavBadge}>
                    //                 New
                    //             </span>
                    //         }
                    //     </div>
                    // </Link>

                    navItem.isNew ?
                        <div className='m-2' key={navItem.url}>
                            <Badge content='new' color='success' size='sm'>
                                <Button
                                    radius='md' size='sm' color='secondary' variant='ghost'
                                    as={Link}
                                    href={`/${lang}${navItem.url}`}
                                >
                                    {t(navItem.labelTranslationKey)}
                                </Button>
                            </Badge>
                        </div>
                        :
                        <div className='m-1' key={navItem.url}>
                            <Button
                                radius='md' size='sm' color='secondary' variant='light'
                                as={Link}
                                href={`/${lang}${navItem.url}`}
                            >
                                {t(navItem.labelTranslationKey)}
                            </Button>
                        </div>
                        
                );
            })}
        </div>
    );
};

export default HeaderNav;
