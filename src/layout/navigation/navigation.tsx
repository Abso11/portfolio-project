import { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Menu } from 'components/responsive-menu';
import { appRoutes } from 'urls';
import { mockedMovieDetails } from 'mocks/responses';

const { MenuItem } = Menu;

export const Navigation = (): JSX.Element => {
  const [isOpened, setIsOpened] = useState<boolean>(false);
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const { t } = useTranslation();

  const handleClick = (path: string): void => {
    navigate(path);
    setIsOpened(false);
  };

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
        isActive={pathname.includes('/details')}
        subMenu={
          <>
            {mockedMovieDetails.map(({ id, title }) => (
              <MenuItem
                key={id}
                title={title}
                onClick={() => {
                  handleClick(appRoutes.app.movieDetails.replace(':id', id as string));
                }}
                isActive={pathname.includes(id)}
              />
            ))}
          </>
        }
      />
    </Menu>
  );
};
