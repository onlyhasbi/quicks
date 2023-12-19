import { useState } from 'react';
import discussIcon from '../../assets/icon/questions.svg';
import readerIcon from '../../assets/icon/reader.svg';
import CircleIcon from '../../components/CircleIcon';
import clsx from 'clsx';

function PopupMenu() {
  const [selected, setSelected] = useState('');

  return (
    <div className="flex items-center gap-[1.625rem]">
      <button
        className="relative"
        onClick={() => {
          setSelected('task');
        }}
      >
        <h2
          className={clsx({
            'absolute -top-[26.88px] left-0 right-0 text-[#fff] font-semibold text-sm text-center': true,
            'hidden': selected !== '',
          })}
        >
          Task
        </h2>
        <CircleIcon
          src={readerIcon}
          bgSize="w-[60px] h-[60px]"
          bgColor="bg-primary-lightgray"
          iconSize="w-[26.67px] h-[26.67px]"
        />
      </button>
      <button
        className="relative"
        onClick={() => {
          setSelected('inbox');
        }}
      >
        <h2
          className={clsx({
            'absolute -top-[26.88px] left-0 right-0 text-[#fff] font-semibold text-sm text-center':true,
            'hidden': selected !== '',
          })}
        >
          Inbox
        </h2>
        <CircleIcon
          src={discussIcon}
          bgSize="w-[60px] h-[60px]"
          bgColor="bg-primary-lightgray"
          iconSize="w-[26.67px] h-[26.67px]"
        />
      </button>
    </div>
  );
}

export default PopupMenu;
