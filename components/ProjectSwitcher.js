import { Listbox, Transition } from '@headlessui/react';
import { PlusIcon, SelectorIcon } from '@heroicons/react/solid';
import { useDebounce } from 'lib/helpers';
import { supabase } from 'lib/supabaseClient';
import Link from 'next/link';
import { Fragment, useEffect } from 'react';

const ProjectSwitcher = ({ project, projects }) => {
  const [name, setName] = useDebounce(project.name, 1000);

  useEffect(() => {
    updateProject(name);
  }, [name]);

  console.log('ProjectSwitcher <render>');
  async function updateProject() {
    try {
      const update = {
        name,
        updated_at: new Date(),
      };
      console.log('project', project);
      let { error } = await supabase
        .from('projects')
        .update(update, {
          returning: 'minimal',
        })
        .eq('id', project.id);
      if (error) {
        throw error;
      }
    } catch (error) {
      console.error(error.message);
    }
  }

  return (
    <div className="mb-10">
      <Listbox onChange={(pid) => console.log(`/projects/${pid}`)}>
        <div className="relative">
          <div className="flex justify-center">
            <div className="flex flex-wrap content-center">
              <Link href="/projects/new">
                <a
                  className="p-1.5 pl-3 text-sm bg-white rounded-lg shadow-md hover:border-gray-600 focus:border-gray-600"
                  title="Open new project"
                >
                  New Project
                  <PlusIcon
                    className="inline -mt-0.5 ml-1 w-4 h-4"
                    aria-hidden="true"
                  />
                </a>
              </Link>
            </div>
            <div className="block relative ml-2 pr-8 cursor-default sm:text-sm">
              <input
                name="title"
                type="text"
                className="bg-transparent w-32 md:w-40 font-medium border-transparent truncate cursor-text block p-1 pl-2 rounded-md border-2 hover:border-gray-600 focus:border-gray-600"
                // size={16}
                defaultValue={name}
                onChange={({ target }) => setName(target.value)}
              />
              {projects.length > 1 && (
                <Listbox.Button className="absolute inset-y-0 right-0 flex items-center px-2">
                  <SelectorIcon
                    className="w-5 h-5 text-gray-900"
                    aria-hidden="true"
                  />
                </Listbox.Button>
              )}
              <Transition
                as={Fragment}
                leave="transition ease-in duration-100"
                leaveFrom="opacity-100"
                leaveTo="opacity-0"
              >
                <Listbox.Options className="z-20 absolute w-full mt-1 overflow-auto bg-white rounded-md shadow-lg max-h-60 ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                  {projects
                    .filter((p) => p.id !== project.id)
                    .map((p, i) => (
                      <a key={i} href={`/projects/${p.id}`}>
                        <Listbox.Option
                          key={i}
                          value={p.id}
                          className="text-gray-900 cursor-pointer select-none relative px-3 my-2 hover:text-indigo-800"
                        >
                          <span className="block truncate">{p.name}</span>
                        </Listbox.Option>
                      </a>
                    ))}
                </Listbox.Options>
              </Transition>
            </div>
          </div>
        </div>
      </Listbox>
    </div>
  );
};

export default ProjectSwitcher;
