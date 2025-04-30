import Footer from '@components/Footer';
import Header from '@components/navbar/navbar';
import { Outlet } from 'react-router-dom';

export default function Root() {
    return (
        <>
            <Header />
            <Outlet />
            <Footer />
        </>
    );
}
