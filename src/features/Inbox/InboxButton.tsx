import CircleIcon from '../../components/CircleIcon';
import discussIcon from '../../assets/icon/questions.svg';
import discussIconWhite from '../../assets/icon/questions-white.svg';
import clsx from 'clsx';
import { PopupMenuProps } from '../PopupMenu/PopupMenu';
import { Button, DialogTrigger } from 'react-aria-components';
import Popover from '../../components/Popover';
import InboxPopup from './InboxPopup';

function InboxButton({ selected, onSelect }: PopupMenuProps) {
  const currentSelected = selected == 'inbox';

  return (
    <DialogTrigger>
      <Button
        className={clsx({
          relative: true,
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
            src={currentSelected ? discussIconWhite : discussIcon}
            bgSize="w-[60px] h-[60px]"
            bgColor={clsx({
              'bg-primary-lightgray': !currentSelected,
              'bg-indicator-purple absolute -right-3 animate-in slide-in-from-left-1 duration-200':
                currentSelected,
            })}
            iconSize="w-[26.67px] h-[26.67px]"
          />
        </div>
      </Button>
      <Popover placement="top" direction="to-top">
        <InboxPopup />
      </Popover>
    </DialogTrigger>
  );
}

export default InboxButton;
