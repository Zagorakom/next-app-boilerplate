'use client';
import { useContext, useState, useEffect, useCallback, useRef } from 'react';
import Link from 'next/link';
import { useTransition, useSpring, animated } from '@react-spring/web';
import styles from './HeaderUser.module.scss';
import cn from 'classnames';
import Avatar from '@components/Avatar';
import Image from 'next/image';
// import Button from '@components/Button';
import { Button } from '@nextui-org/button';
import useTranslation from 'next-translate/useTranslation';
import SignOutBtn from '@components/SignOutBtn';
import { UserContext } from '@providers/UserProvider';
import { env_BASEPATH_STRING } from '@constants/envVars';

const HeaderUser: React.FC = () => {
    const { user } = useContext(UserContext);
    const headerUserMenuRef: any = useRef(null);
    const [isUserMenuVisible, setIsUserMenuVisible] = useState(false);
	const transitions = useTransition(isUserMenuVisible, {
		from: { transform: 'scaleY(0)', opacity: '0' },
		enter: { transform: 'scaleY(1)', opacity: '1' },
		leave: { transform: 'scaleY(0)', opacity: '-1' },
	});
    const animationPropsAngle = useSpring({ transform: isUserMenuVisible ? `rotate(540deg)` : `rotate(0deg)` })
	const { t, lang } = useTranslation('common');

    useEffect(() => {
        const handleOutSideClick: any = (event: React.MouseEvent) => {
            if (isUserMenuVisible) {
                if (!headerUserMenuRef.current?.contains(event.target)) {
                    // alert('Outside Clicked.');
                    // console.log('Outside Clicked.');
                    setIsUserMenuVisible(false);
                }
            }
        };
        window.addEventListener("mousedown", handleOutSideClick);
        return () => {
            window.removeEventListener("mousedown", handleOutSideClick);
        };
    }, [headerUserMenuRef, isUserMenuVisible]);

    return (
        <div className={styles.headerUser}>
            {!user ?
                <Button color='success' className='m-1 w-24 text-white'>Login</Button>
                :
                <div className={styles.headerUserMenu} ref={headerUserMenuRef}>
                    <div
                        className={styles.headerUserAvatar}
                        onClick={() => setIsUserMenuVisible(prev => !prev)}
                    >
                        <Avatar
                            avatarStyle={{
                                width: '46px',
                                height: '46px'
                            }}
                            wrapperStyle={{
                                width: '50px',
                                height: '50px',
                            }}
                            withBadge={false}
                            byContext={true}
                            // niceConfig
                            // niceIsRandom
                            // shape='rounded'
                        />
                        <animated.div
                            className={styles.angleWrapper}
                            style={animationPropsAngle}
                        >
                            <Image
                                src={`${env_BASEPATH_STRING}/assets/icons/angle_down.svg`}
                                width={16}
                                height={16}
                                alt='Menu'
                                className={styles.arrow}
                                priority={true}
                            />
                        </animated.div>
                    </div>
                    {transitions((style, isUserMenuVisible) => (
                        isUserMenuVisible ?
                        <animated.div style={style} className={styles.headerUserNavPosition}>
                            <div className={styles.headerUserNav}>
                                <div className={styles.headerUserNavContent}>
                                    <div className={styles.navListWrapper}>
                                        <div
                                            style={{
                                                height: '100px',
                                                padding: '16px'
                                            }}
                                        >
                                            user info and nav
                                        </div>
                                    </div>
                                    <div className={styles.signOutWrapper}>
                                        <div className={styles.signOutContentWrapper}>
                                            <SignOutBtn
                                                type='alt'
                                                // customStyle={{
                                                //     padding: '8px 52px'
                                                // }}
                                            />
                                        </div>
                                    </div>
                                    {/* <div
                                        className={styles.logOut}
                                        onClick={() => setIsAuthTest(false)}
                                    >
                                        Sign Out
                                    </div> */}
                                </div>
                            </div>
                        </animated.div>
                        :
                        null
                    ))}
                </div>
            }
        </div>
    );
};

export default HeaderUser;
