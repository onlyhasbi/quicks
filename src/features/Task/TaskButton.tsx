import clsx from 'clsx';
import CircleIcon from '../../components/CircleIcon';
import discussIcon from '../../assets/icon/questions.svg';
import discussIconWhite from '../../assets/icon/questions-white.svg';

function TaskButton({
  selected,
  onSelect,
}: {
  selected: string;
  onSelect: (s: string) => void;
}) {
  const currentSelected = selected == 'task';

  return (
    <button
      className={clsx({ relative: true, 'order-last': currentSelected })}
      onClick={() => {
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
        Inbox
      </h2>
      <div
        className={clsx({
          'bg-primary-darkgray w-[60px] h-[60px] rounded-full': currentSelected,
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
    </button>
  );
}

export default TaskButton;
