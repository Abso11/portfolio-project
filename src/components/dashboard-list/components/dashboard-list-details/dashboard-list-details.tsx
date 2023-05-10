import { useTranslation } from 'react-i18next';
import { DetailsWrapper } from './dashboard-list-details.styled';
import { DashboardListDetailsProps } from './dashboard-list-details.types';

export const DashboardListDetails = ({ details }: DashboardListDetailsProps): JSX.Element => {
  const { t } = useTranslation();
  return (
    <DetailsWrapper>
      {Object.keys(details).map((detailKey) => (
        <div key={detailKey}>
          <span>{`${t(`dashboard-list.${detailKey}`)}: `}</span>
          <span>{`"${details[detailKey]}"`}</span>
        </div>
      ))}
    </DetailsWrapper>
  );
};
