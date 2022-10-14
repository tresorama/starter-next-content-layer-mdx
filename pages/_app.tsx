
import '@/styles/globals-tailwind.css';
import '@/styles/globals-mdx.css';
import type { AppProps } from 'next/app';

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

export default MyApp;
