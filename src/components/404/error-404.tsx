import { t } from 'i18next';
import { useTranslation } from 'react-i18next';
import { appRoutes } from 'urls';
import { StyledLink, LinksContainer, ErrorCode, Container, Wrapper, Code404, Title } from './error-404.styled';

const links = [
  {
    name: t('menu.movie-list'),
    path: appRoutes.app.movies
  }
];

const Error404 = (): JSX.Element => {
  const { t } = useTranslation();

  return (
    <Wrapper>
      <Container>
        <Title>ERROR 404</Title>
        <strong>{t<string>('page-not-found')}</strong>
        <ErrorCode>
          <p>Error Code:</p>
          <Code404>404</Code404>
        </ErrorCode>
        <LinksContainer>
          <strong>{t<string>('helpful-links')}</strong>
          {links.map(({ name, path }) => (
            <ul key={name}>
              <StyledLink to={path}>{name}</StyledLink>
            </ul>
          ))}
        </LinksContainer>
      </Container>
    </Wrapper>
  );
};

export default Error404;
