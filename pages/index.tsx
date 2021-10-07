import { ClipboardIcon, PhotographIcon } from '@heroicons/react/solid';
import OGPreview from 'components/OGPreview';
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
    <div className="">
      <div className="background"></div>
      <div className="relative">
        <div className="flex flex-col items-center min-h-screen patterns">
          <Head>
            <title>ogsupa</title>
            <link rel="icon" href="/favicon.ico" />
          </Head>
          <Toaster />
          <div className="flex flex-row md:flex-row items-center justify-center w-full text-center">
            <div className="my-8 sm:my-12 md:my-20 lg:my-28 rounded-2xl">
              <img
                src="/ogsupa-MV-shadow.png"
                alt="OG supa logo"
                className="h-[96px] sm:h-[128px] md:h-[196px]"
              />
            </div>
          </div>
          <div className="flex flex-col space-y-6 lg:py-0 md:flex-row md:space-x-6 md:space-y-0 lg:space-x-10">
            {/* FORM COLUMN */}
            <form className="flex flex-col min-w-[288px]">
              <div
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
                      className="input mt-1 shadow-sm block w-full border border-gray-300 rounded-md"
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
                        className="input shadow-sm block w-full border-gray-300 rounded-md"
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
                        className="input w-full mt-1 shadow-sm  border-gray-300 rounded-md"
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
                        className="input w-full mt-1 shadow-sm  border-gray-300 rounded-md"
                        value={rightMeta}
                        onChange={({ target }) => setRightMeta(target.value)}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </form>
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
                    <span className="font-bold border-0 border-b-4">
                      og:images
                    </span>{' '}
                    are used to show preview thumbnails in social media. They‘re
                    very important, if you want to stand out in a sea of feeds.
                    Too often we see an empty link preview and lose interest for
                    it‘s content. Sadly, our brains have been trained to spot
                    color in hoards of text. So, grab a{' '}
                    <span className="underline-heart">color</span> that pops for
                    a good start!
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="flex-1"></div>
          <footer className="text-center w-full">
            <div className="inline-block m-4 mx-auto rounded-3xl box-pink">
              <div className="inline-block pl-6 rounded-3xl og-parent">
                <div className="inline-block p-4 bg-white rounded-3xl og ">
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
                  <span className="ml-1 hidden xl:inline font-extrabold">
                    xl
                  </span>
                </div>
              </div>
            </div>
          </footer>
        </div>
      </div>
    </div>
  );
}
