import React from "react";

type Exp = {
  title: string;
  period?: string;
  position?: string;
  desc: React.ReactNode;
};

export default function ExperienceList({ exps }: { exps: Exp[] }) {
  return (
    <div className="space-y-6">
      {exps.map((exp, i) => (
        <div key={i}>
          <div className="flex flex-wrap items-center gap-2">
            <span className="font-semibold text-lg">{exp.title}</span>
            {exp.period && (
              <span className="text-gray-500 text-sm">({exp.period})</span>
            )}
            {exp.position && (
              <span className="text-blue-500 font-semibold text-sm">
                {exp.position}
              </span>
            )}
          </div>
          <div className="ml-1 text-base">{exp.desc}</div>
        </div>
      ))}
    </div>
  );
}
