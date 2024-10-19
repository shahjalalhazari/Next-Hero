import { cookies } from "next/headers";
import { NextResponse } from "next/server"

export const middleware = async (request) => {
    // return NextResponse.redirect(new URL("/about", request.url))
    // return NextResponse.rewrite(new URL("/about/mission", request.url))
    

    /**
    conditional redirect or rewrite.
    if (request.nextUrl.pathname.startsWith('/posts')) {
        return NextResponse.rewrite(new URL("/meals", request.url))
    }
     */
    

    /**
    this is for protected route.
    if user isn't logged in and user wants to visit any protected route.
    Like, Dashboard or User Profile then user will redirect to login page
    after login user will redirect automatically to the previous page.
     */
    
    const token = cookies(request).get("next-auth.session-token");
    console.log(request);
    if (!token) {
        return NextResponse.redirect(new URL("/api/auth/signin", request.url));
    }

    return NextResponse.next();
};

export const config = {
    matcher: ["/user-profile", "/dashboard", "/create-user"]
}