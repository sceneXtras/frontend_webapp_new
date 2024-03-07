// Removed unused imports based on lint errors
import type { AppProps } from 'next/app';
import React from 'react';
import 'src/styles/tail';

// Use type import for AppProps as it's only used for type checking

function MyApp({ Component, pageProps }: AppProps) {
  // Explicitly type the props to resolve 'any' type lint errors
  return <Component {...pageProps} />;
}

export default MyApp;
