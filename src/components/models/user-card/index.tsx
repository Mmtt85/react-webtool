import * as React from 'react';
import * as BS from 'react-bootstrap';

import { Props } from './interface';
import { StyledUserCard } from './style';

import Thumbnail from '../thumbnail';

export default function UserCard({ user }: Props) {
  const { id, image, name, email, etc } = user;
  return (
    <StyledUserCard key={id}>
      <BS.Card.Body>
        <BS.Card.Title>
          <Thumbnail
            src={image}
            size="lg"
            imageProps={{ roundedCircle: true }}
          />
        </BS.Card.Title>
        <hr />
        <BS.Card.Title>{name}</BS.Card.Title>
        <BS.Card.Text>{email}</BS.Card.Text>
        <BS.Card.Text>{etc}</BS.Card.Text>
      </BS.Card.Body>
    </StyledUserCard>
  );
}
