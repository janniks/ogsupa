import Head from 'next/head';
import Link from 'next/link';
import { useState } from 'react';
import {
  ClipboardCopyIcon,
  ClipboardIcon,
  MailIcon,
  PhotographIcon,
} from '@heroicons/react/solid';

import { TwitterPicker } from 'react-color';
import Preview from 'components/Preview';

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
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <Head>
        <title>ogsupa</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="flex flex-col items-center justify-center w-full flex-1 px-20 text-center">
        <h1 className="text-5xl font-bold">
          Welcome to <span className="text-red-900">ogsupa</span>
        </h1>
      </div>

      <div className="flex flex-1 flex-col py-2 lg:py-0 md:flex-row md:space-x-4 lg:space-x-10">
        {/* FORM */}
        <form className="flex-1">
          <div className="pt-8 pb-2">
            <h2 className="text-2xl font-bold text-gray-600">Configuration</h2>
          </div>
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
                  color={backgroundColor}
                  onChangeComplete={(color) => setBackgroundColor(color.hex)}
                  className="mt-3"
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
        </form>

        {/* PREVIEW */}
        <div className="flex flex-1 flex-col">
          <div className="pt-8 pb-2 md:mb-6 md:text-right">
            <h2 className="text-2xl font-bold text-gray-600">Preview</h2>
          </div>
          <div className="rounded-sm overflow-hidden">
            <Preview {...previewProps} />
          </div>

          <div className="block w-[300px] md:w-[450px] lg:w-[600px] text-center mt-4 space-y-2">
            <div className="buttons">
              <a
                className="inline-flex items-center px-2 py-1 border border-transparent shadow-sm text-sm leading-4 font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
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
              className="m-auto w-1/2 min-w-[240px] truncate px-2 py-1 text-sm rounded-md border border-indigo-400 bg-indigo-100  hover:bg-indigo-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-700"
            >
              <ClipboardIcon
                className="inline text-indigo-700 -mt-1 -ml-1.5 mr-1 h-5 w-5"
                aria-hidden="true"
              />
              <span className="font-medium text-indigo-800">Copy </span>
              <code className="inline">xxx?{previewQuery}</code>
            </button>
          </div>
        </div>
      </div>

      <footer className="flex items-center justify-center w-full h-16 border-t">
        <a
          className="flex items-center justify-center"
          href="https://twitter.com/jnnksbrt/"
          target="_blank"
          rel="noopener noreferrer"
        >
          🇦🇹 Powered by Schnitzel 🐮
        </a>
        <div>
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
  );
}
