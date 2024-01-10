/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    swcMinify: true,
    images: {
        domains: [
            'dummyimage.com',
            process.env.NEXT_PUBLIC_VERCEL_URL,
        ],
        formats: ['image/avif', 'image/webp'],
    },
    experimental: {
        newNextLinkBehavior: true,
        nextScriptWorkers: true,
    },
};

module.exports = nextConfig;
