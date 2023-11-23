import { type NextPage } from 'next';
import EmptyLayout from '@/ui/layouts/empty-layout/empty-layout';
import GameView from '@/features/game/game-view';

const GamePage: NextPage = () => {
  return (
    <EmptyLayout>
      <GameView />
    </EmptyLayout>
  );
};

export default GamePage;
