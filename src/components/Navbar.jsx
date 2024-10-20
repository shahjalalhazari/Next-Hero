"use client";
import { signOut, useSession } from "next-auth/react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";

const Navbar = () => {
  const pathName = usePathname();
  const router = useRouter();
  const session = useSession();
  console.log(session);

  const links = [
    {
      title: "Home",
      path: "/",
    },
    {
      title: "About",
      path: "/about",
    },
    // {
    //   title: "Services",
    //   path: "/services",
    // },
    // {
    //   title: "Contact",
    //   path: "/contact",
    // },
    {
      title: "Blogs",
      path: "/blogs",
    },
    {
      title: "Posts",
      path: "/posts",
    },
    {
      title: "Meals",
      path: "/meals",
    },
    {
      title: "Gallery",
      path: "/gallery",
    },
    {
      title: "Dashboard",
      path: "/dashboard",
    },
  ];

  if (pathName.includes("dashboard"))
    return (
      <nav className="bg-blue-400 mx-40">
        <ul className="flex space-x-5">
          <li>
            <Link href="/dashboard">Dashboard</Link>
          </li>
          <li>
            <Link href="/create-user">Create User</Link>
          </li>
        </ul>
      </nav>
    );
  return (
    <nav className="bg-red-300 px-40 py-3 flex items-center justify-between">
      <h5 className="text-2xl font-bold">Next Hero</h5>
      <ul className="font-medium flex justify-between items-center space-x-5">
        {links.map((link) => (
          <Link
            key={link.path}
            href={link.path}
            className={`${
              pathName === link.path && "text-white font-extrabold"
            }`}
          >
            {link.title}
          </Link>
        ))}

        {session.status === "authenticated" && (
          <div>
            <h6 className="text-lg">
              {session?.data?.user?.name}
              <br />
              <small>{session?.data?.user?.type}</small>
            </h6>
          </div>
        )}

        {session.status === "authenticated" ? (
          <button
            onClick={() => signOut()} // user sign out. just call the signOut method from next auth react.
            className="bg-white text-black px-3 py-2 rounded"
          >
            Sign Out
          </button>
        ) : (
          <>
            <Link href="/api/auth/signin">
              <button className="bg-white text-black px-3 py-2 rounded">
                Sign In
              </button>
            </Link>
            <Link href="/api/auth/signup">
              <button className="bg-white text-black px-3 py-2 rounded">
                Sign Up
              </button>
            </Link>
          </>
        )}
      </ul>
    </nav>
  );
};

export default Navbar;
