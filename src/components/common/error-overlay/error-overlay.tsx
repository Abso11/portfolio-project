import { ReactComponent as RefreshIcon } from 'assets/icons/refresh.svg';
import { useTranslation } from 'react-i18next';
import { Wrapper, Refresh, AutomaticRefreshInfo } from './error-overlay.styled';

type Props = {
  onClick: () => void;
};

const ErrorOverlay = ({ onClick }: Props): JSX.Element => {
  const { t } = useTranslation();
  return (
    <Wrapper data-testid='error-overlay'>
      <p>
        <b>{t('data-error')}</b>
      </p>
      <AutomaticRefreshInfo>{t('refresh')}</AutomaticRefreshInfo>
      <Refresh onClick={onClick}>
        <RefreshIcon /> {t('try-to-refresh')}
      </Refresh>
    </Wrapper>
  );
};

export default ErrorOverlay;
