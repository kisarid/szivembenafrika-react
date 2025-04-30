import { useTranslation } from 'react-i18next';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import './Navbar.scss';
import { NavLink, useLocation } from 'react-router-dom';
import { useEffect, useMemo, useState } from 'react';
import { NavItem, Offcanvas } from 'react-bootstrap';
import LanguageToggle from './language-toggle/language-toggle';

export default function NavigationBar() {
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
                    { label: t('3.submenu2'), route: '/gyermektamogatas' },
                    { label: t('3.submenu3'), route: '/graduate-a-girl' },
                    { label: t('3.submenu4'), route: '/oktatasi-tamogatas' },
                    { label: t('3.submenu5'), route: '/adomanyozas' },
                    { label: t('3.submenu6'), route: '/esemenyek' },
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

    const [activeNavDropdown, setActiveNavDropdown] = useState(-1);
    useEffect(() => {
        menuItems.forEach((menuItem, i) => {
            if (
                menuItem.children?.map((c) => c.route).includes(location.pathname) ||
                menuItem.route === location.pathname
            ) {
                setActiveNavDropdown(i);
                return;
            }
        });
    }, [location, menuItems]);

    return (
        <>
            <Navbar collapseOnSelect expand="xl" className="bg-body-tertiary" id="navbar">
                <Container fluid>
                    <Navbar.Brand as={NavLink} to="/">
                        <div className="icon">
                            <img src="src/assets/icons/logo.png" alt="" />
                        </div>
                        <span>Szívemben Született Afrika</span>
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="offcanvas-navbar-nav" />
                    <Navbar.Offcanvas id="offcanvas-navbar-nav" aria-labelledby="offcanvas-navbar-nav" placement="end">
                        <Offcanvas.Header closeButton />
                        <Offcanvas.Body>
                            <Nav variant="pills">
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
