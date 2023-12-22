import { Message } from '../../../types/inbox';
import clsx from 'clsx';
import Divider from './Divider';
import ChatPopup from './ChatPopup';

type ChatMessageProps = {
  item: { status: string; timestamp: string; messages: Message[] };
  userId: string;
};

function ChatMessage({ item, userId }: ChatMessageProps) {
  return (
    <>
      <div className="flex justify-center border-b border-b-primary-midgray">
        <Divider status={item.status} timestamp={item.timestamp} />
      </div>
      <div className="flex flex-col gap-3 py-3">
        {item.messages.map((message, index) => (
          <div
            key={message.id}
            className={isEven(index) ? 'self-start' : 'self-end'}
          >
            <p
              className={clsx([
                'rounded-sm p-[.15rem] font-semibold',
                {
                  'w-fit ml-auto': !isEven(index),
                  'w-fit': isEven(index),
                },
                colors[index % 3].textColor,
              ])}
            >
              {message.user.id === userId ? 'You' : message.user.name}
            </p>
            <div className="flex items-start gap-3">
              <ChatPopup />
              <div
                className={clsx([
                  'rounded-md',
                  { 'order-first': isEven(index) },
                  colors[index % 3].bgColor,
                ])}
              >
                <p className="w-fit px-3 py-2 rounded-md text-primary-darkgray">
                  {message.text}
                  <span className="block text-sm mt-2">{message.time}</span>
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

type Colors = { bgColor: string; textColor: string };
const colors: Colors[] = [
  { bgColor: 'bg-chats-150', textColor: 'text-chats-200' },
  { bgColor: 'bg-chats-50', textColor: 'text-chats-100' },
  { bgColor: 'bg-chats-250', textColor: 'text-chats-300' },
];

const isEven = (value: number) => (value + 1) % 2 === 0;

export default ChatMessage;
