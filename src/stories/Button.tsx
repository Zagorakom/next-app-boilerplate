import { Button as NextUIButton, ButtonProps } from '@nextui-org/react';
// import { commonColors, semanticColors } from "@nextui-org/theme";

interface IButtonProps extends ButtonProps {
  children?: React.ReactNode;
  variant?: 'solid' | 'bordered' | 'light' | 'flat' | 'faded' | 'shadow' | 'ghost';
  color?: 'default' | 'primary' | 'secondary' | 'success' | 'warning' | 'danger';
  size?: 'sm' | 'md' | 'lg';
  radius?: 'none' | 'sm' | 'md' | 'lg' | 'full';
  startContent?: React.ReactNode;
  endContent?: React.ReactNode;
  spinner?: React.ReactNode;
  spinnerPlacement?: 'start' | 'end';
  fullWidth?: boolean;
  isIconOnly?: boolean;
  isDisabled?: boolean;
  isLoading?: boolean;
  disableRipple?: boolean;
  disableAnimation?: boolean;
}

export const Button = ({
  ...props
}: IButtonProps) => {
  // console.log({commonColors, semanticColors});
  return (
    <NextUIButton
      {...props}
    />
  );
};
