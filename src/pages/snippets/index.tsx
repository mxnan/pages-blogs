// pages/snippets.tsx

import { Container, SnippetCard } from "@/components";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { getSnippetPreviews } from "@/lib/snippets";
import dayjs from "dayjs";
import { CodeXmlIcon } from "lucide-react";
import { InferGetStaticPropsType } from "next";
import React from "react";
import { toast } from "sonner";

const Snippetspage = ({
  snippets,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  const handleonclick = () => {
    toast.success("Creating more . Keep Visiting .", {
      position: "bottom-left",
      style: {
        fontWeight: "bold",
      },
    });
  };

  return (
    <Container
      title="Snippets"
      description="Code snippets for display, edit, and share"
    >
      <div className=" w-full flex flex-col items-start justify-center gap-4 p-2 ">
        <h1 className="text-7xl max-sm:text-5xl mb-6 font-bold font-title uppercase ">
          Code Snippets
        </h1>
        <p className="text-lg font-light flex flex-col gap-2 md:flex-row ">
          This page contains
          <span
            className="px-2 mx-2 rounded-lg border
           shadow-violet-500 dark:shadow-emerald-500 
           font-bold w-max flex gap-2"
          >
            code snippets{" "}
            <CodeXmlIcon
              strokeWidth={1}
              className="stroke-violet-600 dark:stroke-emerald-500  "
            />
          </span>
          which you can use in your projects.
        </p>
        <p className="text-sm font-light">
          Custom snippets for your use , some i have created , some are
          customized from other source .
        </p>

        <Separator
          orientation="horizontal"
          decorative
          className="mt-5 max-w-3xl bg-violet-300 dark:bg-emerald-800"
        />
        <div className="max-w-3xl py-8 mx-auto w-full flexcenter">
          <div
            className="flex-1 grid grid-cols-1
           md:grid-cols-2 
           justify-items-center gap-x-5 gap-y-5"
          >
            {snippets.map((snippet, i) => (
              <SnippetCard key={i} snippet={snippet} />
            ))}
            <div
              className="max-w-sm min-h-36 w-full p-4 rounded-xl
                  flex items-end justify-end border border-violet-200 dark:border-emerald-950 "
            >
              <Button
                variant={"ghost"}
                onClick={handleonclick}
                className="font-title text-lg font-bold"
              >
                More ?
              </Button>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export async function getStaticProps() {
  const snippets = await getSnippetPreviews();
  // Sort the snippets array in descending order based on the publishedAt property
  snippets.sort((a, b) => {
    const dateA = dayjs(a.publishedAt);
    const dateB = dayjs(b.publishedAt);
    return dateB.diff(dateA);
  });

  return { props: { snippets } };
}

export default Snippetspage;
