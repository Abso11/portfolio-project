import { FC } from 'react';
import { ReactComponent as RefreshIcon } from 'assets/icons/refresh.svg';
import { Wrapper, Refresh, AutomaticRefreshInfo } from './error-overlay.styled';

type Props = {
  onClick: () => void;
};

const ErrorOverlay: FC<Props> = ({ onClick }) => (
  <Wrapper data-testid='error-overlay'>
    <p>
      <b>{'Can`t show data'}</b>
    </p>
    <AutomaticRefreshInfo>{'Auto refresh'}</AutomaticRefreshInfo>
    <Refresh onClick={onClick}>
      <RefreshIcon /> {'Try to refresh'}
    </Refresh>
  </Wrapper>
);

export default ErrorOverlay;
