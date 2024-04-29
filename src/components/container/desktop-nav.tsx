import { desktoplinks } from "@/lib/navlinks";
import { AnimatePresence, motion } from "framer-motion";
import NextLink from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";

const DesktopNav = () => {
  const router = useRouter();
  let [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  return (
    <div className="flexcenter">
      {desktoplinks.map((link, index) => (
        <NextLink key={link.link} href={link.link} legacyBehavior>
          <a
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
            className="relative rounded-xl px-4 py-2 "
          >
            <AnimatePresence>
              {hoveredIndex === index && (
                <motion.span
                  className="absolute inset-0 rounded-xl bg-zinc-100 dark:bg-zinc-800"
                  layoutId="hoverBackground"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1, transition: { duration: 0.5 } }}
                  exit={{
                    opacity: 0,
                    transition: { duration: 0.5, delay: 0.5 },
                  }}
                />
              )}
            </AnimatePresence>
            <span
              className={`relative z-10 ${
                router.asPath === link.link &&
                "text-violet-600 dark:text-amber-600 font-medium  transition-all duration-1000 ease-in-out"
              }`}
            >
              {link.name}
            </span>
          </a>
        </NextLink>
      ))}
    </div>
  );
};

export default DesktopNav;
