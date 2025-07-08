import Head from "next/head";
import Layout from "../components/layout";
import Link from "next/link";
import Section from "../components/Section";
import InfoList from "../components/InfoList";
import SkillGrid from "../components/SkillGrid";
import ExperienceList from "../components/ExperienceList";

export default function AboutMeSection() {
  return (
    <>
      <Head>
        <title>About Me - minhyeok.lee1 Portfolio</title>
        <meta name="description" content="LMH_개발새발" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/developer.ico" />
      </Head>
      <main className="w-full px-5 md:px-0 pb-24">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="mt-12 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">이력서 정리</h1>
            <p className="mt-3 text-lg text-gray-600">
              기록하고 성장하는 5년 차 SW Developer
            </p>
          </div>

          {/* About Me */}
          <Section title="About Me">
            <p className="text-lg leading-relaxed">
              ◦ <b>5년 차 SW Developer</b> 이민혁입니다.
              <br />
              ◦ 기록의 가치를 깨닫고, 배운 것/경험한 것들을 블로그와 이 사이트에
              남깁니다.
              <br />
              ◦ Clean Code, 테스트 문화에 진심이고 실제 업무에 적용합니다.
              <br />◦ 커피, 운동 💪🏻, 좋은 사람들과 성장하는 것을 좋아합니다.
            </p>
          </Section>

          {/* Contact */}
          <Section title="Contact & Channel">
            <InfoList
              items={[
                { label: "Email", value: "minhyeok.lee1@gmail.com" },
                {
                  label: "Github",
                  value: (
                    <Link
                      href="https://github.com/MinHyeok-lee1"
                      className="underline text-blue-500"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      https://github.com/MinHyeok-lee1
                    </Link>
                  ),
                },
                {
                  label: "Blog",
                  value: (
                    <Link
                      href="https://kfdd6630.tistory.com"
                      className="underline text-blue-500"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      https://kfdd6630.tistory.com
                    </Link>
                  ),
                },
              ]}
            />
          </Section>

          {/* Skills */}
          <Section title="Skills">
            <SkillGrid
              skills={[
                {
                  category: "Back-end",
                  items: [
                    "Node.js, NestJs, TypeORM, MongoDB",
                    "API/DB 연동, 데이터 검증, Swagger 관리, 인덱싱/백업",
                  ],
                },
                {
                  category: "Front-end",
                  items: [
                    "Next.js, React, JavaScript, HTML, CSS, Tailwind",
                    "CSR/SSR, 상태관리, DOM/AJAX, 시멘틱 마크업",
                  ],
                },
                {
                  category: "Infra & Cloud",
                  items: [
                    "Kubernetes, Docker, AWS, CloudFlare",
                    "배포 자동화, 오토스케일링, 클러스터 관리, Zero Trust",
                  ],
                },
                {
                  category: "Embedded & Tools",
                  items: [
                    "FreeRTOS, Arduino, RaspberryPi, STM32",
                    "Git, GitHub Actions, Jenkins, SVN",
                    "Task/Stack 최적화, CI/CD, 인터럽트/실시간응답",
                  ],
                },
              ]}
            />
          </Section>

          {/* Work Experience */}
          <Section title="Work Experience">
            <ExperienceList
              exps={[
                {
                  title: "더로보틱스 주식회사",
                  period: "2023-08 ~ 현재",
                  position: "팀장",
                  desc: (
                    <ul className="list-disc ml-6">
                      <li>AMR, 산업로봇 소프트웨어 설계 및 개발 총괄</li>
                      <li>
                        STM32/임베디드/ROS2/Firmware/웹 연동 등 프로젝트 리드
                      </li>
                    </ul>
                  ),
                },
                {
                  title: "(주)MK",
                  period: "2021-07 ~ 2023-07",
                  position: "선임 연구원",
                  desc: (
                    <ul className="list-disc ml-6">
                      <li>차량정비, IoT, Web/모바일 솔루션 개발 및 운영</li>
                      <li>
                        백엔드, 프론트, 클라우드, IoT 임베디드까지 전반 담당
                      </li>
                    </ul>
                  ),
                },
              ]}
            />
          </Section>

          {/* Projects */}
          <Section title="Projects (대표)">
            <ExperienceList
              exps={[
                {
                  title: "botbox+",
                  period: "2023-12 ~ 2024-08",
                  desc: (
                    <span>
                      리모컨 추종 로봇 V2, STM32/RTOS/UWB/계층설계, 특허등록
                    </span>
                  ),
                },
                {
                  title: "CARYAK",
                  period: "2022-02 ~ 2023-07",
                  desc: (
                    <span>
                      자동차정비 예약/관리 시스템, Next.js/NestJS/지도/인덱싱
                    </span>
                  ),
                },
                {
                  title: "개발새발",
                  period: "2023-01 ~",
                  desc: (
                    <span>
                      기록/기술 블로그, Notion DB/Next.js/Nextra/서버리스
                    </span>
                  ),
                },
              ]}
            />
          </Section>

          {/* 학력, 병역, 자격증 */}
          <Section title="학력 및 기타">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-bold mb-1">학력</h3>
                <div className="ml-1">
                  <strong>한남대학교</strong>
                  <br />
                  컴퓨터통신무인기술학과 (컴퓨터 트랙) 학사
                  <br />
                  2015-03 ~ 2021-03
                </div>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-1">병역</h3>
                <div className="ml-1">
                  20사단 62여단 109기보대대
                  <br />
                  무전통신운영병
                  <br />
                  2017-06 ~ 2019-02
                </div>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-1">자격증/수상</h3>
                <div className="ml-1">
                  정보처리기사 (2021.07, 한국산업인력공단)
                  <br />
                  리눅스마스터 2급 (2020.06, KAIT)
                </div>
              </div>
            </div>
          </Section>

          {/* 빠른 링크 */}
          <Section title="Quick Links" className="mt-16">
            <div className="flex flex-col md:flex-row gap-8 mt-8">
              <Link
                href="/project"
                className="text-xl font-bold underline text-blue-500"
              >
                🗂️ 프로젝트 바로가기
              </Link>
              <Link
                href="/til"
                className="text-xl font-bold underline text-blue-500"
              >
                📘 TIL 문서 바로가기
              </Link>
              <Link
                href="/docs"
                className="text-xl font-bold underline text-blue-500"
              >
                📚 문서정리 바로가기
              </Link>
            </div>
          </Section>
        </div>
      </main>
    </>
  );
}
