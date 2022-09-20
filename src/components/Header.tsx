import { Logo } from '@/components/Logo';
import { links } from '@/data/links';
import { Popover, Transition } from '@headlessui/react';
import clsx from 'clsx';
import Link from 'next/link';
import { Fragment } from 'react';

const MobileNavigation = () => (
    <Popover>
        {({ open, close }) => (
            <>
                <Popover.Button className='relative z-10 flex h-8 w-8 items-center justify-center [&:not(:focus-visible)]:focus:outline-none'>
                    <span className='sr-only'>Toggle Navigation</span>
                    <svg
                        aria-hidden='true'
                        className='h-3.5 w-3.5 overflow-visible stroke-slate-700'
                        fill='none'
                        strokeWidth={2}
                        strokeLinecap='round'
                    >
                        <path
                            d='M0 1H14M0 7H14M0 13H14'
                            className={clsx('origin-center transition', {
                                'scale-90 opacity-0': open,
                            })}
                        />
                        <path
                            d='M2 2L12 12M12 2L2 12'
                            className={clsx('origin-center transition', {
                                'scale-90 opacity-0': !open,
                            })}
                        />
                    </svg>
                </Popover.Button>
                <Transition.Root>
                    <Transition.Child
                        as={Fragment}
                        enter='duration-150 ease-out'
                        enterFrom='opacity-0'
                        enterTo='opacity-100'
                        leave='duration-150 ease-in'
                        leaveFrom='opacity-100'
                        leaveTo='opacity-0'
                    >
                        <Popover.Overlay className='fixed inset-0 bg-slate-300/50' />
                    </Transition.Child>
                    <Transition.Child
                        as={Fragment}
                        enter='duration-150 ease-out'
                        enterFrom='opacity-0 scale-95'
                        enterTo='opacity-100 scale-100'
                        leave='duration-100 ease-in'
                        leaveFrom='opacity-100 scale-100'
                        leaveTo='opacity-0 scale-95'
                    >
                        <Popover.Panel
                            as='ul'
                            className='absolute inset-x-0 top-full mt-4 origin-top space-y-4 rounded-2xl bg-white p-6 text-lg tracking-tight text-slate-900 shadow-xl ring-1 ring-slate-900/5'
                        >
                            {links.map(link => (
                                <li key={link.id}>
                                    {link.external ? (
                                        <Link
                                            href={link.href}
                                            target='_blank'
                                            rel='noreferrer'
                                            className='block w-full'
                                            onClick={() => close()}
                                        >
                                            {link.label}
                                        </Link>
                                    ) : (
                                        <Link
                                            href={link.href}
                                            className='block w-full'
                                            onClick={() => close()}
                                        >
                                            {link.label}
                                        </Link>
                                    )}
                                </li>
                            ))}
                        </Popover.Panel>
                    </Transition.Child>
                </Transition.Root>
            </>
        )}
    </Popover>
);

export const Header = () => (
    <header className='py-8'>
        <div className='container mx-auto px-4 sm:px-6 lg:px-8'>
            <nav className='relative z-50 text-sm'>
                <ul className='flex items-center'>
                    <li>
                        <Link href='/' className='flex items-center gap-2'>
                            <span className='sr-only'>Home</span>
                            <Logo className='h-6 w-auto' />
                            <span className='text-xl'>BWS.</span>
                        </Link>
                    </li>
                    {links.map((link, idx) => (
                        <li
                            className={clsx('hidden md:block', {
                                'ml-12': idx === 0,
                                'ml-6': idx > 0,
                            })}
                            key={link.id}
                        >
                            {link.external ? (
                                <Link
                                    href={link.href}
                                    target='_blank'
                                    rel='noreferrer'
                                    className='rounded-lg py-1 px-2 text-slate-700 hover:bg-slate-100 hover:text-slate-900'
                                >
                                    {link.label}
                                </Link>
                            ) : (
                                <Link
                                    href={link.href}
                                    className='rounded-lg py-1 px-2 text-slate-700 hover:bg-slate-100 hover:text-slate-900'
                                >
                                    {link.label}
                                </Link>
                            )}
                        </li>
                    ))}
                    <li className='ml-auto'>
                        <Link
                            href='https://calendly.com/brownwolfstudio/intro'
                            target='_blank'
                            rel='noreferrer'
                            className='group inline-flex items-center justify-center rounded-full bg-indigo-600 py-2 px-4 text-sm font-semibold text-white hover:bg-indigo-700 hover:text-slate-100 focus:outline-none focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-700 active:bg-indigo-700 active:text-blue-100'
                        >
                            Contact Us
                        </Link>
                    </li>
                    {links.length > 0 && (
                        <li className='ml-5 -mr-1 md:hidden'>
                            <MobileNavigation />
                        </li>
                    )}
                </ul>
            </nav>
        </div>
    </header>
);
