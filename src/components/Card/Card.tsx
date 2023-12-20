import { PropsWithChildren } from 'react';

function Card({ children }: PropsWithChildren) {
  return (
    <div className="bg-white pt-[18px] pl-[29px] pb-[42px] pr-[13px] w-[434px] h-[437px] rounded-md">
      {children}
    </div>
  );
}

export default Card;
