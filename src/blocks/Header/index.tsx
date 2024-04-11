'use client';
import styles from './Header.module.scss';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
// import logoImage from '@public/assets/icons/logo_black.svg';
// import { rgbDataURL } from '@utils/rgb';
import BurgerMenu from '@blocks/Header/BurgerMenu';
import HeaderNav from '@blocks/Header/HeaderNav';
import HeaderUser from '@blocks/Header/HeaderUser';
import useTranslation from 'next-translate/useTranslation';
import { usePathname } from 'next/navigation';
import { useDispatch, useSelector } from 'react-redux';
import cn from 'classnames';

const Header: React.FC = () => {
    const { t, lang } = useTranslation('common');
    const pathname = usePathname();
    const isProfileSection = pathname.includes('/profile');

    return (
        <header className={cn(
            styles.header,
            isProfileSection && styles.headerInProfile,
        )}>
            <div className={styles.headerContent}>
                <div className={styles.headerLeft}>
                    <Link
                        href={`/${lang}`}
                        // href={`/`}
                        // prefetch={false}
                        className={styles.logoLink}
                    >
                        <div className={styles.logoWrapper}>
                            Logo
                            {/* <Image
                                // src="/assets/icons/logo_black.svg"
                                src={logoImage}
                                // width={96} // automatically provided for static imports
                                // height={48} // automatically provided for static imports
                                alt="Logo"
                                className={styles.logo}
                                fill
                                priority={true}
                                // placeholder = 'blur' // Optional blur-up while loading
                                // blurDataURL={rgbDataURL(237, 181, 6)}  // automatically provided for static imports
                            /> */}
                        </div>
                    </Link>
                    <div className={styles.headerNavWrapper}>
                        <HeaderNav />
                    </div>
                </div>
                <div className={styles.headerRight}>
                    <BurgerMenu />
                    <HeaderUser />
                </div>
            </div>
        </header>
    );
};

export default Header;
