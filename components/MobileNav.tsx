import { useState } from "react";
import { IoMdClose, IoMdMenu } from "react-icons/io";
import NavItems from "./NavItems";
import { headerLinks } from "@/constants/Index";
import Link from "next/link";

const MobileNav = () => {
  const [menu, setMenu] = useState(false);

  const openNav = () => {
    setMenu(!menu);
  }

  return (
    <nav>
      <div className="md:hidden">
        <IoMdMenu onClick={openNav} className="cursor-pointer"></IoMdMenu>
      </div>

      <div className={ menu
        ? "fixed bg-white inset-0 w-full max-h-screen"
        : "fixed left-[-100%]"
        }>
          <div  onClick={openNav} className="border-2 cursor-pointer flex-center mt-8">
            <IoMdClose></IoMdClose>
          </div>

          <div onClick={openNav} className="border-2 mt-10">
            <NavItems />
          </div>
      </div>
    </nav>
  );
};

export default MobileNav;
