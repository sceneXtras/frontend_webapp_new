'use client';

import { GridShowcase } from '@lobehub/ui';
import { memo } from 'react';
import { Flexbox } from 'react-layout-kit';

import Banner from '@/app/welcome/features/Banner';

const Showcase = memo(() => (
  <Flexbox
    flex={1}
    justify={'center'}
    style={{ height: '100%', position: 'relative', width: '100%' }}
  >
    <GridShowcase>
      <Banner />
    </GridShowcase>
  </Flexbox>
));

export default Showcase;
