export interface Article {
	id: string;
	title: string;
	subtitle?: string;
	date: string;
	author: string;
	blocks: Block[];
	cover: Img;
	innerCover?: Img;
	snippet?: string;
}

export type Block =
	| {
			type: 'text';
			content: string;
			classes?: string[];
			style?: Record<string, unknown>;
	  }
	| {
			type: 'list';
			content: string[];
			listType: 'ul' | 'ol';
			classes?: string[];
			style?: Record<string, unknown>;
	  }
	| {
			type: 'img';
			content: Img[];
			classes?: string[];
			style?: Record<string, unknown>;
	  }
	| {
			type: 'video';
			url: string;
	  };

export type Img = {
	name: string;
	style?: Record<string, unknown>;
	caption?: string;
	class?: string;
	wrapperStyle?: Record<string, unknown>;
};
