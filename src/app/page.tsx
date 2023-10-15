import { type NextPage } from 'next';
import MainLayout from '@/ui/layouts/MainLayout/MainLayout';
import HomepageView from '@/features/homepage/HomepageView';

const HomePage: NextPage = () => {
  return (
    <MainLayout>
      <HomepageView />
    </MainLayout>
  );
};

export default HomePage;
