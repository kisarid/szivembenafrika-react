import { Bio } from '@/interfaces/Bio';
import { Modal } from 'react-bootstrap';
import { ReactSVG } from 'react-svg';

export default function TeamModal({ show, bio, onHide }: { show: boolean; bio?: Bio; onHide: () => void }) {
	if (!bio) return null;

	return (
		<Modal className='team-modal' show={show} onHide={onHide} size='lg' centered fullscreen='sm-down'>
			<ReactSVG src='src/assets/icons/close.svg' className='team-modal-close' onClick={onHide} />
			<Modal.Body>
				<div className='team-modal-image'>
					<img src={`src/assets/images/${bio.image}`} style={{ objectPosition: bio.objectPosition }} />
				</div>
				<div className='team-modal-text'>
					<div className='moyo-header'>{bio.name}</div>
					{(bio.longBio || []).map((paragraph, i) => (
						<p key={bio.id + i}>{paragraph}</p>
					))}
				</div>
			</Modal.Body>
		</Modal>
	);
}
