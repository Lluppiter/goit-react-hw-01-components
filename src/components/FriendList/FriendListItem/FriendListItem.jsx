import PropTypes from 'prop-types';

export const FriendsListItem = ({ friend: { avatar, name, isOnline } }) => {
  return (
    <li className="item">
      <span
        className={
          isOnline ? 'status status--online' : 'status status--offline'
        }
      ></span>
      <img className="avatar" src={avatar} alt="User avatar" width="48" />
      <p className="name">{name}</p>
    </li>
  );
};

FriendsListItem.propTypes = {
  friend: PropTypes.shape({
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    isOnline: PropTypes.bool.isRequired,
  }),
};
