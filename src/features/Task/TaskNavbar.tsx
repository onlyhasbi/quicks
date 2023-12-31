import {
  ListBox,
  ListBoxItem,
  Select,
  SelectValue,
} from 'react-aria-components';
import chevronDown from '../../assets/icon/chevron-down.svg';
import Popover from '../../components/Popover';
import { useState } from 'react';
import clsx from 'clsx';
import Button from '../../components/Button';

function TaskNavbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="flex justify-between items-center py-4">
      <Select
        className="ml-[5rem]"
        placeholder="My Tasks"
        onOpenChange={() => setIsOpen(!isOpen)}
      >
        <Button
          variant="unstyled"
          className="flex items-center cursor-pointer rounded-md border border-primary-midgray bg-white bg-opacity-90 pressed:bg-opacity-100 transition py-2 px-4 text-base text-left leading-normal text-gray-700 focus:outline-none"
        >
          <SelectValue defaultValue="default" />
          <img
            src={chevronDown}
            alt="chevron-down"
            className={clsx({
              'ml-5 pt-1': true,
              'rotate-180 transition-transform duration-300 ease-out': isOpen,
              'rotate-0 transition-transform duration-300 ease-out': !isOpen,
            })}
          />
        </Button>
        <Popover
          direction="to-bottom"
          placement="bottom"
          className="animate-in fade-in duration-300"
        >
          <ListBox className="bg-white w-[12rem] outline-none border border-primary-midgray rounded-md">
            <ListBoxItem className="cursor-pointer outline-none px-3 py-2 border-b border-b-primary-midgray">
              Personal Errands
            </ListBoxItem>
            <ListBoxItem className="cursor-pointer outline-none px-3 py-2">
              Urgent To-do
            </ListBoxItem>
          </ListBox>
        </Popover>
      </Select>
      <Button variant="solid" onPress={() => console.log('new task')}>
        New Task
      </Button>
    </div>
  );
}

export default TaskNavbar;
