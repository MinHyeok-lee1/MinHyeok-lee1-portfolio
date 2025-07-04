import React from "react";

type SectionProps = {
  title: React.ReactNode;
  children: React.ReactNode;
  className?: string;
};

export default function Section({
  title,
  children,
  className = "",
}: SectionProps) {
  return (
    <section className={`mt-12 ${className}`}>
      <h2 className="text-2xl font-bold mb-4 border-l-4 border-orange-400 pl-3">
        {title}
      </h2>
      <div>{children}</div>
    </section>
  );
}
