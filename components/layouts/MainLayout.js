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
          </Head>
          <Toaster />
          <div className="flex flex-row md:flex-row items-center justify-center w-full text-center">
            <div className="my-8 sm:my-12 md:my-20 lg:my-28 rounded-2xl">
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
          <footer className="text-center w-full">
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
                </a>
                <div className="absolute top-0 right-1 text-xs font-extrabold text-gray-300">
                  <span className="sm:hidden md:hidden lg:hidden xl:hidden">
                    &bull;
                  </span>
                  <span className="hidden sm:inline md:hidden">sm</span>
                  <span className="hidden md:inline lg:hidden">md</span>
                  <span className="hidden lg:inline xl:hidden">lg</span>
                  <span className="hidden xl:inline">xl</span>
                </div>
              </div>
            </div>
          </footer>
        </div>
      </div>
    </div>
  );
};

export default MainLayout;
