import PropTypes from 'prop-types';
import { FriendsListItem } from './FriendListItem/FriendListItem';
import styles from '../FriendList/FriendList.module.css';

export const FriendsList = ({ friends }) => {
  return (
    <ul className={styles.friendList}>
      {friends.map(friend => (
        <FriendsListItem friend={friend} key={friend.id} />
      ))}
    </ul>
  );
};

FriendsList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    })
  ).isRequired,
};
