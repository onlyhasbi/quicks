import clsx from 'clsx';
import { Button } from 'react-aria-components';
import { AvatarGroup, Avatar } from '../../components/Avatar';
import dayjs from 'dayjs';
import { Chat } from '../../types/inbox';

type Props = {
  chat: Chat[];
  onSelectId: (id: string) => void;
};

function MainInboxChat({ chat: items, onSelectId }: Props) {
  return items.map((item, index) => (
    <Button
      key={item.id}
      className={clsx({
        'w-full': true,
        'pt-[15px] pb-[32px]': index === 0,
        'pt-[23px] pb-[32px] border-t border-t-primary-midgray': index > 0,
      })}
      onPress={() => onSelectId(item.id)}
    >
      <div className="flex">
        <div className="w-[5rem] flex justify-center">
          {item.type === 'group' ? (
            <AvatarGroup />
          ) : (
            <Avatar className="bg-primary-blue" title={item.name} />
          )}
        </div>
        <div className="flex flex-col text-left w-full gap-[.1rem]">
          <span className="flex items-start gap-7">
            <h3 className="font-bold text-primary-blue text-lg leading-none">
              {item.name}
            </h3>
            <p
              className="text-primary-darkgray line-clamp-1"
              title={dayjs(item.last_active).format('DD/MM/YYYY HH:mm')}
            >
              {dayjs(item.last_active).format('DD/MM/YYYY HH:mm')}
            </p>
          </span>
          <div className="text-primary-darkgray">
            {item.message_history[0].messages[0].user.name && (
              <h4 className="font-semibold leading-none">
                {item.message_history[0].messages[0].user.name + ':' || ''}
              </h4>
            )}
            <p
              className="line-clamp-1"
              title={item.message_history[0].messages[0].text!}
            >
              {item.message_history[0].messages[0].text!}
            </p>
          </div>
        </div>
        {Boolean(
          item.message_history[0].messages.filter(
            (message) => message.status === 'unread'
          ).length
        ) && (
          <div className="flex justify-center items-center px-3">
            <span className="block w-2 h-2 bg-indicator-red rounded-full"></span>
          </div>
        )}
      </div>
    </Button>
  ));
}

export default MainInboxChat;
