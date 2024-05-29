"use client";

import Link from "next/link";
import { IoMdMenu } from "react-icons/io";
import NavItems from "./NavItems";
import MobileNav from "./MobileNav";

const Header = () => {

  return (
    <header className="w-full border-b absolute z-50 bg-white shadow-md">
      <div className="max-w-7xl p-5 mx-auto xl:px-0 flex-between sticky top-0">
        <Link href="/" className="font-rubik">Omar.dev</Link>

        <div className="hidden md:flex-center">
          <NavItems />
        </div>
       
        <MobileNav />
      </div>
    </header>
  );
};

export default Header;
