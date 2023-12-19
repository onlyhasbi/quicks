import clsx from 'clsx';
import InboxButton from '../InboxButton';
import TaskButton from '../TaskButton';

export type PopupMenuProps = {
  selected: string;
  onSelect: (menus: string) => void;
};

function PopupMenu({ selected, onSelect }: PopupMenuProps) {
  return (
    <div
      className={clsx({
        'flex items-center gap-[1.625rem]': true,
        'animate-in slide-in-from-left-1 duration-300 relative -right-24': Boolean(selected),
      })}
    >
      <InboxButton selected={selected} onSelect={onSelect} />
      <TaskButton selected={selected} onSelect={onSelect} />
    </div>
  );
}

export default PopupMenu;
