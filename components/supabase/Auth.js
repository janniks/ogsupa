import {
  LightningBoltIcon,
  PencilAltIcon,
  RefreshIcon,
} from '@heroicons/react/solid';
import cn from 'classnames';
import { supabase } from 'lib/supabaseClient';
import { useState } from 'react';

export default function Auth({ text }) {
  const [isExpanded, setIsExpanded] = useState(false);
  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState('');

  const handleLogin = async (email) => {
    try {
      setLoading(true);
      const { error } = await supabase.auth.signIn(
        { email },
        { redirectTo: 'https://ogsupa.com/projects' }
      );
      if (error) throw error;
      alert('Check your email for the login link!');
    } catch (error) {
      alert(error.error_description || error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col">
      <div className="mt-6 text-center">
        <button
          className="box-pink-sm -rotate-1 hover:rotate-1 font-bold inline-flex items-center px-2 py-1 border-2 border-transparent shadow-sm text-md leading-4 rounded-md text-white focus:outline-none"
          style={{ backgroundColor: '#f804ef' }}
          onClick={() => setIsExpanded(true)}
        >
          <PencilAltIcon className="-ml-0.5 mr-2 h-5 w-5" aria-hidden="true" />
          {text}
        </button>
      </div>

      <div className="relative">
        <form
          className={cn(
            'transition-opacity',
            isExpanded ? 'opacity-100' : 'opacity-0'
          )}
        >
          <input
            type="email"
            placeholder="Email address"
            className="input text-sm mt-1 shadow-sm block w-full border-gray-300 rounded-md"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <button
            onClick={(e) => {
              e.preventDefault();
              handleLogin(email);
            }}
            className="absolute top-0 right-1 font-bold inline-flex items-center px-2 py-1 my-2 border-2 border-transparent shadow-sm text-md leading-4 rounded-md text-white focus:outline-none"
            style={{ backgroundColor: '#7801fd' }}
            disabled={loading}
          >
            {loading ? (
              <RefreshIcon
                className="animate-spin -ml-1 -mr-1 h-5 w-5"
                aria-hidden="true"
              />
            ) : (
              <LightningBoltIcon
                className="-ml-1 -mr-1 h-5 w-5"
                aria-hidden="true"
              />
            )}
          </button>
          <div className="text-right text-xs italic text-gray-800">
            Log in via magic link
          </div>
        </form>
      </div>
    </div>
  );
}
