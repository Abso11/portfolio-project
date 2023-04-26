import { useParams } from 'react-router-dom';
import find from 'lodash.find';
import ContentWrapper from 'components/common/content-wrapper';
import { timezones } from 'utils/timezones';
import { useFetchUserDetails } from './user-details.hooks';
import { SectionTitles, DetailsTile, StyledWrapper, UserDetailsModal } from './elements';

const getTimezone = (value: string): string => {
  const foundTimezone = find(timezones, { value });
  return (foundTimezone && foundTimezone.key) || value;
};

const UserDetails = (): JSX.Element => {
  const { id } = useParams();

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
        <DetailsTile name={'Name'}>{data?.name}</DetailsTile>
        <DetailsTile name={'Timezone'}>{getTimezone(data?.timezone as string)}</DetailsTile>
        <DetailsTile name={'User Id'}>{data?.id}</DetailsTile>
        <DetailsTile name={'Budget'}>{data?.budget}</DetailsTile>
      </StyledWrapper>
      <SectionTitles name={'Additional Information'} />
      <StyledWrapper>
        <DetailsTile name={'Phone'}>{data?.phone}</DetailsTile>
        <DetailsTile name={'Country'}>{data?.country}</DetailsTile>
        <DetailsTile name={'Age'}>{data?.age}</DetailsTile>
        <DetailsTile name={'Gender'}>{data?.gender}</DetailsTile>
      </StyledWrapper>
    </ContentWrapper>
  );
};

export default UserDetails;
