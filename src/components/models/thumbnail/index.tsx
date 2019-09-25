import * as React from 'react';

import emptyPhoto from 'src/static/images/empty-photo.jpg';

import { Props } from './interface';
import { StyledThumbnail } from './style';

export default function Thumbnail({
  src,
  size,
  title,
  imageProps = {
    fluid: true,
    thumbnail: true,
    roundedCircle: false,
    rounded: false,
  },
}: Props) {
  const {
    fluid = true,
    thumbnail = true,
    roundedCircle = false,
    rounded = false,
  } = imageProps;
  return (
    <StyledThumbnail
      src={src || emptyPhoto}
      size={size}
      fluid={fluid}
      thumbnail={thumbnail}
      roundedCircle={roundedCircle}
      rounded={rounded}
      title={title}
    />
  );
}
