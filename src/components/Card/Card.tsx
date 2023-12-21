import clsx from 'clsx';
import { PropsWithChildren } from 'react';

function Card({
  children,
  className,
}: Readonly<PropsWithChildren & { className?: string }>) {
  return (
    <div
      className={clsx(['bg-white w-[734px] h-[437px] rounded-md', className])}
    >
      {children}
    </div>
  );
}

export default Card;
