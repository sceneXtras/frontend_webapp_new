'use client';

import dynamic from 'next/dynamic';
import { memo, useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import 'src/styles/tailwind.css';

import Showcase from './features/Showcase';
import Layout from './layout.mobile';

// Dynamically import MoviePosterCard to ensure different styling is applied for the mobile version
const MoviePosterCard = dynamic(() => import('./features/MoviePosterCard'), {
  ssr: false,
});

// Example items and renderItem function for demonstration purposes
// In a real scenario, these should be replaced with actual data and rendering logic
const exampleItems = [
  { id: 1, name: 'Movie 1' },
  { id: 2, name: 'Movie 2' },
  { id: 3, name: 'Movie 3' },
  { id: 4, name: 'Movie 4' },
  { id: 5, name: 'Movie 5' },
  { id: 6, name: 'Movie 6' },
];

// Adding explicit type for the item parameter
interface Item {
  id: number;
  name: string;
}
const renderItem = (item: Item) => <div>{item.name}</div>;

const WelcomePage = memo(() => {
  const { t } = useTranslation('welcome');
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // This is a simplistic approach to determine if the device is mobile.
    // For a real application, consider using a more robust solution.
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener('resize', handleResize);
    handleResize();

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <Layout>
      <Showcase />
      <div className="flex flex-col items-start">
        {/* Dynamically added text based on device type, now using Tailwind CSS for styling */}
        <div className={`text-left ${isMobile ? 'text-lg' : 'text-xl'} font-bold`}>
          {t('slogan.title')}
        </div>
        <div className="text-left text-base">{t('slogan.desc1')}</div>
      </div>
      <MoviePosterCard items={exampleItems} renderItem={renderItem} />
    </Layout>
  );
});

export default WelcomePage;
