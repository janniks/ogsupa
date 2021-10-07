import OGPreview from 'components/OGPreview';
import { useRouter } from 'next/dist/client/router';
import Head from 'next/head';
import HeadFonts from '../components/HeadFonts';

const PreviewPage = () => {
  const router = useRouter();
  return (
    <>
      <Head>
        <HeadFonts />
      </Head>
      <OGPreview {...router.query} />
    </>
  );
};

export default PreviewPage;
