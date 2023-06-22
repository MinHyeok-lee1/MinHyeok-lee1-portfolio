/** @type {import('nextra-theme-docs').DocsThemeConfig} */
export default {
  editLink: { text: "" },
  feedback: { content: "" },
  logo: <strong>Nextra Docs</strong>,
  useNextSeoProps() {
    return {
      titleTemplate: "%s – LMH",
    };
  },
  sidebar: {
    toggleButton: true,
  },
};
