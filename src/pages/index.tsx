import Head from "next/head";
import Layout from "../components/layout";
import Hero from "../components/home/hero";
import AboutMeSection from "../components/AboutMeSection";
import { ChevronDown } from "lucide-react";

export default function Home() {
  return (
    <Layout>
      <Head>
        <title>minhyeok.lee1 Portfolio</title>
        <meta name="description" content="LMH_개발새발" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/developer.ico" />
      </Head>

      {/* Hero 영역 */}
      <section className="flex justify-center w-full bg-transparent pt-10 pb-0 min-h-[70vh]">
        <div className="max-w-4xl w-full mx-auto flex flex-col md:flex-row items-center px-5">
          <Hero />
        </div>
      </section>

      {/* 아래 화살표 + 이력서 버튼 */}
      <div className="flex flex-col items-center mt-16 mb-16">
        <button
          className="
    flex items-center gap-2
    px-5 py-2
    min-w-[160px]
    text-base
    bg-orange-400 hover:bg-orange-500
    text-white font-bold rounded-full shadow-lg transition
    sm:px-7 sm:py-3 sm:min-w-[200px] sm:text-lg
    lg:px-9 lg:py-4 lg:min-w-[240px] lg:text-xl
  "
          onClick={() => {
            const target = document.getElementById("aboutme");
            target &&
              target.scrollIntoView({ behavior: "smooth", block: "start" });
          }}
        >
          <ChevronDown
            className="
      w-6 h-6
      sm:w-7 sm:h-7
      lg:w-9 lg:h-9
      animate-bounce mr-1
    "
          />
          이력서 보기
        </button>
      </div>

      {/* AboutMeSection - 카드형 레이아웃 */}
      <section id="aboutme" className="flex justify-center w-full pb-12">
        <div className="max-w-4xl w-full mx-auto px-5">
          <div className="rounded-2xl bg-white dark:bg-[#222] shadow-lg p-8 my-8">
            <AboutMeSection />
          </div>
        </div>
      </section>
    </Layout>
  );
}
