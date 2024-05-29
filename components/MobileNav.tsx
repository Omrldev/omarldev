import { useState } from "react";
import { IoMdClose, IoMdMenu } from "react-icons/io";
import NavItems from "./NavItems";

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
          <div  onClick={openNav} className="cursor-pointer flex-center mt-8">
            <IoMdClose></IoMdClose>
          </div>

          <div onClick={openNav} className="mt-10">
            <NavItems/>
          </div>
      </div>
    </nav>
  );
};

export default MobileNav;
