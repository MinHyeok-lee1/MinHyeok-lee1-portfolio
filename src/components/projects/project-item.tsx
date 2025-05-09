import Image from "next/image";

interface ProjectItemProps {
  data: {
    cover: {
      file?: { url: string };
      external?: { url: string };
    };
    properties: {
      이름: {
        title: { plain_text: string }[];
      };
      개발문서: { url: string };
      깃허브: { url: string };
      설명: {
        rich_text: { plain_text: string }[];
      };
      태그: {
        multi_select: { id: string; name: string }[];
      };
      날짜: {
        date: {
          start: string;
          end: string;
        };
      };
    };
  };
}

export default function ProjectItem({ data }: ProjectItemProps) {
  const {
    이름,
    개발문서,
    깃허브,
    설명,
    태그,
    날짜,
  } = data.properties;

  const projectTitle = 이름.title?.[0]?.plain_text ?? "제목 없음";
  const githubLink = 깃허브?.url;
  const documentLink = 개발문서?.url;
  const description = 설명.rich_text?.[0]?.plain_text ?? "";
  const imgSrc = data.cover?.file?.url ?? data.cover?.external?.url ?? "";
  const tags = 태그.multi_select ?? [];
  const start = 날짜?.date?.start ?? "";
  const end = 날짜?.date?.end ?? "";

  const calculatePeriod = (start: string, end: string): number => {
    if (!start || !end) return 0;
    const [sy, sm, sd] = start.split("-").map(Number);
    const [ey, em, ed] = end.split("-").map(Number);
    const startDate = new Date(sy, sm - 1, sd);
    const endDate = new Date(ey, em - 1, ed);
    return Math.ceil(Math.abs(endDate.getTime() - startDate.getTime()) / (1000 * 60 * 60 * 24));
  };

  return (
    <div className="project-card">
      <div className="relative w-full h-0 pb-[20%]">
        <Image
          fill
          src={imgSrc}
          alt="cover image"
          className="rounded t-xl"
          sizes="auto"
          quality={100}
        />
      </div>

      <div className="p-4 flex flex-col">
        <h1 className="text-2xl font-bold">{projectTitle}</h1>
        <h3 className="mt-3 text-xl">{description}</h3>
        {(githubLink || documentLink) && (
          <a
            href={githubLink || documentLink}
            className="pt-1 underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            개발문서 바로가기
          </a>
        )}
        <p className="my-1">
          작업기간 : {start} ~ {end} ({calculatePeriod(start, end)}일)
        </p>
        <div className="flex flex-wrap mt-2 gap-2 break-all">
          {tags.map((tag) => (
            <span
              key={tag.id}
              className="px-2 py-1 rounded-md bg-sky-200 dark:bg-sky-700 w-fit"
            >
              {tag.name}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
