'use client';

import { useEffect, useState } from 'react';
import { env_isBROWSER } from '@constants/envVars';

// Hook
export function useWindowSize() {
	// Initialize state with 0 width/height so server and client renders match
	const [windowSize, setWindowSize] = useState({
		width: 0,
		height: 0,
	});

	useEffect(() => {
		// only execute all the code below in client side
		if (env_isBROWSER()) {
			// Handler to call on window resize
			const handleResize = () => {
				// Set window width/height to state
				setWindowSize({
					width: window.innerWidth,
					height: window.innerHeight,
				});
			}

			// Call handler right away so state gets updated with initial window size
			handleResize();
			
			// Add event listener
			window.addEventListener("resize", handleResize);
			
			// Remove event listener on cleanup
			return () => window.removeEventListener("resize", handleResize);
		}
	}, []); // Empty array ensures that effect is only run on mount
	
	return windowSize;
}
