import clsx from 'clsx';
import { Head, Html, Main, NextScript } from 'next/document';

const Document = () => (
    <Html lang='en'>
        <Head>
            <link rel='shortcut icon' href='favicon.ico' type='image/x-icon' />
            <link rel='manifest' href='/site.webmanifest' />
        </Head>
        <body
            className={clsx({
                'debug-screens': process.env.NODE_ENV === 'development',
            })}>
            <Main />
            <NextScript />
        </body>
    </Html>
);

export default Document;
