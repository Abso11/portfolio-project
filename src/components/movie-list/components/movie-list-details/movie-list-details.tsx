import { useTranslation } from 'react-i18next';
import { DetailsWrapper, StyledMovieDetails } from './movie-list-details.styled';
import { MovieListDetailsProps } from './movie-list-details.types';

export const MovieListDetails = ({ details, poster, title }: MovieListDetailsProps): JSX.Element => {
  const { t } = useTranslation();

  return (
    <DetailsWrapper>
      <img src={poster} alt={title} loading='lazy' />
      <StyledMovieDetails>
        {Object.keys(details).map((detailKey) => (
          <div key={detailKey}>
            <p>{`${t(`movie-list.${detailKey}`)}: `}</p>
            <p>{`${details[detailKey]}`}</p>
          </div>
        ))}
      </StyledMovieDetails>
    </DetailsWrapper>
  );
};
