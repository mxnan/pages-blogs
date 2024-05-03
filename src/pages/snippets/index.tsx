// pages/snippets.tsx

import Container from "@/components/container/container";
import SnippetCard from "@/components/snippet-card";
import { getSnippetPreviews } from "@/lib/snippets";
import { InferGetStaticPropsType } from "next";
import React from "react";

const Snippetspage = ({
  snippets,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  return (
    <Container
      title="Snippets"
      description="Code snippets for display, edit, and share"
    >
      <div className="max-w-5xl mx-auto w-full h-screen space-y-4 p-2 ">
        <h1 className="text-3xl mb-10">Code Snippets</h1>
        <p>Sharing code snippets which you can use in your projects.</p>
        <p>Some I have created, and some I have copied and improvised.</p>
        <div className="max-w-3xl mt-12 mx-auto grid gap-4 grid-cols-1 sm:grid-cols-2 ">
          {snippets.map((snippet, i) => (
            <SnippetCard key={i} snippet={snippet} />
          ))}
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
