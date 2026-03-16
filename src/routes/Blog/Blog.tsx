import StickyHeader from '@/components/StickyHeader/StickyHeader';
import { useEffect, useMemo, useState } from 'react';
import { Container, Pagination } from 'react-bootstrap';
import './Blog.scss';
import ArticleCard from './components/ArticleCard';

const allArticlesGlob = import.meta.glob('/src/blog/*.json');
const allArticles = Object.keys(allArticlesGlob).sort().reverse();
const articlesPerPage = 8;
const totalPages = Math.ceil(allArticles.length / articlesPerPage);

export default function Blog() {
	const [currentPage, setCurrentPage] = useState(1);

	const articlesInPage = useMemo(() => {
		const startIndex = (currentPage - 1) * articlesPerPage;
		return allArticles.slice(startIndex, startIndex + articlesPerPage);
	}, [currentPage]);

	useEffect(() => {
		document.querySelector('.main-content')?.scrollTo(0, 0);
	}, [currentPage]);

	const paginationItems = useMemo(() => {
		const pages = Array(totalPages)
			.fill(undefined)
			.map((_, i) => (
				<Pagination.Item key={i + 1} active={i + 1 === currentPage} onClick={() => setCurrentPage(i + 1)}>
					{i + 1}
				</Pagination.Item>
			));

		if (pages.length <= 9) {
			return pages;
		}

		return [...pages.slice(0, 9), <Pagination.Ellipsis key='end' disabled />];
	}, [currentPage]);

	return (
		<div id='blog'>
			<StickyHeader>Blog</StickyHeader>
			<Container className='articles-list'>
				{articlesInPage.map((article) => (
					<ArticleCard key={article} articlePath={article} />
				))}
				<div className='pagination-container'>
					<Pagination>
						<Pagination.First />
						<Pagination.Prev />
						{paginationItems}
						<Pagination.Next />
						<Pagination.Last />
					</Pagination>
				</div>
			</Container>
		</div>
	);
}
