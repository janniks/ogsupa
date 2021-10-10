import { Fragment, useEffect, useRef, useState } from 'react';
import { Listbox, Transition } from '@headlessui/react';
import { CheckIcon, PlusIcon, SelectorIcon } from '@heroicons/react/solid';
import { useDebounce } from 'lib/helpers';
import Link from 'next/link';
import { supabase } from 'lib/supabaseClient';
const people = [
  { name: 'Wade Cooper' },
  { name: 'Arlene Mccoy' },
  { name: 'Devon Webb' },
  { name: 'Tom Cook' },
  { name: 'Tanya Fox' },
  { name: 'Hellen Schmidt' },
];
const ProjectSwitcher = ({ project, projects }) => {
  const [name, setName] = useDebounce(project.name, 1000);
  const [selected, setSelected] = useState(project);

  useEffect(() => {
    updateProject(name);
  }, [name]);

  console.log('ProjectSwitcher <render>');
  async function updateProject() {
    try {
      // setIsSaving(true);
      const updates = {
        ...project,
        name,
        updated_at: new Date(),
      };
      let { error } = await supabase.from('projects').upsert(updates, {
        returning: 'minimal',
      });
      if (error) {
        throw error;
      }
    } catch (error) {
      console.error(error.message);
    } finally {
      // setIsSaving(false);
    }
  }

  return (
    <div className="mb-10">
      <div className="">
        {/* <div className="m-auto w-64"> */}
        <Listbox value={selected} onChange={setSelected}>
          <div className="relative">
            <div className="flex">
              <div className="relative py-2 pl-2 pr-10 text-left bg-white rounded-lg shadow-md cursor-default focus:outline-none focus-visible:ring-2 focus-visible:ring-opacity-75 focus-visible:ring-white focus-visible:ring-offset-orange-300 focus-visible:ring-offset-2 focus-visible:border-indigo-500 sm:text-sm">
                <input
                  name="title"
                  type="text"
                  className="truncate cursor-text block p-1 pl-2 rounded-md border-2 border-white hover:border-gray-600 focus:border-gray-600"
                  // value={name}
                  defaultValue={name}
                  onChange={({ target }) => setName(target.value)}
                />
                {projects.length > 1 && (
                  <Listbox.Button className="absolute inset-y-0 right-0 flex items-center px-2">
                    <SelectorIcon
                      className="w-5 h-5 text-gray-400"
                      aria-hidden="true"
                    />
                  </Listbox.Button>
                )}
              </div>
              <div className="flex flex-wrap content-center">
                <Link href="/projects/new">
                  <a
                    className="p-1.5 mx-2 bg-white rounded-lg shadow-md hover:border-gray-600 focus:border-gray-600"
                    title="Open new project"
                  >
                    <PlusIcon className="w-5 h-5" aria-hidden="true" />
                  </a>
                </Link>
              </div>
            </div>

            <Transition
              as={Fragment}
              leave="transition ease-in duration-100"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Listbox.Options className="absolute w-full py-1 mt-1 overflow-auto text-base bg-white rounded-md shadow-lg max-h-60 ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                {projects
                  .filter((p) => p.id !== project.id)
                  .map((p, i) => (
                    <Listbox.Option
                      key={i}
                      className={({ active }) =>
                        `${
                          active
                            ? 'text-amber-900 bg-amber-100'
                            : 'text-gray-900'
                        }
                            cursor-default select-none relative py-2 pl-10 pr-4`
                      }
                      value={p}
                    >
                      {({ selected, active }) => (
                        <>
                          <span
                            className={`${
                              selected ? 'font-medium' : 'font-normal'
                            } block truncate`}
                          >
                            {p.name}
                          </span>
                          {selected ? (
                            <span
                              className={`${
                                active ? 'text-amber-600' : 'text-amber-600'
                              }
                                  absolute inset-y-0 left-0 flex items-center pl-3`}
                            >
                              <CheckIcon
                                className="w-5 h-5"
                                aria-hidden="true"
                              />
                            </span>
                          ) : null}
                        </>
                      )}
                    </Listbox.Option>
                  ))}
              </Listbox.Options>
            </Transition>
          </div>
        </Listbox>
      </div>
    </div>
  );
};

export default ProjectSwitcher;
