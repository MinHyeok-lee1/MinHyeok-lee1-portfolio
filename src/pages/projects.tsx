import Layout from "../components/layout";
import Head from "next/head";
import { DATABASE_ID, TOKEN } from "../config";
import ProjectItem from "../components/projects/project-item";

export default function Projects({ projects }) {
  return (
    <>
      <Layout>
        <div className="flex flex-col items-center justify-center min-h-screen px-5 mb-10">
          <Head>
            <title>minhyeok.lee1 Portfolio</title>
            <meta name="description" content="오늘도 코딩" />
            <meta
              name="viewport"
              content="width=device-width, initial-scale=1"
            />
            <link rel="icon" href="/favicon.ico" />
          </Head>

          <h1 className="text-2xl font-bold sm:text-4xl">
            총 프로젝트:
            <span className="pl-4 text-red-500">{projects.results.length}</span>
          </h1>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 m-6 py-10 w-full">
            {projects.results.map((aProject) => (
              <ProjectItem key={aProject.id} data={aProject} />
            ))}
          </div>
        </div>
      </Layout>
    </>
  );
}

// getStaticProps 빌드 타임에 호출
export async function getStaticProps() {
  const options = {
    method: "POST",
    headers: {
      accept: "application/json",
      "Notion-Version": "2022-06-28",
      "content-type": "application/json",
      Authorization: `Bearer ${TOKEN}`,
    },
    body: JSON.stringify({
      sorts: [{ property: "이름", direction: "ascending" }],
      page_size: 100,
    }),
  };

  const res = await fetch(
    `https://api.notion.com/v1/databases/${DATABASE_ID}/query`,
    options
  );
  const projects = await res.json();

  return {
    props: { projects }, // will be passed to the page component as props
  };
}
