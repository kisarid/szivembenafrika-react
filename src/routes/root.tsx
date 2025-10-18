import Footer from '@/components/Footer/Footer';
import NavBar from '@/components/NavBar/NavBar';
import { Container } from 'react-bootstrap';
import { Outlet, useLocation } from 'react-router-dom';

export default function Root() {
	const location = useLocation();
	const displayContainer = location.pathname !== '/';

	return (
		<>
			<NavBar />
			{displayContainer ? (
				<Container className='main'>
					<Outlet />
				</Container>
			) : (
				<Outlet />
			)}
			<Footer />
		</>
	);
}
