'use client';

import { useTranslation } from 'react-i18next';
import 'src/styles/tailwind.css';

import FullscreenLoading from '@/components/FullscreenLoading';

const Loading = () => {
  const { t } = useTranslation('common');

  return <FullscreenLoading title={t('appInitializing')} />;
};

export default Loading;
