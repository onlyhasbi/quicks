import { Button, DialogTrigger } from 'react-aria-components';
import moreHorizontal from '../../../assets/icon/more_horizontal.svg';
import Popover from '../../../components/Popover';

function ChatPopup({ messageId }: { messageId: string }) {
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
            <Button
              onPress={() => console.log('Edit ', messageId)}
              className="text-primary-blue"
            >
              Edit
            </Button>
          </li>
          <li role="button" className="cursor-pointer px-3 py-1">
            <Button
              onPress={() => console.log('Delete ', messageId)}
              className="text-indicator-red"
            >
              Delete
            </Button>
          </li>
        </ul>
      </Popover>
    </DialogTrigger>
  );
}

export default ChatPopup;
