import { UndoIcon } from "lucide-react";
import { Button } from "../ui/button";
import { useRouter } from "next/navigation";
import { Separator } from "../ui/separator";

export default function MdxLayout({ children }: { children: React.ReactNode }) {
  const router = useRouter(); // Initialize the router

  // Create any shared layout or styles here

  return (
    <div className="relative max-w-4xl mx-auto w-full min-h-screen  p-2 mt-24">
      <div className="absolute left-0 -top-20">
        <Button
          onClick={() => router.back()} // Call router.back() on click
          variant={"secondary"}
          className="space-x-3"
        >
          <UndoIcon />
          <span>Back to all snippets</span>
        </Button>
      </div>
      <Separator className="mb-10 max-w-xl" />
      <div className="space-y-5">{children}</div>
    </div>
  );
}
