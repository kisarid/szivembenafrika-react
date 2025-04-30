import { createBrowserRouter, redirect } from 'react-router-dom';
import About from './routes/about';
import Blog from './routes/blog';
import Contact from './routes/contact';
import Home from './routes/home';
import Media from './routes/media';
import Statement from './routes/statement';
import Supporters from './routes/supporters';
import Vlog from './routes/vlog';
import Principles from './routes/how-we-help/principles';
import Projects from './routes/how-we-help/projects';
import WhereWeHelp from './routes/how-we-help/where-we-help';
import Donations from './routes/how-you-help/donations';
import EducationProgramKenya from './routes/how-you-help/education-program-kenya';
import Events from './routes/how-you-help/events';
import GraduateAGirl from './routes/how-you-help/graduate-a-girl';
import SupportChildren from './routes/how-you-help/support-children';
import Volunteering from './routes/how-you-help/volunteering';
import Root from './routes/root';

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Root />,
        children: [
            {
                index: true,
                element: <Home />,
            },
            {
                path: '/rolunk',
                element: <About />,
            },
            {
                path: '/eves-beszamolok',
                element: <Statement />,
            },
            {
                path: '/alapelvek',
                element: <Principles />,
            },
            {
                path: '/projektjeink',
                element: <Projects />,
            },
            {
                path: '/hol-segitunk',
                element: <WhereWeHelp />,
            },
            {
                path: '/adomanyozas',
                element: <Donations />,
            },
            {
                path: '/esemenyek',
                element: <Events />,
            },
            {
                path: '/esemenyek/ubuntu',
                element: <Events />,
            },
            {
                path: '/graduate-a-girl',
                element: <GraduateAGirl />,
            },
            {
                path: '/oktatasi-tamogatas',
                element: <EducationProgramKenya />,
            },
            {
                path: '/gyermektamogatas',
                element: <SupportChildren />,
            },
            {
                path: '/onkentesseg',
                element: <Volunteering />,
            },
            {
                path: '/media',
                element: <Media />,
            },
            {
                path: '/vlog',
                element: <Vlog />,
            },
            {
                path: '/blog',
                element: <Blog />,
            },
            {
                path: '/blog/:article',
                element: <Blog />,
            },
            {
                path: '/tamogatok',
                element: <Supporters />,
            },
            {
                path: '/kapcsolat',
                element: <Contact />,
            },
        ],
    },
    {
        path: '*',
        loader: () => redirect('/'),
    },
]);
