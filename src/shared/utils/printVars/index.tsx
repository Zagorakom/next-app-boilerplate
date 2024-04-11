'use client';
import styles from './printVars.module.scss';
import { useMemo, useState, useEffect } from 'react';
import useTranslation from 'next-translate/useTranslation';
import { useResponsive } from '@hooks/useResponsive';
import { env_isPROD, env_isDEV, env_MODE, env_RUNTIME, env_API_ROUTE, env_isBROWSER } from '@constants/envVars';

type Var = 'lang' | 'responsive' | 'env';
interface IProps {
    vars?: Array<Var>;
}

const PrintVars: React.FC<IProps> = ({ vars = [] }) => {
    const { t, lang } = useTranslation('common');
    const { isDesktop, isTablet, isMobile } = useResponsive();
    const [isVisible, setIsVisible] = useState(false);
    
    useEffect(() => {
        // if (localStorage.getItem('printVarsStatus') === '1') {
        //     setIsVisible(true);
        // }
        setIsVisible(true);
    }, []);

    const varsBank = useMemo(() => {
        return {
            lang: () => {
                return (
                    <div>
                        <ul>
                            <li><b>Current LANG:</b> {lang}</li>
                        </ul>
                    </div>
                );
            },
            responsive: () => {
                return (
                    <div>
                        <ul>
                            <li><b>isDesktop:</b> {isDesktop ? 'true' : 'false'}</li>
                            <li><b>isTablet:</b> {isTablet ? 'true' : 'false'}</li>
                            <li><b>isMobile:</b> {isMobile ? 'true' : 'false'}</li>
                        </ul>
                    </div>
                );
            },
            env: () => {
                return (
                    <div>
                        <ul>
                            <li><b>env_isPROD:</b> {env_isPROD ? 'true' : 'false'}</li>
                            <li><b>env_isDEV:</b> {env_isDEV ? 'true' : 'false'}</li>
                            <li><b>env_API_ROUTE:</b> {env_API_ROUTE}</li>
                        </ul>
                    </div>
                );
            },
        } // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [lang, isDesktop, isTablet, isMobile, env_isPROD, env_isDEV, env_API_ROUTE]);

    return (
        isVisible ?
        <div>
            {vars.map((varName, index) => {
                return (
                    <pre className={styles.pre} key={index}>
                        {varsBank[varName]()}
                    </pre>
                );
            })}
        </div>
        :
        null
    );
};

export default PrintVars;
