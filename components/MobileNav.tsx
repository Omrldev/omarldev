import { useState } from "react";
import { IoMdMenu } from "react-icons/io";

const MobileNav = () => {
  const [menu, setMenu] = useState(false);

  return (
    <nav>
      <IoMdMenu onClick={() => setMenu(!menu)} className="cursor-pointer" />

      <div className="hidden">hola</div>
    </nav>
  );
};

export default MobileNav;
