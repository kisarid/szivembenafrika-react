import { createBrowserRouter, redirect } from 'react-router-dom';
import CardCataloguePage from './components/CardCatalogue/CardCataloguePage';
import ParagraphedSection from './components/ParagraphedSection/ParagraphedSection';
import About from './routes/About/About';
import Blog from './routes/blog';
import Contact from './routes/Contact';
import Home from './routes/Home/Home';
import Projects from './routes/Projects/Projects';
import Root from './routes/Root';
import Statement from './routes/Statement';
import Supporters from './routes/Supporters/Supporters';
import Vlog from './routes/vlog';
import WhereWeHelp from './routes/WhereWeHelp/WhereWeHelp';

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
				element: <ParagraphedSection key='principles' keyPrefix='principles' />,
			},
			{
				path: '/projektjeink',
				element: <Projects />,
				children: [
					{
						path: 'akitogogon',
						element: <CardCataloguePage id='akitogogon' keyPrefix='projects' />,
					},
					{
						path: 'noi-program',
						element: <CardCataloguePage id='noi-program' keyPrefix='projects' />,
					},
					{
						path: '84-nap',
						element: <CardCataloguePage id='84-nap' keyPrefix='projects' />,
					},
					{
						path: 'gyermektamogatas',
						element: <CardCataloguePage id='gyermektamogatas' keyPrefix='projects' />,
					},
					{
						path: 'shine',
						element: <CardCataloguePage id='shine' keyPrefix='projects' />,
					},
					{
						path: 'graduate-a-girl',
						element: <CardCataloguePage id='graduate-a-girl' keyPrefix='projects' />,
					},
					{
						path: 'mtwapa',
						element: <CardCataloguePage id='mtwapa' keyPrefix='projects' />,
					},
					{
						path: 'eu-program',
						element: <CardCataloguePage id='eu-program' keyPrefix='projects' />,
					},
				],
			},
			{
				path: '/hol-segitunk',
				element: <WhereWeHelp />,
				children: [
					{
						path: 'manafwa',
						element: <CardCataloguePage id='manafwa' keyPrefix='where-we-help' />,
					},
					{
						path: 'karamoja',
						element: <CardCataloguePage id='karamoja' keyPrefix='where-we-help' />,
					},
					{
						path: 'nairobi',
						element: <CardCataloguePage id='nairobi' keyPrefix='where-we-help' />,
					},
					{
						path: 'mombasa',
						element: <CardCataloguePage id='mombasa' keyPrefix='where-we-help' />,
					},
				],
			},
			{
				path: '/adomanyozas',
				element: <ParagraphedSection key='donations' keyPrefix='donations' />,
			},
			{
				path: '/esemenyek',
				element: <ParagraphedSection key='events' keyPrefix='events' />,
			},
			{
				path: '/graduate-a-girl',
				element: <ParagraphedSection key='graduate-a-girl' keyPrefix='graduate-a-girl' />,
			},
			{
				path: '/oktatas-tamogatas-kenya',
				element: <ParagraphedSection key='education-program-kenya' keyPrefix='education-program-kenya' />,
			},
			{
				path: '/gyermektamogatas',
				element: <ParagraphedSection key='support-children' keyPrefix='support-children' />,
			},
			{
				path: '/onkentesseg',
				element: <ParagraphedSection key='volunteering' keyPrefix='volunteering' />,
			},
			{
				path: '/media',
				element: <ParagraphedSection key='media' keyPrefix='media' />,
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
