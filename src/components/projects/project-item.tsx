import Image from "next/image";
import { TypeFlags } from "typescript";

export default function ProjectItem({ data }) {
  const projectTitle = data.properties.이름.title[0].plain_text;
  const githubLink = data.properties.깃허브.url;
  const description = data.properties.설명.rich_text[0].plain_text;
  const imgSrc = data.cover.file?.url || data.cover.external.url;
  const tags = data.properties.태그.multi_select;
  const start = data.properties.날짜.date.start;
  const end = data.properties.날짜.date.end;

  const calculatedPeriod = (start, end) => {
    const startDateStringArray = start.split("-");
    const endDateStringArray = end.split("-");

    let startDate = new Date(
      startDateStringArray[0],
      startDateStringArray[1],
      startDateStringArray[2]
    );
    let endDate = new Date(
      endDateStringArray[0],
      endDateStringArray[1],
      endDateStringArray[2]
    );

    const diffInMs = Math.abs(Number(endDate) - Number(startDate));
    const result = diffInMs / (1000 * 60 * 60 * 24);

    console.log(`기간 : ${result}`);
    return result;
  };

  return (
    <div className="project-card">
      <div
        style={{
          width: "100%", 
          height: "60%",
          position: "relative",
          paddingBottom: "20%",
        }}
      >
        <Image
          fill
          className="rounded t-xl"
          src={imgSrc}
          alt="cover image"
          sizes="100vw"
          quality={100}
          layout="fill"
          //   objectFit="contain" // Scale your image down to fit into the container
        />
      </div>

      <div className="p-4 flex flex-col">
        <h1 className="text-2xl font-bold"> {projectTitle}</h1>
        <h3 className="mt-4 text-xl">{description}</h3>
        <a href={githubLink}>깃허브 바로가기</a>
        <p className="my-1">
          작업기간 : {start} ~ {end} ({calculatedPeriod(start, end)}일)
        </p>
        <div className="flex items-start mt-2">
          {tags.map((aTag) => (
            <h1
              className="px-2 py-1 mr-2 rounded-md bg-sky-200 dark:bg-sky-700 w-30"
              key={aTag.id}
            >
              {aTag.name}
            </h1>
          ))}
        </div>
      </div>
    </div>
  );
}
