import * as React from 'react';
import * as BS from 'react-bootstrap';

import noPicture from 'src/static/images/no-picture.png';

import { RecMember } from 'src/models/records/member';

interface Props {
  member: RecMember;
}

export default function MemberCard({ member }: Props) {
  const { id, img, name, email, etc } = member;
  return (
    <BS.Card key={id}>
      <BS.Card.Img variant="top" src={img || noPicture} />
      <BS.Card.Body>
        <BS.Card.Title>{name}</BS.Card.Title>
        <BS.Card.Text>{email}</BS.Card.Text>
        <BS.Card.Text>{etc}</BS.Card.Text>
      </BS.Card.Body>
    </BS.Card>
  );
}
