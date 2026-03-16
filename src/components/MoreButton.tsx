import { useTranslation } from 'react-i18next';

export default function MoreButton({ back, onClick }: { back?: boolean; onClick?: () => void }) {
	const { t } = useTranslation('translation', { keyPrefix: 'global' });

	return (
		<div className='link' onClick={onClick}>
			{back ? `← ${t(($) => $['back'])}` : `${t(($) => $['more'])} →`}
		</div>
	);
}
