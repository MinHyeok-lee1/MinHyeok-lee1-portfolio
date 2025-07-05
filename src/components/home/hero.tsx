import Link from "next/link";
import Animation from "./animation";

export default function Hero(): JSX.Element {
  return (
    <>
      <div className="max-w-xs w-2/3 md:w-1/2 mb-10 md:mb-0 lg:ml-20">
        <Animation />
      </div>
      <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
        <h1 className="title-font text-3xl md:text-2xl lg:text-3xl mb-4 font-semibold text-gray-900">
          안녕하세요! SW 개발자
          <br className="inline-block" />
          이민혁의 웹사이트입니다.
        </h1>
        <p className="mb-8 leading-relaxed">
          <strong>사람은 망각의 동물이다.</strong>
          <br />
          <strong>기억하는 것은 인간의 의지라고 한다.</strong>
          <br />
          <strong>하지만 기억은 잊혀지고 기록은 영원하다.</strong>
          <br />
          <br />
          <strong>기록은 기억을 지배한다고 한다.</strong>
          <br />
          <strong>기록되지 않는 건 기억되지 않는다.</strong>
          <br />
          <strong>매 순간 배우는 것을 중히 여겨 기록한다.</strong>
          <br />
          <br />
          <strong>중요한 것을 기록해두는 습관, </strong>
          <br />
          <strong>그것이 망각을 축복으로 만들 수 있다.</strong>
        </p>
        <div className="flex flex-row items-center gap-8 mt-6">
          <Link href="/project">
            <button className="px-4 py-2 bg-orange-400 text-white rounded-lg shadow hover:bg-orange-500 font-semibold transition whitespace-nowrap">
              🗂️ 프로젝트 ←
            </button>
          </Link>
          <Link href="/docs">
            <button className="px-4 py-2 border border-orange-400 text-orange-400 rounded-lg font-semibold hover:bg-orange-100 transition whitespace-nowrap">
              📚 문서정리 ←
            </button>
          </Link>
        </div>
      </div>
    </>
  );
}
