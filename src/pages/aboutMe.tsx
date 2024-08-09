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
                  <h1 className="title-font sm:text-3xl text-2xl font-medium text-gray-900">
                    기록하려 노력하는 개발자 이민혁입니다.
                    <br />
                  </h1>
                  <br className="inline-block" />
                </div>
                <div className="flex w-full justify-start container mx-auto items-start">
                  <h3 className="title-font sm:text-2xl text-xl font-medium text-gray-900">
                    <br />
                    <br className="inline-block" />
                    👦🏻 <b>About Me</b>
                  </h3>
                </div>
                <div className="container mx-auto flex px-5 py-12 items-center">
                  <div className="flex flex-col w-full">
                    <hr className="h-1 bg-black mb-2 lg:mb-4 lg:hidden" />
                    <div className="flex flex-col lg:flex-row w-full">
                      <div className="w-full lg:w-1/2">
                        <hr className="h-1 bg-black mb-2 lg:mb-4 lg:visible collapse mr-[30%]" />
                        <p className="mb-6 text-lg leading-relaxed lg:h-24 lg:pt-4 break-all">
                          <b>Introduction</b>
                        </p>
                      </div>
                      <hr className="h-px bg-gray-200 border-0 dark:bg-gray-700" />
                      <div className="w-full lg:w-1/2">
                        <hr className="h-1 bg-black mb-2 lg:mb-4 lg:visible collapse" />
                        <p className="mb-8 leading-relaxed h-auto pt-4 lg:pt-2 break-all">
                          ◦ 안녕하세요! 3년 차 백엔드 개발자 이민혁입니다.
                          <br />
                          ◦ 기록하지 못하여 잊었던 과거에 실수로 기록의 중요함을
                          깨달았습니다.
                          <br />
                          ◦ 기록하는 것의 가치를 깨닫게 되어 블로그와 해당
                          웹사이트에 기록합니다.
                          <br />
                          ◦ 개발 쪽으로 Clean Code와 Test에 대한 고민을 하고
                          실제로 적용하고자 합니다.
                          <br />◦ 커피와 운동 💪🏻, 그리고 좋은 사람과 함께하는
                          모든 것에 관심이 많습니다.
                        </p>
                      </div>
                    </div>

                    <hr className="h-1 bg-black mb-2 lg:mb-4 lg:hidden" />
                    <div className="flex flex-col lg:flex-row w-full">
                      <div className="w-full lg:w-1/2">
                        <hr className="h-1 bg-black mb-2 lg:mb-4 lg:visible collapse mr-[30%]" />
                        <p className="mb-6 text-lg leading-relaxed lg:h-24 lg:pt-4 break-all">
                          <b>Contact & Channel</b>
                        </p>
                      </div>
                      <hr className="h-px bg-gray-200 border-0 dark:bg-gray-700" />
                      <div className="w-full lg:w-1/2">
                        <hr className="h-1 bg-black mb-2 lg:mb-4 lg:visible collapse" />
                        <p className="mb-8 leading-relaxed h-auto pt-4 lg:pt-2 break-all">
                          <strong>◦ Email: minhyeok.lee1@gmail.com</strong>
                          <br />
                          <strong>
                            ◦ Github:&nbsp;
                            <Link href="https://github.com/MinHyeok-lee1">
                              https://github.com/MinHyeok-lee1
                            </Link>
                          </strong>
                          <br />
                          <strong>
                            ◦ Blog:&nbsp;
                            <Link href="https://kfdd6630.tistory.com/">
                              https://kfdd6630.tistory.com
                            </Link>
                          </strong>
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
                  <h3 className="title-font sm:text-2xl text-xl font-medium text-gray-900">
                    🔧 <b>Skills</b>
                  </h3>
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
                          <b>◦ Node.js, NestJs, TypeORM NestJs</b>: API 개발 및
                          DB 연동이 가능하고 whitelist와 같은 전역적인 수신
                          데이터 설정과 Controller 별 수신 데이터에 대한
                          여러가지에 대한 validation 설정 및 Swagger를 통한
                          형상관리가 가능합니다.
                          <br />
                          <br />
                          <b>◦ MongoDB</b>: Document 단위로 데이터를 저장하고
                          여러가지 종류의 인덱스를 상황별로 설정 가능 및
                          데이터베이스 설정을 변경하고 dump 및 restore 명령어를
                          통한 백업 및 복구 가능합니다.
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
                          <b>◦ Next.js</b>: Reactquery를 활용한 상황 별 데이터
                          송수신 가능, Redux, Recoil을 활용한 전역변수 관리 가능
                          및 CSR, SSR Page를 따로 관리가 가능합니다.
                          <br />
                          <br />
                          <b>◦ JavaScript</b>: ES6, Next, React와 jQuery를
                          활용해 DOM을 제어하고 AJAX로 데이터 송수신이
                          가능합니다.
                          <br />
                          <br />
                          <b>◦ HTML</b>: HTML 구조와 DOM을 이해하고 HTML5 시멘틱
                          태그에 맞게 작성할 수 있습니다.
                          <br />
                          <br />
                          <b>◦ CSS</b>: CSS3, Bootstrap, Tailwind CSS CSS
                          프레임워크를 활용해 레이아웃과 디자인을 구현할 수
                          있습니다.
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
                          <b>◦ Kubernetes, Docker</b>: 개발 및 운영 환경을
                          정의하고 배포에 활용이 가능합니다.
                          <br />
                          <br />
                          <b>◦ AWS</b>: EC2, EKS, S3, Lightsail, RDS, SQS EC2
                          인스턴스를 생성하고 요청량에 따라 Auto Scaling 설정을
                          할 수 있고 EKS 클러스터를 구축하고 네트워크 설정이
                          가능합니다.
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
                          <b>◦ Version Control</b>: Git, GitHub, GitLab, SVN
                          branch, rebase 등 명령어를 활용해 소스코드를 관리가
                          가능합니다.
                          <br />
                          <br />
                          <b>◦ CI/CD</b>: Jenkins, GitHub Actions Git, SVN과
                          연동해 개발 및 운영 환경에 배포가 가능합니다.
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
                  <h3 className="title-font sm:text-2xl text-xl font-medium text-gray-900">
                    💻 <b>Work Experience & Projects</b>
                  </h3>
                </div>
                <div className="container mx-auto flex px-5 py-12 items-center">
                  <div className="flex flex-col w-full">
                    <hr className="h-1 bg-black mb-2 lg:mb-4 lg:hidden" />
                    <div className="flex flex-col lg:flex-row w-full">
                      <div className="w-full lg:w-1/2">
                        <hr className="h-1 bg-black mb-2 lg:mb-4 lg:visible collapse mr-[30%]" />
                        <p className="mb-6 text-lg leading-relaxed lg:h-24 lg:pt-4 break-all">
                          <b>CARYAK</b>
                          <br />
                          <span className="text-xs">
                            2022-04-01 ~ 2023-07-31
                          </span>
                        </p>
                      </div>
                      <hr className="h-px bg-gray-200 border-0 dark:bg-gray-700" />
                      <div className="w-full lg:w-1/2">
                        <hr className="h-1 bg-black mb-2 lg:mb-4 lg:visible collapse" />
                        <p className="mb-8 leading-relaxed h-auto md:pt-4 break-all">
                          <b>◦ 자동차 정비 예약(고객 및 정비소) 웹사이트</b>
                          <br />
                          &nbsp; ◦ front-end | 정비소 웹사이트 예약 및 설정
                          페이지 제작
                          <br />
                          &nbsp; ◦ front-end | 접속 ip를 검사하여 접속자 파악 및
                          qc 웹 사이트 배포 웹사이트로 반환
                          <br />
                          &nbsp; ◦ back-end | 페이지네이션 skip() 대신
                          hasNext()와 next()를 사용하여 속도 향상
                          <br />
                          &nbsp; ◦ back-end | 위도, 좌표값인 Geospatial
                          Queries를 사용하여 index로 설정
                          <br />
                          &nbsp; ◦ back-end | Transaction을 사용하여 자원
                          임계구역 설정
                          <br />
                          &nbsp; ◦ Admin | front-end 및 back-end api 제작
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
                  <h3 className="title-font sm:text-2xl text-xl font-medium text-gray-900">
                    📚 <b>Personal Experience & Projects</b>
                  </h3>
                </div>
                <div className="container mx-auto flex px-5 py-12 items-center">
                  <div className="flex flex-col w-full">
                    <hr className="h-1 bg-black mb-2 lg:mb-4 lg:hidden" />
                    <div className="flex flex-col lg:flex-row w-full">
                      <div className="w-full lg:w-1/2">
                        <hr className="h-1 bg-black mb-2 lg:mb-4 lg:visible collapse mr-[30%]" />
                        <p className="mb-6 text-lg leading-relaxed lg:h-24 lg:pt-4 break-all">
                          <b>개발새발</b>
                          <br />
                          <span className="text-xs">2023-01-27 ~ 현재</span>
                        </p>
                      </div>
                      <hr className="h-px bg-gray-200 border-0 dark:bg-gray-700" />
                      <div className="w-full lg:w-1/2">
                        <hr className="h-1 bg-black mb-2 lg:mb-4 lg:visible collapse" />
                        <p className="mb-8 leading-relaxed h-auto md:pt-4 break-all">
                          <b>◦ minhyeok.lee 기록용 웹사이트</b>
                          <br />
                          &nbsp; ◦ front-end | Next.js를 사용하여 front-end 홈
                          ui 제작
                          <br />
                          &nbsp; ◦ front-end | Nextra를 사용한 front-end 문서측
                          ui제작
                          <br />
                          &nbsp; ◦ back-end | Notion Database를 사용한 프로젝트
                          데이터 저장 및 수신
                        </p>
                      </div>
                    </div>

                    <hr className="h-1 bg-black mb-2 lg:mb-4 lg:hidden" />
                    <div className="flex flex-col lg:flex-row w-full">
                      <div className="w-full lg:w-1/2">
                        <hr className="h-1 bg-black mb-2 lg:mb-4 lg:visible collapse mr-[30%]" />
                        <p className="mb-6 text-lg leading-relaxed lg:h-24 lg:pt-4 break-all">
                          <b>HelpU</b>
                          <br />
                          <span className="text-xs">
                            2021-12-01 ~ 2022-05-31
                          </span>
                        </p>
                      </div>
                      <hr className="h-px bg-gray-200 border-0 dark:bg-gray-700" />
                      <div className="w-full lg:w-1/2">
                        <hr className="h-1 bg-black mb-2 lg:mb-4 lg:visible collapse" />
                        <p className="mb-8 leading-relaxed h-auto md:pt-4 break-all">
                          <b>
                            ◦ 한남대학교 학과 별 정보 모음 모바일 애플리케이션
                          </b>
                          <br />
                          &nbsp; ◦ app | AndroidStudio와 Java를 사용하여 좌석
                          예약 애플리케이션 제작
                          <br />
                          &nbsp; ◦ app | 휠체어: 전자석 및 브라켓을 이용하여
                          노약자용 좌석에 부착
                        </p>
                      </div>
                    </div>

                    <hr className="h-1 bg-black mb-2 lg:mb-4 lg:hidden" />
                    <div className="flex flex-col lg:flex-row w-full">
                      <div className="w-full lg:w-1/2">
                        <hr className="h-1 bg-black mb-2 lg:mb-4 lg:visible collapse mr-[30%]" />
                        <p className="mb-6 text-lg leading-relaxed lg:h-24 lg:pt-4 break-all">
                          <b>DuoBattleGame</b>
                          <br />
                          <span className="text-xs">
                            2021-10-10 ~ 2022-03-24
                          </span>
                        </p>
                      </div>
                      <hr className="h-px bg-gray-200 border-0 dark:bg-gray-700" />
                      <div className="w-full lg:w-1/2">
                        <hr className="h-1 bg-black mb-2 lg:mb-4 lg:visible collapse" />
                        <p className="mb-8 leading-relaxed h-auto md:pt-4 break-all">
                          <b>◦ 토이프로젝트용 게임 모바일 애플리케이션</b>
                          <br />
                          &nbsp; ◦ app | AndroidStudio와 Flutter를 사용한 간단한
                          게임
                          <br />
                          &nbsp; ◦ app | Timer()를 활용한 일찍 터치하거나, 블록
                          먼저 맞추는 쪽이 이기는 게임
                        </p>
                      </div>
                    </div>

                    <hr className="h-1 bg-black mb-2 lg:mb-4 lg:hidden" />
                    <div className="flex flex-col lg:flex-row w-full">
                      <div className="w-full lg:w-1/2">
                        <hr className="h-1 bg-black mb-2 lg:mb-4 lg:visible collapse mr-[30%]" />
                        <p className="mb-6 text-lg leading-relaxed lg:h-24 lg:pt-4 break-all">
                          <b>use-AICamera</b>
                          <br />
                          <span className="text-xs">
                            2021-08-08 ~ 2022-02-08
                          </span>
                        </p>
                      </div>
                      <hr className="h-px bg-gray-200 border-0 dark:bg-gray-700" />
                      <div className="w-full lg:w-1/2">
                        <hr className="h-1 bg-black mb-2 lg:mb-4 lg:visible collapse" />
                        <p className="mb-8 leading-relaxed h-auto md:pt-4 break-all">
                          <b>◦ AI 학습모델을 이용한 Camera 화재감지 시스템</b>
                          <br />
                          &nbsp; ◦ program | 불에 대한 사진 및 동영상을 학습하여
                          AI 학습모델 추출
                          <br />
                          &nbsp; ◦ program | IPCamera 혹은 노트북 카메라로 불을
                          감지하는 프로그램 제작
                        </p>
                      </div>
                    </div>

                    <hr className="h-1 bg-black mb-2 lg:mb-4 lg:hidden" />
                    <div className="flex flex-col lg:flex-row w-full">
                      <div className="w-full lg:w-1/2">
                        <hr className="h-1 bg-black mb-2 lg:mb-4 lg:visible collapse mr-[30%]" />
                        <p className="mb-6 text-lg leading-relaxed lg:h-24 lg:pt-4 break-all">
                          <b>CHAMCHAM</b>
                          <br />
                          <span className="text-xs">
                            2021-09-01 ~ 2021-12-31
                          </span>
                        </p>
                      </div>
                      <hr className="h-px bg-gray-200 border-0 dark:bg-gray-700" />
                      <div className="w-full lg:w-1/2">
                        <hr className="h-1 bg-black mb-2 lg:mb-4 lg:visible collapse" />
                        <p className="mb-8 leading-relaxed h-auto md:pt-4 break-all">
                          <b>◦ 대전시 트램 노약좌석 예약 서비스</b>
                          <br />
                          &nbsp; ◦ app | AndroidStudio와 Java를 사용하여 좌석
                          예약 애플리케이션 제작
                          <br />
                          &nbsp; ◦ app | 휠체어: 전자석 및 브라켓을 이용하여
                          노약자용 좌석에 부착
                          <br />
                          &nbsp; ◦ app | 임산부: QR코드를 활용하여 예약된 좌석에
                          태그 시 활성화
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
                  <h3 className="title-font sm:text-2xl text-xl font-medium text-gray-900">
                    🧷 <b>Etc.</b>
                  </h3>
                </div>
                <div className="container mx-auto flex px-5 py-12 items-center">
                  <div className="flex flex-col w-full">
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
                        <p className="mb-8 leading-relaxed h-auto pt-4 lg:pt-2 break-all">
                          <strong>◦ 기간: 2021. 07. 01 - 2023. 07. 31</strong>
                          <br />
                          <strong>◦ 장소: (주)MK, 주식회사 엠케이</strong>
                          <br />
                          <strong>◦ 직급: 연구원(사원)</strong>
                        </p>
                        <p className="mb-8 leading-relaxed h-auto pt-4 lg:pt-2 break-all">
                          <strong>◦ 기간: 2023. 08. 01 - 현재</strong>
                          <br />
                          <strong>◦ 장소: 주식회사 아트와</strong>
                          <br />
                          <strong>◦ 직급: 소프트웨어팀 팀장</strong>
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
                        <p className="mb-8 leading-relaxed h-auto pt-4 lg:pt-2 break-all">
                          <strong>◦ 2015. 03. 01 - 2021. 03. 01</strong>
                          <br />
                          <strong>◦ 한남대학교</strong>
                          <br />◦ 컴퓨터통신무인기술학과(컴퓨터 트랙) 학사
                        </p>
                      </div>
                    </div>

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
                        <p className="mb-8 leading-relaxed h-auto pt-4 lg:pt-2 break-all">
                          <b>◦ 2017.06-2019.02</b>
                          <br />
                          <strong>◦ 20사단 62여단 109기보대대</strong>
                          <br />◦ 무전통신운영병(중대통신병)
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
                        <p className="mb-8 leading-relaxed h-auto pt-4 lg:pt-2 break-all">
                          <strong>◦ 2021. 07</strong>
                          <br />
                          <strong>◦ 정보처리기사</strong>
                          <br />
                          ◦ 한국산업인력공단
                          <br />
                          <br />
                          <strong>◦ 2020. 06</strong>
                          <br />
                          <strong>◦ 리눅스마스터 2급</strong>
                          <br />◦ KAIT 정보통신기술자격시험
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
