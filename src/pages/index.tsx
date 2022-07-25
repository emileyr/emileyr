import type { NextPage } from "next";
import Head from "next/head";

type TechnologyCardProps = {
  name: string;
  description: string;
  documentation: string;
};

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Emiley R</title>
        <meta name="description" content="Generated by create-t3-app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="container mx-auto flex flex-col items-center justify-center h-screen p-4">
        <h1 className=" text-5xl font-bold text-purple-300"><span className="font-mono">o/</span> hello</h1>
      </main>
    </>
  );
};

export default Home;
