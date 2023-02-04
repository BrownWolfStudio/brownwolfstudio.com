import GoogleAnalytics from '@/components/GoogleAnalytics';
import { getLayout } from '@/components/Layout';
import Loading from '@/components/Loading';
import SEO, { type SEOProps } from '@/components/SEO';
import data from '@/data/app-data';
import '@/styles/globals.css';
import { type NextComponentType, type NextPageContext } from 'next';
import { type AppProps, type NextWebVitalsMetric } from 'next/app';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

interface Props extends AppProps<SEOProps> {
    Component: NextComponentType<NextPageContext, any, SEOProps> & {
        getLayout?: (page: React.ReactNode) => JSX.Element | null;
    } & SEOProps;
}

const App: React.FC<Props> = ({ Component, pageProps }) => {
    const getFinalLayout = Component.getLayout || getLayout;
    const router = useRouter();
    const [state, setState] = useState({
        isRouteChanging: false,
        loadingKey: 0,
    });

    useEffect(() => {
        const handleRouteChangeStart = () => {
            setState(prevState => ({
                ...prevState,
                isRouteChanging: true,
                // eslint-disable-next-line no-bitwise
                loadingKey: prevState.loadingKey ^ 1,
            }));
        };

        const handleRouteChangeEnd = () => {
            setState(prevState => ({
                ...prevState,
                isRouteChanging: false,
            }));
        };

        router.events.on('routeChangeStart', handleRouteChangeStart);
        router.events.on('routeChangeComplete', handleRouteChangeEnd);
        router.events.on('routeChangeError', handleRouteChangeEnd);

        return () => {
            router.events.off('routeChangeStart', handleRouteChangeStart);
            router.events.off('routeChangeComplete', handleRouteChangeEnd);
            router.events.off('routeChangeError', handleRouteChangeEnd);
        };
    }, [router.events]);

    return (
        <>
            <Loading {...state} />
            <SEO
                title={pageProps.title ?? Component.title ?? data.name}
                desc={pageProps.desc ?? Component.desc ?? data.description}
                img={pageProps.img ?? Component.img ?? data.ogImg}
            />
            {getFinalLayout(<Component {...pageProps} />)}
            <GoogleAnalytics
                measurementId={process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}
            />
        </>
    );
};

export const reportWebVitals = (_metric: NextWebVitalsMetric) => {};

export default App;
