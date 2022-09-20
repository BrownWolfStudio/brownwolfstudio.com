import { ArrowLeftIcon } from '@heroicons/react/24/solid';
import Link from 'next/link';

const NotFound = () => (
    <div className='container mx-auto flex-1 px-4 sm:px-6 lg:px-8'>
        <div className='flex h-full items-center justify-center'>
            <div className='space-y-4'>
                <h2 className='text-center text-3xl font-extrabold text-slate-900 sm:text-4xl lg:text-5xl'>
                    <span className='text-red-600'>404:</span> Page Not Found
                </h2>
                <Link
                    href='/'
                    className='inline-flex items-center justify-center gap-1 rounded-full bg-indigo-600 py-2 px-4 text-sm font-semibold text-white hover:bg-indigo-700 hover:text-slate-100 focus:outline-none focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-700 active:bg-indigo-700 active:text-blue-100'
                >
                    <ArrowLeftIcon className='w-4' />
                    <span>Go Back Home</span>
                </Link>
            </div>
        </div>
    </div>
);

export default NotFound;
