/** @type {import('next').NextConfig} */
const nextTranslate = require('next-translate-plugin');

const nextConfig = {
    output: 'standalone', // for Docker
    experimental: {
        serverActions: {
            allowedOrigins: ['local-doit.wb.ru'],
        },
        // swcPlugins: [
        //     ['@swc-jotai/react-refresh', {}],
        //     ['@swc-jotai/debug-label', {}],
        // ], // Waiting for PR being merged - https://github.com/pmndrs/swc-jotai/pull/30
    },
    transpilePackages: ['jotai-devtools'],
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
