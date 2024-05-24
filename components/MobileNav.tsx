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

      <div className={
        `fixed bg-white flex justify-center items-center flex-col w-full h-screen top-0 left-[-100%]
        ${ menu ? "left-0" : ""}`
        }>
          <div  onClick={openNav} className="absolute cursor-pointerl">
            <IoMdClose></IoMdClose>
          </div>

          <ul className="flex flex-col">
            {headerLinks.map((link) => (
              <Link onClick={openNav} href={link.route}>
                {link.label}
              </Link>
            ))}
          </ul>
      </div>
    </nav>
  );
};

export default MobileNav;
