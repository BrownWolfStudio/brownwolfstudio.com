import Image from 'next/image';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
// import 'swiper/css/effect-creative';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

const metadata = [
    {
        source: '/Learn.Design.png',
        alternativeText: 'Learn.Design',
    },
    {
        source: '/Gyme.png',
        alternativeText: 'Gyme',
    },
    {
        source: '/CQT.png',
        alternativeText: 'CQT',
    },
    {
        source: '/CareSuccess.png',
        alternativeText: 'Care Success',
    },
    {
        source: '/TWSpotlight.png',
        alternativeText: 'TWS Spotlight',
    },
];

export const Slides = () => (
    <section id='showcase'>
        <Swiper
            modules={[Navigation, Pagination, A11y]}
            spaceBetween={50}
            slidesPerView={1}
            navigation
            pagination={{ clickable: true }}
            scrollbar={{ draggable: true }}>
            {metadata.map(({ source, alternativeText }) => (
                <SwiperSlide key={source} className='grid grid-cols-3'>
                    <Image
                        src={source}
                        alt={alternativeText}
                        width={600}
                        height={600}
                    />
                    <div>Description</div>
                </SwiperSlide>
            ))}
        </Swiper>
    </section>
);
