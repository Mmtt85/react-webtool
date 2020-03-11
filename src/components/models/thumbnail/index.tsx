import * as React from 'react';

import NoImage from 'src/static/images/deprecated_naru_image.png';

import { Props } from './interface';
import { StyledThumbnail } from './style';

const Thumbnail = ({
  src,
  size,
  title,
  imageProps = {
    fluid: true,
    thumbnail: true,
    roundedCircle: false,
    rounded: false,
  },
}: Props) => {
  const {
    fluid = true,
    thumbnail = true,
    roundedCircle = false,
    rounded = false,
  } = imageProps;
  return (
    <StyledThumbnail
      src={src || NoImage}
      size={size}
      fluid={fluid}
      thumbnail={thumbnail}
      roundedCircle={roundedCircle}
      rounded={rounded}
      title={title}
    />
  );
};

export default Thumbnail;
