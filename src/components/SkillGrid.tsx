import React from "react";

type Skill = { category: string; items: string[] };

export default function SkillGrid({ skills }: { skills: Skill[] }) {
  return (
    <div className="grid md:grid-cols-2 gap-8 mt-4">
      {skills.map((skill, i) => (
        <div key={i}>
          <h3 className="text-xl font-semibold mb-1">{skill.category}</h3>
          <ul className="list-disc ml-6">
            {skill.items.map((item, j) => (
              <li key={j}>{item}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}
