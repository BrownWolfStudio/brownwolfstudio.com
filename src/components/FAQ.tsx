import { Disclosure } from '@headlessui/react';
import clsx from 'clsx';
import Link from 'next/link';
import { ChevronDown } from 'react-feather';

const faqs: {
    question: string;
    answers: Array<() => JSX.Element>;
    isOpen: boolean;
}[] = [
    {
        question: 'How much does a new website cost?',
        answers: [
            () => (
                <div>
                    <p>
                        For a brochure website, we charge a flat rate of £750
                        (GBP) and additional £50 (GBP) per month for maintenance
                        if you opt-in for that.
                    </p>
                    <p>
                        However, we also design and develop complex websites,
                        applications and user flows. Our baseline is at £2000
                        (GBP). However, the cost ultimately depends on the
                        requirement.
                    </p>
                </div>
            ),
        ],
        isOpen: true,
    },
    {
        question: 'What is a brochure website?',
        answers: [
            () => (
                <p>
                    A brochure website is like an online version of your company
                    brochure. It typically includes a home page, a teams pages,
                    an about page, service / product catalogue, contact form,
                    etc.
                </p>
            ),
        ],
        isOpen: false,
    },
    {
        question: 'If I want my website built, what do I have to provide?',
        answers: [
            () => (
                <div>
                    <p>
                        After you decide that you want to buy our services, then
                        we will have a seperate call where we will ask you about
                        your target demographic, your company&apos;s design
                        philosophy, type of content, etc. to figure out what you
                        prefer.
                    </p>
                    <p>
                        Then, we will show you a few variants based on the above
                        information to get your feedback.
                    </p>
                    <p>
                        Once we have settled on a design, we will then ask you
                        to provide us a list of pages and their respective
                        content that you want to be created.
                    </p>
                    <p>
                        After creating those pages, we will come back to you,
                        conduct another round of feedback and if everything
                        checks out, then we will publish the website onto your
                        domain!
                    </p>
                </div>
            ),
        ],
        isOpen: false,
    },
    {
        question: 'When will you deliver our website?',
        answers: [() => <p>Our turn around time is about 15-20 days.</p>],
        isOpen: false,
    },
    {
        question: 'Will the website be responsive / mobile friendly?',
        answers: [
            () => (
                <p>
                    Yes, we build websites with a mobile-first approach. Meaning
                    from day one the websites will be designed with mobile in
                    mind and then adjusted for larger screens!
                </p>
            ),
        ],
        isOpen: false,
    },
    {
        question: 'Is hosting included?',
        answers: [
            () => (
                <p>Yes, all our design plans include lifetime free hosting!</p>
            ),
        ],
        isOpen: false,
    },
    {
        question: 'Will you provide source code?',
        answers: [() => <p>Yes.</p>],
        isOpen: false,
    },
    {
        question: 'What if I already have a website?',
        answers: [
            () => (
                <p>
                    If you think your website is not up to the par, we can
                    certainly help you redesign it or port it to newer
                    technologies.
                </p>
            ),
        ],
        isOpen: false,
    },
    {
        question: 'Where can I find more information?',
        answers: [
            () => (
                <p>
                    If you have any more questions, please get in touch{' '}
                    <Link
                        href='https://calendly.com/brownwolfstudio/intro'
                        target='_blank'
                        rel='noreferrer'
                        className='text-indigo-600'>
                        here
                    </Link>
                    .
                </p>
            ),
        ],
        isOpen: false,
    },
];

export const FAQ = () => (
    <section id='faq' className='scroll-mt-14 py-16 sm:scroll-mt-16 sm:py-20'>
        <div className='mx-auto px-4 sm:px-6 md:max-w-2xl md:px-4 lg:max-w-4xl lg:px-12'>
            <h2 className='text-3xl font-extrabold text-slate-900 sm:text-4xl lg:text-5xl'>
                Frequently Asked Questions
            </h2>
        </div>
        <dl className='mx-auto mt-6 max-w-5xl space-y-6 divide-y divide-slate-200'>
            {faqs.map(faq => (
                <Disclosure
                    defaultOpen={faq.isOpen}
                    as='div'
                    key={faq.question}
                    className='pt-6'>
                    {({ open }) => (
                        <>
                            <dt className='text-lg'>
                                <Disclosure.Button className='flex w-full items-start justify-between text-left text-slate-400'>
                                    <span className='font-bold text-slate-900'>
                                        {faq.question}
                                    </span>
                                    <span className='ml-6 flex h-7 items-center'>
                                        <ChevronDown
                                            className={clsx(
                                                open
                                                    ? '-rotate-180'
                                                    : 'rotate-0',
                                                'h-6 w-6 transform'
                                            )}
                                            aria-hidden='true'
                                        />
                                    </span>
                                </Disclosure.Button>
                            </dt>
                            <Disclosure.Panel as='dd' className='mt-2 pr-12'>
                                {faq.answers.map((answer, idx) => (
                                    <div
                                        // eslint-disable-next-line react/no-array-index-key
                                        key={idx}
                                        className='prose min-w-full text-base font-medium text-slate-900'>
                                        {answer()}
                                    </div>
                                ))}
                            </Disclosure.Panel>
                        </>
                    )}
                </Disclosure>
            ))}
        </dl>
    </section>
);
