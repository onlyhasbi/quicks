import clsx from 'clsx';
import CircleIcon from '../../components/CircleIcon';
import readerIcon from '../../assets/icon/reader.svg';
import readerIconWhite from '../../assets/icon/reader-white.svg';
import { Button, DialogTrigger } from 'react-aria-components';
import Popover from '../../components/Popover';
import TaskPopup from './TaskPopup';
import { useState } from 'react';

function TaskButton({
  selected,
  onSelect,
}: {
  selected: string;
  onSelect: (s: string) => void;
}) {
  const currentSelected = selected == 'task';
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
          'order-last': currentSelected,
        })}
        onPress={() => {
          onSelect('task');
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
            'bg-primary-darkgray w-[60px] h-[60px] rounded-full':
              currentSelected,
          })}
        >
          <CircleIcon
            src={currentSelected ? readerIconWhite : readerIcon}
            bgSize="w-[60px] h-[60px]"
            bgColor={clsx({
              'bg-primary-lightgray': !currentSelected,
              'bg-indicator-orange absolute -right-3 animate-in slide-in-from-left-1 duration-200':
                currentSelected && isOpen,
              'absolute right-0 animate-in slide-in-from-left-1 duration-200':
                currentSelected && !isOpen,
            })}
            iconSize="w-[26.67px] h-[26.67px]"
          />
        </div>
      </Button>
      <Popover placement="top" direction="to-top" offset={20}>
        <TaskPopup />
      </Popover>
    </DialogTrigger>
  );
}

export default TaskButton;
