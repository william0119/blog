export default {
  title: "William's Blog",
  description: "Keep Life Moving",
  base: "/blog/",
  head: [["link", { rel: "icon", href: "/favicon.ico" }]],
  socialLinks: [{ icon: "github", link: "https://github.com/william0119" }],
  themeConfig: {
    siteTitle: "William",
    logo: "/logo.svg",
    nav: [
      {
        text: "Web-FE",
        items: [
          {
            items: [
              { text: "js", link: "/web-fe/test" },
              { text: "css", link: "/web-fe/test" },
              { text: "html", link: "/web-fe/test" },
            ],
          },
          {
            items: [{ text: "interview", link: "/web-fe/test" }],
          },
        ],
      },
      { text: "Workspace", link: "/workspace/test" },
      { text: "Utils", link: "/utils/test" },
      { text: "Memoirs", link: "/memoirs/序言" },
    ],
    sidebar: {
      "/memoirs/": [
        {
          text: "序言测试1",
          items: [
            { text: "序言", link: "/memoirs/序言" },
            // { text: "序言", link: "/memoirs/序言" },
          ],
        },
        {
          text: "序言测试2",
          items: [{ text: "序言2", link: "/memoirs/序言 copy" }],
        },
      ],
    },
    footer: {
      message: "策马同游，烟雨如梦",
      copyright: "William Wu",
    },
  },
};
