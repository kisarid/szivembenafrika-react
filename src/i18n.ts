import i18n from 'i18next';
import Backend from 'i18next-http-backend';
import { initReactI18next } from 'react-i18next';

const lang = localStorage.getItem('lang') || 'hu';

i18n.use(Backend).use(initReactI18next).init({
	lng: lang,
	fallbackLng: lang,
	returnObjects: true,
});

export default i18n;
