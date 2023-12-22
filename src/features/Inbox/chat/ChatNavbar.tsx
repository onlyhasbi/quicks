import { Button } from 'react-aria-components';
import arrowBack from '../../../assets/icon/arrow_back.svg';
import cross from '../../../assets/icon/close.svg';

type ChatNavbarProps = {
  title: string;
  participants: number;
  onBack: () => void;
};

function ChatNavbar({ title, participants, onBack }: ChatNavbarProps) {
  return (
    <div className="flex-0 flex gap-4 items-center py-[15px] px-[20px] border-b border-b-[#BDBDBD]">
      <Button className="p-[4px]" onPress={() => onBack()}>
        <img src={arrowBack} alt="arrow-back-icon" />
      </Button>
      <div className="flex flex-col gap-1">
        <h3 className="text-primary-blue font-semibold text-xl leading-none line-clamp-1">
          {title}
        </h3>
        <p className="text-sm text-[#333333]">{participants} Participants</p>
      </div>
      <Button onPress={() => onBack()} className="ml-auto p-[10px]">
        <img src={cross} alt="close-icon" />
      </Button>
    </div>
  );
}

export default ChatNavbar;
