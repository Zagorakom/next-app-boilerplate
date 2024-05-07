'use client';
import styles from './ModalBase.module.scss';
import cn from 'classnames';
import { useEffect, memo } from 'react';
import { useTransition, useSpring, useChain, useSpringRef, animated, config } from '@react-spring/web';
import { useBodyScrollLock } from '@hooks/useBodyScrollLock';
import { useDispatch, useSelector } from 'react-redux';
import { setBodyScrollState } from '@store/uiSlice';

interface IProps {
    isVisible: boolean;
	onClose?: () => void;
    appearance?: 'default' | 'slide-bottom';
    customStyleBg?: any;
    customStyleBody?: any;
    children: React.ReactNode;
}

const ModalBase: React.FC<IProps> = ({
    isVisible,
    onClose,
    appearance = 'default',
    children,
    customStyleBg,
    customStyleBody,
}) => {
    const {blockBodyScroll, unBlockBodyScroll, resetBodyScroll} = useBodyScrollLock();
    const { isBodyScrollLocked, bodyScrollLockedBy } = useSelector((state: any) => state.ui);
    const dispatch = useDispatch();

    const transRef = useSpringRef();
    const transitions = useTransition(isVisible ? [1] : [], {
        ref: transRef,
		from: { backdropFilter: 'blur(0px) saturate(100%) brightness(100%)', webkitBackdropFilter: 'blur(0px) saturate(100%) brightness(100%)' },
		enter: { backdropFilter: 'blur(4px) saturate(10%) brightness(30%)', webkitBackdropFilter: 'blur(4px) saturate(10%) brightness(30%)' },
		leave: { backdropFilter: 'blur(0px) saturate(100%) brightness(100%)', webkitBackdropFilter: 'blur(0px) saturate(100%) brightness(100%)' },
        // config: config.default, // default = { tension: 170, friction: 26 }
        // config: config.stiff, // stiff = { tension: 210, friction: 20 }
        config: {
            tension: 220,
            friction: 24
        },
	});
    const springDefaultRef = useSpringRef();
    const springDefault = useSpring({
        ref: springDefaultRef,
        from: {
            // transform: 'scale(0.8, 0.8)',
            scale: 0.5,
            opacity: '0',
        },
        to: {
            // transform: isVisible ? 'scale(1, 1)' : 'scale(0.8, 0.8)',
            scale: isVisible ? 1 : 0.5,
            opacity: isVisible ? '1' : '0',
        },
        config: config.stiff, // stiff = { tension: 210, friction: 20 }
        // config: {
        //     tension: 200,
        //     friction: 20
        // },
    });
    const springSlideBottomRef = useSpringRef();
    const springSlideBottom = useSpring({
        ref: springSlideBottomRef,
        from: {
            transform: 'translate(0%, 100%)',
        },
        to: {
            transform: isVisible ? 'translate(0%, 0%)' : 'translate(0%, 100%)',
        },
        config: {
            tension: 200,
            friction: 24
        },
    });

    const animationModalBody = (appearance === 'slide-bottom') ? springSlideBottom : springDefault;
    const springRef = (appearance === 'slide-bottom') ? springSlideBottomRef : springDefaultRef;

    useChain(isVisible ? [transRef, springRef] : [springRef, transRef], [0, 0]);

    useEffect(() => {
		if (isVisible) {
            if (!isBodyScrollLocked) {
                blockBodyScroll();
                dispatch(setBodyScrollState({locked: true, lockedBy: 'ModalBase'}));
            }
        } else {
            if (bodyScrollLockedBy === 'ModalBase') {
                unBlockBodyScroll();
                dispatch(setBodyScrollState({locked: false, lockedBy: ''}));
            }
        } // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [isVisible]);

	useEffect(() => {
        return () => {
            resetBodyScroll();
            dispatch(setBodyScrollState({locked: false, lockedBy: ''}));
        } // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const onBackgroundClick = (event: React.MouseEvent<HTMLElement>) => {
        event.preventDefault();
        if (event.target === event.currentTarget) {
            onClose && onClose();
        }
    };
    
    return (
        transitions((transitionStyle, data) => (
            <animated.div
                style={{
                    ...transitionStyle,
                    ...customStyleBg,
                }}
                className={cn(
                    styles.modalBaseBg,
                    (appearance === 'default') && styles.modalBaseBgDefault,
                    (appearance === 'slide-bottom') && styles.modalBaseBgSlideBottom,
                )}
                // onClick={onBackgroundClick} // bug on mobile
                onMouseUp={onBackgroundClick}
            >
                <animated.div
                    className={cn(
                        styles.modalBase,
                        (appearance === 'default') && styles.modalBaseDefault,
                        (appearance === 'slide-bottom') && styles.modalBaseSlideBottom,
                    )}
                    style={{
                        ...animationModalBody,
                        ...customStyleBody,
                    }}
                >
                    {children}
                </animated.div>
            </animated.div>
        ))
    );
};

export default ModalBase;
