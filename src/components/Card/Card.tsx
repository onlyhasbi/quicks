import { PropsWithChildren } from 'react';

function Card({ children }: Readonly<PropsWithChildren>) {
  return (
    <div className="bg-white pt-[20px] pb-[42px] px-[25px] w-[434px] h-[437px] rounded-md">
      {children}
    </div>
  );
}

export default Card;
