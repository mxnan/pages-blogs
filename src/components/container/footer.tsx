import React from "react";
import { Button } from "../ui/button";
import { GithubIcon, LinkedinIcon, TwitterIcon } from "lucide-react";
import { mobileLinks } from "@/lib/links";
import Link from "next/link";
import { MobileLinkProps } from "@/lib/types";
import { Separator } from "../ui/separator";
import { useRouter } from "next/router";
import { cn } from "@/lib/utils";
import dayjs from "dayjs";

const Footer = () => {
  const router = useRouter();
  return (
    <footer className="relative">
      <div
        className="flex-1 flex justify-around w-full  
      max-w-xl mx-auto mb-40 py-8 "
      >
        <Separator className="max-w-sm top-0 absolute bg-violet-600 dark:bg-emerald-900" />
        <div className="flex flex-col gap-6 w-max">
          <Button variant={"ghost"} className="flex gap-2">
            <span>Linkedin</span>
            <LinkedinIcon width={14} height={14} />
          </Button>
          <Button variant={"ghost"} className="flex gap-2">
            <span>Twitter</span>
            <TwitterIcon width={14} height={14} />
          </Button>
          <Button variant={"ghost"} className="flex gap-2">
            <span>Github</span>
            <GithubIcon width={14} height={14} />
          </Button>
        </div>
        <Separator
          orientation="vertical"
          className="h-44 bg-violet-600 dark:bg-emerald-900"
        />
        <div className="w-max flex flex-col gap-4">
          {mobileLinks.map((link: MobileLinkProps) => (
            <Link key={link.link} href={link.link} legacyBehavior>
              <a
                className={cn(
                  "p-2 underline underline-offset-4 hover:no-underline font-title",
                  router.pathname === link.link &&
                    " text-violet-700 shadow-violet-500 dark:shadow-emerald-500  dark:text-emerald-500 "
                )}
              >
                {link.name}
              </a>
            </Link>
          ))}
        </div>
        <div
          className="absolute max-w-64 w-full space-y-6  -bottom-16 z-30
        right-1/2 translate-x-1/2
        "
        >
          <Separator className=" bg-violet-600 dark:bg-emerald-900" />
          <p className="flex items-center justify-center">
            Developed by{" "}
            <a
              target="_blank"
              rel="noopener noreferrer"
              className="mx-2 px-2 border rounded-lg shadow-violet-600 dark:shadow-emerald-700  text-violet-600 dark:text-emerald-700"
              href="https://github.com/mxnan"
            >
              mxnan
            </a>{" "}
            &copy;
            {dayjs().year()}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
