'use client';

import dynamic from 'next/dynamic';
import { memo } from 'react';
import { Flexbox } from 'react-layout-kit';

import DataImporter from '@/features/DataImporter';
import { useGlobalStore } from '@/store/global';
import { useSessionStore } from '@/store/session';

import Hero from './Hero';
import { useStyles } from './style';

// Dynamically import AgentSearchBar to avoid SSR for client-side only components
const AgentSearchBar = dynamic(() => import('../../../market/features/AgentSearchBar'), {
  ssr: false,
});

const Banner = memo<{ mobile?: boolean }>(({ mobile }) => {
  const { styles } = useStyles();
  const [switchSession] = useSessionStore((s) => [s.switchSession]);
  // Keeping _isMobile for potential future use, indicating it's currently unused but may be needed
  const [switchBackToChat, _isMobile] = useGlobalStore((s) => [s.switchBackToChat, s.isMobile]);

  return (
    <>
      <div className={styles.container}>
        <Hero mobile={mobile} width={mobile ? 640 : 1024} />
      </div>
      <Flexbox
        className={styles.buttonGroup}
        gap={16}
        horizontal={!mobile}
        justify={'center'}
        width={'100%'}
      >
        <AgentSearchBar />

        <DataImporter
          onFinishImport={() => {
            switchSession();
          }}
        >
          <Flexbox align={'center'} gap={4} horizontal justify={'center'}></Flexbox>
        </DataImporter>
      </Flexbox>
    </>
  );
});

export default Banner;
