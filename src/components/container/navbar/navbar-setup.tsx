import React, { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

import { motion, useMotionValueEvent, useScroll } from "framer-motion";

import Link from "next/link";
import {
  ContentCard,
  HoveredLink,
  Menu,
  MenuItem,
} from "@/components/ui/navbar-menu";
import { Button } from "@/components/ui/button";
import { ArrowDownIcon, ArrowRightIcon } from "lucide-react";
import Themebutton from "../theme-toggle";
import MobileNav from "./mobile-nav";

export function Navbar() {
  const [isMobile, setIsMobile] = useState<boolean>(false);

  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth < 768); // Adjust breakpoint as needed
    };

    // Check on initial render
    checkScreenSize();

    // Add event listener for window resize
    window.addEventListener("resize", checkScreenSize);

    // Cleanup function to remove event listener
    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

  return (
    <nav className="relative w-full z-50 ">
      {isMobile ? <MobileNav /> : <DesktopNav />}
    </nav>
  );
}
function DesktopNav({ className }: { className?: string }) {
  const [active, setActive] = useState<string | null>(null);

  const [isHidden, setIsHidden] = useState(false);
  const { scrollY } = useScroll();
  const lastYRef = useRef(0);

  useMotionValueEvent(scrollY, "change", (y) => {
    const difference = y - lastYRef.current;
    if (Math.abs(difference) > 50) {
      setIsHidden(difference > 0);

      lastYRef.current = y;
    }
  });

  return (
    <motion.div
      animate={isHidden ? "hidden" : "visible"}
      whileHover="visible"
      onHoverStart={() => setIsHidden(false)}
      onFocusCapture={() => setIsHidden(false)}
      variants={{
        hidden: {
          y: "-90%",
          opacity: 0.5,
          scaleX: 0.95,
        },
        visible: {
          y: "0%",
          opacity: 1,
          scaleX: 1,
        },
      }}
      transition={{
        duration: 0.2,
        type: "spring",
        damping: 30,
        stiffness: 120,
        restDelta: 0.001,
      }}
      className={cn(
        "w-full fixed-nav fixed top-0 dark:border-stone-800 max-sm:py-6 inset-x-0  backdrop-blur-[20px] ",
        isHidden ? "border-b-[5px] " : "border-b-[1px]",
        className
      )}
    >
      <div className="flex-1 px-[1.5rem] max-w-[1686px] mx-auto flex items-center justify-between">
        <span>IndustrialAI</span>
        <Menu setActive={setActive}>
          {/*Solutions*/}
          <MenuItem setActive={setActive} active={active} item="Solutions">
            <div className="relative grid grid-cols-4 max-xl:grid-cols-1 gap-4">
              <div className="col-span-2 flex flex-col gap-6 pl-4">
                <Button
                  size={"lg"}
                  variant={"ghost"}
                  className="flex text-lg font-semibold items-center gap-3 "
                >
                  Case Studies
                  <ArrowRightIcon className="w-5 h-5 hover:rotate-[25deg] transition-transform ease-in-out duration-200" />
                </Button>
                <ContentCard
                  title="How a multi-billion dollar manufacturer boosted sales volume with Industrial AI."
                  href="/content/content1.webp"
                  src="/assets/content1.webp"
                  description="Industrial AI built a custom automated quoting solution using Generative AI integrated with ERP and CRM systems."
                />
              </div>
            </div>
          </MenuItem>
          {/*Our  Approach*/}
          <MenuItem
            setActive={setActive}
            active={active}
            icon={<ArrowDownIcon className="h-5 w-5" />}
            item="Our Approach"
          >
            <Button
              variant={"ghost"}
              size={"lg"}
              className="flex  font-semibold items-center gap-3 "
            >
              <Link href={"/approach"}>Our Approach</Link>
              <ArrowRightIcon className="w-5 h-5 hover:rotate-[25deg] transition-transform ease-in-out duration-200" />
            </Button>
          </MenuItem>
          {/*Security*/}
          <MenuItem
            setActive={setActive}
            active={active}
            icon={<ArrowDownIcon className="h-5 w-5" />}
            item="Security"
          >
            <Button
              variant={"ghost"}
              size={"lg"}
              className="flex font-semibold items-center gap-3 "
            >
              <Link href={"/security"}>Security</Link>
              <ArrowRightIcon className="w-5 h-5 hover:rotate-[25deg] transition-transform ease-in-out duration-200" />
            </Button>
          </MenuItem>
          {/*Company*/}
          <MenuItem setActive={setActive} active={active} item="Company">
            <div className="flex flex-col space-y-4 text-sm">
              <HoveredLink href="/hobby">Hobby</HoveredLink>
              <HoveredLink href="/individual">Individual</HoveredLink>
              <HoveredLink href="/team">Team</HoveredLink>
              <HoveredLink href="/enterprise">Enterprise</HoveredLink>
            </div>
          </MenuItem>
        </Menu>
        <Themebutton />
      </div>
    </motion.div>
  );
}
