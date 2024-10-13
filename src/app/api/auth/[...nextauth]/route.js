import NextAuth from "next-auth";
// import Credentials from "next-auth/providers/credentials";
import CredentialsProvider from "next-auth/providers/credentials";


const handler = NextAuth({
  session: {
    strategy: "jwt"
  },
  providers: [
    CredentialsProvider({
      // credentials: {
      //   email: {
      //     label: "Email",
      //     type: "email",
      //     placeholder: "Your Email",
      //     required: true
      //   },
      //   password: {
      //     label: "Password",
      //     type: "password",
      //     placeholder: "Enter Password",
      //     required: true
      //   }
      // },

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
});

export {handler as GET, handler as POST}