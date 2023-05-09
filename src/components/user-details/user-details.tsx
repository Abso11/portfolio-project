import { useParams } from 'react-router-dom';
import find from 'lodash.find';
import ContentWrapper from 'components/common/content-wrapper';
import { timezones } from 'utils/timezones';
import { useTranslation } from 'react-i18next';
import { useFetchUserDetails } from './user-details.hooks';
import { SectionTitles, DetailsTile, StyledWrapper, UserDetailsModal } from './elements';

const getTimezone = (value: string): string => {
  const foundTimezone = find(timezones, { value });
  return (foundTimezone && foundTimezone.key) || value;
};

const UserDetails = (): JSX.Element => {
  const { id } = useParams();
  const { t } = useTranslation();
  const { data, isError, isFetching, refetch } = useFetchUserDetails(id as string);

  return (
    <ContentWrapper isError={isError} isLoading={isFetching} refetch={refetch}>
      <SectionTitles
        name={data?.name as string}
        additional={
          <UserDetailsModal
            id={id as string}
            initialValues={{ budget: data?.budget as number, timezone: data?.timezone as string }}
          />
        }
      />
      <StyledWrapper>
        <DetailsTile name={t('dashboard-details.name')}>{data?.name}</DetailsTile>
        <DetailsTile name={t('dashboard-details.timezone')}>{getTimezone(data?.timezone as string)}</DetailsTile>
        <DetailsTile name={t('dashboard-details.user-id')}>{data?.id}</DetailsTile>
        <DetailsTile name={t('dashboard-details.budget')}>{data?.budget}</DetailsTile>
      </StyledWrapper>
      <SectionTitles name={t('dashboard-details.additional-information')} />
      <StyledWrapper>
        <DetailsTile name={t('dashboard-details.phone')}>{data?.phone}</DetailsTile>
        <DetailsTile name={t('dashboard-details.country')}>{data?.country}</DetailsTile>
        <DetailsTile name={t('dashboard-details.age')}>{data?.age}</DetailsTile>
        <DetailsTile name={t('dashboard-details.gender')}>{data?.gender}</DetailsTile>
      </StyledWrapper>
    </ContentWrapper>
  );
};

export default UserDetails;
