import { FAQ } from '@/components/FAQ';
import { Hero } from '@/components/Hero';
import { Pricing } from '@/components/Pricing';
import { Showcase } from '@/components/Showcase';
import { type GetStaticProps } from 'next';

const Index = () => (
    <div className='container mx-auto flex-1 px-4 sm:px-6 lg:px-8'>
        <Hero />
        <Pricing />
        <FAQ />
        <Showcase />
    </div>
);

export const getStaticProps: GetStaticProps = () => ({
    props: {
        title: 'Home',
    },
});

export default Index;
