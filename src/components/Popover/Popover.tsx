import clsx from 'clsx';
import type { PopoverProps } from 'react-aria-components';
import { Popover as ReactPopover } from 'react-aria-components';
import { useMenu } from '../../context/useMenu';

function Popover({
  direction,
  ...rest
}: PopoverProps & { direction: 'to-left' | 'to-top' }) {
  const { setIsMenuItemEnter } = useMenu();
  return (
    <ReactPopover
      {...rest}
      className={({ isEntering, isExiting }) => {
        if (isEntering && direction === 'to-left') {
          setIsMenuItemEnter(true);
        }

        if (isExiting && direction === 'to-left') {
          setIsMenuItemEnter(false);
        }

        return clsx({
          'animate-in fade-in slide-in-from-right-1 ease-out duration-500':
            isEntering && direction === 'to-left',
          'animate-out fade-out slide-out-to-right-6 ease-in-out duration-250':
            isExiting && direction === 'to-left',
          'animate-in fade-in slide-in-from-bottom-1 ease-out duration-300':
            isEntering && direction === 'to-top',
          'animate-out fade-out slide-out-to-bottom-1 ease-in-out duration-150':
            isExiting && direction === 'to-top',
        });
      }}
    />
  );
}

export default Popover;
