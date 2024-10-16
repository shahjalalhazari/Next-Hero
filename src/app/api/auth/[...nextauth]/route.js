import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";


export const authOptions = {
  secret: process.env.NEXT_AUTH_SECRET,
  session: {
    strategy: "jwt",
    maxAge: 30 * 24 * 60 * 60 //change session expires time & this is for 30days.

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

      async authorize(credentials) {
        const {email, password} = credentials;
        // console.log(`Email: ${email} | Password: ${password}`);
        if(!credentials) {
          return null;
        }
        if (email) {
          const currentUser = users.find((user) => user.email === email)
          console.log(currentUser);
          if (currentUser) {
            if (currentUser.password === password) {
              return {...currentUser}
            }
          }
        }
        return true;
      },
    }),
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


const users = [
  {
    id: 1,
    name: "Shahjalal",
    email: "jalal@gmail.com",
    password: "Password",
    type: "Admin",
    image: "https://picsum.photos/200"
  },
  {
    id: 2,
    name: "Emon",
    email: "emon@gmail.com",
    password: "Password",
    type: "Moderator",
    image: "https://picsum.photos/200"
  },
  {
    id: 3,
    name: "Rubayet",
    email: "rubayet@gmail.com",
    password: "Password",
    type: "Staff",
    image: "https://picsum.photos/200"
  },
  {
    id: 4,
    name: "Emran",
    email: "emran@gmail.com",
    password: "Password",
    type: "user",
    image: "https://picsum.photos/200"
  },
  {
    id: 5,
    name: "Rubayed",
    email: "rubayed@gmail.com",
    password: "Password",
    type: "Moderator",
    image: "https://picsum.photos/200"
  },
]