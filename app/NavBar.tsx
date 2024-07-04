import Link from "next/link";
import React from "react";

const NavBar = () => {
  return (
    <div className="flex p-5 gap-3 bg-slate-200">
      <Link href="/">Next.js</Link>
      <Link href="/users">Users</Link>
      <Link href="/admin">admin</Link>
    </div>
  );
};

export default NavBar;
