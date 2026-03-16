import { createBrowserRouter, redirect } from 'react-router-dom';
import ParagraphedSection from './components/ParagraphedSection';
import About from './routes/About/About';
import Blog from './routes/Blog/Blog';
import BlogArticle from './routes/Blog/components/BlogArticle';
import Contact from './routes/Contact';
import Home from './routes/Home/Home';
import Projects from './routes/Projects/Projects';
import Root from './routes/Root';
import Statement from './routes/Statement';
import Supporters from './routes/Supporters/Supporters';
import Vlog from './routes/Vlog/Vlog';
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
						element: <ParagraphedSection keyPrefix='projects.akitogogon' />,
					},
					{
						path: 'noi-program',
						element: <ParagraphedSection keyPrefix='projects.noi-program' />,
					},
					{
						path: '84-nap',
						element: <ParagraphedSection keyPrefix='projects.84-nap' />,
					},
					{
						path: 'gyermektamogatas',
						element: <ParagraphedSection keyPrefix='projects.gyermektamogatas' />,
					},
					{
						path: 'shine',
						element: <ParagraphedSection keyPrefix='projects.shine' />,
					},
					{
						path: 'graduate-a-girl',
						element: <ParagraphedSection keyPrefix='projects.graduate-a-girl' />,
					},
					{
						path: 'mtwapa',
						element: <ParagraphedSection keyPrefix='projects.mtwapa' />,
					},
					{
						path: 'eu-program',
						element: <ParagraphedSection keyPrefix='projects.eu-program' />,
					},
				],
			},
			{
				path: '/hol-segitunk',
				element: <WhereWeHelp />,
				children: [
					{
						path: 'manafwa',
						element: <ParagraphedSection keyPrefix='where-we-help.manafwa' />,
					},
					{
						path: 'karamoja',
						element: <ParagraphedSection keyPrefix='where-we-help.karamoja' />,
					},
					{
						path: 'nairobi',
						element: <ParagraphedSection keyPrefix='where-we-help.nairobi' />,
					},
					{
						path: 'mombasa',
						element: <ParagraphedSection keyPrefix='where-we-help.mombasa' />,
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
				children: [
					{
						path: ':articleId',
						element: <BlogArticle />,
					},
				],
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
