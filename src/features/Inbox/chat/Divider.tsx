import dayjs from 'dayjs';

function Divider({ status, timestamp }: { status: string; timestamp: string }) {
  const style = 'relative top-[10px] bg-white px-3 font-medium';
  const formatDate = dayjs(timestamp).format('MMMM D, YYYY');

  if (status === 'unread') return <p id="unread" className={style}>New Message</p>;
  if (dayjs(timestamp).isToday())
    return <p className={style}>{`Today ${formatDate}`}</p>;
  return <p className={style}>{formatDate}</p>;
}

export default Divider;
