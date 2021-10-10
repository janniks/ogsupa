import { PencilAltIcon } from '@heroicons/react/solid';
import Sparkles from 'components/Sparkles';
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
      <p className="-mt-20 mb-8 text-2xl font-bold leading-6 border-0 border-b-4 border-indigo-600 text-gray-900">
        Generate og:images for free!
      </p>
      <div className="w-full max-w-xl">
        <div
          className="relative py-1 px-3 rounded-2xl border-4 font-medium text-md bg-white rounded-xl p-3 pt-2 bg-white border-4 border-b-[6px] box-pink"
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
            &nbsp;Empty link previews are a thing of the past!
          </p>
          <p style={{ color: '#bc00b5' }}>
            <span className="relative inline-block text-2xl top-1">🎨</span>
            &nbsp;Generates customizable og:images in realtime
          </p>
          <p className="mb-2" style={{ color: '#d67963' }}>
            <span className="relative inline-block text-2xl top-1">🚀</span>
            &nbsp;Save many different project styles to edit later
          </p>
        </div>
      </div>
      {session ? (
        <Link href="/projects">
          <a
            className="mt-6 box-pink-sm -rotate-1 hover:rotate-1 font-bold inline-flex items-center px-2 py-1 my-2 border-2 border-transparent shadow-sm text-md leading-4 rounded-md text-white focus:outline-none"
            style={{ backgroundColor: '#f804ef' }}
          >
            <PencilAltIcon
              className="-ml-0.5 mr-2 h-5 w-5"
              aria-hidden="true"
            />
            Go to editor!
          </a>
        </Link>
      ) : (
        <Auth />
      )}
      <div className="w-full max-w-xl text-center mt-8 p-8">
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
    </>
  );
}
