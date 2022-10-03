import PropTypes from 'prop-types';
import { FriendsListItem } from './FriendListItem/FriendListItem';

export const FriendsList = ({ friends }) => {
  return (
    <ul className="friend-list">
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
