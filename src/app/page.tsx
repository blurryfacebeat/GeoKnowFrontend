import { type NextPage } from 'next';
import MainLayout from '@/ui/layouts/main-layout/main-layout';
import HomepageView from '@/features/homepage/homepage-view';

const HomePage: NextPage = () => {
  return (
    <MainLayout>
      <HomepageView />
    </MainLayout>
  );
};

export default HomePage;
