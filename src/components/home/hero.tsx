import Link from "next/link";
import Animation from "./animation";

export default function Hero() {
  return (
    <>
      <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
        <Animation />
      </div>
      <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
        <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
          안녕하세요 링크맨입니다.
          <br className="hidden lg:inline-block" />
          인생이 왜 이럴까요
        </h1>
        <p className="mb-8 leading-relaxed">
          심장은 그들은 유소년에게서 보이는 인간에 약동하다. 하는 긴지라 때까지
          타오르고 동산에는 뿐이다. 할지라도 타오르고 꾸며 남는 붙잡아 얼마나
          아니다. 귀는 찾아다녀도, 되려니와, 쓸쓸한 못할 끓는 군영과 예수는 능히
          있는가? 위하여, 아니더면, 피에 소담스러운 주는 없으면 어디 위하여
          뿐이다. 기관과 인생의 풀이 작고 불러 불어 현저하게 더운지라 든 것이다.
          길지 가치를 그러므로 예가 인생에 이상, 속에 있으랴? 어디 보내는 영원히
          인류의 청춘의 충분히 운다. 황금시대를 그림자는 사랑의 반짝이는 같으며,
          인생의 군영과 인도하겠다는 우리 교향악이다.
        </p>
        <div className="flex justify-center">
          <Link href="/projects">
            <button className="btn-project">프로젝트 보러가기</button>
          </Link>
          {/* <button className="ml-4 inline-flex text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg">
                Button
              </button> */}
        </div>
      </div>
    </>
  );
}
