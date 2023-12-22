import { Button, DialogTrigger } from 'react-aria-components';
import moreHorizontal from '../../../assets/icon/more_horizontal.svg';
import Popover from '../../../components/Popover';

function ChatPopup() {
  return (
    <DialogTrigger>
      <Button className="border-none outline-none ring-0 cursor-pointer mt-1">
        <img src={moreHorizontal} alt="more-horizontal" />
      </Button>
      <Popover placement="bottom" direction="to-bottom" className="w-[8rem]">
        <ul className="bg-white border border-[#BDBDBD] rounded-md w-[6rem]">
          <li
            role="button"
            className="cursor-pointer border-b px-3 py-1 border-b-[#BDBDBD]"
          >
            <span className="text-primary-blue">Edit</span>
          </li>
          <li role="button" className="cursor-pointer px-3 py-1">
            <span className="text-indicator-red">Delete</span>
          </li>
        </ul>
      </Popover>
    </DialogTrigger>
  );
}

export default ChatPopup;
