import { Chat } from '../../types/inbox';
import dayjs from 'dayjs';
import isToday from 'dayjs/plugin/isToday';
import ChatNavbar from './chat/ChatNavbar';
import ChatInput from './chat/ChatInput';
import ChatMessage from './chat/ChatMessage';
dayjs.extend(isToday);

type Props = {
  chat?: Chat;
  onBack: () => void;
};

const DetailInboxChat = ({ chat, onBack }: Props) => {
  if (!chat) return null;

  const isUnread = chat.message_history?.find(
    (message) => message.status == 'unread'
  );

  return (
    <div className="flex flex-col">
      <ChatNavbar
        title={chat.name}
        participants={chat.participants.length}
        onBack={onBack}
      />
      <div className="relative grow px-[20px] h-[280px] overflow-y-scroll scrollbar-thumb-rounded-full scrollbar-track-rounded-full scrollbar scrollbar-track-transparent scrollbar-thumb-[#BDBDBD] scroll-smooth">
        {chat.message_history.map((item) => (
          <ChatMessage
            key={item.id}
            item={{
              status: item.status,
              timestamp: item.timestamp,
              messages: item.messages,
            }}
            userId={chat.current_user_id}
          />
        ))}
      </div>
      <ChatInput status={Boolean(isUnread)} />
    </div>
  );
};

export default DetailInboxChat;
