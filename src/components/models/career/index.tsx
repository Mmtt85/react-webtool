import React from 'react';

import { Props } from './interface';

const Career = ({ career }: Props) => {
  console.log(career);
  return <div>{JSON.stringify(career)}</div>;
};

export default Career;
