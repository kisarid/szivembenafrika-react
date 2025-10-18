import { Modal } from 'react-bootstrap';
import './NewsletterModal.scss';

export default function NewsletterModal({ show, onHide }: { show: boolean; onHide: () => void }) {
	return (
		<Modal show={show} onHide={onHide} centered dialogClassName='newsletter-modal'>
			<Modal.Header closeButton>
				<Modal.Title>Hírlevél feliratkozás</Modal.Title>
			</Modal.Header>
			<Modal.Body>
				<div id='mlb2-7014543' className='ml-form-embedContainer ml-subscribe-form ml-subscribe-form-7014543'>
					<div className='ml-form-align-center '>
						<div className='ml-form-embedWrapper embedForm'>
							<div className='ml-form-embedBody ml-form-embedBodyDefault row-form'>
								<div className='ml-form-embedContent'>
									<p>
										Iratkozz fel hírlevelünkre, ahol&nbsp;izgalmas részleteket és kulisszatitkokat
										mesélünk el működésünkről, valamint elsők között szerezhetsz tudomást induló
										kampányainkról és aktuális programjainkról.
									</p>
								</div>
								<form
									className='ml-block-form'
									action='https://assets.mailerlite.com/jsonp/526801/forms/96473227206854565/subscribe'
									data-code=''
									method='post'
									target='_blank'
								>
									<div className='ml-form-formContent'>
										<div className='ml-form-fieldRow '>
											<div className='ml-field-group ml-field-name ml-validate-required'>
												<input
													aria-label='name'
													aria-required='true'
													type='text'
													className='form-control'
													data-inputmask=''
													name='fields[name]'
													placeholder='Hogy szólíthatunk?'
													autoComplete='given-name'
												/>
											</div>
										</div>
										<div className='ml-form-fieldRow ml-last-item'>
											<div className='ml-field-group ml-field-email ml-validate-email ml-validate-required'>
												<input
													aria-label='email'
													aria-required='true'
													type='email'
													className='form-control'
													data-inputmask=''
													name='fields[email]'
													placeholder='Email'
													autoComplete='email'
												/>
											</div>
										</div>
									</div>
									<div className='ml-form-embedPermissions'>
										<div className='ml-form-embedPermissionsContent default privacy-policy'>
											<p>
												<span style={{ fontSize: '12px' }}>
													A hírlevélről a későbbiekben bármikor leiratkozhatsz, amennyiben nem
													szeretnéd tovább kapni a leveleinket.
												</span>
											</p>
										</div>
									</div>
									<input type='hidden' name='ml-submit' value='1' />
									<div className='ml-form-embedSubmit'>
										<button type='submit' className='primary'>
											Feliratkozok
										</button>
										<button disabled style={{ display: 'none' }} type='button' className='loading'>
											<div className='ml-form-embedSubmitLoad'></div>
											<span className='sr-only'>Loading...</span>
										</button>
									</div>
									<input type='hidden' name='anticsrf' value='true' />
								</form>
							</div>
							<div className='ml-form-successBody row-success' style={{ display: 'none' }}>
								<div className='ml-form-successContent'>
									<h4>Köszönjük!</h4>
									<p>Sikeresen feliratkoztál szervezetünk hírlevelére!</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</Modal.Body>
		</Modal>
	);
}
