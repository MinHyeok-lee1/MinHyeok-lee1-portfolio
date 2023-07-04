import Head from "next/head";
import Layout from "../components/layout";
import Link from "next/link";

export default function AboutMe() {
  return (
    <>
      <Layout>
        <div>
          <Head>
            <title>minhyeok.lee1 Portfolio</title>
            <meta name="description" content="LMH_개발새발" />
            <meta
              name="viewport"
              content="width=device-width, initial-scale=1"
            />
            <link rel="icon" href="/favicon.ico" />
          </Head>
          <div className="min-h-screen">
            <div className="flex flex-col mx-16 pt-12 justify-between">
              <section className="flex flex-col items-center justify-center text-gray-600 body-font">
                <div className="flex w-full justify-start container mx-auto items-start">
                  <h1 className="title-font sm:text-4xl text-3xl font-medium text-gray-900">
                    기록하는 개발자 이민혁입니다.
                    <br className="inline-block" />
                    <b>이력서: </b>이민혁
                  </h1>
                </div>
                <div className="container mx-auto flex px-5 py-12 items-center">
                  <div className="flex flex-col w-full">
                    <hr className="h-1 bg-black mb-2 lg:mb-4 lg:hidden" />
                    <div className="flex flex-col lg:flex-row w-full">
                      <div className="w-full lg:w-1/2">
                        <hr className="h-1 bg-black mb-2 lg:mb-4 lg:visible collapse mr-[30%]" />
                        <p className="mb-6 text-lg leading-relaxed lg:h-24 lg:pt-4 break-all">
                          <b>인적사항</b>
                        </p>
                      </div>
                      <hr className="h-px bg-gray-200 border-0 dark:bg-gray-700" />
                      <div className="w-full lg:w-1/2">
                        <hr className="h-1 bg-black mb-2 lg:mb-4 lg:visible collapse" />
                        <p className="mb-8 leading-relaxed pt-4 lg:pt-2 break-all">
                          <b>성명: 이민혁</b>
                          <br />
                          <strong>이메일: minhyeok.lee1@gmail.com</strong>
                          <br />
                          <strong>
                            깃허브: https://github.com/MinHyeok-lee1
                          </strong>
                        </p>
                      </div>
                    </div>

                    <hr className="h-1 bg-black mb-2 lg:mb-4 lg:hidden" />
                    <div className="flex flex-col lg:flex-row w-full">
                      <div className="w-full lg:w-1/2">
                        <hr className="h-1 bg-black mb-2 lg:mb-4 lg:visible collapse mr-[30%]" />
                        <p className="mb-6 text-lg leading-relaxed lg:h-24 lg:pt-4 break-all">
                          <b>경력사항</b>
                        </p>
                      </div>
                      <hr className="h-px bg-gray-200 border-0 dark:bg-gray-700" />
                      <div className="w-full lg:w-1/2">
                        <hr className="h-1 bg-black mb-2 lg:mb-4 lg:visible collapse" />
                        <p className="mb-8 leading-relaxed pt-4 lg:pt-2 break-all">
                          <strong>기간: 2021. 07. 01 - 현직</strong>
                          <br />
                          <strong>장소: (주)MK, 주식회사 엠케이</strong>
                          <br />
                          <strong>직급: 연구원(사원)</strong>
                        </p>
                      </div>
                    </div>
                    <hr className="h-1 bg-black mb-2 lg:mb-4 lg:hidden" />
                    <div className="flex flex-col lg:flex-row w-full">
                      <div className="w-full lg:w-1/2">
                        <hr className="h-1 bg-black mb-2 lg:mb-4 lg:visible collapse mr-[30%]" />
                        <p className="mb-6 text-lg leading-relaxed lg:h-24 lg:pt-4 break-all">
                          <b>학력사항</b>
                        </p>
                      </div>
                      <hr className="h-px bg-gray-200 border-0 dark:bg-gray-700" />
                      <div className="w-full lg:w-1/2">
                        <hr className="h-1 bg-black mb-2 lg:mb-4 lg:visible collapse" />
                        <p className="mb-8 leading-relaxed pt-4 lg:pt-2 break-all">
                          <strong>2015. 03. 01 - 2021. 03. 01</strong>
                          <br />
                          <strong>한남대학교</strong>
                          <br />
                          컴퓨터통신무인기술학과(컴퓨터 트랙) 학사
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
            </div>

            <div className="flex flex-col mx-16 pt-12 justify-between">
              <section className="flex flex-col items-center justify-center text-gray-600 body-font">
                <div className="flex w-full justify-start container mx-auto items-start">
                  <h1 className="title-font sm:text-4xl text-3xl font-medium text-gray-900">
                    저는 이런 개발자 입니다.
                  </h1>
                </div>
                <div className="container mx-auto flex px-5 py-12 items-center">
                  <div className="flex flex-col w-full">
                    <hr className="h-1 bg-black mb-2 lg:mb-4 lg:hidden" />
                    <div className="flex flex-col lg:flex-row w-full">
                      <div className="w-full lg:w-1/2">
                        <hr className="h-1 bg-black mb-2 lg:mb-4 lg:visible collapse mr-[30%]" />
                        <p className="mb-6 text-lg leading-relaxed lg:h-24 lg:pt-4 break-all">
                          <b>불편한 것을 개선하는 개발자</b>
                        </p>
                      </div>
                      <hr className="h-px bg-gray-200 border-0 dark:bg-gray-700" />
                      <div className="w-full lg:w-1/2">
                        <hr className="h-1 bg-black mb-2 lg:mb-4 lg:visible collapse" />
                        <p className="mb-8 leading-relaxedh-auto md:pt-4 break-all">
                          반복적인 업무와 비효율적인 프로세스를 개선하는 데
                          보람을 느낍니다. 주기적으로 오래된 백업 파일을
                          삭제해야하는 일이 있었습니다. 어려운 일은 아니지만,
                          단순하고 반복적인 업무라 자동화할 수 있는 방법을
                          고민하다가 golang을 사용해 직접 파일 정리 프로그램을
                          만들었습니다. 고객과 이메일, 전화로 소통하여 발생하는
                          문제들을 헬프데스크 도입과 사내 메신저 연동으로 해결한
                          경험도 있습니다. 이처럼 불편한 것에 안주하지 않고 항상
                          개선방법을 고민합니다.
                        </p>
                      </div>
                    </div>

                    <hr className="h-1 bg-black mb-2 lg:mb-4 lg:hidden" />
                    <div className="flex flex-col lg:flex-row w-full">
                      <div className="w-full lg:w-1/2">
                        <hr className="h-1 bg-black mb-2 lg:mb-4 lg:visible collapse mr-[30%]" />
                        <p className="mb-6 text-lg leading-relaxed lg:h-24 lg:pt-4 break-all">
                          <b>시작은 칸반보드 만들기 부터하는 개발자</b>
                        </p>
                      </div>
                      <hr className="h-px bg-gray-200 border-0 dark:bg-gray-700" />
                      <div className="w-full lg:w-1/2">
                        <hr className="h-1 bg-black mb-2 lg:mb-4 lg:visible collapse" />
                        <p className="mb-8 leading-relaxedh-auto md:pt-4 break-all">
                          어떤 일을 시작하기 전에 항상 칸반보드로 계획을
                          세웁니다. 일을 가장 작은 단위로 쪼개고, 작업 시간을
                          예상하여 트렐로 보드에 카드로 정리합니다. 그 날 일을
                          시작하기 전에 어떤 카드를 해결할지 정하고, 하나씩
                          해결하는 것에 보람을 느낍니다. 예상과 실제 작업 시간이
                          다를 경우도 종종 생기지만, 이를 참고해서 앞으로 계획을
                          더 정확하게 세울 수 있습니다.
                        </p>
                      </div>
                    </div>

                    <hr className="h-1 bg-black mb-2 lg:mb-4 lg:hidden" />
                    <div className="flex flex-col lg:flex-row w-full">
                      <div className="w-full lg:w-1/2">
                        <hr className="h-1 bg-black mb-2 lg:mb-4 lg:visible collapse mr-[30%]" />
                        <p className="mb-6 text-lg leading-relaxed lg:h-24 lg:pt-4 break-all">
                          <b>전체적인 소프트웨어 생명주기를 경험한 개발자</b>
                        </p>
                      </div>
                      <hr className="h-px bg-gray-200 border-0 dark:bg-gray-700" />
                      <div className="w-full lg:w-1/2">
                        <hr className="h-1 bg-black mb-2 lg:mb-4 lg:visible collapse" />
                        <p className="mb-8 leading-relaxedh-auto md:pt-4 break-all">
                          비록 규모가 큰 프로젝트는 아니지만, 소프트웨어
                          생명주기를 전체적으로 경험했습니다. 요구사항 분석,
                          설계, 개발, 테스트, 운영의 각 단계별로 발생할 수 있는
                          이슈와 그 해결 방법에 대한 나름의 노하우를 가지고
                          있습니다. 경험해보지 않은 에러를 만날 때, 근본적인
                          원인을 분석하고 관련 문서를 검색해 끝까지 해결하는
                          고집이 있습니다.
                        </p>
                      </div>
                    </div>

                    <hr className="h-1 bg-black mb-2 lg:mb-4 lg:hidden" />
                    <div className="flex flex-col lg:flex-row w-full">
                      <div className="w-full lg:w-1/2">
                        <hr className="h-1 bg-black mb-2 lg:mb-4 lg:visible collapse mr-[30%]" />
                        <p className="mb-6 text-lg leading-relaxed lg:h-24 lg:pt-4 break-all">
                          <b>목표가 있는 개발자</b>
                        </p>
                      </div>
                      <hr className="h-px bg-gray-200 border-0 dark:bg-gray-700" />
                      <div className="w-full lg:w-1/2">
                        <hr className="h-1 bg-black mb-2 lg:mb-4 lg:visible collapse" />
                        <p className="mb-8 leading-relaxedh-auto md:pt-4 break-all">
                          문제가 생겼을 때 가장 먼저 생각나는 사람, 신뢰를 주는
                          개발자가 되고자 합니다. 이를 위해 경계를 정해두지 않고
                          다양한 분야에서 폭넓은 지식을 가지려고 노력합니다. 책,
                          뉴스, RSS, 팟캐스트 등 다양한 경로를 통해 정보를
                          습득합니다. 만약 문제를 해결하지 못하더라도, 함께
                          문제를 고민하고 해결책을 찾아나가는 데 도움이 될 수
                          있는 사람이 되는 것이 목표입니다.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
            </div>

            <div className="flex flex-col mx-16 pt-12 justify-between">
              <section className="flex flex-col items-center justify-center text-gray-600 body-font">
                <div className="flex w-full justify-start container mx-auto items-start">
                  <h1 className="title-font sm:text-4xl text-3xl font-medium text-gray-900">
                    기술 스택
                  </h1>
                </div>
                <div className="container mx-auto flex px-5 py-12 items-center">
                  <div className="flex flex-col w-full">
                    <hr className="h-1 bg-black mb-2 lg:mb-4 lg:hidden" />
                    <div className="flex flex-col lg:flex-row w-full">
                      <div className="w-full lg:w-1/2">
                        <hr className="h-1 bg-black mb-2 lg:mb-4 lg:visible collapse mr-[30%]" />
                        <p className="mb-6 text-lg leading-relaxed lg:h-24 lg:pt-4 break-all">
                          <b>Back-end</b>
                        </p>
                      </div>
                      <hr className="h-px bg-gray-200 border-0 dark:bg-gray-700" />
                      <div className="w-full lg:w-1/2">
                        <hr className="h-1 bg-black mb-2 lg:mb-4 lg:visible collapse" />
                        <p className="mb-8 leading-relaxed h-auto md:pt-4 break-all">
                          <b>Java</b>
                          Spring MVC, Spring Boot, JPA, Hibernate, JDBC Spring을
                          활용해 웹서비스, API 개발 및 DB와 연동을 할 수
                          있습니다.
                          <b>Node.js</b>
                          NestJs, TypeORM NestJs를 활용해 웹서비스, API 개발 및
                          DB와 연동을 할 수 있습니다.
                          <b>DB</b>
                          MySQL, Oracle, MongoDB RDB 테이블을 설계하고 join을
                          활용해 데이터를 조회할 수 있습니다. MongoDB에서
                          Document 단위로 데이터를 저장하고, 인덱스를 설정할 수
                          있습니다. DB 설정을 변경하고 백업, 복구를 할 수
                          있습니다.
                        </p>
                      </div>
                    </div>

                    <hr className="h-1 bg-black mb-2 lg:mb-4 lg:hidden" />
                    <div className="flex flex-col lg:flex-row w-full">
                      <div className="w-full lg:w-1/2">
                        <hr className="h-1 bg-black mb-2 lg:mb-4 lg:visible collapse mr-[30%]" />
                        <p className="mb-6 text-lg leading-relaxed lg:pt-4 break-all">
                          <b>Front-end</b>
                        </p>
                      </div>
                      <hr className="h-px bg-gray-200 border-0 dark:bg-gray-700" />
                      <div className="w-full lg:w-1/2">
                        <hr className="h-1 bg-black mb-2 lg:mb-4 lg:visible collapse" />
                        <p className="mb-8 leading-relaxedh-auto md:pt-4 break-all">
                          <b>JavaScript</b>
                          ES6, jQuery, React, Vue, MobX ES6와 jQuery를 활용해
                          DOM을 제어하고 AJAX로 데이터를 가져올 수 있습니다.
                          React와 Vue를 활용해 SPA를 만들 수 있습니다. MobX를
                          활용해 SPA의 상태를 관리할 수 있습니다.
                          <b>HTML</b>
                          HTML 구조와 DOM을 이해하고 HTML5 시멘틱 태그에 맞게
                          작성할 수 있습니다.
                          <b>CSS</b>
                          CSS3, Bootstrap, Tailwind CSS CSS 프레임워크를 활용해
                          레이아웃과 디자인을 구현할 수 있습니다.
                        </p>
                      </div>
                    </div>
                    <hr className="h-1 bg-black mb-2 lg:mb-4 lg:hidden" />
                    <div className="flex flex-col lg:flex-row w-full">
                      <div className="w-full lg:w-1/2">
                        <hr className="h-1 bg-black mb-2 lg:mb-4 lg:visible collapse mr-[30%]" />
                        <p className="mb-6 text-lg leading-relaxed lg:h-24 lg:pt-4 break-all">
                          <b>Infra & Cloud</b>
                        </p>
                      </div>
                      <hr className="h-px bg-gray-200 border-0 dark:bg-gray-700" />
                      <div className="w-full lg:w-1/2">
                        <hr className="h-1 bg-black mb-2 lg:mb-4 lg:visible collapse" />
                        <p className="mb-8 leading-relaxedh-auto md:pt-4 break-all">
                          <b>Kubernetes, Docker</b>
                          개발 및 운영 환경을 정의하고 배포에 활용할 수
                          있습니다.
                          <b>AWS</b>
                          EC2, EKS, S3, Lightsail, RDS, SQS EC2 인스턴스를
                          생성하고 요청량에 따라 Auto Scaling 설정을 할 수
                          있습니다. EKS 클러스터를 구축하고 네트워크 설정을 할
                          수 있습니다.
                        </p>
                      </div>
                    </div>

                    <hr className="h-1 bg-black mb-2 lg:mb-4 lg:hidden" />
                    <div className="flex flex-col lg:flex-row w-full">
                      <div className="w-full lg:w-1/2">
                        <hr className="h-1 bg-black mb-2 lg:mb-4 lg:visible collapse mr-[30%]" />
                        <p className="mb-6 text-lg leading-relaxed lg:h-24 lg:pt-4 break-all">
                          <b>Tools</b>
                        </p>
                      </div>
                      <hr className="h-px bg-gray-200 border-0 dark:bg-gray-700" />
                      <div className="w-full lg:w-1/2">
                        <hr className="h-1 bg-black mb-2 lg:mb-4 lg:visible collapse" />
                        <p className="mb-8 leading-relaxedh-auto md:pt-4 break-all">
                          <b>Version Control</b>
                          Git, GitHub, GitLab, SVN branch, rebase 등 명령어를
                          활용해 소스코드를 관리할 수 있습니다.
                          <b>CI/CD</b>
                          Jenkins, GitHub Actions Git, SVN과 연동해 개발 및 운영
                          환경에 배포할 수 있습니다. HTML 구조와 DOM을 이해하고
                          HTML5 시멘틱 태그에 맞게 작성할 수 있습니다.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
            </div>

            <div className="flex flex-col mx-16 pt-12 justify-between">
              <section className="flex flex-col items-center justify-center text-gray-600 body-font">
                <div className="flex w-full justify-start container mx-auto items-start">
                  <h1 className="title-font sm:text-4xl text-3xl font-medium text-gray-900">
                    프로젝트
                  </h1>
                </div>
                <div className="container mx-auto flex px-5 py-12 items-center">
                  <div className="flex flex-col w-full">
                    <hr className="h-1 bg-black mb-2 lg:mb-4 lg:hidden" />
                    <div className="flex flex-col lg:flex-row w-full">
                      <div className="w-full lg:w-1/2">
                        <hr className="h-1 bg-black mb-2 lg:mb-4 lg:visible collapse mr-[30%]" />
                        <p className="mb-6 text-lg leading-relaxed lg:h-24 lg:pt-4 break-all">
                          <b>프로젝트1</b>
                        </p>
                      </div>
                      <hr className="h-px bg-gray-200 border-0 dark:bg-gray-700" />
                      <div className="w-full lg:w-1/2">
                        <hr className="h-1 bg-black mb-2 lg:mb-4 lg:visible collapse" />
                        <p className="mb-8 leading-relaxed lg:h-24 lg:pt-4 break-all">
                          <b>프로젝트 설명</b>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
            </div>

            <div className="flex flex-col mx-16 pt-12 justify-between">
              <section className="flex flex-col items-center justify-center text-gray-600 body-font">
                <div className="flex w-full justify-start container mx-auto items-start">
                  <h1 className="title-font sm:text-4xl text-3xl font-medium text-gray-900">
                    기타사항
                  </h1>
                </div>
                <div className="container mx-auto flex px-5 py-12 items-center">
                  <div className="flex flex-col w-full">
                    <hr className="h-1 bg-black mb-2 lg:mb-4 lg:hidden" />
                    <div className="flex flex-col lg:flex-row w-full">
                      <div className="w-full lg:w-1/2">
                        <hr className="h-1 bg-black mb-2 lg:mb-4 lg:visible collapse mr-[30%]" />
                        <p className="mb-6 text-lg leading-relaxed lg:h-24 lg:pt-4 break-all">
                          <b>병역사항</b>
                        </p>
                      </div>
                      <hr className="h-px bg-gray-200 border-0 dark:bg-gray-700" />
                      <div className="w-full lg:w-1/2">
                        <hr className="h-1 bg-black mb-2 lg:mb-4 lg:visible collapse" />
                        <p className="mb-8 leading-relaxed pt-4 lg:pt-2 break-all">
                          <b>2017.06-2019.02</b>
                          <br />
                          <strong>20사단 62여단 109기보대대</strong>
                          <br />
                          무전통신운영병(중대통신병)
                        </p>
                      </div>
                    </div>

                    <hr className="h-1 bg-black mb-2 lg:mb-4 lg:hidden" />
                    <div className="flex flex-col lg:flex-row w-full">
                      <div className="w-full lg:w-1/2">
                        <hr className="h-1 bg-black mb-2 lg:mb-4 lg:visible collapse mr-[30%]" />
                        <p className="mb-6 text-lg leading-relaxed lg:h-24 lg:pt-4 break-all">
                          <b>수상 및 경력증</b>
                        </p>
                      </div>
                      <hr className="h-px bg-gray-200 border-0 dark:bg-gray-700" />
                      <div className="w-full lg:w-1/2">
                        <hr className="h-1 bg-black mb-2 lg:mb-4 lg:visible collapse" />
                        <p className="mb-8 leading-relaxed pt-4 lg:pt-2 break-all">
                          <strong>2021. 07</strong>
                          <br />
                          <strong>정보처리기사</strong>
                          <br />
                          한국산업인력공단
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
}
