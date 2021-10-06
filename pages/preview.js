import Preview from 'components/preview';
import { useRouter } from 'next/dist/client/router';

const PreviewPage = ({}) => {
  const router = useRouter();
  return (
    <div id="preview" className="">
      <Preview {...router.query} />
    </div>
  );
};

export default PreviewPage;
