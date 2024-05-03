import Container from "@/components/container/container";
import { getSnippetPreviews, getSnippetSource } from "@/lib/snippets";
import React from "react";
import { MDXRemote, MDXRemoteSerializeResult } from "next-mdx-remote";

interface SingleSnippetPageProps {
  source: MDXRemoteSerializeResult;
}

const SingleSnippetPage: React.FC<SingleSnippetPageProps> = ({ source }) => {
  return (
    <Container
      title={source.frontmatter.title}
      description={source.frontmatter.description}
    >
      <div className="max-w-4xl mx-auto w-full h-screen space-y-4 p-2 ">
        <div className="prose lg:prose-lg max-w-none">
          <MDXRemote {...source} />
        </div>
      </div>
    </Container>
  );
};

export default SingleSnippetPage;
//function for getting slugs from getsnippetpreviews function
export async function getStaticPaths() {
  const snippetPreviews = await getSnippetPreviews();

  const paths = snippetPreviews.map((preview) => ({
    params: { slug: preview.slug },
  }));

  return {
    paths,
    fallback: "blocking",
  };
}
//fetch source code from getsnippetsource function
export async function getStaticProps({ params }: { params: { slug: string } }) {
  const { slug } = params;
  const source = await getSnippetSource({ params: { slug } });

  return {
    props: {
      source,
    },
  };
}
