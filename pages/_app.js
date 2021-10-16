import MainLayout from 'components/layouts/MainLayout';
import PlausibleProvider from 'next-plausible';
import '../styles/index.css';

function defaultGetLayout(page) {
  return <MainLayout>{page}</MainLayout>;
}

function MyApp({ Component, pageProps }) {
  const getLayout = Component.getLayout || defaultGetLayout;

  return getLayout(
    <PlausibleProvider domain="ogsupa.com">
      <Component {...pageProps} />
    </PlausibleProvider>
  );
}

export default MyApp;
