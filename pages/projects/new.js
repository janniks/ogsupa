import Loading from 'components/Loading';
import { createEmptyProject, useHasMounted } from 'lib/helpers';
import { useRouter } from 'next/dist/client/router';
import { useEffect } from 'react';

const NewProjectPage = () => {
  const router = useRouter();
  const hasMounted = useHasMounted();

  useEffect(async () => {
    const newProject = await createEmptyProject();
    router.push(`/projects/${newProject.id}`);
  }, []);

  if (!hasMounted) return null;

  return <Loading />;
};

export default NewProjectPage;
