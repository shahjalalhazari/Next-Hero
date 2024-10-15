import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";


export const authOptions = {
  secret: process.env.NEXT_AUTH_SECRET,
  session: {
    strategy: "jwt"
  },
  providers: [
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

      async authorize(Credentials) {
        if(!Credentials) {
          return null;
        }
        return true;
      },
    }),
  ],
}

const handler = NextAuth(authOptions);

export {handler as GET, handler as POST}