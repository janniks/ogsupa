import { ClipboardIcon, PhotographIcon } from '@heroicons/react/solid';
import Preview from 'components/OGPreview';
import { SliderPicker, TwitterPicker } from 'components/react-color';
import Head from 'next/head';
import { useState } from 'react';
import toast, { Toaster } from 'react-hot-toast';

export default function IndexPage() {
  const [title, setTitle] = useState('The Second Coming of the Search Engine');
  const [description, setDescription] = useState(
    'A brief esoteric deep dive into search engine origins and potential future paths.'
  );
  const [leftMeta, setLeftMeta] = useState('@janniks');
  const [rightMeta, setRightMeta] = useState('ogsupa.com');
  const [fontStyle, setFontStyle] = useState('font-serif');
  const [backgroundColor, setBackgroundColor] = useState('#445599');

  const previewProps = {
    title,
    description,
    backgroundColor,
    fontStyle,
    leftMeta,
    rightMeta,
  };

  const previewQuery = new URLSearchParams(previewProps).toString();

  return (
    <div className="bg-gradient-to-b from-gray-50 to-gray-100">
      <div className="flex flex-col items-center min-h-screen patterns">
        <Head>
          <title>ogsupa</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <Toaster />
        <div className="flex flex-row md:flex-row items-center justify-center w-full text-center">
          <div className="my-8 rounded-2xl ">
            <img
              src="/ogsupa-MIV-shadow.png"
              alt="OG supa logo"
              className="h-[256px]"
            />
          </div>
          {/* <div className="text-xl ml-6 text-left">
            <p className="font-bold my-2 text-3xl">
              Welcome to <span className="text-blue-900">og:supa!</span>
            </p>
            <p>Generate article og:images on the fly</p>
          </div> */}
        </div>
        <div className="mt-8 flex flex-col space-y-6 lg:py-0 md:flex-row md:space-x-6 lg:space-x-10">
          {/* FORM */}
          <form className="flex flex-col justify-center min-w-[288px]">
            <div
              className="rounded-lg p-5 pb bg-white border-4"
              style={{ borderColor: '#7801fd' }}
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
                    className="mt-1 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full border-gray-300 rounded-md"
                    value={title}
                    onChange={({ target }) => setTitle(target.value)}
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
                    className="mt-1 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full border border-gray-300 rounded-md"
                    value={description}
                    onChange={({ target }) => setDescription(target.value)}
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
                      className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full border-gray-300 rounded-md"
                      value={fontStyle}
                      onChange={({ target }) => setFontStyle(target.value)}
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
                      color={backgroundColor}
                      onChangeComplete={(color) =>
                        setBackgroundColor(color.hex)
                      }
                      triangle="hide"
                    />
                    <SliderPicker
                      className="ml-[9px] -mt-3 max-w-[224px]"
                      color={backgroundColor}
                      onChangeComplete={(color) =>
                        setBackgroundColor(color.hex)
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
                      className="w-full mt-1 shadow-sm focus:ring-indigo-500 focus:border-indigo-500  border-gray-300 rounded-md"
                      value={leftMeta}
                      onChange={({ target }) => setLeftMeta(target.value)}
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
                      className="w-full mt-1 shadow-sm focus:ring-indigo-500 focus:border-indigo-500  border-gray-300 rounded-md"
                      value={rightMeta}
                      onChange={({ target }) => setRightMeta(target.value)}
                    />
                  </div>
                </div>
              </div>
            </div>
          </form>
          {/* PREVIEW */}
          <div className="flex flex-1 flex-col justify-center">
            <div className="rounded-sm overflow-hidden">
              <Preview {...previewProps} />
            </div>
            <div className="block w-[300px] md:w-[450px] lg:w-[600px] text-center mt-4 space-y-2">
              <div className="buttons">
                <a
                  className="-rotate-1 hover:rotate-1 inline-flex items-center px-2 py-1 my-2 border-2 border-transparent shadow-sm text-md leading-4 font-medium rounded-md text-white focus:outline-none"
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
                className="rotate-3 hover:rotate-1 m-auto w-1/2 min-w-[240px] truncate px-2 py-1 text-md rounded-md border-2 border-indigo-400 bg-indigo-100  hover:bg-indigo-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-700"
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
          </div>
        </div>
        <div className="flex-1"></div>
        <footer className="text-center w-full">
          <div className="inline-block mx-auto p-4 m-4 rounded-3xl border-4 bg-white">
            <a
              className=""
              href="https://twitter.com/jnnksbrt/"
              target="_blank"
              rel="noopener noreferrer"
            >
              🇦🇹 Powered by Schnitzel 🐮
            </a>

            <span className="ml-1 sm:hidden md:hidden lg:hidden xl:hidden">
              default (&lt; 640px)
            </span>
            <span className="ml-1 hidden sm:inline md:hidden font-extrabold">
              sm
            </span>
            <span className="ml-1 hidden md:inline lg:hidden font-extrabold">
              md
            </span>
            <span className="ml-1 hidden lg:inline xl:hidden font-extrabold">
              lg
            </span>
            <span className="ml-1 hidden xl:inline font-extrabold">xl</span>
          </div>
        </footer>
      </div>
    </div>
  );
}
