import { type FC } from 'react';
import Image from 'next/image';

import EarthLoader from '@/assets/images/earth_loader.gif';

const GamePageLoading: FC = () => {
  return <Image src={EarthLoader.src} alt="Loading..." />;
};

export default GamePageLoading;
