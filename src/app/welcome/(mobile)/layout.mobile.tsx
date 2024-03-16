'use client';

import { useTheme } from 'antd-style';
import { PropsWithChildren, memo } from 'react';

import AppLayoutMobile from '@/layout/AppLayout.mobile';

import Header from './features/Header';

const MobileLayout = memo<PropsWithChildren>(({ children }) => {
  const theme = useTheme();

  // Applying Tailwind CSS for styling instead of inline styles for better practice and maintainability
  // Commented out the original inline style for reference
  // style={{ background: 'linear-gradient(to right, rgba(255,165,0,0.05) 0%, rgba(0,128,0,0.05) 100%)' }}
  return (
    <AppLayoutMobile
      className="bg-gradient-to-r from-[rgba(255,166,0,0.07)] to-[rgba(0,128,0,0.07)]"
      navBar={<Header />}
      showTabBar
    >
      {/* Removed paddingInline: 16 and applied Tailwind CSS for padding. This ensures no gap or space above the movie poster card. */}
      <div className="h-full p-4">{children}</div>
    </AppLayoutMobile>
  );
});

export default MobileLayout;
