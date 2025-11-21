import { useMemo } from 'react';
import { NavItem, Offcanvas } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { useTranslation } from 'react-i18next';
import { NavLink, useLocation } from 'react-router-dom';
import LanguageToggle from './LanguageToggle/LanguageToggle';
import './NavBar.scss';

export default function NavBar() {
	const location = useLocation();
	const { t } = useTranslation('translation', { keyPrefix: 'navbar' });

	const menuItems = useMemo(
		() => [
			{
				label: t('1.menu'),
				children: [
					{ label: t('1.submenu1'), route: '/rolunk' },
					{ label: t('1.submenu2'), route: '/eves-beszamolok' },
				],
			},
			{
				label: t('2.menu'),
				children: [
					{ label: t('2.submenu1'), route: '/alapelvek' },
					{ label: t('2.submenu2'), route: '/hol-segitunk' },
					{ label: t('2.submenu3'), route: '/projektjeink' },
				],
			},
			{
				label: t('3.menu'),
				children: [
					{ label: t('3.submenu1'), route: '/onkentesseg' },
					{ label: t('3.submenu2'), route: '/projektjeink/akitogogon' },
					{ label: t('3.submenu3'), route: '/gyermektamogatas' },
					{ label: t('3.submenu4'), route: '/graduate-a-girl' },
					{ label: t('3.submenu5'), route: '/oktatas-tamogatas-kenya' },
					{ label: t('3.submenu6'), route: '/adomanyozas' },
					{ label: t('3.submenu7'), route: '/esemenyek' },
				],
			},
			{
				label: t('4.menu'),
				children: [
					{ label: t('4.submenu1'), route: '/media' },
					{ label: t('4.submenu2'), route: '/vlog' },
					{ label: t('4.submenu3'), route: '/blog' },
				],
			},
			{ label: t('5.menu'), route: '/tamogatok' },
			{ label: t('6.menu'), route: '/kapcsolat' },
		],
		[t]
	);

	const activeNavDropdown = useMemo(
		() =>
			menuItems.findIndex((menuItem) =>
				[menuItem.route, ...(menuItem.children || []).map((c) => c.route)]
					.filter(Boolean)
					.some((route) => location.pathname.includes(route || ''))
			),
		[location, menuItems]
	);

	return (
		<>
			<Navbar collapseOnSelect expand='xxl' className='moyo-navbar bg-body-tertiary'>
				<Container fluid>
					<Navbar.Brand as={NavLink} to='/'>
						<div className='icon'>
							<img src='/src/assets/icons/logo.png' alt='' />
						</div>
						<span>Szívemben Született Afrika</span>
					</Navbar.Brand>
					<Navbar.Toggle aria-controls='offcanvas-navbar-nav'>
						<img src='/src/assets/icons/menu-button.svg' alt='' />
					</Navbar.Toggle>
					<Navbar.Offcanvas aria-labelledby='offcanvas-navbar-nav' placement='end'>
						<Offcanvas.Header closeButton />
						<Offcanvas.Body>
							<Nav variant='pills' key={location.pathname}>
								{menuItems.map((menuItem, i) => {
									if (menuItem.children) {
										return (
											<NavDropdown
												title={menuItem.label}
												key={i}
												active={activeNavDropdown === i}
											>
												{menuItem.children.map((child, j) => (
													<NavDropdown.Item
														key={`${i}-${j}`}
														as={NavLink}
														to={child.route}
														eventKey={child.route}
													>
														{child.label}
													</NavDropdown.Item>
												))}
											</NavDropdown>
										);
									} else {
										return (
											<Nav.Link
												as={NavLink}
												to={menuItem.route}
												key={i}
												eventKey={menuItem.route}
											>
												{menuItem.label}
											</Nav.Link>
										);
									}
								})}
								<NavItem as={LanguageToggle} />
							</Nav>
						</Offcanvas.Body>
					</Navbar.Offcanvas>
				</Container>
			</Navbar>
		</>
	);
}
