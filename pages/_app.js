// import 'tailwindcss/tailwind.css'
import MainLayout from 'components/layouts/MainLayout';
import '../styles/index.css';

function defaultGetLayout(page) {
  return <MainLayout>{page}</MainLayout>;
}

function MyApp({ Component, pageProps }) {
  const getLayout = Component.getLayout || defaultGetLayout;

  return getLayout(<Component {...pageProps} />);
}

export default MyApp;
