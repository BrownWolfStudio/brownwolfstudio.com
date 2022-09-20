import heroImg from '@/assets/hero.png';
import Image from 'next/future/image';
import Link from 'next/link';

export const Hero = () => (
    <main className='flex flex-col items-center justify-center py-10 md:flex-row md:py-0'>
        <div className='flex h-full w-full flex-col items-center justify-center gap-4 md:w-1/2 md:items-start'>
            <div className='border-b-2 border-amber-600 font-medium'>
                Human Centered Design
            </div>
            <h1 className='text-center text-3xl leading-relaxed md:text-left md:text-4xl md:leading-relaxed'>
                We design fast, accessible and
                <br />
                attractive experiences!
            </h1>
            <Link
                href='https://calendly.com/brownwolfstudio/intro'
                target='_blank'
                rel='noreferrer'
                className='inline-flex items-center justify-center rounded-full bg-indigo-600 py-2 px-4 text-sm font-semibold text-white hover:bg-indigo-700 hover:text-slate-100 focus:outline-none focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-700 active:bg-indigo-700 active:text-blue-100'
            >
                Get In Touch
            </Link>
        </div>
        <div className='relative items-center justify-center md:flex md:w-1/2'>
            <Image
                src={heroImg}
                alt='Hero'
                role='presentation'
                className='relative mx-auto w-3/4 md:ml-auto md:mr-0 md:w-4/5'
            />
        </div>
    </main>
);
