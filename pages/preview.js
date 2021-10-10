import OGPreview from 'components/OGPreview';
import { useRouter } from 'next/dist/client/router';
import Head from 'next/head';
import HeadFonts from '../components/HeadFonts';

const PreviewPage = () => {
  const router = useRouter();

  // todo: query to short props

  return (
    <>
      <Head>
        <HeadFonts />
      </Head>
      <OGPreview {...router.query} />
    </>
  );
};

PreviewPage.getLayout = (page) => page;

export default PreviewPage;
