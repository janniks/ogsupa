import Head from 'next/head';

export default function Home() {
  const arr = ['a', 'b', 'c'];

  const Comp = () => (
    <p className="mt-3 text-2xl">
      Get started by editing{' '}
      <code className="p-3 font-mono text-lg bg-gray-100 rounded-md">
        pages/index.js
      </code>
    </p>
  );

  if (arr == null) {
    return <p>Arr is not available</p>;
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex flex-col items-center justify-center w-full flex-1 px-20 text-center">
        <h1 className="text-6xl font-bold">
          About{' '}
          <a className="text-red-900" href="https://nextjs.org">
            Next.js!
          </a>
        </h1>

        <Comp />

        {arr !== null && <p>The array has {arr.length} elements</p>}

        {arr || 'foo'}

        <div className="flex flex-wrap items-center justify-around max-w-4xl mt-6 sm:w-full">
          {arr.map((letter, index) => (
            <a
              key={index}
              href="https://nextjs.org/docs"
              className="p-6 mt-6 text-left border w-96 rounded-xl hover:text-blue-600 focus:text-blue-600"
            >
              <p className="mt-4 text-xl">{letter}</p>
            </a>
          ))}
        </div>
      </main>

      <footer className="flex items-center justify-center w-full h-24 border-t">
        <a
          className="flex items-center justify-center"
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <img src="/vercel.svg" alt="Vercel Logo" className="h-4 ml-2" />
        </a>
      </footer>
    </div>
  );
}
