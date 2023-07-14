import { t } from 'i18next';
import userEvent from '@testing-library/user-event';
import { render, screen, waitFor } from 'tests';
import { appRoutes } from 'urls';
import { mockedMovieList } from 'mocks/responses';
import { Navigation } from './navigation';

describe('Navigation', () => {
  beforeEach(() => {
    render(<Navigation />);
  });

  it(`Dashboard list menu item should redirect to ${appRoutes.app.movies}`, () => {
    const link = screen.getByRole('listitem', {
      name: t<string>('menu.dashboard-list')
    });
    userEvent.click(link as Element);

    expect(window.location.pathname).toBe(appRoutes.app.movieDetails);
  });

  it(`User details menu item should redirect to ${appRoutes.app.movieDetails}`, async () => {
    const link = screen.getByRole('listitem', {
      name: t<string>('menu.user-details')
    });
    userEvent.click(link as Element);

    await waitFor(() => {
      expect(window.location.pathname).toBe(
        appRoutes.app.movieDetails.replace(':id', mockedMovieList[0]?.title_id as string)
      );
    });
  });
});
