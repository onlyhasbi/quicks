import { useRef, useState } from 'react';
import circleLoading from '../../../assets/icon/circle-loading.svg';
import Button from '../../../components/Button';

function ChatInput({ status }: { status: boolean }) {
  const ref = useRef<HTMLInputElement>(null);
  const [message, setMessage] = useState('');

  const statusToDisplay = (
    <Button type="button" variant="soft">
      <a href="#unread">New Message</a>
    </Button>
  );

  const messageToDisplay = (
    <div className="absolute p-3 text-sm w-[94.5%] rounded-md -top-9 left-0 right-0 mx-auto bg-sticker-50">
      <div className="flex items-center gap-2">
        <img
          className="inline w-4 h-4 animate-spin p-0"
          src={circleLoading}
          alt="circle-loading"
        />
        <p className="font-semibold">
          Please wait while we connect you with one of our team ...
        </p>
      </div>
    </div>
  );

  return (
    <div className="relative">
      {status && !message && statusToDisplay}
      {message && messageToDisplay}

      <form
        className="flex-0 flex gap-[13px] py-[20px] px-[20px]"
        onSubmit={() => setMessage(ref.current?.value || '')}
      >
        <input
          ref={ref}
          type="text"
          className="border border-[#828282] rounded-md px-[16px] py-[8px] w-full placeholder-primary-black placeholder:text-primary-black text-primary-black focus:border-transparent focus:ring-blue-600"
          placeholder="Type a new message"
        />
        <Button variant="solid" type="submit">
          Send
        </Button>
      </form>
    </div>
  );
}

export default ChatInput;
