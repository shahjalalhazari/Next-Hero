import connectDB from "@/lib/connectDB";
import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google";
import FacebookProvider from "next-auth/providers/facebook";
import GitHubProvider from "next-auth/providers/github";


export const authOptions = {
  secret: process.env.NEXT_AUTH_SECRET,
  session: {
    strategy: "jwt",
    maxAge: 30 * 24 * 60 * 60 //change session expires time & this is for 30days.

  },
  providers: [
    // sign in email & password
    CredentialsProvider({
      credentials: {
        email: {
          label: "Email",
          type: "email",
          placeholder: "Your Email",
          required: true
        },
        password: {
          label: "Password",
          type: "password",
          placeholder: "Enter Password",
          required: true
        }
      },

      async authorize(credentials) {
        const {email, password} = credentials;
        if(!credentials) {
          return null;
        }
        if (email) {
          const db = await connectDB();
          const currentUser = await db.collection("users").findOne({email});
          console.log(currentUser);
          if (currentUser) {
            if (currentUser.password === password) {
              return currentUser
            }
          }
        }
        return true;
      },
    }),

    // sign in with google
    GoogleProvider({
      clientId: process.env.NEXT_AUTH_GOOGLE_CLIENT_ID,
      clientSecret: process.env.NEXT_AUTH_GOOGLE_CLIENT_SERCRET
    }),

    // sign in with facebook
    FacebookProvider({
      clientId: process.env.NEXT_AUTH_FACEBOOK_CLIENT_ID,
      clientSecret: process.env.NEXT_AUTH_FACEBOOK_CLIENT_SERCRET
    }),

    GitHubProvider({
      clientId: process.env.NEXT_AUTH_GITHUB_CLIENT_ID,
      clientSecret: process.env.NEXT_AUTH_GITHUB_CLIENT_SERCRET
    })
  ],

  callbacks: {
    // add user type/role at user callback after user login.
    async jwt({ token, account, user }) {
      if (account) {
        token.type = user.type
      }
      return token;
    },

    // set user type/role in session
    async session({ session, token }) {
      session.user.type = token.type;
      return session;
    }
  }
}

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST }