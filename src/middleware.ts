import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import i18n from '@root/i18n';
import { SUPPORTED_SECTIONS } from '@configs/navigation';
import URLS from '@fetchApi/endpoints';

export async function middleware(request: NextRequest) {
	/**** Assume a "Cookie:nextjs=fast" header to be present on the incoming request ****/
	/**** Getting cookies from the request using the `RequestCookies` API ****/
	/*
	let cookie = request.cookies.get('nextjs');
	console.log(cookie); // => { name: 'nextjs', value: 'fast', Path: '/' }
	const allCookies = request.cookies.getAll();
	console.log(allCookies); // => [{ name: 'nextjs', value: 'fast' }]
	request.cookies.has('nextjs'); // => true
	request.cookies.delete('nextjs');
	request.cookies.has('nextjs'); // => false
	*/



	//////////////////////////////////////////////////////////////////////////////
	//////////////////////////////// ON REQUEST //////////////////////////////////
	//////////////////////////////////////////////////////////////////////////////

	console.log('request.url = ', request.url);
	console.log('request.nextUrl.pathname = ', request.nextUrl.pathname);
	request.cookies.set('lastUrlReq', request.nextUrl.pathname);
	// console.log('request.nextUrl = ', request.nextUrl);
	// const allCookies = request.cookies.getAll();
	// console.log('allCookies (REQ) = ', allCookies);
	// console.log('request.cookies', request.cookies);


	//////////////////////////////////////////////////////////////////////////////
	////////////////////////////// REDIRECTS -> //////////////////////////////////
	//////////////////////////////////////////////////////////////////////////////
	const pathname = request.nextUrl.pathname;
	const { locales, defaultLocale } = i18n;
	const BASE_PATH = process.env.NEXT_PUBLIC_BASEPATH ? process.env.NEXT_PUBLIC_BASEPATH : '';
	const isSubpathAdded = !!BASE_PATH;
	const sectionIndexInPath = 2;
	const langIndexInPath = 1;

	// Check if the default locale is in the pathname
	// (e.g. incoming request is /en/about)
	const pathnameHasDefaultLocale = pathname.startsWith(`/${defaultLocale}/`) || pathname === `/${defaultLocale}`;

	// Check if the pathname is missing the locale
	// (e.g. incoming request is /about)
	const pathnameIsMissingLocale =
		locales.every(
			locale => !pathname.startsWith(`/${locale}/`) && pathname !== `/${locale}`,
		)
		&&
		(SUPPORTED_SECTIONS.some(
			section => pathname.startsWith(`/${section}/`) || pathname === `/${section}`
		) || pathname === `/`);
	
	// Check if the pathname has unsupported locale
	// (e.g. incoming request is /es/about)
	const pathnameHasUnsupportedLocale =
		!pathnameIsMissingLocale
		&&
		locales.every(
			locale => !pathname.startsWith(`/${locale}/`) && pathname !== `/${locale}`,
		)
		&&
		(SUPPORTED_SECTIONS.includes(pathname.split('/')[sectionIndexInPath]) || (!pathname.split('/')[sectionIndexInPath] && pathname !== `/`));
	
	console.log({
		basePath: BASE_PATH,
		isSubpathAdded,
		sectionIndexInPath,
		langIndexInPath,
		pathnameHasDefaultLocale,
		pathnameIsMissingLocale,
		pathnameHasUnsupportedLocale,
		section: pathname.split('/')[sectionIndexInPath],
		pathname
	});
	
	// if (pathnameHasDefaultLocale) {
	// 	// e.g. incoming request is /en/about
	// 	// The new URL is now /about
	// 	return NextResponse.redirect(
	// 		new URL(
	// 			pathname.replace(
	// 				`/${defaultLocale}`,
	// 				pathname === `/${defaultLocale}` ? '/' : ''
	// 			),
	// 			request.url
	// 		)
	// 	);
	// }

	// if (pathnameIsMissingLocale) {
	// 	// We are on the default locale
	// 	// Rewrite so Next.js understands
	// 	// e.g. incoming request is /about
	// 	// Tell Next.js it should pretend it's /en/about
	// 	return NextResponse.rewrite(
	// 		new URL(`/${defaultLocale}${pathname}`, request.url)
	// 	);
	// }
	if (pathnameIsMissingLocale) {
		// e.g. incoming request is /about
		// The new URL is now /en/about
		return NextResponse.redirect(
			new URL(`${BASE_PATH}/${defaultLocale}${pathname}`, request.url)
		);
	}

	// if (pathnameHasUnsupportedLocale) {
	// 	// e.g. incoming request is /es/about
	// 	// The new URL is now /about
	// 	const parsedPath = pathname.split('/');
	// 	{/* parsedPath[1] = defaultLocale; // changing lang to default
	// 	const newPath = parsedPath.join('/');
	// 	return NextResponse.redirect(
	// 		new URL(newPath, request.url)
	// 	); */} {/* warning: double redirect */}
	// 	return NextResponse.redirect(
	// 		new URL(
	// 			pathname.replace(
	// 				`/${parsedPath[1]}`,
	// 				pathname === `/${parsedPath[1]}` ? '/' : ''
	// 			),
	// 			request.url
	// 		)
	// 	);
	// }
	if (pathnameHasUnsupportedLocale) {
		// e.g. incoming request is /es/about
		// The new URL is now /en/about
		const parsedPath = pathname.split('/');
		{/* parsedPath[langIndexInPath] = defaultLocale; // changing lang to default
		const newPath = parsedPath.join('/');
		return NextResponse.redirect(
			new URL(newPath, request.url)
		); */} {/* warning: double redirect */}
		return NextResponse.redirect(
			new URL(
				pathname.replace(
					`/${parsedPath[langIndexInPath]}`,
					`${BASE_PATH}/${defaultLocale}`
				),
				request.url
			)
		);
	}
	
	//////////////////////////////////////////////////////////////////////////////
	////////////////////////////// <- REDIRECTS //////////////////////////////////
	//////////////////////////////////////////////////////////////////////////////
	
	


	//////////////////////////////////////////////////////////////////////////////
	//////////////////////////////// ON RESPONSE /////////////////////////////////
	//////////////////////////////////////////////////////////////////////////////

	/**** Setting cookies on the response using the `ResponseCookies` API ****/
	const response = NextResponse.next();


    // response.cookies.set('lastPathName', `${request.nextUrl.pathname}`);
	response.cookies.set({
		name: 'lastPathName',
		value: `${request.nextUrl.pathname}`,
		// path: '/',
	});
	// let cookie = response.cookies.get('lastPathName');
	// console.log('lastPathName cookie:', cookie); // => { name: 'lastPathName', value: '/...', path: '/' }
	// const allCookies = response.cookies.getAll();
	// console.log('allCookies (RES) = ', allCookies);

	/**** The outgoing response will have a `Set-Cookie:vercel=fast;path=/test` header. ****/

	return response;
}

export const config = {
	// Do not run the middleware on the following paths
	matcher: [
		/*
		 * Match all request paths except for the ones starting with:
		 * - api (API routes)
		 * - _next (internal resources)
		 * - _next/static (static files)
		 * - _next/image (image optimization files)
		 * - manifest.json
		 * - assets (media files from public dir)
		 * - icon.svg (custom favicon file)
		 * - favicon.ico (regular favicon file)
		 */
		'/((?!api|_next|_next/static|_next/image|manifest.json|assets|icon.svg|favicon).*)',
	],
};
