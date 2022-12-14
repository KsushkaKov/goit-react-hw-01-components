import PropTypes from 'prop-types';
import css from './FriendList.module.css';
import { FriendListItem } from '../FriendListItem/FriendListItem';

export const FriendList = ({ friend }) => {
  return (
    <ul className={css.friendList}>
      {friend.map(({ id, ...friend }) => (
        <FriendListItem friend={friend} key={id} />
      ))}
    </ul>
  );
};

FriendList.propTypes = {
  friend: PropTypes.arrayOf(
    PropTypes.shape({
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      isOnline: PropTypes.bool.isRequired,
      id: PropTypes.number.isRequired,
    }).isRequired
  ).isRequired,
};
