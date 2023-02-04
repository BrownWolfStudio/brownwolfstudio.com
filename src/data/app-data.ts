import pkg from 'package.json';

const rootUrl = process.env.NEXT_PUBLIC_DOMAIN ?? 'brownwolfstudio.com';
const name = 'BWS';

const data = {
    name,
    version: pkg.version,
    description: `${name} - ${pkg.description}`,
    pureDescription: pkg.description,
    seoTitle: 'Brown Wolf Studio',
    author: pkg.author.name,
    type: 'Website',
    rootUrl,
    ogImg: `https://${rootUrl}/og-image.png`,
    themeColor: '#4f46e5',
};

export default data;
