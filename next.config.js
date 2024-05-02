/** @type {import('next').NextConfig} */
const nextTranslate = require('next-translate-plugin');
const i18n = require('./i18n');

const { defaultLocale } = i18n;

const nextConfig = {
	output: 'standalone', // for Docker
	basePath: process.env.NEXT_PUBLIC_BASEPATH ? process.env.NEXT_PUBLIC_BASEPATH : undefined,
	async redirects() {
		return [
			{
				source: `${!!process.env.NEXT_PUBLIC_BASEPATH ? process.env.NEXT_PUBLIC_BASEPATH : '/'}`,
				destination: `${process.env.NEXT_PUBLIC_BASEPATH ? process.env.NEXT_PUBLIC_BASEPATH : ''}/${defaultLocale}`,
				permanent: true,
				basePath: false,
			},
		];
	},
};

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
