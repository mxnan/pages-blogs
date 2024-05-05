import { getSnippetPreviews, getSnippetSource } from "@/lib/snippets";
import { MDXRemote, MDXRemoteSerializeResult } from "next-mdx-remote";
import { H1, H3, H5, MdxLayout, P, Strong } from "@/components/mdx";
import { Container } from "@/components";

interface SingleSnippetPageProps {
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
          components={{
            p: P,
            strong: Strong,
            h1: H1,
            h3: H3,
            h5: H5,
          }}
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
