import Preview from 'components/preview';
import { useRouter } from 'next/dist/client/router';

const PreviewPage = ({}) => {
  const router = useRouter();
  return <Preview {...router.query} />;
};

export default PreviewPage;
