import CircleIcon from '../../components/CircleIcon';
import discussIcon from '../../assets/icon/questions.svg';
import discussIconWhite from '../../assets/icon/questions-white.svg';
import clsx from 'clsx';
import { PopupMenuProps } from '../PopupMenu/PopupMenu';
import { Button, DialogTrigger } from 'react-aria-components';
import Popover from '../../components/Popover';
import InboxPopup from './InboxPopup';
import { useState } from 'react';

function InboxButton({ selected, onSelect }: Readonly<PopupMenuProps>) {
  const currentSelected = selected == 'inbox';
  const [isOpen, setIsOpen] = useState(false);

  return (
    <DialogTrigger
      onOpenChange={(isOpen) => {
        setIsOpen(isOpen);
      }}
    >
      <Button
        className={clsx({
          'relative border-none outline-none ring-0': true,
          'animate-in fade-in duration-250 order-last': currentSelected,
        })}
        onPress={() => {
          onSelect('inbox');
        }}
      >
        <h2
          className={clsx({
            'absolute -top-[26.88px] left-0 right-0 text-[#fff] font-semibold text-sm text-center':
              true,
            hidden: selected !== '',
          })}
        >
          Inbox
        </h2>
        <div
          className={clsx({
            'bg-primary-darkgray w-[60px] h-[60px] rounded-full':
              currentSelected,
          })}
        >
          <CircleIcon
            src={currentSelected && isOpen ? discussIconWhite : discussIcon}
            bgSize="w-[60px] h-[60px]"
            bgColor={clsx({
              'bg-primary-lightgray': !currentSelected,
              'bg-indicator-purple absolute -right-3 animate-in slide-in-from-left-1 duration-200':
                currentSelected && isOpen,
              'bg-primary-lightgray absolute right-0 animate-in slide-in-from-left-1 duration-200':
                currentSelected && !isOpen,
            })}
            iconSize="w-[26.67px] h-[26.67px]"
          />
        </div>
      </Button>
      <Popover placement="top" direction="to-top" offset={20}>
        <InboxPopup />
      </Popover>
    </DialogTrigger>
  );
}

export default InboxButton;
