'use client';

import { Provider } from 'jotai';
import { DevTools } from 'jotai-devtools';
import 'jotai-devtools/styles.css';
import { useTheme } from 'next-themes';
import { env_isDEV, env_WITH_DEVTOOLS } from '@constants/envVars';

export const JotaiProvider = ({ children }: { children: React.ReactNode }) => {
    const { theme } = useTheme();
    const devToolsTheme = theme === 'light' ? 'light' : 'dark';
	return (
        <Provider>
            {env_isDEV && env_WITH_DEVTOOLS &&
                <DevTools theme={devToolsTheme} />
            }
            {children}
        </Provider>
    );
};
