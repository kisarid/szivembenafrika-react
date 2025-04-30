import { Swiper, SwiperSlide } from 'swiper/react';
import hero1 from '@images/home/hero-1.jpg';
import hero1mobile from '@images/home/hero-1-mobile.jpg';
import hero2 from '@images/home/hero-2.jpg';
import hero2mobile from '@images/home/hero-2-mobile.jpg';
import hero3 from '@images/home/hero-3.jpg';
import hero3mobile from '@images/home/hero-3-mobile.jpg';

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
];

export default function Home() {
	return (
		<div id='home'>
			<Swiper
				spaceBetween={50}
				slidesPerView={3}
				onSlideChange={() => console.log('slide change')}
				onSwiper={(swiper) => console.log(swiper)}
			>
				{heroPics.map((pic, index) => (
					<SwiperSlide key={index}>
						<picture>
							<source media='(min-width: 768px)' srcSet={pic.src} />
							<img src={pic.mobileSrc} alt='' />
						</picture>
					</SwiperSlide>
				))}
			</Swiper>
		</div>
	);
}
