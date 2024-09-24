export interface List {
	id: number;
	media: Medias;
	japaneseTitle: string;
	originalTitle?: string;
	genre: AllGenre;
	year: number;
	month: number;
	day: number;
	releaseyear: number;
	maker: string;
	country: Countrys;
	time: number;
	director: Director;
	actor: Actor;
	distribution?: string;
	productNumber: string;
	story: string;
	memo?: string;
	image: File | string;
	shop: Sales;
}

//[]オブジェクト化することにより複数指定可能になる。

export interface Medias {
	id: number;
	media: string;
}
export interface AllGenre {
	id: number;
	genre: string;
}

export interface Director {
	id: number[];
	name: string[];
}

export interface Actor {
	id: number[];
	name: string[];
}

export interface Countrys {
	id: number[];
	country: string[];
}

export interface Sales {
	id: number;
	sales: string;
}
