// components/LabelIcons.tsx
export default function LabelIcons() {
  return (
    <span className="inline-flex items-center bg-transparent dark:bg-[#94A3B8] rounded px-2 py-1">
      <img src="/vercel.svg" width={18} className="mr-1.5" alt="Vercel" />
      <span className="text-black dark:text-black">Nextra(포트폴리오)</span>
      <span className="mx-2 text-black">|</span>
      <img src="/github.svg" width={24} className="mr-1" alt="GitHub" />
      <span className="text-black dark:text-black">GitHub(원본)</span>
    </span>
  );
}
