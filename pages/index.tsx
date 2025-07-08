import Head from "next/head";
import Layout from "../src/components/layout";
import Hero from "../src/components/home/hero";
import AboutMeSection from "../src/components/AboutMeSection";
import { ChevronDown } from "lucide-react";
import { useState } from "react";

export default function Home() {
  const [showAbout, setShowAbout] = useState(false);

  return (
    <Layout>
      {/* ...Hero 영역 */}
      <section className="flex justify-center w-full bg-transparent pt-10 pb-0 min-h-[70vh]">
        <div className="max-w-4xl w-full mx-auto flex flex-col md:flex-row items-center px-3">
          <Hero />
        </div>
      </section>

      {/* 아래 화살표 + 이력서 버튼 */}
      <div className="flex flex-col items-center mt-24 mb-24">
        <button
          className="flex items-center gap-2 px-5 py-2 min-w-[160px] text-base border-orange-400 text-orange-400 hover:bg-orange-100  font-bold rounded-full shadow-lg transition sm:px-7 sm:py-3 sm:min-w-[200px] sm:text-lg lg:px-9 lg:py-3 lg:min-w-[240px] lg:text-xl"
          onClick={() => {
            setShowAbout(true);
            setTimeout(() => {
              const target = document.getElementById("aboutme");
              target &&
                target.scrollIntoView({ behavior: "smooth", block: "start" });
            }, 20); // setState 이후 DOM 반영 시간 고려
          }}
        >
          <ChevronDown className="w-6 h-6 pt-1 sm:w-7 sm:h-7 lg:w-9 lg:h-9 animate-bounce mr-1" />
          이력서 보기
          <ChevronDown className="w-6 h-6 pt-1 sm:w-7 sm:h-7 lg:w-9 lg:h-9 animate-bounce ml-1" />
        </button>
      </div>

      {showAbout && (
        <section id="aboutme" className="flex justify-center w-full pb-12">
          <div className="max-w-4xl w-full mx-auto px-5">
            <div className="rounded-2xl bg-[#F3F4F6] dark:bg-[#1C1F23] shadow-lg p-8 my-8">
              <AboutMeSection />
            </div>
          </div>
        </section>
      )}
    </Layout>
  );
}
