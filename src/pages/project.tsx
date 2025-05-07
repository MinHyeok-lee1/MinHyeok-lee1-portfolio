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
            <meta name="description" content="LMH_개발새발" />
            <meta
              name="viewport"
              content="width=device-width, initial-scale=1"
            />
            <link rel="icon" href="/developer.ico" />
          </Head>

          <h1 className="text-2xl font-bold sm:text-4xl mt-12 md:mt-8">
            총 프로젝트:
            <span className="pl-4 text-orange-500">
              {projects.results.length}
            </span>
          </h1>
          <p className="pt-10">
            * 개발문서 바로가기: Github가 Private면 개발문서로 이동
            <br />* 새창에서 열리지 않으므로 새창에서 열려면 Ctrl을 누르고 클릭
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 m-6 py-10 w-full">
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
