export default {
  title: "William's Blog",
  description: "Keep Life Moving",
  base: "/blog/",
  lastUpdated: true,
  head: [["link", { rel: "icon", href: "/favicon.ico" }]],
  themeConfig: {
    siteTitle: "William",
    logo: "/logo.svg",
    author: "william",
    lastUpdatedText: "Updated Date",
    socialLinks: [
      {
        icon: {
          svg: '<svg t="1680428721371" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="3723" width="24" height="24"><path d="M579.867 511.932c-11.67 0-23.344 10.837-23.344 24.178 0 10.839 11.668 21.678 23.344 21.678 17.514 0 30.020-10.839 30.020-21.678 0-13.34-12.505-24.178-30.020-24.178v0zM503.154 399.36c18.345 0 30.020-11.67 30.020-29.185 0-18.345-11.675-29.183-30.020-29.183-17.51 0-34.188 10.839-34.188 29.183-0.001 17.517 16.678 29.185 34.188 29.185v0zM512.326 0.56c-282.655 0-511.788 229.133-511.788 511.788 0 282.653 229.133 511.786 511.788 511.786 282.653 0 511.786-229.133 511.786-511.786 0.001-282.655-229.132-511.788-511.786-511.788v0zM415.602 642.009c-30.855 0-53.369-4.999-82.553-13.341l-84.218 42.53 24.186-71.715c-59.204-41.689-94.228-94.221-94.228-158.428 0-113.403 106.733-200.123 236.814-200.123 115.069 0 217.633 68.377 237.644 165.106-8.338-1.671-15.844-2.502-22.514-2.502-113.403 0-200.954 85.049-200.954 187.613 0 17.508 2.502 33.351 6.671 50.030-6.671 0.829-14.178 0.829-20.849 0.829v0zM763.314 723.724l16.674 60.041-63.371-35.854c-24.18 4.999-47.529 12.505-71.709 12.505-111.737 0-200.123-76.711-200.123-171.769 0-95.058 88.388-171.771 200.123-171.771 105.895 0 200.954 76.713 200.954 171.771 0 53.362-35.854 100.891-82.548 135.078v0zM338.053 340.992c-17.51 0-35.854 10.839-35.854 29.183 0 17.516 18.343 29.19 35.854 29.19 16.679 0 30.020-11.675 30.020-29.19 0-18.343-13.341-29.183-30.020-29.183v0zM710.783 511.932c-12.51 0-23.349 10.837-23.349 24.178 0 10.839 10.839 21.678 23.349 21.678 16.674 0 29.183-10.839 29.183-21.678 0-13.34-12.509-24.178-29.183-24.178v0zM710.783 511.932z" p-id="3724"></path></svg>'
        },
        link: "https://william0119.github.io/blog/images/wechat.png"
      },
      { icon: "github", link: "https://github.com/william0119" }
    ],
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
      copyright: "Copyright © 2023-present William Wu",
    },
  },
};
