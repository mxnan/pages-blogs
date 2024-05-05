import fs from "fs";
import path from "path";
import { serialize } from "next-mdx-remote/serialize";
import { SnippetPreview } from "./types";
import { GetStaticPropsContext } from "next";
import readingTime from "reading-time";

export async function getSnippetPreviews(): Promise<SnippetPreview[]> {
  // get all MDX files
  const snippetFilePaths = fs
    .readdirSync("src/data/snippets")
    .filter((snippetFilePath) => {
      return path.extname(snippetFilePath).toLowerCase() === ".mdx";
    });

  const snippetPreviews: SnippetPreview[] = [];

  // read the frontmatter for each file
  for (const snippetFilePath of snippetFilePaths) {
    const snippetFile = fs.readFileSync(
      `./src/data/snippets/${snippetFilePath}`,
      "utf8"
    );
    // serialize the MDX content to a React-compatible format
    // and parse the frontmatter
    const serializedSnippet = await serialize(snippetFile, {
      parseFrontmatter: true,
    });
    // calculate reading time based on the compiled source
    const readingTimeStats = readingTime(serializedSnippet.compiledSource);

    snippetPreviews.push({
      ...serializedSnippet.frontmatter,
      // add the slug and reading time to the frontmatter info
      slug: snippetFilePath.replace(".mdx", ""),
      readingtime: readingTimeStats.text,
    } as SnippetPreview);
  }

  return snippetPreviews;
}

export async function getSnippetSource(
  ctx: GetStaticPropsContext<{ slug: string }>
) {
  const { slug } = ctx.params!;

  // retrieve the MDX snippet file associated
  // with the specified slug parameter
  const snippetFile = fs.readFileSync(`./src/data/snippets/${slug}.mdx`);

  // read the MDX serialized content along with the frontmatter
  // from the .mdx snippet file
  const mdxSource = await serialize(snippetFile, { parseFrontmatter: true });

  return mdxSource;
}
