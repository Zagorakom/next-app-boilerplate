'use client';

import { useState } from 'react';
import { env_isBROWSER } from '@constants/envVars';

// Hook
export function useBodyScrollLock() {
    // const [scrollY, setScrollY] = useState('0px'); // unnecessary and unoptimized
    const [isScrollLocked, setIsScrollLocked] = useState(false);

    const blockBodyScroll: () => void = () => {
        if (env_isBROWSER()) {
            const body = document.body;
            body.style.top = `-${window.scrollY}px`;
            body.style.position = 'fixed';

            setIsScrollLocked(true);
        }
    };
    const unBlockBodyScroll: () => void = () => {
        if (env_isBROWSER()) {
            const body = document.body;
            const prevScrollY = body.style.top;
            body.style.position = '';
            body.style.top = '';
            // window.scrollTo(0, parseInt(prevScrollY || '0') * -1);
            window.scrollTo({
                left: 0,
                top: parseInt(prevScrollY || '0') * -1,
                behavior: 'instant',
            });

            setIsScrollLocked(false);
        }
    }
    const resetBodyScroll: () => void = () => {
        if (env_isBROWSER()) {
            const body = document.body;
            body.style.position = '';
            body.style.top = '';

            setIsScrollLocked(false);
        }
    }

    // useEffect(() => {
    //     if (env_isBROWSER()) {
    //         const handleScroll = () => {
    //             setScrollY(`${window.scrollY}px`);
    //             // console.log('handleScroll', `${window.scrollY}px`);
    //         }
    //         handleScroll();

    //         // Add event listener
    //         window.addEventListener('scroll', handleScroll);
    //         // Remove event listener on cleanup
    //         return () => window.removeEventListener("scroll", handleScroll);
    //     }
    // }, []); // unnecessary and unoptimized

    // return [blockBodyScroll, unBlockBodyScroll, isScrollLocked];
    return {
        blockBodyScroll,
        unBlockBodyScroll,
        resetBodyScroll,
        isScrollLocked,
    };
}
