import data from '@/data/app-data';
import Head from 'next/head';
import { useRouter } from 'next/router';

export interface SEOProps {
    title?: string;
    desc?: string;
    img?: string;
}

const SEO: React.FC<SEOProps> = ({ title, desc, img }) => {
    const { asPath } = useRouter();

    return (
        <Head>
            <meta
                name='viewport'
                content='minimum-scale=1, width=device-width, initial-scale=1, shrink-to-fit=no'
            />
            <meta charSet='utf-8' />
            <meta httpEquiv='x-ua-compatible' content='ie=edge' />

            <meta httpEquiv='Content-Type' content='text/html; charset=utf-8' />

            <meta name='robots' content='index, follow' />

            <meta name='author' content={data.author} />
            <meta name='keywords' content={data.name} />
            <meta name='description' content={desc ?? data.description} />

            <meta name='theme-color' content={data.themeColor} />

            <meta
                property='og:description'
                content={desc ?? data.description}
            />
            <meta property='og:type' content={data.type} />
            <meta
                property='og:title'
                content={
                    title
                        ? `${title} | ${data.name} - ${data.seoTitle}`
                        : data.name
                }
            />
            <meta
                property='og:url'
                content={`https://${data.rootUrl}${asPath}`}
            />
            <meta property='og:image' content={img ?? data.ogImg} />

            <meta
                name='twitter:description'
                content={desc ?? data.description}
            />
            <meta
                name='twitter:title'
                content={
                    title
                        ? `${title} | ${data.name} - ${data.seoTitle}`
                        : `${data.name} - ${data.seoTitle}`
                }
            />
            <meta name='twitter:card' content='summary' />
            <meta name='twitter:creator' content={data.author} />

            <title>
                {title ? `${title} | ${data.seoTitle}` : data.seoTitle}
            </title>
        </Head>
    );
};

export default SEO;
