'use client';

import chevronDown from '../../assets/icon/chevron-down.svg';
import React, { useState } from 'react';
import Button from '../Button';
import TaskMorePopup from '../../features/Task/TaskMorePopup';
import clsx from 'clsx';

type Props = {
  title: string;
  children: React.ReactNode;
};

const Collapse = ({ title, children }: Props) => {
  const [isOpen, setIsOpen] = useState(false);
  const [checked, isChecked] = useState(false);

  const toggleCollapse = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="mb-4">
      <div className="border-b border-primary-midgray px-5 py-3 cursor-pointer">
        <button className="flex justify-between items-center w-full">
          <div>
            <input
              className="mr-2 outline-none ring-0 focus:ring-0 rounded-sm mb-1"
              type="checkbox"
              value=""
              id="title"
              checked={checked}
              onChange={(e) => isChecked(e.target.checked)}
            />
            <label
              className={clsx({
                'inline-block pl-[0.15rem] text-md hover:cursor-pointer font-semibold':
                  true,
                'line-through text-primary-midgray': checked,
                'text-primary-darkgray': !checked,
              })}
              htmlFor="title"
            >
              {title}
            </label>
          </div>
          <div className="flex gap-5">
            <p className="text-indicator-red mr-2">2 Days Left</p>
            <p className="text-primary-darkgray">12/06/2021</p>
            <Button variant="unstyled" onPress={toggleCollapse} type="button">
              <img
                src={chevronDown}
                className={clsx({
                  'block transition-transform delay-50 duration-300 ease-out':
                    true,
                  'rotate-180': isOpen,
                  'rotate-0': !isOpen,
                })}
              />
            </Button>
            <TaskMorePopup />
          </div>
        </button>
        <div
          className={clsx({
            'overflow-hidden': true,
            'mt-3 h-auto animate-in duration-300 slide-in-from-top-1 ease-out':
              isOpen,
            'h-0 grid-rows-none animate-out duration-150 slide-out-to-bottom-1 ease-in-out':
              !isOpen,
          })}
        >
          {children}
        </div>
      </div>
    </div>
  );
};

export default Collapse;
