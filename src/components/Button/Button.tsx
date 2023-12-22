import clsx from 'clsx';
import React, { PropsWithChildren } from 'react';
import { ButtonProps, Button as ReactAriaButton } from 'react-aria-components';

type Variant = { solid: string; soft: string; unstyled: string };

function Button({
  children,
  variant = 'unstyled',
  ...rest
}: PropsWithChildren &
  ButtonProps &
  React.RefAttributes<HTMLButtonElement> & {
    variant: 'solid' | 'soft' | 'unstyled';
  }) {
  const style: Variant = {
    solid:
      'bg-primary-blue px-[16px] py-[8px] rounded-md text-white outline-none focus:border-none',
    soft: 'outline-none border-none ring-0 px-3 py-1 bg-sticker-50 text-primary-blue absolute rounded-md -top-7 left-0 right-0 mx-auto',
    unstyled: '',
  };

  return (
    <ReactAriaButton
      className={clsx([style[variant], rest.className])}
      {...rest}
    >
      {children}
    </ReactAriaButton>
  );
}

export default Button;
