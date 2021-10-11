import { PencilAltIcon, StarIcon } from '@heroicons/react/solid';
import Sparkles from 'components/Sparkles';
import Start from 'components/Start';
import Auth from 'components/supabase/Auth';
import { useHasMounted } from 'lib/helpers';
import { supabase } from 'lib/supabaseClient';
import Link from 'next/link';
import { useEffect, useState } from 'react';

export default function IndexPage() {
  const hasMounted = useHasMounted();
  const [isLoading, setIsLoading] = useState(true);
  const [session, setSession] = useState(null);

  useEffect(() => {
    setSession(supabase.auth.session());

    supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session);
    });
  }, []);

  if (!hasMounted) return null;
  if (isLoading && session) setIsLoading(false);

  return (
    <>
      <p className="mb-8 text-2xl font-bold leading-6 border-0 border-b-4 border-indigo-600 text-gray-900">
        Generate og:images for free!
      </p>
      <div className="w-full max-w-xl">
        <div
          className="relative py-1 pb-1.5 px-3 font-medium text-md bg-white rounded-xl p-3 pt-2 border-4 border-b-[6px] box-pink"
          style={{
            // backgroundColor: '#ffe228',
            borderColor: '#7801fd',
            color: '#7e0079',
          }}
        >
          {/* <p className="text-2xl font-bold">Welcome to og:supa!</p> */}
          <span className="rotate-12 text-5xl -top-4 -right-4 absolute cursor-default">
            ⚡️
          </span>
          <p style={{ color: '#5800ba' }}>
            <span className="relative inline-block text-2xl top-1">🎉</span>
            &nbsp;&nbsp;Empty link previews are a thing of the past!
          </p>
          <p style={{ color: '#bc00b5' }}>
            <span className="relative inline-block text-2xl top-1">🎨</span>
            &nbsp;&nbsp;Generate customizable og:images in realtime
          </p>
          <p className="mb-2" style={{ color: '#d67963' }}>
            <span className="relative inline-block text-2xl top-1">🚀</span>
            &nbsp;&nbsp;Save many different project styles for editing
          </p>
        </div>
      </div>
      <Start session={session} text="Go to editor!" />
      <div className="w-full max-w-4xl text-center mt-8 p-16">
        <img
          src="/no-og.png"
          alt="Screenshot of Twitter link without preview"
        />

        <hr className="mt-28 mb-2" />
        <p className="inline-block text-2xl font-bold leading-6 border-0 border-b-4 border-indigo-600 text-gray-900">
          meet og:supa
        </p>
        <div className="m-auto max-w-lg mt-4">
          og:supa is an open-source og:image generator! All you have to do is
          add our{' '}
          <code className="bg-gray-50 rounded-md px-0.5 border-[1.5px] border-gray-300 text-[15px] font-bold">
            {'<meta>'}
          </code>{' '}
          tag to your HTML{' '}
          <code className="bg-gray-50 rounded-md px-0.5 border-[1.5px] border-gray-300 text-[15px] font-bold">
            {'<head>'}
          </code>{' '}
          and you're good to go!
        </div>
        <hr className="mt-2" />

        <div>
          <a
            href="https://github.com/janniks/ogsupa"
            target="_blank"
            className="mt-6 -mb-20 box-pink-sm rotate-1 hover:-rotate-1 font-bold inline-flex items-center px-2 py-1 my-2 border-2 border-transparent shadow-sm text-md leading-4 rounded-md text-white focus:outline-none bg-gray-900"
          >
            <StarIcon className="-ml-0.5 mr-1.5 h-5 w-5" aria-hidden="true" />
            Star on GitHub
          </a>
        </div>
        <div>
          <Start session={session} text="Start now!" />
        </div>
      </div>
      <div className="w-full max-w-xl text-center p-8">
        <div className="relative p-4 px-3 rounded-lg border-4 bg-white">
          <span className="rotate-12 text-4xl -top-4 -right-4 absolute cursor-default">
            ℹ️
          </span>
          <p className="">
            <span className="font-bold border-0 border-b-4">og:images</span> are
            used to show preview thumbnails in social media. They‘re very
            important, if you want to{' '}
            <span className="relative">
              <Sparkles>stand out</Sparkles>
            </span>{' '}
            in a sea of feeds. Too often we see an empty link preview and lose
            interest for it‘s content. Sadly, our brains have been trained to
            spot color in hoards of text. So, grab a
            <span className="underline-heart">&nbsp;color&nbsp;</span>that pops
            for a good start!
          </p>
        </div>
      </div>
      <div className="w-full max-w-4xl text-center p-16 pb-8">
        <img src="/og.png" alt="Screenshot of Twitter link with preview" />
      </div>
      <div className="mb-32">
        <Start session={session} text="Try it out" />
      </div>
    </>
  );
}
