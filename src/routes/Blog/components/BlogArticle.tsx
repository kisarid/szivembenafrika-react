import StickyHeader from '@/components/StickyHeader/StickyHeader';
import { Article } from '@/interfaces/Article';
import { Container } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import ArticleBlock from './ArticleBlock';

export default function BlogArticle() {
	const { articleId } = useParams();

	const formatDate = (dateString: string) => {
		const date = new Date(dateString);
		return date.toLocaleDateString('hu-HU', {
			year: 'numeric',
			month: 'long',
			day: 'numeric',
		});
	};

	const coverImg = article.innerCover || article.cover;

	return (
		<div>
			<Container className='article-view'>
				<StickyHeader
					small
					subheader={
						<div>
							<div>{selectedArticle.title}</div>
							{selectedArticle.subtitle && (
								<div className='article-subtitle'>{selectedArticle.subtitle}</div>
							)}
							<div className='article-header'>
								<div className='meta'>
									{new Date(selectedArticle.date).toLocaleDateString('hu-HU', {
										year: 'numeric',
										month: 'long',
										day: 'numeric',
									})}
									{selectedArticle.author && <> | </>}
									{selectedArticle.author && <span className='author'>{selectedArticle.author}</span>}
								</div>
							</div>
						</div>
					}
					onBackClick={handleBackClick}
				>
					Blog
				</StickyHeader>
				{coverImg && (
					<div className='pic'>
						<img src={`/images/blog/${coverImg.name}`} style={coverImg.style} alt={article.title} />
						{coverImg.caption && (
							<span className='caption' dangerouslySetInnerHTML={{ __html: coverImg.caption }} />
						)}
					</div>
				)}
				<div className='blog-text'>
					{article.blocks.map((block, i) => (
						<ArticleBlock key={i} block={block} />
					))}
				</div>
			</Container>
		</div>
	);
}
