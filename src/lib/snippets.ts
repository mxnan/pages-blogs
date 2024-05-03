import fs from "fs";
import path from "path";
import { serialize } from "next-mdx-remote/serialize";
import { SnippetPreview } from "./types";

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

    snippetPreviews.push({
      ...serializedSnippet.frontmatter,
      // add the slug to the frontmatter info
      slug: snippetFilePath.replace(".mdx", ""),
    } as SnippetPreview);
  }

  return snippetPreviews;
}
