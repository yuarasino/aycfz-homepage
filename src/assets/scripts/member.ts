export interface IMemberProfile {
  nameJP: string
  nameEN: string
  position: string
  description: string
  icon: string
  illust: string
  twitter: string
  youtube: string
}

export const memberProfiles = [
  {
    nameJP: "えーたろう",
    nameEN: "Ataro",
    position: "異世界転生系VTuber",
    description:
      "転生したら帝国軍人の女の子でした……\n" +
      "のんびり気ままにゲーム配信やってます！！\n" +
      "#えごさろう #絵ーたろう #業務用絵ーたろう",
    icon: "/icons/a_twitter_icon.jpg",
    illust: "/illusts/a_member_illust.png",
    twitter: "https://twitter.com/ataro_channel",
    youtube: "https://www.youtube.com/c/Atarochannel",
  },
  {
    nameJP: "新篠ゆう",
    nameEN: "YuArasino",
    position: "バーチャル美少女プログラマー",
    description:
      "バーチャル美少女プログラマー/麻雀VTuberの新篠ゆうです！\n" +
      "雀魂よく打ってます！\n" +
      "#あらしのゆう #あらしのあーと",
    icon: "/icons/y_twitter_icon.jpg",
    illust: "/illusts/y_member_illust.png",
    twitter: "https://twitter.com/yuarasino",
    youtube: "https://www.youtube.com/c/yuarasino",
  },
  {
    nameJP: "稚児",
    nameEN: "Chigo",
    position: "バーチャル22歳",
    description:
      "天鳳は昔色々やっていたバーチャル22歳です\n" +
      "Twitterの使い方がVらしくないと最近言われます\n" +
      "#ちごあーと #えーゆーちごふれ何切る #ちご検討",
    icon: "/icons/c_twitter_icon.jpg",
    illust: "/illusts/c_member_illust.png",
    twitter: "https://twitter.com/chigo0822",
    youtube: "https://www.youtube.com/c/chigochannel",
  },
  {
    nameJP: "獅子ヶ谷フレア",
    nameEN: "FlareShishigaya",
    position: "元プロ雀士VTuber",
    description:
      "〖 灼熱の若獅子(多井隆晴p命名)〗こと、元プロ雀士Vtuber･ 獅子ヶ谷フレアです！\n" +
      "配信は麻雀が9割です！\n" +
      "#獅子ヶ谷フレア #灼熱の若獅子",
    icon: "/icons/f_twitter_icon.jpg",
    illust: "/illusts/f_member_illust.png",
    twitter: "https://twitter.com/FLARE_lupus",
    youtube: "https://www.youtube.com/channel/UCS9Obb1VyV-mEmFtlK1RzoA",
  },
  {
    nameJP: "世闇イズモ",
    nameEN: "IzumoYoyami",
    position: "天才つよつよ悪魔系VTuber",
    description:
      "小説の世界からバーチャルへ、個人Vtuberの世闇イズモだよ！\n" +
      "ネット小説読む悪魔、小説好き集まれ！\n" +
      "#世闇のお供 #世闇アート",
    icon: "/icons/z_twitter_icon.jpg",
    illust: "/illusts/z_member_illust.png",
    twitter: "https://twitter.com/izumo_yoyami",
    youtube: "https://www.youtube.com/c/zumochannel",
  },
] as IMemberProfile[]
