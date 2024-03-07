'use client';

import { Icon } from '@lobehub/ui';
import { Button } from 'antd';
import { SendHorizonal } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { memo } from 'react';
import dynamic from 'next/dynamic';
import { useTranslation } from 'react-i18next';
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
  const { t } = useTranslation('welcome');
  const router = useRouter();
  const { styles } = useStyles();
  const [switchSession] = useSessionStore((s) => [s.switchSession]);
  const [switchBackToChat, isMobile] = useGlobalStore((s) => [s.switchBackToChat, s.isMobile]);

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
          <Flexbox align={'center'} gap={4} horizontal justify={'center'}>
          </Flexbox>
        </DataImporter>
      </Flexbox>
    </>
  );
});

export default Banner;
