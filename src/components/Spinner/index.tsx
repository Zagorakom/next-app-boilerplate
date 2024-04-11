'use client';

import SpinnerBootstrap from 'react-bootstrap/Spinner';
import cn from 'classnames';
import styles from './Spinner.module.scss';
import { ESpinnerVariants } from '@typings/Spinner';

export type TSpinnerVariant = ESpinnerVariants;
export type TSpinnerAnimation = 'border' | 'grow';
export type TSpinnerSize = 'xl' | 'sm';

const Spinner = ({
	variant = ESpinnerVariants.Warning,
	animation = 'grow',
	size,
}: {
	variant?: TSpinnerVariant;
	animation?: TSpinnerAnimation;
	size?: TSpinnerSize;
}) => (
	<span className={cn(
		styles.spinner,
        size === 'xl' && styles.xl,
    )}>
		<SpinnerBootstrap
			animation={animation}
			variant={variant}
			size={(size === 'sm') ? size : undefined}
		/>
	</span>
);

export default Spinner;