import { getServerSession } from "next-auth";
import Link from "next/link";
import React from "react";
import { authOptions } from "../api/auth/[...nextauth]/route";

const AboutPage = () => {
  const session = getServerSession(authOptions);
  // console.log({ session });
  return (
    <div className="px-40">
      This is About Us Page.
      <ul className="flex items-center my-5 py-2 space-x-4 bg-slate-500 text-white">
        <li>
          <Link href={"/about/mission"}>Our Mission</Link>
        </li>
        <li>
          <Link href={"/about/history"}>Our History</Link>
        </li>
      </ul>
      {/* {name} */}
    </div>
  );
};

export default AboutPage;
