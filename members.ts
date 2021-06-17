import { Member } from "@src/types";

export const members: Member[] = [
  {
    name: "すけどん",
    role: "雑用",
    bio:
      "Unityエンジニア",
    avatarSrc: "/avatars/sukedon.jpg",
    sources: [
        "https://zenn.dev/sukedon/feed",
        "https://www.stmn.tech/rss",
        "https://qiita.com/sukedon/feed",
    ],
    includeUrlRegex: "zenn.dev|www.stmn|qiita.com",
    twitterUsername: "stamina_tech",
    githubUsername: "sukedon",
    websiteUrl: "https://stmn.tech/",
  },
];
