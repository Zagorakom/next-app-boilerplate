export async function GET(request: Request) {
    // console.log('api Route USER (request.headers)', request.headers); // TEMP COOKIES
    return new Response('{"message": "Hello USER"}');
}
