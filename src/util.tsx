import DOMPurify from 'dompurify';
import { JSX } from 'react';
import VideoGallery from './components/VideoGallery/VideoGallery';
import { Pic, TranslationParagraph } from './interfaces/global';

const getPicHtml = (pic?: Pic | Pic[], picId?: string) =>
	pic ? (
		Array.isArray(pic) ? (
			<div className='pic-grid' key={picId}>
				{pic.map((p, i) => (
					<div key={(picId || '') + i} className={`pic ${p.class || ''}`} style={p.style}>
						<img src={p.src} />
					</div>
				))}
			</div>
		) : (
			<div className={`pic ${pic.class || ''}`} key={picId} style={pic.style}>
				<img src={pic.src} />
			</div>
		)
	) : null;

export function getParagraphHtml(p: TranslationParagraph, paragraphId: string) {
	if (typeof p === 'string') {
		return <p key={paragraphId} dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(p) }}></p>;
	}

	if (Array.isArray(p) || p.type === 'pic') {
		return <div key={paragraphId}>{getPicHtml(p, paragraphId)}</div>;
	}

	if (p.type === 'header') {
		const HeaderTag = `h${p.level || 5}` as keyof JSX.IntrinsicElements;
		return (
			<HeaderTag key={paragraphId} dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(p.text) }}></HeaderTag>
		);
	}

	if (p.type === 'list') {
		const listItems = p.listItems.map((item, j) => {
			const listItemId = `${paragraphId}.listItems.${j}`;
			if (typeof item === 'string') {
				return <li key={listItemId} dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(item) }}></li>;
			}
			if (Array.isArray(item) || item.type === 'pic') {
				const getStyledPic = (pic: Pic) => ({ ...pic, style: { ...(pic.style || {}), marginBlock: '20px' } });
				const styledPics = Array.isArray(item) ? item.map(getStyledPic) : getStyledPic(item);
				return getPicHtml(styledPics, listItemId);
			}
			return null;
		});
		if (p.listType === 'ul') {
			return <ul key={paragraphId}>{listItems}</ul>;
		}
		if (p.listType === 'ol') {
			return <ol key={paragraphId}>{listItems}</ol>;
		}
		return null;
	}

	if (p.type === 'info-box') {
		return (
			<div key={paragraphId} className='info-box'>
				<div className='info-box-header'>{p.header}</div>
				{p.paragraphs.map((para, k) => (
					<div key={paragraphId + k}>{para}</div>
				))}
			</div>
		);
	}

	if (p.type === 'video-gallery') {
		return <VideoGallery key={paragraphId} wrapperKey={paragraphId} eps={p.eps} />;
	}

	return null;
}
