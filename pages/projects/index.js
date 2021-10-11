import Loading from 'components/Loading';
import { createEmptyProject, getProjects, useHasMounted } from 'lib/helpers';
import { useRouter } from 'next/dist/client/router';
import { useEffect, useState } from 'react';

const ProjectPage = () => {
  const router = useRouter();
  const hasMounted = useHasMounted();
  const [session, setSession] = useState(null);

  // useEffect(() => {
  //   setSession(supabase.auth.session());

  //   supabase.auth.onAuthStateChange((_event, session) => {
  //     setSession(session);
  //   });
  // }, []);

  useEffect(async () => {
    const projects = await getProjects();
    if (projects?.length > 0) {
      router.push(`/projects/${projects[0].id}`);
      return;
    }
    const newProject = await createEmptyProject();
    router.push(`/projects/${newProject.id}`);
  }, []);

  if (!hasMounted) return null;

  return <Loading />;
};

export default ProjectPage;
