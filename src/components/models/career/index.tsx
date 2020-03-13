import React from 'react';

import { Props } from './interface';
import { StyledCareer } from './style';

const Career = ({ career }: Props) => (
  <StyledCareer>{JSON.stringify(career)}</StyledCareer>
);

export default Career;
