import Avatar from './Avatar';
import userBlackIcon from '../../assets/icon/user-black.svg';
import userWhiteIcon from '../../assets/icon/user-white.svg';

function AvatarGroup(): JSX.Element {
  return (
    <div className="flex">
      <Avatar
        src={userBlackIcon}
        className="bg-primary-lightgray"
        title="user-blue"
      />
      <Avatar
        src={userWhiteIcon}
        className="bg-primary-blue relative -left-4"
        title="user-blue"
      />
    </div>
  );
}

export default AvatarGroup;
