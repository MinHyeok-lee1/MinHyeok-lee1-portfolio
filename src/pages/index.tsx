import Head from "next/head";
import Hero from "../components/home/hero";
import Layout from "../components/layout";

export default function Home(): JSX.Element {
  return (
    <Layout>
      <Head>
        <title>minhyeok.lee1 Portfolio</title>
        <meta name="description" content="LMH_개발새발" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/developer.ico" />
      </Head>
      <section className="flex min-h-screen flex-col items-center justify-center text-gray-600 body-font">
        <div className="container mx-auto flex px-5 pt-8 pb-24 md:flex-row flex-col items-center">
          <Hero />
        </div>
      </section>
    </Layout>
  );
}
