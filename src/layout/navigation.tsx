import { useState } from 'react';
import { Menu } from 'components/responsive-menu';
import { useLocation, useNavigate } from 'react-router-dom';
import { appRoutes } from 'urls';
import { mockedDashboardList } from 'mocks/responses';
import { useTranslation } from 'react-i18next';

const { MenuItem } = Menu;

export const Navigation = (): JSX.Element => {
  const [isOpened, setIsOpened] = useState<boolean>(false);
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const { t } = useTranslation();

  return (
    <Menu isOpened={isOpened} setIsOpened={setIsOpened}>
      <MenuItem
        title={t('menu.dashboard-list')}
        onClick={() => {
          navigate(appRoutes.app.dashboard);
        }}
        isActive={pathname === '/'}
      />
      <MenuItem
        title={t('menu.user-details')}
        onClick={() => {
          navigate(appRoutes.app.dashboardDetails.replace(':id', mockedDashboardList[0]?.user_id as string));
          // navigate always to first existing userid by default
        }}
        isActive={pathname.includes('/details')}
      />
    </Menu>
  );
};
