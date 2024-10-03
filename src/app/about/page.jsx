import Link from "next/link";
import React from "react";

const AboutPage = () => {
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
    </div>
  );
};

export default AboutPage;
