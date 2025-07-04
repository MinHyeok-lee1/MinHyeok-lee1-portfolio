import React from "react";

type Item = { label: string; value: React.ReactNode };

export default function InfoList({ items }: { items: Item[] }) {
  return (
    <ul className="text-lg space-y-2">
      {items.map((item, i) => (
        <li key={i}>
          <b>{item.label}</b>: {item.value}
        </li>
      ))}
    </ul>
  );
}
