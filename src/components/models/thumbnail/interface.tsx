import * as BS from 'react-bootstrap';

export interface Props {
  src: string;
  size?: 'sm' | 'lg';
  title?: string;
  imageProps?: BS.ImageProps;
}
