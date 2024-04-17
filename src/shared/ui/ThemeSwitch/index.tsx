'use client';

import { SwitchProps, useSwitch } from '@nextui-org/switch';
import { useTheme } from 'next-themes';
import { useIsSSR } from '@react-aria/ssr';
import { VisuallyHidden } from '@react-aria/visually-hidden';
import { motion } from 'framer-motion';
import clsx from 'clsx';

import { SunFilledIcon, MoonFilledIcon } from '@ui/Icons';

export interface ThemeSwitchProps {
	className?: string;
	classNames?: SwitchProps['classNames'];
    iconSize?: number;
}

export const ThemeSwitch: React.FC<ThemeSwitchProps> = ({
	className,
	classNames,
    iconSize = 22,
}) => {
	const { theme, setTheme } = useTheme();
	const isSSR = useIsSSR();

	const onChange = () => {
		theme === 'light-wb' ? setTheme('dark-wb') : setTheme('light-wb');
	};

	const {
		Component,
		slots,
		isSelected,
		getBaseProps,
		getInputProps,
		getWrapperProps,
	} = useSwitch({
		isSelected: theme === 'light-wb' || isSSR,
		'aria-label': `Switch to ${
			theme === 'light-wb' || isSSR ? 'dark-wb' : 'light-wb'
		} mode`,
		onChange,
	});

	return (
		<Component
			{...getBaseProps({
				className: clsx(
					'px-px transition-opacity hover:opacity-80 cursor-pointer',
					className,
					classNames?.base,
				),
			})}
		>
			<VisuallyHidden>
				<input {...getInputProps()} />
			</VisuallyHidden>
			<div
				{...getWrapperProps()}
				className={slots.wrapper({
					class: clsx(
						[
							'w-auto h-auto',
							'bg-transparent',
							'rounded-lg',
							'flex items-center justify-center',
							'group-data-[selected=true]:bg-transparent',
							'!text-default-500',
							'pt-px',
							'px-0',
							'mx-0',
						],
						classNames?.wrapper,
					),
				})}
			>
				{!isSelected || isSSR ? (
                    <motion.div
                        animate={{ rotate: 180 }}
                        transition={{ type: 'spring' }}
                    >
                        <SunFilledIcon size={iconSize} className="text-warning-500" />
                    </motion.div>
				) : (
                    <motion.div
                        animate={{ rotate: 0 }}
                        transition={{ type: 'spring' }}
                    >
                        <MoonFilledIcon size={iconSize} className="text-primary-700" />
                    </motion.div>
				)}
			</div>
		</Component>
	);
};
