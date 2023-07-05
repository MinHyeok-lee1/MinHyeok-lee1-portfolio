import Link from "next/link";
import Animation from "./animation";

export default function Hero() {
  return (
    <>
      <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0 lg:ml-20">
        <Animation />
      </div>
      <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
        <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
          안녕하세요!
          <br className="inline-block" />
          minhyeok.lee1의 웹사이트 입니다.
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
          <strong>매 순간 배우는 것을 소중히 여기며 기록하자.</strong>
          <br />
          <br />
          <strong>중요한 것을 기록해두는 습관</strong>
          <br />
          <strong>그것이 망각을 축복으로 만들 수 있다.</strong>
          <br />
        </p>
        <div className="flex justify-center">
          <Link href="/projects">
            <button className="btn-project">프로젝트 보러가기</button>
          </Link>
          <Link href="/home">
            <button className="ml-12 btn-project">문서정리 보러가기</button>
          </Link>
          {/* <button className="ml-4 inline-flex text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg">
                Button
              </button> */}
        </div>
      </div>
    </>
  );
}
