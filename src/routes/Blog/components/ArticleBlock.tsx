import YoutubeVideo from '@/components/YoutubeVideo/YoutubeVideo';
import { Block } from '@/interfaces/Article';

interface ArticleBlockProps {
	block: Block;
}

export default function ArticleBlock({ block }: ArticleBlockProps) {
	if (block.type === 'text') {
		return (
			<p
				className={block.classes?.join(' ')}
				style={block.style}
				dangerouslySetInnerHTML={{ __html: block.content }}
			/>
		);
	}

	if (block.type === 'img') {
		return (
			<div className={`blog-pics ${block.classes?.join(' ')}`} style={block.style}>
				{block.content.map((img, j) => (
					<div key={j} className={`pic ${img.class || ''}`} style={img.wrapperStyle}>
						<img src={`/images/blog/${img.name}`} style={img.style} alt='' />
						{img.caption && <span className='caption' dangerouslySetInnerHTML={{ __html: img.caption }} />}
					</div>
				))}
			</div>
		);
	}

	if (block.type === 'list') {
		const ListTag = block.listType === 'ul' ? 'ul' : 'ol';
		return (
			<ListTag className={block.classes?.join(' ')} style={block.style}>
				{block.content.map((item, index) => (
					<li key={index}>{item}</li>
				))}
			</ListTag>
		);
	}

	if (block.type === 'video') {
		return <YoutubeVideo url={block.url} />;
	}

	return null;
}
