import { desktoplinks } from "@/lib/navlinks";
import NextLink from "next/link";

const DesktopNav = () => {
  return (
    <div className="flexcenter space-x-4">
      {desktoplinks.map((link) => (
        <NextLink key={link.link} href={link.link} legacyBehavior>
          <a className="">{link.name}</a>
        </NextLink>
      ))}
    </div>
  );
};

export default DesktopNav;
