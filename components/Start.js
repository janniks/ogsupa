import { PencilAltIcon } from '@heroicons/react/solid';
import Link from 'next/link';
import Auth from './supabase/Auth';

const Start = ({ session, text }) => {
  return (
    <>
      {session ? (
        <Link href="/projects">
          <a
            className="mt-6 mb-[3.75rem] box-pink-sm -rotate-1 hover:rotate-1 font-bold inline-flex items-center px-2 py-1 border-2 border-transparent shadow-sm text-md leading-4 rounded-md text-white focus:outline-none"
            style={{ backgroundColor: '#f804ef' }}
          >
            <PencilAltIcon
              className="-ml-0.5 mr-2 h-5 w-5"
              aria-hidden="true"
            />
            {text}
          </a>
        </Link>
      ) : (
        <Auth text={text} />
      )}
    </>
  );
};

export default Start;
