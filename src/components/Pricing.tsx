import { CheckCircleIcon } from '@heroicons/react/24/solid';
import Link from 'next/link';

const websiteFeatures = [
    '5+ Unique Pages',
    'Fully Responsive / Mobile Friendly',
    'Lifetime Free Hosting',
    'First Month of Maintenance',
    'Domain Configuration',
    'Google Analytics',
    'On-Site SEO',
    'Lightening Fast Load Times',
    'Accessibility',
    'Functional Contact Form',
    'Automatic Sitemap Generation',
];

const customFeatures = [
    'Everything in the Standard Package',
    '10+ Unique Pages',
    'Custom CMS',
    'Admin Access',
    'Membership Management',
    'E-Commerce',
    'Subscriptions',
    'Job Boards',
    'Anything else you want!',
];

const maintenanceFeatures = [
    'Keep Your Website Up (>99% Uptime)',
    'DDoS Prevention',
    'Dependency Management',
    'Regular Backups',
    '2 to 3 Content Updates',
];

export const Pricing = () => (
    <section id='pricing'>
        <div className='pt-12 sm:pt-16 lg:pt-20'>
            <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
                <div className='text-center'>
                    <h2 className='text-3xl font-extrabold text-slate-900 sm:text-4xl lg:text-5xl'>
                        Simple no-tricks pricing
                    </h2>
                </div>
            </div>
        </div>
        <div className='mt-8 rounded-lg bg-white pb-16 sm:mt-12 sm:pb-20 lg:pb-28'>
            <div className='relative'>
                <div className='absolute inset-0 h-1/2 bg-slate-100' />
                <div className='relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
                    <div className='mx-auto max-w-lg overflow-hidden rounded-lg shadow-lg lg:flex lg:max-w-none'>
                        <div className='flex-1 bg-white px-6 py-8 lg:p-12'>
                            <h3 className='text-2xl font-extrabold text-slate-900 sm:text-3xl'>
                                Standard (Mobile Friendly!)
                            </h3>
                            <p className='mt-6 text-base text-slate-500'>
                                Any of the mentioned pages can be removed or
                                replaced with whatever page you want and you
                                could request other changes as well.
                            </p>
                            <div className='mt-8'>
                                <div className='flex items-center'>
                                    <h4 className='flex-shrink-0 bg-white pr-4 text-sm font-semibold uppercase tracking-wider text-indigo-600'>
                                        What&apos;s included
                                    </h4>
                                    <div className='flex-1 border-t-2 border-slate-200' />
                                </div>
                                <ul className='mt-8 space-y-5 lg:grid lg:grid-cols-2 lg:gap-x-8 lg:gap-y-5 lg:space-y-0'>
                                    {websiteFeatures.map(feature => (
                                        <li
                                            key={feature}
                                            className='flex items-start lg:col-span-1'>
                                            <div className='flex-shrink-0'>
                                                <CheckCircleIcon
                                                    className='h-5 w-5 text-green-400'
                                                    aria-hidden='true'
                                                />
                                            </div>
                                            <p className='ml-3 text-sm text-slate-700'>
                                                {feature}
                                            </p>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                        <div className='bg-slate-50 py-8 px-6 text-center lg:flex lg:flex-shrink-0 lg:flex-col lg:justify-center lg:p-12'>
                            <p className='text-lg font-medium leading-6 text-slate-900'>
                                One Time Fee
                            </p>
                            <div className='mt-4 flex items-center justify-center text-5xl font-extrabold text-slate-900'>
                                <span>£750</span>
                                <span className='ml-3 text-xl font-medium text-slate-500'>
                                    GBP
                                </span>
                            </div>
                            <div className='mt-6'>
                                <div className='rounded-md shadow'>
                                    <Link
                                        href='https://calendly.com/brownwolfstudio/intro'
                                        target='_blank'
                                        rel='noreferrer'
                                        className='flex items-center justify-center rounded-md border border-transparent bg-slate-800 px-5 py-3 text-base font-medium text-white hover:bg-slate-900'>
                                        Contact Us
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div className='mt-8 rounded-lg bg-white pb-16 sm:mt-12 sm:pb-20 lg:pb-28'>
            <div className='relative'>
                <div className='absolute inset-0 h-1/2 bg-slate-100' />
                <div className='relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
                    <div className='mx-auto max-w-lg overflow-hidden rounded-lg shadow-lg lg:flex lg:max-w-none'>
                        <div className='flex-1 bg-white px-6 py-8 lg:p-12'>
                            <h3 className='text-2xl font-extrabold text-slate-900 sm:text-3xl'>
                                Custom
                            </h3>
                            <p className='mt-6 text-base text-slate-500'>
                                If you need a more complex website / app, get in
                                touch! We can assure you that you won&apos;t
                                find cheaper rates than us with the same level
                                of quality and attenction to detail.
                            </p>
                            <div className='mt-8'>
                                <div className='flex items-center'>
                                    <h4 className='flex-shrink-0 bg-white pr-4 text-sm font-semibold uppercase tracking-wider text-indigo-600'>
                                        What&apos;s included
                                    </h4>
                                    <div className='flex-1 border-t-2 border-slate-200' />
                                </div>
                                <ul className='mt-8 space-y-5 lg:grid lg:grid-cols-2 lg:gap-x-8 lg:gap-y-5 lg:space-y-0'>
                                    {customFeatures.map(feature => (
                                        <li
                                            key={feature}
                                            className='flex items-start lg:col-span-1'>
                                            <div className='flex-shrink-0'>
                                                <CheckCircleIcon
                                                    className='h-5 w-5 text-green-400'
                                                    aria-hidden='true'
                                                />
                                            </div>
                                            <p className='ml-3 text-sm text-slate-700'>
                                                {feature}
                                            </p>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                        <div className='bg-slate-50 py-8 px-6 text-center lg:flex lg:flex-shrink-0 lg:flex-col lg:justify-center lg:p-12'>
                            <p className='text-lg font-medium leading-6 text-slate-900'>
                                Starts At
                            </p>
                            <div className='mt-4 flex items-center justify-center text-5xl font-extrabold text-slate-900'>
                                <span>£1500</span>
                                <span className='ml-3 text-xl font-medium text-slate-500'>
                                    GBP
                                </span>
                            </div>
                            <div className='mt-6'>
                                <div className='rounded-md shadow'>
                                    <Link
                                        href='https://calendly.com/brownwolfstudio/intro'
                                        target='_blank'
                                        rel='noreferrer'
                                        className='flex items-center justify-center rounded-md border border-transparent bg-slate-800 px-5 py-3 text-base font-medium text-white hover:bg-slate-900'>
                                        Contact Us
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div className='mt-8 rounded-lg bg-white pb-16 sm:mt-12 sm:pb-20 lg:pb-28'>
            <div className='relative'>
                <div className='absolute inset-0 h-1/2 bg-slate-100' />
                <div className='relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
                    <div className='mx-auto max-w-lg overflow-hidden rounded-lg shadow-lg lg:flex lg:max-w-none'>
                        <div className='flex-1 bg-white px-6 py-8 lg:p-12'>
                            <h3 className='text-2xl font-extrabold text-slate-900 sm:text-3xl'>
                                Maintenance (Optional)
                            </h3>
                            <p className='mt-6 text-base text-slate-500'>
                                We charge 4 times less then the competition,
                                while maintaining 99% uptime! This package needs
                                to be paired with one of the other packages.
                            </p>
                            <div className='mt-8'>
                                <div className='flex items-center'>
                                    <h4 className='flex-shrink-0 bg-white pr-4 text-sm font-semibold uppercase tracking-wider text-indigo-600'>
                                        What&apos;s included
                                    </h4>
                                    <div className='flex-1 border-t-2 border-slate-200' />
                                </div>
                                <ul className='mt-8 space-y-5 lg:grid lg:grid-cols-2 lg:gap-x-8 lg:gap-y-5 lg:space-y-0'>
                                    {maintenanceFeatures.map(feature => (
                                        <li
                                            key={feature}
                                            className='flex items-start lg:col-span-1'>
                                            <div className='flex-shrink-0'>
                                                <CheckCircleIcon
                                                    className='h-5 w-5 text-green-400'
                                                    aria-hidden='true'
                                                />
                                            </div>
                                            <p className='ml-3 text-sm text-slate-700'>
                                                {feature}
                                            </p>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                        <div className='bg-slate-50 py-8 px-6 text-center lg:flex lg:flex-shrink-0 lg:flex-col lg:justify-center lg:p-12'>
                            <p className='text-lg font-medium leading-6 text-slate-900'>
                                Per month, cancel anytime!
                            </p>
                            <div className='mt-4 flex items-center justify-center text-5xl font-extrabold text-slate-900'>
                                <span>£50</span>
                                <span className='ml-3 text-xl font-medium text-slate-500'>
                                    GBP
                                </span>
                            </div>
                            <div className='mt-6'>
                                <div className='rounded-md shadow'>
                                    <Link
                                        href='https://calendly.com/brownwolfstudio/intro'
                                        target='_blank'
                                        rel='noreferrer'
                                        className='flex items-center justify-center rounded-md border border-transparent bg-slate-800 px-5 py-3 text-base font-medium text-white hover:bg-slate-900'>
                                        Contact Us
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
);
