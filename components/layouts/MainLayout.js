import { StarIcon } from '@heroicons/react/solid';
import Head from 'next/head';
import { Toaster } from 'react-hot-toast';

const MainLayout = ({ children }) => {
  // todo: don't do this on every render
  const isSafari =
    typeof window !== 'undefined'
      ? /constructor/i.test(window.HTMLElement) ||
        (function (p) {
          return p.toString() === '[object SafariRemoteNotification]';
        })(
          !window['safari'] ||
            (typeof safari !== 'undefined' && safari.pushNotification)
        )
      : false;

  // const isSafari = false;

  return (
    <div className="">
      <div className="background"></div>
      <div className="relative">
        <div className="flex flex-col items-center min-h-screen patterns">
          <Head>
            <title>ogsupa</title>
            <link rel="icon" href="/favicon.ico" />
            <meta name="twitter:card" content="summary_large_image" />
            <meta
              property="og:image"
              content="https://ogsupa.com/ogimage.png"
            />
          </Head>
          <Toaster />
          <div className="flex flex-row md:flex-row items-center justify-center w-full text-center">
            <div className="mt-8 mb-8 sm:mt-12 md:mt-20 lg:mt-28 rounded-2xl">
              <a href="/">
                <img
                  src="/ogsupa-MV-shadow.png"
                  alt="OG supa logo"
                  className="h-[96px] sm:h-[128px] md:h-[196px]"
                />
              </a>
            </div>
          </div>
          {children}
          <div className="flex-1"></div>
          <footer className="text-center w-full my-10 mx-4">
            <div className="inline-block m-4 mx-auto rounded-3xl box-pink">
              <div className="inline-block pl-6 rounded-3xl og-parent">
                <a
                  className="relative inline-block p-4 bg-white rounded-3xl og font-medium"
                  href="https://twitter.com/jnnksbrt/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Built in <span className="relative top-[1px]">🇦🇹</span>&nbsp;
                  {!isSafari && <>&nbsp;</>}by{' '}
                  <span className="font-bold underline">@jnnksbrt</span> —
                  powered by <strong>Supabase ⚡️</strong>
                  <div className="absolute top-0 right-1 text-xs font-extrabold text-gray-200">
                    <span className="sm:hidden md:hidden lg:hidden xl:hidden">
                      &bull;
                    </span>
                    <span className="hidden sm:inline md:hidden">sm</span>
                    <span className="hidden md:inline lg:hidden">md</span>
                    <span className="hidden lg:inline xl:hidden">lg</span>
                    <span className="hidden xl:inline">xl</span>
                  </div>
                </a>
              </div>
            </div>
          </footer>
        </div>
        <div className="absolute top-0 right-4">
          <a
            href="https://github.com/janniks/ogsupa"
            target="_blank"
            className="mt-6 -mb-20 box-pink-sm -rotate-1 hover:rotate-1 font-bold inline-flex items-center px-2 py-1 my-2 border-2 border-transparent shadow-sm text-md leading-4 rounded-md text-white focus:outline-none bg-gray-900"
          >
            <StarIcon className="-ml-0.5 mr-1.5 h-5 w-5" aria-hidden="true" />
            GitHub
          </a>
        </div>
      </div>
    </div>
  );
};

export default MainLayout;
