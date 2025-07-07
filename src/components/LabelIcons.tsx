// components/LabelIcons.tsx
export default function LabelIcons() {
  return (
    <span
      style={{
        display: "inline-flex",
        alignItems: "center",
      }}
    >
      <img
        src="/vercel.svg"
        width={18}
        style={{
          marginRight: 4,
        }}
        alt="Vercel"
      />
      Nextra(포트폴리오)
      <span style={{ margin: "0 8px" }}>|</span>
      <img
        src="/github.svg"
        width={24}
        style={{
          marginRight: 1,
        }}
        alt="GitHub"
      />
      GitHub(원본)
    </span>
  );
}
