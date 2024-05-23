import { headerLinks } from "@/constants/Index";
import Link from "next/link";
import { usePathname } from "next/navigation";

const NavItems = () => {
  const pathname = usePathname();

  return (
    <ul className="hidden md:flex-center w-full max-w-sm gap-10">
      {headerLinks.map((link) => {
        const isActive = pathname === link.route;

        return (
          <li key={link.route} className={`${isActive && "text-blue-500"} flex-center`}>
            <Link href={link.route}>
                {link.label}
            </Link>
          </li>
        );
      })}
    </ul>
  );
};

export default NavItems;
