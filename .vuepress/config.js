module.exports = {
  title: "ObjD",
  description: "objD is a framework for developing Datapacks for Minecraft.",
  head: [
    ["link", { rel: "icon", href: "/logo.png" }],
    ["link", { rel: "manifest", href: "/manifest.json" }],
    ["meta", { name: "theme-color", content: "#1069b4" }],
    ["meta", { name: "apple-mobile-web-app-capable", content: "yes" }],
    [
      "meta",
      { name: "apple-mobile-web-app-status-bar-style", content: "black" },
    ],
    ["link", { rel: "apple-touch-icon", href: "/icons/icon-152x152.png" }],
    [
      "link",
      {
        rel: "mask-icon",
        href: "/icons/safari-pinned-tab.svg",
        color: "#1069b4",
      },
    ],
    [
      "meta",
      { name: "msapplication-TileImage", content: "/icons/icon-144x144.png" },
    ],
    ["meta", { name: "msapplication-TileColor", content: "#1069b4" }],
  ],
  dest: "docs",
  themeConfig: {
    sidebar: "auto",
    logo: "/logo.png",
    lastUpdated: "Last Updated",
    nav: [
      { text: "Guide", link: "/guide/" },
      { text: "Basics", link: "/basics/" },
      { text: "Wrappers", link: "/wrappers/" },
      { text: "Texts", link: "/texts/" },
      { text: "Utils", link: "/utils/" },
      { text: "Modules", link: "/modules/" },
      { text: "CLI", link: "/cli/" },
      { text: 'Github', link: 'https://github.com/Stevertus/objD' }
    ],
    algolia: {
      apiKey: "e5a445386ffde17466c8fc95f42b0915",
      indexName: "objd",
    },
  },
  plugins: [
    "@vuepress/last-updated",
    [
      "@vuepress/pwa",
      {
        serviceWorker: true,
        updatePopup: true,
      },
    ],
  ],
};
