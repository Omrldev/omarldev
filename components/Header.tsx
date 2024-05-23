"use client";

import Link from "next/link";
import { IoMdMenu } from "react-icons/io";
import NavItems from "./NavItems";
import MobileNav from "./MobileNav";

const Header = () => {

  return (
    <header className="w-full border-b">
      <div className="max-w-7xl p-5 mx-auto xl:px-0 flex-between">
        <Link href="/">Omar.dev</Link>

        <NavItems/>
       
        <MobileNav/>
      </div>
    </header>
  );
};

export default Header;
