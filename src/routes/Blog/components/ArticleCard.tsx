import MoreButton from '@/components/MoreButton';
import { Article } from '@/interfaces/Article';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const allArticlesGlob = import.meta.glob<Article>('/src/blog/*.json');

export default function ArticleCard({ articlePath }: { articlePath: string }) {
	const navigate = useNavigate();

	const [article, setArticle] = useState<Article>();

	useEffect(() => {
		if (article) return;
		const loadArticle = async () => {
			const articleModule: Article = await allArticlesGlob[articlePath]();
			setArticle(articleModule);
		};
		loadArticle();
	}, [article, articlePath]);

	const formatDate = (dateString: string) => {
		const date = new Date(dateString);
		return date.toLocaleDateString('hu-HU', {
			year: 'numeric',
			month: 'long',
			day: 'numeric',
		});
	};

	const getSnippet = () => {
		if (article?.snippet) {
			return article.snippet;
		}
		const textBlocks = article?.blocks.filter((b) => b.type === 'text');
		if (!textBlocks || textBlocks.length === 0) return '';
		const content = textBlocks.map((b) => (b.type === 'text' ? b.content : '')).join(' ');
		return content.slice(0, 500);
	};

	if (!article) {
		return null;
	}

	return (
		<div className='article-card'>
			<div className='pic' onClick={() => navigate(`/blog/${article.id}`)} style={{ cursor: 'pointer' }}>
				<img
					src={`/src/assets/images/blog/${article.cover.name}`}
					style={article.cover.style}
					alt={article.title}
				/>
				{/* </div> */}
			</div>
			<div className='text'>
				<div className='title'>{article.title}</div>
				{article.subtitle && <div className='subtitle'>{article.subtitle}</div>}
				<div className='meta'>
					{formatDate(article.date)}
					{article.author && <> | </>}
					{article.author && <span className='author'>{article.author}</span>}
				</div>
				<div className='snippet' dangerouslySetInnerHTML={{ __html: getSnippet() }} />
			</div>
			<div className='to-article'>
				<MoreButton onClick={() => navigate(`/blog/${article.id}`)} />
			</div>
		</div>
	);
}
