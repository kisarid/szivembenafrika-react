import ParagraphedSection from '@/components/ParagraphedSection';
import hero1mobile from '@images/home/hero-1-mobile.jpg';
import hero1 from '@images/home/hero-1.jpg';
import hero2mobile from '@images/home/hero-2-mobile.jpg';
import hero2 from '@images/home/hero-2.jpg';
import hero3mobile from '@images/home/hero-3-mobile.jpg';
import hero3 from '@images/home/hero-3.jpg';
import hero4mobile from '@images/home/hero-4-mobile.jpg';
import hero4 from '@images/home/hero-4.jpg';
import hero5mobile from '@images/home/hero-5-mobile.jpg';
import hero5 from '@images/home/hero-5.jpg';
import { Container } from 'react-bootstrap';
import { Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import './Home.scss';

const heroPics = [
	{
		src: hero1,
		mobileSrc: hero1mobile,
	},
	{
		src: hero2,
		mobileSrc: hero2mobile,
	},
	{
		src: hero3,
		mobileSrc: hero3mobile,
	},
	{
		src: hero4,
		mobileSrc: hero4mobile,
	},
	{
		src: hero5,
		mobileSrc: hero5mobile,
	},
];

export default function Home() {
	return (
		<div id='home'>
			<Swiper modules={[Autoplay]} autoplay={{ delay: 5000, disableOnInteraction: false }} slidesPerView={1} loop>
				{heroPics.map((pic) => (
					<SwiperSlide key={pic.src}>
						<picture>
							<source media='(min-width: 768px)' srcSet={pic.src} />
							<img src={pic.mobileSrc} alt='' />
						</picture>
					</SwiperSlide>
				))}
			</Swiper>
			<Container>
				<ParagraphedSection keyPrefix='home' />
			</Container>
		</div>
	);
}
