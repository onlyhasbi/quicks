import clsx from 'clsx';
import { Button, DialogTrigger } from 'react-aria-components';
import searchIcon from './assets/icon/search.svg';
import thunderIcon from './assets/icon/thunder.svg';
import CircleIcon from './components/CircleIcon';
import PopupMenu from './features/PopupMenu';
import Popover from './components/Popover';

function App() {
  return (
    <main className="grid grid-cols-[17.8rem_1fr] bg-[#333333] min-h-screen">
      <div className="border-r-[1px] border-[#F2F2F2]"></div>
      <div className="relative">
        <div className="h-[3.625rem] bg-[#4F4F4F] px-6 flex items-center">
          <div className="relative w-1/5">
            <label htmlFor="search">
              <img
                src={searchIcon}
                alt="search-icon"
                className="absolute top-0 bottom-0 left-0 m-auto block fill-[#fff] w-4 h-4"
              />
            </label>
            <input
              id="search"
              type="text"
              className="pl-7 py-1 rounded-sm border-0 ring-0 outline-none bg-transparent text-white"
            />
          </div>
        </div>
        <div className="absolute bottom-[27px] right-[34px]">
          <DialogTrigger>
            <Button
              className={clsx({
                'outline-none ring-0': true,
              })}
            >
              <CircleIcon
                src={thunderIcon}
                bgSize="w-[4.25rem] h-[4.25rem]"
                bgColor="bg-primary-blue"
                iconSize="w-14 h-14"
              />
            </Button>
            <Popover placement="start" offset={26} direction="to-left">
              <PopupMenu />
            </Popover>
          </DialogTrigger>
        </div>
      </div>
    </main>
  );
}

export default App;
