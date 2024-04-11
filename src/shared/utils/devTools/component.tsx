'use client';
import { disableReactDevTools } from '@utils/devTools';
import { env_isPROD } from '@constants/envVars';
import { useEffect } from 'react';

export const DevToolsController: React.FC = () => {
    useEffect(() => {
        if (env_isPROD) {
            disableReactDevTools();
        }
    }, []);

    return (
        <div style={{display: 'none', width: '0px', height: '0px'}}>
			DevToolsController
		</div>
    );
};
