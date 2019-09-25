import * as React from 'react';
import * as BS from 'react-bootstrap';

import Thumbnail from '../thumbnail';

import { Props } from './interface';
import { StyledMemberCard } from './style';

export default function MemberCard({ member }: Props) {
  const { id, image, name, email, etc } = member;
  return (
    <StyledMemberCard key={id}>
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
    </StyledMemberCard>
  );
}
