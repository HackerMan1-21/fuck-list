import { List } from "../list/list";

export async function getAllList(): Promise<List[]> {
	return new Promise((resolve) => {
		resolve(listDummy);
	});
}

export const listDummy: List[] = [
	{
		id: 1,
		media: {
			id: 1,
			media: "DVD",
		},
		japaneseTitle: "神様なんてくそくらえ",
		originalTitle: "Heaven Knows What",
		genre: {
			id: 1,
			genre: "ドラマ",
		},
		year: 2016,
		month: 7,
		day: 2,
		releaseyear: 2014,
		maker: "トランスフォーマー",
		country: {
			id: [1],
			country: ["アメリカ"],
		},
		time: 94,
		director: {
			id: [1, 2],
			name: ["ジョシュア・サフディ", "ベニー・サフディ"],
		},
		actor: {
			id: [1, 2],
			name: ["アリエル・ホームズ", "ケイレブ・ランドリー・ジョーンズ"]
		},
		distribution: "",
		productNumber: "TMSS-344",
		story: "ニューヨークの路上に生きる19歳の少女ハーリー。同じホームレス仲間たちと、アルコールとドラッグにまみれた毎日を送っていた。恋人であるイリヤを熱烈に愛していたハーリーは、エキセントリックな彼から手首を切って愛を証明しろと言われても、ためらうことなく実行してしまう。自殺はかろうじて未遂に終わるが、そんなハーリーの前からイリヤは姿を消してしまう。それでも彼を忘れられないハーリーだったが…。",
		memo: "",
		image: "",
		shop: {
			id: 1,
			sales: "販売中",
		},
	},
	{
		id: 2,
		media: {
			id: 1,
			media: "DVD",
		},
		japaneseTitle: "デッドロック 絶対王者ボイカ",
		originalTitle: "Boyka: Undisputed",
		genre: {
			id: 2,
			genre: "アクション",
		},
		year: 2021,
		month: 2,
		day: 3,
		releaseyear: 2016,
		maker: "インターフィルム",
		country: {
			id: [1],
			country: ["アメリカ"],
		},
		time: 89,
		director: {
			id: [3],
			name: ["トドール・チャプカノフ"],
		},
		actor: {
			id: [3, 4],
			name: ["スコット・アドキンス", "テオドーラ・ドゥーホヴニコヴァ"],
		},
		distribution: "ユニバーサル",
		productNumber: "IFD-1070",
		story: "ボイカ(スコット・アドキンス)は、リングで対戦相手を事故により殺してしまう。自責の念から遺族の元を訪れるが、相手の妻がロシアン・マフィアのゾーラブから執拗に借金の取り立てを受けていた。償いの気持ちから借金の肩代わりを申し出るもゾーラブはボイカに対し自分が経営する地下格闘技場で優勝すれば帳消しにするという。しかし、出場する事になったボイカに対しゾーラブの卑劣な策が待ち受けるのであった…。",
		memo: "",
		image: "",
		shop: {
			id: 1,
			sales: "販売中",
		},
	},
	{
		id: 3,
		media: {
			id: 3,
			media: "Blu-ray",
		},
		japaneseTitle: "スタンダール・シンドローム",
		originalTitle: "The Stendhal Syndrome / La Sindrome di Stendhal",
		genre: {
			id: 1,
			genre: "ホラー",
		},
		year: 2015,
		month: 12,
		day: 2,
		releaseyear: 1996,
		maker: "Happinet",
		country: {
			id: [2],
			country: ["イタリア"],
		},
		time: 119,
		director: {
			id: [4],
			name: ["ダリオ・アルジェント"],
		},
		actor: {
			id: [5, 6],
			name: ["アーシア・アルジェント", "トーマス・クレッチマン"]
		},
		distribution: "ギャガ",
		productNumber: "HPXR-27",
		story: "イタリア・フィレンツェ。連続猟奇レイプ犯を追う若き女刑事アンナ(アーシア・アルジェント)は、情報提供者と接触するために美術館で待つ間に絵の中に吸い込まれた気分になって失神する。スタンダール・シンドロームに襲われたのだ。アンナはひとりの男性に助け起こされる。その男こそ、猟奇連続レイプ犯アルフレイド(トーマス・クレッチマン)だった。アルフレイドはその夜、ホテルでアンナを襲い、剃刀で切りつけて暴力的に犯したあげく、目の前で娼婦を惨殺して逃亡する。精神的にもダメージを受けたアンナは故郷で休養を取るが、再びアルフレイドが彼女を凌辱するために現れた・・・。",
		memo: "",
		image: "",
		shop: {
			id: 1,
			sales: "販売中",
		},
	},
	{
		id: 4,
		media: {
			id: 3,
			media: "Blu-ray",
		},
		japaneseTitle: "ビヨンド・ザ・ダークネス／嗜肉の愛",
		originalTitle: "BUIO OMEGA",
		genre: {
			id: 1,
			genre: "ホラー",
		},
		year: 2018,
		month: 1,
		day: 6,
		releaseyear: 1978,
		maker: "Happinet",
		country: {
			id: [2],
			country: ["イタリア"],
		},
		time: 91,
		director: {
			id: [5],
			name: ["ジョー・ダマト"],
		},
		actor: {
			id: [7, 8],
			name: ["キーラン・カンター", "シンツィア・モンレール"],
		},
		distribution: "",
		productNumber: "BBXF-2115",
		story: "親の遺産を受け継ぎ、深い森に囲まれた屋敷で暮らす青年フランク(K・カンター)の趣味は剥製作り。彼には美しい婚約者アンナ(C・モンレール)がいたが、年上の住み込み家政婦アイリス(F・ストッピ)が2人の関係に嫉妬し、アンナをブードゥー呪術で病死させてしまう。悲嘆に暮れたフランクは真夜中に墓を暴き、手に入れたアンナの遺体にメスを入れる。愛する者の死肉を食み、剥製にする猟奇を味わったフランクは、殺人と倒錯行為に没頭。血塗られた屋敷は死の匂いにまみれていく。",
		memo: "ホラー・マニアックスシリーズ 第10期",
		image: "",
		shop: {
			id: 2,
			sales: "廃版",
		},
	},
	{
		id: 5,
		media: {
			id: 2,
			media: "VHS",
		},
		japaneseTitle: "マニアック2001",
		originalTitle: "VIOLENT SHIT",
		genre: {
			id: 1,
			genre: "ホラー",
		},
		year: 2001,
		month: 8,
		day: 24,
		releaseyear: 1989,
		maker: "CAMVIDEO",
		country: {
			id: [3],
			country: ["ドイツ"],
		},
		time: 73,
		director: {
			id: [6],
			name: ["アンドレア・シュナース"],
		},
		actor: {
			id: [9, 10],
			name: ["K・ザ・ブッチャーシッター", "ガビ・バズナー"],
		},
		distribution: "",
		productNumber: "MA-1100",
		story: "包丁で母親を惨殺して、施設に入れられた少女カール。それから２０年後、彼は護送トラックから脱走し、本能のおもむくまま、無差別な虐殺を繰り返していく。",
		memo: "",
		image: "",
		shop: {
			id: 2,
			sales: "廃版",
		},
	},
	{
		id: 6,
		media: {
			id: 2,
			media: "VHS",
		},
		japaneseTitle: "悪魔のえじき2／デビルズ・マザー",
		originalTitle: "VIOLENT SHIT II",
		genre: {
			id: 1,
			genre: "ホラー",
		},
		year: 2001,
		month: 1,
		day: 26,
		releaseyear: 1992,
		maker: "CAMVIDEO",
		country: {
			id: [3],
			country: ["ドイツ"],
		},
		time: 80,
		director: {
			id: [6,],
			name: ["アンドレア・シュナース"],
		},
		actor: {
			id: [11, 12],
			name: ["アンドレア・ディーン", "アンケ・プロスマン"],
		},
		distribution: "",
		productNumber: "MA-1089",
		story: "「悪魔のえじき」シリーズ第２弾。１作目に登場した森の中の残酷カルト集団を率いていたあのマイスターの秘密が明かされる。なぜ、あのような冷酷な悪魔が生まれたのか？悪魔には母親がいた。それこそ、文明から離れ、狂気と残虐行為にとりつかれた魔女＝暗黒の母そのものだった。悪魔は、恐るべき母魔女に育てられていたのだ。その目を覆うような教育の全貌が明かされる！製作国ドイツでカットを要求された残酷シーンをそのまま収録！",
		memo: "",
		image: "",
		shop: {
			id: 2,
			sales: "廃版",
		},
	},
	{
		id: 7,
		media: {
			id: 2,
			media: "VHS",
		},
		japaneseTitle: "悪魔のえじき〜ブルータル デビル プロジェクト",
		originalTitle: "VIOLENT SHIT III／Zombie Doom",
		genre: {
			id: 1,
			genre: "ホラー",
		},
		year: 2000,
		month: 6,
		day: 23,
		releaseyear: 1999,
		maker: "CAMVIDEO",
		country: {
			id: [3],
			country: ["ドイツ"],
		},
		time: 80,
		director: {
			id: [6],
			name: ["アンドレア・シュナース"],
		},
		actor: {
			id: [13, 14],
			name: ["ジョー・ニューマン", "ウィニー・ホール"],
		},
		distribution: "",
		productNumber: "",
		story: "", memo: "",
		image: "",
		shop: {
			id: 2,
			sales: "廃版",
		},
	},
];
