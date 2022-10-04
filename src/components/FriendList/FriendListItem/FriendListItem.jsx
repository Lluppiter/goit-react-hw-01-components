import PropTypes from 'prop-types';
import { Card, Span, Image, Paragraph } from './FriendListItem.styled';

export const FriendsListItem = ({ friend: { avatar, name, isOnline } }) => {
  return (
    <Card>
      <Span isOnline={isOnline}></Span>
      <Image src={avatar} alt="User avatar" width="48" />
      <Paragraph>{name}</Paragraph>
    </Card>
  );
};

FriendsListItem.propTypes = {
  friend: PropTypes.shape({
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    isOnline: PropTypes.bool.isRequired,
  }),
};
