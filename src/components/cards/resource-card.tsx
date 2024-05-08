import { ResourceCardProps } from "@/lib/types";
import { Button } from "../ui/button";
import { ExternalLinkIcon } from "lucide-react";

// import Image from "next/image";

export default function ResourceCard({
  title,
  description,
  link,
  websiteLink,
}: ResourceCardProps) {
  return (
    <div className="max-w-sm max-h-44 w-full p-4 flex flex-col justify-around space-y-2 rounded-xl border">
      <h3 className="text-xl font-bold uppercase text-left mt-2 text-violet-500 dark:text-emerald-500">
        {title}
      </h3>
      <p className="mt-1 text-stone-700 dark:text-stone-300">{description}</p>
      <Button
        variant={"ghost"}
        className="mt-5 space-x-2 group w-max"
        onClick={() => window.open(websiteLink, "_blank")}
      >
        <span
          className="font-bold text-lg 
        group-hover:text-sm group-hover:font-bold
        transition-all duration-700 ease-in-out
        "
        >
          Visit
        </span>
        <ExternalLinkIcon
          strokeWidth={1.5}
          className="ml-2 
          group-hover:scale-90
          transition-all duration-700 ease-in-out
           group-hover:stroke-violet-600 dark:group-hover:stroke-emerald-500"
        />
        <span
          className="font-medium text-sm 
        group-hover:text-lg group-hover:font-bold
        transition-all duration-700 ease-in-out
       "
        >
          {link}
        </span>
      </Button>
    </div>
  );
}
