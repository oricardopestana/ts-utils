import { defineConfig } from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "TS-utils",
  description: "Utils for TypeScript",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [{ text: "Home", link: "/" }],

    sidebar: [
      {
        text: "ts-utils",
        items: [{ text: "Utility types", link: "/ts-utils/utility-types" }],
        collapsed: true,
      },
      {
        text: "date-utils",
        items: [
          { text: "Date utils", link: "/date-utils/date-utils" },
          { text: "Date parsing", link: "/date-utils/date-parsing" },
          { text: "Date validation", link: "/date-utils/date-validation" },
        ],
        collapsed: true,
      },
      {
        text: "Utility functions",
        items: [{ text: "useAsync", link: "/utility-functions/use-async" }],
        collapsed: true,
      },
    ],

    socialLinks: [
      { icon: "github", link: "https://github.com/oricardopestana/ts-utils" },
      { icon: "npm", link: "https://www.npmjs.com/package/@oricardopestana/ts-utils" },
    ],
    footer: {
      message: "Released under the MIT License.",
      copyright: "Copyright © 2026-present oricardopestana",
    },
  },
});
