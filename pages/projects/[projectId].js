import Editor from 'components/Editor';
import ProjectSwitcher from 'components/ProjectSwitcher';
import { getProjects, useForceUpdate } from 'lib/helpers';
import { useRouter } from 'next/dist/client/router';
import { useEffect, useState } from 'react';

const ProjectPage = () => {
  const router = useRouter();
  const refreshProjectPage = useForceUpdate();
  const [projects, setProjects] = useState(null);
  const { projectId } = router.query;

  useEffect(async () => setProjects(await getProjects()), []);

  if (!projects) return null;

  const selectedProject = projects.find((p) => p.id == projectId);

  return (
    <div>
      <ProjectSwitcher
        project={selectedProject}
        projects={projects}
        refreshProjectPage={refreshProjectPage}
      />
      <Editor projectData={selectedProject} />
    </div>
  );
};

export default ProjectPage;
