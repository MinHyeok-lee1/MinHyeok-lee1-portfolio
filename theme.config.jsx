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
    )
  }
};