import './StickyHeader.scss';

export default function StickyHeader({
	children,
	description,
	small,
}: {
	children: React.ReactNode;
	description?: string;
	small?: boolean;
}) {
	return (
		<div className='header'>
			<div className={`header-main ${small ? 'small' : ''}`}>{children}</div>
			{description ? <div className='header-description'>{description}</div> : null}
		</div>
	);
}
