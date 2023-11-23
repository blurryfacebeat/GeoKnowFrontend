import { customRender, screen } from '@/utils/tests/test-utils';
import HomepageView from '@/features/homepage/homepage-view';

describe('HomepageView', () => {
  test('renders correctly', () => {
    customRender(<HomepageView />);

    const section = screen.getByRole('heading', {
      name: 'HomePage',
    });

    expect(section).toBeInTheDocument();
  });
});
