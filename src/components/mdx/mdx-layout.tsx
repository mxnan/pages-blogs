import { MoveUpIcon, UndoIcon } from "lucide-react";
import { Button } from "../ui/button";
import { useRouter } from "next/navigation";
import { Separator } from "../ui/separator";

export default function MdxLayout({ children }: { children: React.ReactNode }) {
  const router = useRouter(); // Initialize the router

  // this is function that will scroll to the top of the page when the button is clicked
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  // Create any shared layout or styles here

  return (
    <div className="relative max-w-4xl mx-auto w-full min-h-screen  p-2 mt-24">
      <div className="absolute left-0 -top-20">
        <Button
          onClick={() => router.back()} // Call router.back() on click
          variant={"secondary"}
          className="space-x-3"
        >
          <UndoIcon className="stroke-violet-500 dark:stroke-emerald-500" />
          <span>Back ? </span>
        </Button>
      </div>
      <Separator className="mb-8 max-w-xl" />
      <article className="prose-custom max-w-3xl mx-auto flex flex-col">
        {children}
      </article>
      <Separator className="my-8 max-w-xl" />
      <div className="mt-16">
        <Button
          onClick={() => scrollToTop()} // scroll to top
          variant={"secondary"}
          className="space-x-3"
        >
          <MoveUpIcon className="stroke-violet-500 dark:stroke-emerald-500" />
          <span>To Top ? </span>
        </Button>
      </div>
    </div>
  );
}
