import { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Menu } from 'components/responsive-menu';
import { appRoutes } from 'urls';
import { mockedMovieList } from 'mocks/responses';

const { MenuItem } = Menu;

export const Navigation = (): JSX.Element => {
  const [isOpened, setIsOpened] = useState<boolean>(false);
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const { t } = useTranslation();

  return (
    <Menu isOpened={isOpened} setIsOpened={setIsOpened}>
      <MenuItem
        title={t('menu.movie-list')}
        onClick={() => {
          navigate(appRoutes.app.movies);
        }}
        isActive={pathname === '/'}
      />
      <MenuItem
        title={t('menu.movie-details')}
        onClick={() => {
          navigate(appRoutes.app.movieDetails.replace(':id', mockedMovieList[0]?.title_id as string));
          // navigate always to first existing movieId by default
        }}
        isActive={pathname.includes('/details')}
      />
    </Menu>
  );
};
