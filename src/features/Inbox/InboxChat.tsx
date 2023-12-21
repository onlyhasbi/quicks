import { Suspense, useState } from 'react';
import DetailInboxChat from './DetailInboxChat';
import Loading from './Loading';
import MainInboxChat from './MainInboxChat';
import Card from '../../components/Card';
import Search from './Search';
import { fake } from '../../model/fake';

function InboxChat() {
  const [idChat, setIdChat] = useState('');
  const selectedChat = fake?.find((item) => item.id == idChat);

  return (
    <Suspense fallback={<Loading />}>
      {idChat ? (
        <Card>
          <DetailInboxChat chat={selectedChat} onBack={() => setIdChat('')} />
        </Card>
      ) : (
        <Card className="pt-[24px] pb-[42px] px-[32px] flex flex-col gap-[11px]">
          <Search />
          <div className="h-[21rem] overflow-y-scroll scrollbar-thumb-rounded-full scrollbar-track-rounded-full scrollbar scrollbar-thumb-[#BDBDBD]">
            <MainInboxChat
              chat={fake}
              onSelectId={(id: string) => setIdChat(id)}
            />
          </div>
        </Card>
      )}
    </Suspense>
  );
}

export default InboxChat;
