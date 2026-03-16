import { getParagraphHtml } from '@/util';
import { KeyPrefix } from 'i18next';
import { useTranslation } from 'react-i18next';
import StickyHeader from './StickyHeader/StickyHeader';

export default function ParagraphedSection({ keyPrefix }: { keyPrefix: KeyPrefix<'translation'> }) {
	const t = useTranslation('translation', { keyPrefix }).t;

	const title = t('title', { defaultValue: '' });
	const subtitle = t('subtitle', { defaultValue: '' });
	const paragraphs = t('paragraphs', { defaultValue: '' });

	if (title !== undefined && typeof title !== 'string') {
		throw new Error(`Title is not a string for keyPrefix: ${keyPrefix}`);
	}

	if (subtitle !== undefined && typeof subtitle !== 'string') {
		throw new Error(`Subtitle is not a string for keyPrefix: ${keyPrefix}`);
	}

	if (!Array.isArray(paragraphs)) {
		throw new Error(`Paragraphs is missing or not an array for keyPrefix: ${keyPrefix}`);
	}

	return (
		<>
			{title ? <StickyHeader subheader={subtitle}>{title}</StickyHeader> : null}
			<section>{paragraphs.map((p, i) => getParagraphHtml(p, `${keyPrefix}.paragraphs.${i}`))}</section>
		</>
	);
}
