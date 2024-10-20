"use client";

// export const metadata = {
//   title: "Sign Up",
//   description: "Super Powerful web app created with Next Js.",
// };

const SignUpPage = () => {
  const handleSignUp = async (event) => {
    event.preventDefault();

    const newUser = {
      username: event.target.username.value,
      email: event.target.email.value,
      password: event.target.password.value,
    };

    const res = await fetch("http://localhost:3000/api/auth/signup/new-user", {
      method: "POST",
      body: JSON.stringify(newUser),
      headers: {
        "content-type": "application/json",
      },
    });
  };
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <h3 className="text-lg mb-3 font-semibold">
        Sign Up with Email & Password
      </h3>

      <form onSubmit={handleSignUp} className="p-8 border-2 rounded-lg">
        <div className="mb-4">
          <label className="block mb-4 font-bold" htmlFor="username">
            Username:
          </label>
          <input
            type="text"
            name="username"
            placeholder="Enter your username"
            required
            className="w-full p-2.5 border rounded-md text-lg"
          />
        </div>

        <div className="mb-4">
          <label className="block mb-4 font-bold" htmlFor="email">
            Email:
          </label>
          <input
            type="email"
            name="email"
            placeholder="Enter your email"
            required
            className="w-full p-2.5 border rounded-md text-lg"
          />
        </div>

        <div className="mb-4">
          <label className="block mb-4 font-bold" htmlFor="password">
            Password:
          </label>
          <input
            type="password"
            name="password"
            placeholder="Enter your password"
            required
            className="w-full p-2.5 border rounded-md text-lg"
          />
        </div>

        <button
          type="submit"
          className=" w-full p-3 bg-red-500 text-white text-lg border-none cursor-pointer;"
        >
          Sign Up
        </button>
      </form>
    </div>
  );
};

export default SignUpPage;
