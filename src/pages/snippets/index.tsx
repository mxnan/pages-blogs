// pages/snippets.tsx

import { Container, SnippetCard } from "@/components";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { getSnippetPreviews } from "@/lib/snippets";
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
      <div className="max-w-4xl mx-auto w-full space-y-6 p-2 ">
        <h1 className="text-7xl mb-10  uppercase underline sm:underline-offset-[16px]">
          Code Snippets
        </h1>
        <p className="text-3xl">
          Sharing code snippets which you can use in your projects.
        </p>
        <p className="text-xl">
          Some I have created, and some I have copied and improvised.
        </p>
        <Separator
          orientation="horizontal"
          decorative
          className=" my-10 max-w-2xl"
        />
        <div className="max-w-3xl py-8 mx-auto flexcenter">
          <div
            className="flex-1 grid grid-cols-1
           sm:grid-cols-2 
           justify-items-center gap-x-5 gap-y-5"
          >
            {snippets.map((snippet, i) => (
              <SnippetCard
                key={i}
                title={snippet.title}
                slug={snippet.slug}
                icon={snippet.icon}
                description={snippet.description}
              />
            ))}
            <div
              className="max-w-sm min-h-36 w-full p-4 rounded-xl border
          flex items-end justify-end "
            >
              <Button variant={"ghost"} onClick={handleonclick}>
                More .?
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
  return { props: { snippets } };
}

export default Snippetspage;
