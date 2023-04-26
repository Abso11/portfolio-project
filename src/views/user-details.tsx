import { useParams } from 'react-router-dom';

export const UserDetails = (): JSX.Element => {
  const { id } = useParams();
  return <p>{id}</p>;
};
