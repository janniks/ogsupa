import { ClipboardIcon, PhotographIcon } from '@heroicons/react/solid';
import OGPreview from 'components/OGPreview';
import { SliderPicker, TwitterPicker } from 'components/react-color';
import Sparkles from 'components/Sparkles';
import { getProject } from 'lib/helpers';
import { supabase } from 'lib/supabaseClient';
import { useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import Loading from './Loading';

export default function Editor({ projectId, projectData }) {
  const [project, setProject] = useState(projectData);
  const [isSaving, setIsSaving] = useState(false);
  const [hasChanges, setHasChanges] = useState(false);

  const setProperty = (key, value) => {
    setProject((project) => ({ ...project, [key]: value }));
    setHasChanges(true);
  };

  // useEffect(async () => setProject(await getProject(projectId)), [projectId]);

  if (!project) return <Loading />;

  const previewProps = {
    title: project.title,
    description: project.description,
    background_color: project.background_color,
    font_style: project.font_style,
    left_meta: project.left_meta,
    right_meta: project.right_meta,
  };

  const previewQuery = new URLSearchParams(previewProps).toString();

  async function saveProject() {
    try {
      setIsSaving(true);
      const updates = {
        ...project,
        // id: projectId,
        // user_id: supabase.auth.user().id,
        // title,
        // description,
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
      setIsSaving(false);
      setHasChanges(false);
    }
  }

  return (
    <div className="flex flex-col space-y-6 lg:py-0 md:flex-row md:space-x-6 md:space-y-0 lg:space-x-10">
      {/* FORM COLUMN */}
      <div className="flex flex-col min-w-[288px]">
        <form
          className="rounded-xl p-3 pt-2 bg-white border-4 border-b-[6px] box-pink"
          style={{
            borderColor: '#7801fd',
            // borderStyle: 'dashed',
            // boxShadow: '0 0 0 4px white',
            // backgroundColor: '#f3b0a0',
          }}
        >
          <div className="space-y-6 gap-x-4">
            <div className="">
              <label
                htmlFor="title"
                className="block text-sm font-medium text-gray-700"
              >
                Title
              </label>
              <input
                name="title"
                type="text"
                className="input mt-1 shadow-sm block w-full border-gray-300 rounded-md"
                value={project.title}
                onChange={({ target }) => setProperty('title', target.value)}
              />
            </div>
            <div className="">
              <label
                htmlFor="description"
                className="block text-sm font-medium text-gray-700"
              >
                Description
              </label>
              <textarea
                name="description"
                rows={3}
                className="input mt-1 shadow-sm block w-full border border-gray-300 rounded-md"
                value={project.description}
                onChange={({ target }) =>
                  setProperty('description', target.value)
                }
              />
              <p className="mt-2 text-sm text-gray-500"></p>
            </div>
            <div className="">
              <label
                htmlFor="country"
                className="block text-sm font-medium text-gray-700"
              >
                Title Font
              </label>
              <div className="mt-1">
                <select
                  name="country"
                  autoComplete="country"
                  className="input shadow-sm block w-full border-gray-300 rounded-md"
                  value={project.font_style}
                  onChange={({ target }) =>
                    setProperty('font_style', target.value)
                  }
                >
                  <option value="font-serif">Serif</option>
                  <option value="font-sans">Sans</option>
                  <option value="font-mono">Mono</option>
                </select>
              </div>
            </div>
            <div className="">
              <label
                htmlFor="color"
                className="block text-sm font-medium text-gray-700"
              >
                Background Color
              </label>
              <div className="mt-1">
                <TwitterPicker
                  className="block m-auto mt-3"
                  colors={[
                    '#BF4F00',
                    '#BD8B00',
                    '#37CA8F',
                    '#009C63',
                    '#2EAAF9',
                    '#056EAA',
                    '#768B9D',
                    '#B00F39',
                    '#F13261',
                    '#7300B3',
                  ]}
                  color={project.background_color}
                  onChangeComplete={(color) =>
                    setProperty('background_color', color.hex)
                  }
                  triangle="hide"
                />
                <SliderPicker
                  className="ml-[9px] -mt-3 max-w-[224px]"
                  color={project.background_color}
                  onChangeComplete={({ hex }) =>
                    setProperty('background_color', hex)
                  }
                />
              </div>
            </div>
            <div className="grid gap-2 grid-cols-2">
              <div className="flex-1">
                <label
                  htmlFor="left"
                  className="block text-sm font-medium text-gray-700"
                >
                  Left Meta
                </label>
                <input
                  name="left"
                  type="text"
                  size={1}
                  className="input w-full mt-1 shadow-sm  border-gray-300 rounded-md"
                  value={project.left_meta}
                  onChange={(e) => setProperty('left_meta', e.target.value)}
                />
              </div>
              <div className="flex-1">
                <label
                  htmlFor="right"
                  className="text-right block text-sm font-medium text-gray-700"
                >
                  Right Meta
                </label>
                <input
                  name="right"
                  type="text"
                  size={1}
                  className="input w-full mt-1 shadow-sm  border-gray-300 rounded-md"
                  value={project.right_meta}
                  onChange={(e) => setProperty('right_meta', e.target.value)}
                />
              </div>
            </div>
          </div>
        </form>
        <div className="text-right">
          {hasChanges && (
            <p className="inline mr-2 text-sm text-gray-600 italic">
              Unsaved changes
            </p>
          )}
          <button
            className="inline mt-1 px-2 py-0.5 rounded-lg text-white bg-white box-pink-sm"
            style={{ backgroundColor: '#7801fd' }}
            onClick={saveProject}
          >
            {isSaving ? <Loading /> : 'Save'}
          </button>
        </div>
      </div>
      {/* PREVIEW COLUMN */}
      <div className="flex flex-1 flex-col">
        <div className="rounded-md overflow-hidden box-pink">
          <OGPreview {...previewProps} />
        </div>
        <div className="block w-[300px] md:w-[450px] lg:w-[600px] text-center mt-4 space-y-2">
          <div className="buttons">
            <a
              className="box-pink-sm -rotate-1 hover:rotate-1 inline-flex items-center px-2 py-1 my-2 border-2 border-transparent shadow-sm text-md leading-4 font-medium rounded-md text-white focus:outline-none"
              style={{ backgroundColor: '#f804ef' }}
              href={`/preview?${previewQuery}`}
              target="_blank"
            >
              <PhotographIcon
                className="-ml-0.5 mr-2 h-5 w-5"
                aria-hidden="true"
              />
              Open preview in new tab
            </a>
          </div>
          <button
            title="Copy to clipboard"
            className="box-pink-sm rotate-3 hover:rotate-1 m-auto w-1/2 min-w-[240px] truncate px-2 py-1 text-md rounded-md border-2 border-indigo-400 bg-indigo-100  hover:bg-indigo-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-700"
            style={{ backgroundColor: '#ffe228', borderColor: '#ff6152' }}
          >
            <ClipboardIcon
              className="inline  -mt-1 -ml-1.5 mr-1 h-5 w-5"
              style={{ color: '#ff6152' }}
              aria-hidden="true"
            />
            <span className="font-medium" style={{ color: '#dd3a2a' }}>
              Copy{' '}
            </span>
            <code
              className="inline"
              onClick={() => {
                navigator.clipboard.writeText(
                  `https://ogsupa.vercel.app/api/v1?${previewQuery}`
                );
                toast.success('Copied to clipboard');
              }}
            >
              ogsupa.com?{previewQuery}
            </code>
          </button>
        </div>
        <div className="block w-[300px] md:w-[450px] lg:w-[600px] text-center mt-8 p-8">
          <div className="relative p-4 px-3 rounded-lg border-4 bg-white">
            <div>
              <span className="rotate-12 text-4xl -top-4 -right-4 absolute">
                ℹ️
              </span>
            </div>
            <p className="">
              <span className="font-bold border-0 border-b-4">og:images</span>{' '}
              are used to show preview thumbnails in social media. They‘re very
              important, if you want to{' '}
              <span className="relative">
                <Sparkles>stand out</Sparkles>
              </span>{' '}
              in a sea of feeds. Too often we see an empty link preview and lose
              interest for it‘s content. Sadly, our brains have been trained to
              spot color in hoards of text. So, grab a
              <span className="underline-heart">&nbsp;color&nbsp;</span>that
              pops for a good start!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
