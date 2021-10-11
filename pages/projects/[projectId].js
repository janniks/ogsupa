import Editor from 'components/Editor';
import ProjectSwitcher from 'components/ProjectSwitcher';
import { getProjects, useForceUpdate } from 'lib/helpers';
import { useRouter } from 'next/dist/client/router';
import Head from 'next/head';
import { useEffect, useState } from 'react';

const ProjectPage = () => {
  const router = useRouter();
  const refreshProjectPage = useForceUpdate();
  const [projects, setProjects] = useState(null);

  const { projectId } = router.query;

  useEffect(async () => setProjects(await getProjects()), [projectId]);

  if (!projects) return null;

  const selectedProject = projects.find((p) => p.id == projectId);

  return (
    <>
      <Head>
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;700&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Source+Code+Pro:wght@700&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:wght@700&display=swap"
          rel="stylesheet"
        />
      </Head>
      {projects && (
        <>
          <ProjectSwitcher
            project={selectedProject}
            projects={projects}
            refreshProjectPage={refreshProjectPage}
          />
          <Editor projectData={selectedProject} />
        </>
      )}
    </>
  );
};

export default ProjectPage;
