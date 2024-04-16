'use client';

import { useEffect, useState } from 'react';
import { useMediaQuery } from 'react-responsive';
import { screen_DESKTOP, screen_TABLET, screen_MOBILE } from '@configs/responsive';

// Hook
export function useResponsive() {
	// Initialize state with defaults so server and client renders match
    const [isDesktop, setIsDesktop] = useState(false);
    const [isTablet, setIsTablet] = useState(false);
    const [isMobile, setIsMobile] = useState(false);

    const handleMediaQueryChangeDesktop = (matches: boolean) => {
        // matches will be true or false based on the value for the media query
        setIsDesktop(matches);
    }
    const handleMediaQueryChangeTablet = (matches: boolean) => {
        setIsTablet(matches);
    }
    const handleMediaQueryChangeMobile = (matches: boolean) => {
        setIsMobile(matches);
    }

    const isDesktopMQ = useMediaQuery(
        screen_DESKTOP,
        undefined,
        handleMediaQueryChangeDesktop,
    );
    const isTabletMQ = useMediaQuery(
        screen_TABLET,
        undefined,
        handleMediaQueryChangeTablet,
    );
    const isMobileMQ = useMediaQuery(
        screen_MOBILE,
        undefined,
        handleMediaQueryChangeMobile,
    );

    const isDesktopInit = useMediaQuery(screen_DESKTOP);
    const isTabletInit = useMediaQuery(screen_TABLET);
    const isMobileInit = useMediaQuery(screen_MOBILE);

	useEffect(() => {
		// Set init data to state
        setIsDesktop(isDesktopInit);
        setIsTablet(isTabletInit);
        setIsMobile(isMobileInit);
        // eslint-disable-next-line react-hooks/exhaustive-deps
	}, []); // Empty array ensures that effect is only run on mount
	
	return { isDesktop, isTablet, isMobile };
}
