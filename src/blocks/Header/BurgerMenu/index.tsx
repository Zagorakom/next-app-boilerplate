'use client';
import { useEffect, useState, useContext } from 'react';
import Link from 'next/link';
import { useTransition, animated } from '@react-spring/web';
import styles from './BurgerMenu.module.scss';
import cn from 'classnames';
// import Button from '@components/Button';
import { Button } from '@nextui-org/button';
import Image from 'next/image';
// import logoImage from '@public/assets/icons/logo_black.svg';
// import { rgbDataURL } from '@utils/rgb';
import { useBodyScrollLock } from '@hooks/useBodyScrollLock';
import { useDispatch, useSelector } from 'react-redux';
import { setBodyScrollState } from '@store/uiSlice';
import useTranslation from 'next-translate/useTranslation';
import BurgerMenuNav from './BurgerMenuNav';
import { UserContext } from '@providers/UserProvider';
import SignOutBtn from '@components/SignOutBtn';
import { env_BASEPATH_STRING } from '@constants/envVars';

const BurgerMenu: React.FC = () => {
	const { user } = useContext(UserContext);
	const [isModalVisible, setIsModalVisible] = useState(false);
	const transitions = useTransition(isModalVisible, {
		from: { transform: 'translate3d(0,-100%,0)' },
		enter: { transform: 'translate3d(0,0%,0)' },
		leave: { transform: 'translate3d(0,-100%,0)' },
	});
	const { t, lang } = useTranslation('common');
	const {blockBodyScroll, unBlockBodyScroll, resetBodyScroll} = useBodyScrollLock();
	const { isBodyScrollLocked, bodyScrollLockedBy } = useSelector((state: any) => state.ui);
	const dispatch = useDispatch();
	// const [isAuthTest, setIsAuthTest] = useState(false); // TEMP
	// const [isAuthLoadingTest, setIsAuthLoadingTest] = useState(false); // TEMP

	// const tryLoginTest = useCallback(() => { // TEMP
	// 	setIsAuthLoadingTest(true);
	// 	setTimeout(() => {
	// 		setIsAuthLoadingTest(false);
	// 		setIsAuthTest(true);
	// 	}, 1500);
	// }, [setIsAuthLoadingTest, setIsAuthTest]);

	useEffect(() => {
        // isModalVisible ? blockBodyScroll() : unBlockBodyScroll()
		if (isModalVisible) {
            if (!isBodyScrollLocked) {
                blockBodyScroll();
                dispatch(setBodyScrollState({locked: true, lockedBy: 'BurgerMenu'}));
            }
        } else {
            if (bodyScrollLockedBy === 'BurgerMenu') {
                unBlockBodyScroll();
                dispatch(setBodyScrollState({locked: false, lockedBy: ''}));
            }
        } // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [isModalVisible]);

	useEffect(() => {
        return () => {
            resetBodyScroll();
            dispatch(setBodyScrollState({locked: false, lockedBy: ''}));
        } // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

	return (
		<div className={styles.burgerMenu}>
			<div
				className={styles.burgerWrapper}
				onClick={() => setIsModalVisible(prev => !prev)}
			>
				<Image
					src={`${env_BASEPATH_STRING}/assets/icons/burger.svg`} // required
					width={24} // required (if not static import)
					height={24} // required (if not static import)
					alt='Burger menu' // required
					className={styles.burger}
					priority={true}
					// placeholder = 'blur' // blurDataURL required
					// blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNkuJeZBgAD3AGvthWLsAAAAABJRU5ErkJggg==" // green opacity 0.4
					// blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mO88PPxfwAI+gOtaLWrJQAAAABJRU5ErkJggg==" // green opacity 1.0
					// blurDataURL={rgbDataURL(237, 181, 6)} // gererated color
				/>
			</div>
			{transitions((style, isModalVisible) => (
				isModalVisible ?
				<animated.div style={style} className={styles.burgerModalPosition}>
					<div
						className={cn(
							styles.burgerModalPosition,
							styles.burgerModal,
						)}
					>
						<div className={styles.burgerModalHead}>
							<Link
								href={`/${lang}`}
								// href={`/`}
								// prefetch={false}
								onClick={() => setIsModalVisible(false)}
							>
								<div className={cn(
									styles.burgerLogoWrapper,
									'bg-secondary-300 text-default-800',
								)}>
									Logo
									{/* <Image
										// src="/assets/icons/logo_black.svg"
										src={logoImage}
										// width={96} // automatically provided for static imports
										// height={48} // automatically provided for static imports
										alt='Logo'
										className={styles.burgerLogo}
										fill
										priority={true}
										// placeholder = 'blur' // Optional blur-up while loading
										// blurDataURL={rgbDataURL(237, 181, 6)}  // automatically provided for static imports
									/> */}
								</div>
							</Link>
							<div
								className={styles.burgerCloseWrapper}
								onClick={() => setIsModalVisible(prev => !prev)}
							>
								<Image
									src={`${env_BASEPATH_STRING}/assets/icons/close.svg`} // required
									width={24} // required (if not static import)
									height={24} // required (if not static import)
									alt='Close' // required
									className={styles.burgerClose}
									priority={true}
									// placeholder = 'blur' // blurDataURL required
									// blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNkuJeZBgAD3AGvthWLsAAAAABJRU5ErkJggg==" // green opacity 0.4
									// blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mO88PPxfwAI+gOtaLWrJQAAAABJRU5ErkJggg==" // green opacity 1.0
									// blurDataURL={rgbDataURL(237, 181, 6)} // gererated color
								/>
							</div>
						</div>
						<div className={styles.burgerModalBody}>
							<div className={styles.navigation}>
								<BurgerMenuNav setIsModalVisible={setIsModalVisible} />
							</div>
							<div className={styles.user}>
								{!user ?
									<Button color='success' className='m-1 w-24 text-white'>Login</Button>
									:
									<div className={styles.userCardWrapper}>
										<SignOutBtn
											type='burger-menu'
										/>
									</div>
								}
							</div>
						</div>
					</div>
				</animated.div>
				:
				null
			))}
		</div>
	);
};

export default BurgerMenu;
