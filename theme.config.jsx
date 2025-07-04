/** @type {import('nextra-theme-docs').DocsThemeConfig} */
export default {
  editLink: { text: "" },
  feedback: { content: "" },
  logo: <strong>개발새발</strong>,
  useNextSeoProps() {
    return {
      titleTemplate: "%s – minhyeok.lee1",
    };
  },
  navigation: [
    { title: "홈", href: "/" },
    { title: "프로젝트", href: "/projects" },
    { title: "TIL문서", href: "/til" },
    { title: "문서정리", href: "/docs" },
  ],
  sidebar: {
    toggleButton: true,
  },
  footer: {
    text: (
      <span>
        © 2023 minhyeok.lee1 —
        <a href="https://instagram.com/minhyeok.lee1" target="_blank">
          @minhyeok.lee1
        </a>
      </span>
    ),
  },
};
