import { useParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import find from 'lodash.find';
import ContentWrapper from 'components/common/content-wrapper/content-wrapper';
import { timezones } from 'utils/timezones';
import { useFetchMovieDetails } from './movie-details.hooks';
import { SectionTitles, DetailsTile, StyledWrapper, MovieDetailsModal } from './elements';

const getTimezone = (value: string): string => {
  const foundTimezone = find(timezones, { value });
  return (foundTimezone && foundTimezone.key) || value;
};

export const MovieDetails = (): JSX.Element => {
  const { id } = useParams();
  const { t } = useTranslation();
  const { data, isError, isFetching, refetch } = useFetchMovieDetails(id as string);

  return (
    <ContentWrapper isError={isError} isLoading={isFetching} refetch={refetch}>
      <SectionTitles
        name={t('movie-details.overall-data')}
        additional={
          <MovieDetailsModal
            id={id as string}
            initialValues={{ budget: data?.budget as number, timezone: data?.timezone as string }}
          />
        }
      />
      <StyledWrapper>
        <DetailsTile name={t('movie-details.title')}>{data?.title}</DetailsTile>
        <DetailsTile name={t('movie-details.timezone')}>{getTimezone(data?.timezone as string)}</DetailsTile>
        <DetailsTile name={t('movie-details.id')}>{data?.id}</DetailsTile>
        <DetailsTile name={t('movie-details.budget')}>{data?.budget}</DetailsTile>
      </StyledWrapper>
      <SectionTitles name={t('movie-details.additional-information')} />
      <StyledWrapper>
        <DetailsTile name={t('movie-details.votes')}>{data?.votes}</DetailsTile>
        <DetailsTile name={t('movie-details.language')}>{data?.language}</DetailsTile>
        <DetailsTile name={t('movie-details.rating')}>{data?.rating}</DetailsTile>
        <DetailsTile name={t('movie-details.type')}>{data?.type}</DetailsTile>
      </StyledWrapper>
    </ContentWrapper>
  );
};
