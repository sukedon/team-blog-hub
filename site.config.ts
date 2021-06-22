export const config = {
  siteMeta: {
    title: "Sukedon's Blog Hub",
    description:"すけどんのBlogHub",
    teamName: "Sukedon",
  },
  siteRoot:
    process.env.NODE_ENV === "production"
      ? "https://team-blog-hub-sukedon.vercel.app/"
      : "http://localhost:3000",
  headerLinks: [
    {
      title: "Works",
      href: "https://www.stmn.tech/works",
    },
    // {
    //   title: "Company",
    //   href: "https://zenn.dev/catnose99/articles/cb72a73368a547756862",
    // },
    // {
    //   title: "GitHub",
    //   href: "https://github.com/catnose99/team-blog-hub",
    // },
  ],
};
