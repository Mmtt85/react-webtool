import * as React from 'react';
import * as BS from 'react-bootstrap';

import Naru from 'src/static/images/naru.jpg';
import UserCard from 'src/components/models/user-card';
import { UserCardModel } from 'src/components/models/user-card/interface';
import Career from 'src/components/models/career';
import { CareerModel } from 'src/components/models/career/interface';

const userNaru = new UserCardModel({
  id: '0',
  name: '成炳鎬（ソンビョンホ、Seong Byeongho）',
  email: 'nzkonaru@gmail.com',
  image: Naru,
  etc: [
    'フルスタック開発者。',
    'プログラミング20年目、開発の仕事は7年目.',
    'In Japan, Tokyo.',
  ],
});

const careerWatchTek = new CareerModel({
  id: '0',
  title: 'asdf',
  startTime: new Date('2013-02'),
  endTime: new Date('2015-01'),
});

const Home = () => (
  <BS.Container>
    <BS.Row>
      <BS.Col xs={12} md={3}>
        <UserCard user={userNaru} />
      </BS.Col>
      <BS.Col xs={12} md={9}>
        <Career career={careerWatchTek} />
      </BS.Col>
    </BS.Row>
  </BS.Container>
);

export default Home;
