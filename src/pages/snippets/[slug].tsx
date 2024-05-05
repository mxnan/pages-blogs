import { getSnippetPreviews, getSnippetSource } from "@/lib/snippets";
import { MDXRemote, MDXRemoteSerializeResult } from "next-mdx-remote";
import { MdxLayout, P, Strong } from "@/components/mdx";
import { Container } from "@/components";

interface SingleSnippetPageProps {
  source: MDXRemoteSerializeResult;
}

const SingleSnippetPage: React.FC<SingleSnippetPageProps> = ({ source }) => {
  return (
    <Container title="Snippets" description="Showing all code snippets here">
      <MdxLayout>
        <MDXRemote
          {...source}
          // specifying the custom MDX components
          components={{
            p: P,
            strong: Strong,
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
