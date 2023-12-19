import { PropsWithChildren } from 'react';

function Card({ children }: PropsWithChildren) {
  return (
    <div className="pt-[18px] pl-[29px] pb-[42px] pr-[13px] w-[734px] h-[737px] rounded-sm">
      {children}
    </div>
  );
}

export default Card;
