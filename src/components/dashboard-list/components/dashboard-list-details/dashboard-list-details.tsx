import { useTranslation } from 'react-i18next';
import { DetailsWrapper, StyledMovieDetails } from './dashboard-list-details.styled';
import { DashboardListDetailsProps } from './dashboard-list-details.types';

export const DashboardListDetails = ({ details, poster, action }: DashboardListDetailsProps): JSX.Element => {
  const { t } = useTranslation();

  return (
    <DetailsWrapper>
      <img src={poster} alt={action} />
      <StyledMovieDetails>
        {Object.keys(details).map((detailKey) => (
          <div key={detailKey}>
            <p>{`${t(`dashboard-list.${detailKey}`)}: `}</p>
            <p>{`${details[detailKey]}`}</p>
          </div>
        ))}
      </StyledMovieDetails>
    </DetailsWrapper>
  );
};
