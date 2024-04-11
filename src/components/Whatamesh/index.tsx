'use client';
import { useState, useEffect, useMemo } from 'react';
// import { Gradient } from '@utils/whatamesh';
import { Gradient } from 'whatamesh';
import styles from './Whatamesh.module.scss';

interface IProps {
    gradientColor1?: string;
    gradientColor2?: string;
    gradientColor3?: string;
    gradientColor4?: string;
    isDataTransitionIn?: boolean;
    isDarkenTop?: boolean;
}

const Whatamesh: React.FC<IProps> = ({
    // gradientColor1 = '#1F9EA3',
    // gradientColor2 = '#F8BD97',
    // gradientColor3 = '#9E5428',
    // gradientColor4 = '#3B0102',
    gradientColor1 = '#2d3e50',
    gradientColor2 = '#01c26e',
    gradientColor3 = '#e24c3f',
    gradientColor4 = '#f3c40f',
    isDataTransitionIn = true,
    isDarkenTop = false,
}) => {
    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        setIsMounted(true);
    }, []);

    useEffect(() => {
        if (isMounted) {
            // Create instance
            const gradient = new Gradient();

            // Call `initGradient` with the selector to canvas
            gradient?.initGradient('#gradient-canvas');
        }
    }, [isMounted]);

    const gradientVars = useMemo(() => {
        return {
            '--gradient-color-1': gradientColor1,
            '--gradient-color-2': gradientColor2,
            '--gradient-color-3': gradientColor3,
            '--gradient-color-4': gradientColor4,
        } as React.CSSProperties;
    }, [gradientColor1, gradientColor2, gradientColor3, gradientColor4]);

    return (
        <canvas
            id='gradient-canvas'
            className={styles.gradientCanvas}
            data-transition-in={isDataTransitionIn ? '' : null}
            data-js-darken-top={isDarkenTop ? '' : null}
            style={gradientVars}
        />
    );
};

export default Whatamesh;
