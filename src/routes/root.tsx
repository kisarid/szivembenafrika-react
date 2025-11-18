import Footer from '@/components/Footer/Footer';
import NavBar from '@/components/NavBar/NavBar';
import { useEffect, useRef } from 'react';
import { Container } from 'react-bootstrap';
import { Outlet, useLocation } from 'react-router-dom';

export default function Root() {
	const location = useLocation();
	const displayContainer = location.pathname !== '/';
	const contentRef = useRef<HTMLDivElement>(null);

	useEffect(() => {
		contentRef.current?.scrollTo(0, 0);
	}, [location.pathname]);

	return (
		<>
			<NavBar />
			<div className='main-content' ref={contentRef}>
				{displayContainer ? (
					<Container className='main'>
						<Outlet />
					</Container>
				) : (
					<Outlet />
				)}
				<Footer />
			</div>
		</>
	);
}
