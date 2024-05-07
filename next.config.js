/** @type {import('next').NextConfig} */
const nextTranslate = require('next-translate-plugin');

const nextConfig = {
    output: 'standalone', // for Docker
    experimental: {
        serverActions: {
            allowedOrigins: ['local-doit.wb.ru'],
        },
    },
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'images.unsplash.com',
                port: '',
                pathname: '/**',
            },
            {
                protocol: 'https',
                hostname: 'app.requestly.io',
                port: '',
                pathname: '/**',
            },
        ],
    },
}

// module.exports = nextConfig; // (1)

// const nextTranslateConfig = nextTranslate(); // (2)

// module.exports = {
//     ...nextConfig,
//     ...nextTranslateConfig,
// }; // (2)

// module.exports = nextTranslate(nextConfig); // (3)

const config = nextTranslate(nextConfig); // (4)
config.i18n = undefined; // (4)
module.exports = config; // (4)
