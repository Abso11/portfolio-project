import { Divider } from 'antd';
import { StyledTitles } from './section-titles.styles';

type Props = {
  name: string;
  additional?: JSX.Element | string;
};

export const SectionTitles = ({ name, additional }: Props): JSX.Element => (
  <>
    <StyledTitles>
      <p>{name}</p>
      <span>{additional}</span>
    </StyledTitles>
    <Divider />
  </>
);
