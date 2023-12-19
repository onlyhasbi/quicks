import CircleIcon from '../../components/CircleIcon';
import readerIcon from '../../assets/icon/reader.svg';
import readerIconWhite from '../../assets/icon/reader-white.svg';
import clsx from 'clsx';
import { PopupMenuProps } from '../PopupMenu/PopupMenu';

function InboxButton({ selected, onSelect }: PopupMenuProps) {
  const currentSelected = selected == 'inbox';

  return (
    <button
      className={clsx({ relative: true, 'order-0': currentSelected })}
      onClick={() => {
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
        Task
      </h2>
      <div
        className={clsx({
          'bg-primary-darkgray w-[60px] h-[60px] rounded-full': currentSelected,
        })}
      >
        <CircleIcon
          src={currentSelected ? readerIconWhite : readerIcon}
          bgSize="w-[60px] h-[60px]"
          bgColor={clsx({
            'bg-primary-lightgray': !currentSelected,
            'bg-indicator-orange absolute -right-3 animate-in slide-in-from-left-1 duration-200':
              currentSelected,
          })}
          iconSize="w-[26.67px] h-[26.67px]"
        />
      </div>
    </button>
  );
}

export default InboxButton;
