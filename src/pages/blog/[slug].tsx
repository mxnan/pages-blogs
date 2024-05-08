import { Container } from "@/components";
import MDXComponents, { MdxLayout } from "@/components/mdx";
import { getBlogPreviews, getBlogSource } from "@/lib/blogs";
import { MDXRemote, MDXRemoteSerializeResult } from "next-mdx-remote";
import React from "react";

export interface SingleBlogPageProps {
  source: MDXRemoteSerializeResult<{
    frontmatter: {
      title: string;
      description: string;
    };
  }>;
}

const SnigleBlogPage: React.FC<SingleBlogPageProps> = ({
  source,
}: SingleBlogPageProps) => {
  return (
    <Container
      title={source.frontmatter.title as string}
      description={source.frontmatter.description as string}
    >
      <MdxLayout>
        <MDXRemote
          {...source}
          // specifying the custom MDX components
          components={MDXComponents}
        />
      </MdxLayout>
    </Container>
  );
};

export default SnigleBlogPage;

//function for getting slugs from getsnippetpreviews function
export async function getStaticPaths() {
  const blogPreviews = await getBlogPreviews();

  const paths = blogPreviews.map((preview) => ({
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
  const source = await getBlogSource({ params: { slug } });

  return {
    props: {
      source,
    },
  };
}
