import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { useTheme } from "next-themes";

interface ProjectItemProps {
  data: {
    cover: {
      file?: { url: string };
      external?: { url: string };
    };
    properties: ProjectItemProperty;
  };
}

export type ProjectItemProperty = {
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

export default function ProjectItem({ data }: ProjectItemProps) {
  const { resolvedTheme } = useTheme();
  const [isHovered, setIsHovered] = useState<string | null>(null);
  const [imageError, setImageError] = useState(false);

  const { 이름, 개발문서, 깃허브, 설명, 태그, 날짜 } = data.properties;

  const projectTitle = 이름.title?.[0]?.plain_text ?? "제목 없음";
  const githubLink = 깃허브?.url;
  const documentLink = `docs/${개발문서?.url?.replace(/^\/+/, "")}`;
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
    return Math.ceil(
      Math.abs(endDate.getTime() - startDate.getTime()) / (1000 * 60 * 60 * 24)
    );
  };

  return (
    <div className="project-card">
      <div className="relative w-full h-0 pb-[20%] bg-gray-100 text-center flex items-center justify-center rounded">
        {imgSrc && !imageError ? (
          <Image
            fill
            src={
              imgSrc
                ? `/api/notion-image?url=${encodeURIComponent(imgSrc)}`
                : ""
            }
            alt="cover image"
            className="object-contain rounded"
            sizes="auto"
            quality={100}
            onError={() => setImageError(true)}
            priority
          />
        ) : !imgSrc ? (
          <div className="flex justify-center items-center w-full h-full">
            <svg
              className="animate-spin h-6 w-6 text-gray-400"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
            >
              <circle
                className="opacity-25"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                strokeWidth="4"
              ></circle>
              <path
                className="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8v4l3-3-3-3v4a8 8 0 100 16v-4l-3 3 3 3v-4a8 8 0 01-8-8z"
              ></path>
            </svg>
          </div>
        ) : (
          <span className="text-sm text-gray-500">cover image</span>
        )}
      </div>

      <div className="p-4 flex flex-col">
        <h1 className="text-2xl font-bold">{projectTitle}</h1>
        <h3 className="mt-3 text-xl">{description}</h3>

        {(githubLink || documentLink) && (
          <div
            style={{
              position: "relative",
              display: "inline-block",
              cursor: "pointer",
            }}
            onMouseEnter={() => setIsHovered("/devDocs")}
            onMouseLeave={() => setIsHovered(null)}
          >
            <span
              style={{
                textDecoration: "underline",
                color:
                  resolvedTheme === "dark"
                    ? isHovered === "/devDocs"
                      ? "#94A3B8"
                      : "#A9A9A9"
                    : resolvedTheme === "light" && isHovered === "/devDocs"
                    ? "#64748B"
                    : "#008AE6",
                position: "relative",
              }}
            >
              개발문서 바로가기
            </span>
            <Link
              href={githubLink || documentLink}
              style={{
                position: "absolute",
                left: 0,
                top: 0,
                width: "100%",
                height: "100%",
                opacity: 0,
              }}
            ></Link>
          </div>
        )}

        <p className="my-1">
          작업기간 : {start} ~ {end} ({calculatePeriod(start, end)}일)
        </p>
        <div className="flex flex-wrap mt-2 gap-2 break-all">
          {tags.map((tag) => (
            <span
              key={tag.id}
              onMouseEnter={() => setIsHovered(tag.id)}
              onMouseLeave={() => setIsHovered(null)}
              style={{
                color:
                  resolvedTheme === "dark"
                    ? isHovered === tag.id
                      ? "#FFFFFF"
                      : "#94A3B8"
                    : resolvedTheme === "light" && isHovered === tag.id
                    ? "#000000"
                    : "#64748B",
              }}
              className="px-2 py-1 rounded-md bg-sky-200 dark:bg-sky-700 w-fit transition-colors duration-200"
            >
              {tag.name}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
