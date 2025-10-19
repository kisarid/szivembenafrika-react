import { ReactNode } from 'react';
import MoreButton from '../MoreButton';
import './StickyHeader.scss';

export default function StickyHeader({
	children,
	subheader,
	small,
	onBackClick,
}: {
	children: React.ReactNode;
	subheader?: ReactNode | string;
	small?: boolean;
	onBackClick?: () => void;
}) {
	return (
		<div className='header'>
			<div className={`header-main ${small ? 'small' : ''}`}>{children}</div>
			<div className='header-misc'>
				{subheader ? <div className='subheader'>{subheader}</div> : null}
				{onBackClick ? <MoreButton back onClick={onBackClick} /> : null}
			</div>
		</div>
	);
}
