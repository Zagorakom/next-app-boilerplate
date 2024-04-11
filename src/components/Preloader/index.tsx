'use client';
import styles from './Preloader.module.scss';
import cn from 'classnames';
import Spinner, { TSpinnerVariant, TSpinnerAnimation, TSpinnerSize } from '@components/Spinner';
import { ESpinnerVariants } from '@typings/Spinner';

interface IProps {
    size?: 'sm' | 'md' | 'xl';
    width?: string;
    height?: string;
    spinnerVariant?: TSpinnerVariant;
	spinnerAnimation?: TSpinnerAnimation;
	spinnerSize?: TSpinnerSize;
}

const Preloader: React.FC<IProps> = ({
    size = 'xl',
    width,
    height,
    spinnerVariant = ESpinnerVariants.Success,
    spinnerAnimation = 'border',
    spinnerSize = 'xl',
}) => {
    return (
        <div
            className={cn(
                styles.spinnerWrapper,
                (size === 'sm') && styles.spinnerWrapperSm
            )}
            style={{
                width,
                height,
            }}
        >
            <Spinner
                variant={spinnerVariant}
                size={spinnerSize}
                animation={spinnerAnimation}
            />
        </div>
    );
};

export default Preloader;