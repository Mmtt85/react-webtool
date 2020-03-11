import * as React from 'react';
import * as BS from 'react-bootstrap';

import Thumbnail from 'src/components/models/thumbnail';

import { Props } from './interface';
import { StyledUserCard } from './style';

const UserCard = ({ user }: Props) => {
  const { id, image, name, email, etc } = user;
  return (
    <StyledUserCard key={id} bg="light">
      <BS.Card.Header>
        <Thumbnail src={image} size="lg" imageProps={{ roundedCircle: true }} />
      </BS.Card.Header>
      <BS.Card.Body>
        <BS.Card.Title>{name}</BS.Card.Title>
        <hr />
        <BS.Card.Subtitle>{email}</BS.Card.Subtitle>
        <hr />
        {etc.map(item => (
          <BS.Card.Text key={item}>{item}</BS.Card.Text>
        ))}
      </BS.Card.Body>
    </StyledUserCard>
  );
};

export default UserCard;
