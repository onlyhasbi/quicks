import clsx from 'clsx';

type Props = {
  src?: string;
  title: string;
  className?: string;
};

function Avatar({ src, className, title }: Props) {
  return (
    <div
      className={clsx([
        'w-[34px] h-[34px] rounded-full flex justify-center items-center overflow-hidden',
        className,
      ])}
    >
      {src ? (
        <img
          src={src}
          alt={`avatar-${title}`}
          className="block w-[12px] h-[12px]"
        />
      ) : (
        <h2 className="font-semibold text-white uppercase">{title[0]}</h2>
      )}
    </div>
  );
}

export default Avatar;
