import { t } from 'i18next';
import userEvent from '@testing-library/user-event';
import { render, screen, waitFor } from 'tests';
import { appRoutes } from 'urls';
import { mockedDashboardList } from 'mocks/responses';
import { Navigation } from './navigation';

describe('Navigation', () => {
  beforeEach(() => {
    render(<Navigation />);
  });

  it(`Dashboard list menu item should redirect to ${appRoutes.app.dashboard}`, () => {
    const link = screen.getByRole('listitem', {
      name: t<string>('menu.dashboard-list')
    });
    userEvent.click(link as Element);

    expect(window.location.pathname).toBe(appRoutes.app.dashboard);
  });

  it(`User details menu item should redirect to ${appRoutes.app.dashboardDetails}`, async () => {
    const link = screen.getByRole('listitem', {
      name: t<string>('menu.user-details')
    });
    userEvent.click(link as Element);

    await waitFor(() => {
      expect(window.location.pathname).toBe(
        appRoutes.app.dashboardDetails.replace(':id', mockedDashboardList[0]?.user_id as string)
      );
    });
  });
});
