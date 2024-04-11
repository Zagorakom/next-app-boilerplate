module.exports = {
	locales: ['en', 'ru'],
    // locales: ['en'],
	defaultLocale: 'en',
	pages: {
		'*': ['common', 'navigation', 'ranks'],
		'/[lang]': ['home'],
		'/[lang]/about': ['about'],
	},
};
