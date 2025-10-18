import LanguageIcon from '@icons/language.svg?react';
import { useTranslation } from 'react-i18next';
import './LanguageToggle.scss';

export default function LanguageToggle({ theme }: { theme?: 'light' | 'dark' }) {
	const i18n = useTranslation().i18n;
	const setLocale = (locale: 'hu' | 'en') => i18n.changeLanguage(locale);

	return (
		<div id='language-toggle' className={theme}>
			<div className='icon'>
				<LanguageIcon />
			</div>
			<a className={`lang ${i18n.language === 'hu' ? 'selected' : ''}`} onClick={() => setLocale('hu')}>
				hu
			</a>
			<div className='divider'></div>
			<a className={`lang ${i18n.language === 'en' ? 'selected' : ''}`} onClick={() => setLocale('en')}>
				en
			</a>
		</div>
	);
}
