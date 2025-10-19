import { Bio } from '@/interfaces/Bio';
import { useRef } from 'react';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperRef, SwiperSlide } from 'swiper/react';
import { SwiperOptions } from 'swiper/types';

const options: SwiperOptions = {
	modules: [Autoplay, Navigation, Pagination],
	autoplay: { delay: 5000, disableOnInteraction: true },
	navigation: true,
	pagination: {
		clickable: true,
	},
	slidesPerGroup: 1,
	slidesPerView: 1,
	breakpoints: {
		768: {
			slidesPerGroup: 2,
			slidesPerView: 2,
		},
		1280: {
			slidesPerGroup: 2,
			slidesPerView: 3,
		},
	},
};

export default function TeamSwiper({ bios, onClick }: { bios: Bio[]; onClick: (id: string) => void }) {
	const swiperRef = useRef<SwiperRef>(null);

	return (
		<Swiper ref={swiperRef} {...options}>
			{bios.map((bio) => (
				<SwiperSlide key={bio.id}>
					<div
						className='team-swiper-card'
						onClick={() => {
							swiperRef.current?.swiper.autoplay.stop();
							onClick(bio.id);
						}}
					>
						<div className='team-swiper-card-image'>
							<img
								src={`/src/assets/images/${bio.imageSmall || bio.image}`}
								style={{ objectPosition: bio.objectPosition }}
							/>
						</div>
						<div className='moyo-header'>{bio.name}</div>
						<div className='team-swiper-card-text'>{bio.shortBio}</div>
					</div>
				</SwiperSlide>
			))}
		</Swiper>
	);
}
