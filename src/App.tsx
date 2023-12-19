import clsx from 'clsx';
import { Button, DialogTrigger } from 'react-aria-components';
import thunderIcon from './assets/icon/thunder.svg';
import CircleIcon from './components/CircleIcon';
import Popover from './components/Popover';
import PopupMenu from './features/PopupMenu';
import Layout from './layout';
import { useEffect, useState } from 'react';
import { useMenu } from './context/useMenu';

function App() {
  const { isMenuItemEnter } = useMenu();
  const [selected, setSelected] = useState('');

  useEffect(() => {
    if (!isMenuItemEnter) setSelected('');
  }, [isMenuItemEnter]);

  return (
    <Layout>
      <div className="absolute bottom-[27px] right-[34px]">
        <DialogTrigger>
          <Button
            className={clsx({
              'outline-none ring-0': true,
              'block w-[4.25rem] h-[4.25rem]': selected,
            })}
          >
            <CircleIcon
              src={thunderIcon}
              bgSize={clsx({
                'w-[4.25rem] h-[4.25rem]': !selected,
                'animate-out fade-out ease-in duration-300 hidden': selected,
              })}
              bgColor="bg-primary-blue"
              iconSize="w-14 h-14"
            />
          </Button>
          <Popover placement="start" offset={26} direction="to-left">
            <PopupMenu
              selected={selected}
              onSelect={(menu: string) => setSelected(menu)}
            />
          </Popover>
        </DialogTrigger>
      </div>
    </Layout>
  );
}

export default App;
