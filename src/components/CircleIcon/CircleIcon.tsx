import clsx from 'clsx';

type IconProps = {
  src: string;
  bgSize?: string;
  bgColor?: string;
  iconSize?: string;
};

function CircleIcon({ src, bgSize, bgColor, iconSize }: IconProps) {
  const bgStyle = clsx([
    { 'flex justify-center items-center rounded-full cursor-pointer': true },
    bgSize,
    bgColor,
  ]);

  return (
    <div className={bgStyle}>
      <img src={src} alt="thunder-icon" className={iconSize} />
    </div>
  );
}

export default CircleIcon;
