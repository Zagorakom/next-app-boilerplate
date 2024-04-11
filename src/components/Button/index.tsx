import ButtonBS from 'react-bootstrap/Button';
import styles from './Button.module.scss';
import cn from 'classnames';
import { memo } from 'react';

interface IProps {
	variant?: 'primary' | 'success' | 'dark' | 'danger' | 'warning' | 'info' | 'secondary' | 'light' | 'link';
	isRounded?: boolean;
	isOutlined?: boolean;
	inModal?: 'confirm' | 'cancel';
	customVariant?: string; // TODO
	type?: 'button' | 'submit' | 'reset';
	text?: string | React.ReactNode;
	onClick?: any;
	disabled?: boolean;
	active?: boolean;
	href?: string;
	width?: string;
	height?: string;
	className?: string;
	style?: any;
}

const Button = memo(function Button({
	variant = 'primary',
	isRounded,
	isOutlined,
	inModal,
	type,
	className,
	style,
	customVariant,
	text = '',
	width,
	height,
	...props
}: IProps) {
	return (
		<ButtonBS
			variant={variant}
			type={type}
			className={cn(
				styles.btn,
				className,
				customVariant && styles[customVariant],
				isRounded && styles.rounded,
				isOutlined && styles.outlined,
				isOutlined && 'btn-outlined',
				(inModal === 'confirm') && 'btn-modal-confirm',
				(inModal === 'cancel') && 'btn-modal-cancel',
			)}
			style={{
				...style,
				width: width && width,
				height: height && height,
			}}
			{...props}
		>
			{text}
		</ButtonBS>
	);
});

export default Button;
