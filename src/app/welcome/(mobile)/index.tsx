'use client';

import { memo } from 'react';
import dynamic from 'next/dynamic';

import Showcase from './features/Showcase';
import Layout from './layout.mobile';

// Dynamically import AgentCard to ensure different styling is applied for the mobile version
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

const WelcomePage = memo(() => (
  <Layout>
    <Showcase />
    <MoviePosterCard items={exampleItems} renderItem={renderItem} />
  </Layout>
));

export default WelcomePage;
