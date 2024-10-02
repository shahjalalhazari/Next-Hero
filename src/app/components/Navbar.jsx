"use client";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import React from "react";

const Navbar = () => {
  const pathName = usePathname();
  const router = useRouter();

  const links = [
    {
      title: "Home",
      path: "/",
    },
    {
      title: "About",
      path: "/about",
    },
    {
      title: "Services",
      path: "/services",
    },
    {
      title: "Contact",
      path: "/contact",
    },
  ];

  const handleLogin = () => {
    router.push("/login");
  };
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
        <button
          onClick={handleLogin}
          className="bg-white text-black px-3 py-2 rounded"
        >
          Login
        </button>
      </ul>
    </nav>
  );
};

export default Navbar;
