/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    swcMinify: true,
    images: {
        domains: [
            'dummyimage.com',
            'brownwolfstudio.com',
            'cdn.brownwolfstudio.com',
            process.env.NEXT_PUBLIC_DOMAIN ?? 'brownwolfstudio.com',
        ],
        formats: ['image/avif', 'image/webp'],
    },
    experimental: {
        newNextLinkBehavior: true,
        nextScriptWorkers: true,
    },
};

module.exports = nextConfig;
