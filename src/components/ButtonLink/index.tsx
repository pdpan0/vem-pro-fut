import React from 'react';
//Styles
import { Button } from './style';

type Props = {
  to: string,
  value: string
};

const ButtonLink: React.FC<Props> = ({ to, value}) => (
  <Button href={to}>{value}</Button>
);

export default ButtonLink;