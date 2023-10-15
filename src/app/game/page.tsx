import { type NextPage } from 'next';
import EmptyLayout from '@/ui/layouts/EmptyLayout/EmptyLayout';
import GameView from '@/features/game/GameView';

const GamePage: NextPage = () => {
  return (
    <EmptyLayout>
      <GameView />
    </EmptyLayout>
  );
};

export default GamePage;
