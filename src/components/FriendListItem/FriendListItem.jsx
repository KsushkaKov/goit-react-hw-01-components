import PropTypes from 'prop-types';
import css from '../FriendList/FriendList.module.css';

export const FriendListItem = ({ friend: { isOnline, avatar, name } }) => {
  return (
    <li className={css.item}>
      <span className={isOnline ? css.green : css.red}></span>
      <img className={css.avatar} src={avatar} alt="User avatar" width="48" />
      <p className={css.name}>{name}</p>
    </li>
  );
};

FriendListItem.propTypes = {
  friend: PropTypes.shape({
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    isOnline: PropTypes.bool.isRequired,
  }).isRequired,
};
