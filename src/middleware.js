import { NextResponse } from "next/server"

export const middleware = (request) => {
    // return NextResponse.redirect(new URL("/about", request.url))
    // return NextResponse.rewrite(new URL("/about/mission", request.url))
    
    // conditional redirect or rewrite.
    if (request.nextUrl.pathname.startsWith('/about')) {
        return NextResponse.rewrite(new URL("/about/mission", request.url))
    }
};

// export const config = {
//     matcher: ["/user-profile", "/about"]
// }