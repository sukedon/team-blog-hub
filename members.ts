import { Member } from "@src/types";

export const members: Member[] = [
    {
        name: "Zenn",
        avatarSrc: "/avatars/zenn.jpg",
        sources: ["https://zenn.dev/sukedon/feed?include_scraps=1"],
        websiteUrl: "https://zenn.dev/sukedon",
    },
    {
        name: "はてなブログ",
        avatarSrc: "/avatars/hatena.png",
        sources: ["https://www.stmn.tech/rss"],
        websiteUrl: "https://www.stmn.tech/",
    },
    {
        name: "Qiita",
        avatarSrc: "/avatars/qiita.png",
        sources: ["https://qiita.com/sukedon/feed"],
        websiteUrl: "https://qiita.com/sukedon",
    },
];
