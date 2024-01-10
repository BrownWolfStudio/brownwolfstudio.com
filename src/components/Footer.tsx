import { Logo } from '@/components/Logo';
import { links } from '@/data/links';
import Link from 'next/link';
import { Facebook, Instagram, Linkedin, Mail, Twitter } from 'react-feather';

export const Footer = () => (
    <footer>
        <div className='container mx-auto px-4 sm:px-6 lg:px-8'>
            <div className='py-16'>
                <Logo className='mx-auto h-8 w-auto' />
                <nav className='mt-10 text-sm'>
                    <ul className='-my-1 flex justify-center space-x-6'>
                        {links.map(link => (
                            <li>
                                {link.external ? (
                                    <Link
                                        key={link.id}
                                        href={link.href}
                                        target='_blank'
                                        rel='noreferrer'
                                        className='rounded-lg px-2 py-1 text-slate-700 hover:bg-slate-100 hover:text-slate-900'>
                                        {link.label}
                                    </Link>
                                ) : (
                                    <Link
                                        key={link.id}
                                        href={link.href}
                                        className='rounded-lg px-2 py-1 text-slate-700 hover:bg-slate-100 hover:text-slate-900'>
                                        {link.label}
                                    </Link>
                                )}
                            </li>
                        ))}
                    </ul>
                </nav>
            </div>
            <div className='flex flex-col items-center border-t border-slate-400/10 py-10 sm:flex-row-reverse sm:justify-between'>
                <div className='flex space-x-6'>
                    <Link
                        href='/'
                        target='_blank'
                        rel='noreferrer'
                        className='group'>
                        <span className='sr-only'>BWS on Email</span>
                        <Mail className='h-6 w-6 transition-transform group-hover:scale-125' />
                    </Link>
                    <Link
                        href='https://twitter.com/brownwolfstudio'
                        target='_blank'
                        rel='noreferrer'
                        className='group'>
                        <span className='sr-only'>BWS on Twitter</span>
                        <Twitter className='h-6 w-6 transition-transform group-hover:scale-125' />
                    </Link>
                    <Link
                        href='https://www.instagram.com/brownwolfstudio/'
                        target='_blank'
                        rel='noreferrer'
                        className='group'>
                        <span className='sr-only'>BWS on Instagram</span>
                        <Instagram className='h-6 w-6 transition-transform group-hover:scale-125' />
                    </Link>
                    <Link
                        href='https://www.linkedin.com/company/brownwolfstudio/'
                        target='_blank'
                        rel='noreferrer'
                        className='group'>
                        <span className='sr-only'>BWS on LinkedIn</span>
                        <Linkedin className='h-6 w-6 transition-transform group-hover:scale-125' />
                    </Link>
                    <Link
                        href='https://www.facebook.com/brownwolfstudioplc/'
                        target='_blank'
                        rel='noreferrer'
                        className='group'>
                        <span className='sr-only'>BWS on Facebook</span>
                        <Facebook className='h-6 w-6 transition-transform group-hover:scale-125' />
                    </Link>
                </div>
                <p className='mt-6 text-sm text-slate-900 sm:mt-0'>
                    Copyright &copy; {new Date().getFullYear()} BWS. All rights
                    reserved.
                </p>
            </div>
        </div>
    </footer>
);
