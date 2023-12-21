import { Button } from 'react-aria-components';
import { Chat } from '../../types/inbox';
import arrowBack from '../../assets/icon/arrow_back.svg';
import cross from '../../assets/icon/close.svg';
import { useRef } from 'react';

type Props = {
  chat?: Chat;
  onBack: () => void;
};

const DetailInboxChat = ({ chat, onBack }: Props) => {
  const ref = useRef<HTMLInputElement>(null);
  if (!chat) return null;

  return (
    <div className="flex flex-col">
      <div className="flex-0 flex gap-4 items-center py-[15px] px-[20px] border-b border-b-[#BDBDBD]">
        <Button className="p-[4px]" onPress={() => onBack()}>
          <img src={arrowBack} alt="arrow-back-icon" />
        </Button>
        <div className="flex flex-col gap-1">
          <h3 className="text-primary-blue font-semibold text-xl leading-none line-clamp-1">
            {chat.name}
          </h3>
          <p className="text-sm text-[#333333]">
            {chat.participants.length} Participants
          </p>
        </div>
        <Button onPress={() => onBack()} className="ml-auto p-[10px]">
          <img src={cross} alt="close-icon" />
        </Button>
      </div>
      <div className="grow px-[20px] h-[280px] overflow-y-scroll scrollbar-thumb-rounded-full scrollbar-track-rounded-full scrollbar scrollbar-track-transparent scrollbar-thumb-[#BDBDBD]">all Lorem ipsum dolor sit, amet consectetur adipisicing elit. Molestiae quibusdam doloribus, recusandae nisi iure impedit numquam nulla architecto? Laudantium illo esse deserunt temporibus assumenda quam molestiae ullam voluptates pariatur dignissimos optio ea eligendi repellat, nemo debitis placeat excepturi nihil asperiores aut accusantium voluptatem facere natus! Quidem blanditiis ab quos eligendi ducimus, vero quam tempore illo exercitationem saepe vitae modi necessitatibus. Debitis fugit odit aliquam pariatur! Similique, expedita facere accusantium excepturi at distinctio nobis quaerat nam earum repudiandae dicta laudantium numquam sit nesciunt ullam doloremque itaque mollitia ea ratione, dolor pariatur recusandae! Porro, obcaecati deserunt sequi nesciunt quia quisquam consectetur saepe voluptatum labore quidem magnam mollitia ratione tempore incidunt veritatis recusandae odit eos perferendis! Laboriosam modi sed excepturi? Modi eveniet nobis blanditiis corrupti aliquid nam. Cumque harum cupiditate impedit hic esse nisi eveniet, quam, nam facilis, sequi explicabo cum inventore ratione? Aliquam obcaecati quos dolores perspiciatis, expedita quidem! Rerum, voluptas neque.</div>
      <div className="flex-0 flex gap-[13px] py-[20px] px-[20px]">
        <input
          ref={ref}
          type="text"
          className="border border-[#828282] rounded-md px-[16px] py-[8px] w-full placeholder-primary-black placeholder:text-primary-black text-primary-black focus:border-transparent focus:ring-blue-600"
          placeholder="Type a new message"
        />
        <Button
          className="bg-primary-blue px-[16px] py-[8px] rounded-md text-white outline-none focus:border-none"
          onPress={() => {
            if (ref.current) console.log(ref.current?.value);
          }}
        >
          Send
        </Button>
      </div>
    </div>
  );
};

export default DetailInboxChat;
