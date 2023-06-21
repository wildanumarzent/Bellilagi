import clsx from 'clsx';
import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  color: string;
  disabled?: boolean;
}

const Button = ({ color, children, className, disabled, ...props }: ButtonProps) => (
  <button
    className={clsx(className, {
      btn: true,
      [`btn-${color}`]: colors,
      disabled: disabled,
    })}
    {...props}>
    {children}
  </button>
);

const colors: any = {
  primary: 'primary',
  secondary: 'secondary',
  success: 'success',
  danger: 'danger',
  warning: 'warning',
  info: 'info',
  light: 'light',
  dark: 'dark',
};

export default Button;
