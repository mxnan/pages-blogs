import { getSnippetPreviews, getSnippetSource } from "@/lib/snippets";
import { MDXRemote, MDXRemoteSerializeResult } from "next-mdx-remote";
import MDXComponents, { MdxLayout } from "@/components/mdx";
import { Container } from "@/components";

export interface SingleSnippetPageProps {
  source: MDXRemoteSerializeResult<{
    frontmatter: {
      title: string;
      description: string;
    };
  }>;
}

const SingleSnippetPage: React.FC<SingleSnippetPageProps> = ({
  source,
}: SingleSnippetPageProps) => {
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
