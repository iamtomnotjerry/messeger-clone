import { withAuth } from "next-auth/middleware";

export default withAuth({
    pages: {
        signIn: '/' // Redirect to home page for sign-in
    }
});

export const config = {
    pages: [ // Specify the pages to apply middleware to
        "/users/:path*", // Apply middleware to all routes under /users,
        "/conversations/:path*"
    ]
}
