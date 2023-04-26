import { useState } from 'react';
import { Menu } from 'components/responsive-menu';
import { useLocation, useNavigate } from 'react-router-dom';
import { appRoutes } from 'urls';

const { MenuItem } = Menu;

export const Navigation = (): JSX.Element => {
  const [isOpened, setIsOpened] = useState<boolean>(false);
  const navigate = useNavigate();
  const { pathname } = useLocation();

  return (
    <Menu isOpened={isOpened} setIsOpened={setIsOpened}>
      <MenuItem
        title={'Dashboard List'}
        onClick={() => {
          navigate(appRoutes.app.dashboard);
        }}
        isActive={pathname === '/'}
      />
      <MenuItem
        title={'User Details'}
        onClick={() => {
          navigate(appRoutes.app.dashboardDetails);
        }}
        isActive={pathname.includes('/details')}
      />
    </Menu>
  );
};
