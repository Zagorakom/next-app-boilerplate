import { cookies } from 'next/headers';
import { NextResponse } from 'next/server';

export async function GET(request: Request) {
    /**************** Get Cookie ****************/
    // const cookieStore = cookies();
    // const token = cookieStore.get('token');
   
    /**************** Delete Cookie in Request ****************/
    // cookies().delete(`${process.env.NEXT_PUBLIC_SESSION_COOKIE_NAME}`);
    // return NextResponse.json({ status: 'ok' });  // instead of Response

    /**************** Delete Cookie in Response ****************/
    // const response = NextResponse.json({ status: 'ok' });
    // // response.cookies.set(`${process.env.NEXT_PUBLIC_SESSION_COOKIE_NAME}`, 'false');
    // response.cookies.delete(`${process.env.NEXT_PUBLIC_SESSION_COOKIE_NAME}`);
    // return response;

    /**************** Delete Cookie in Response with same params ****************/
    const cookieName = process.env.NEXT_PUBLIC_SESSION_COOKIE_NAME;
    const cookieDomain = process.env.NEXT_PUBLIC_SESSION_COOKIE_DOMAIN;
    const response = NextResponse.json(
        { status: 'ok' },
        {
            headers: {
                "Set-Cookie": `${cookieName}=false; Domain=${cookieDomain}; Path=/; SameSite=Lax; Secure; HttpOnly`,
            },
        }
    );
    return response;
}
