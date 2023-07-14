import { ReactNode } from 'react';
import { StyledTile } from './details.tile.styled';

type Props = {
  name: string;
  children?: ReactNode;
};

export const DetailsTile = ({ name, children }: Props): JSX.Element => (
  <StyledTile>
    <dl>
      <dt>{name}</dt>
      <dd>{children}</dd>
    </dl>
  </StyledTile>
);
