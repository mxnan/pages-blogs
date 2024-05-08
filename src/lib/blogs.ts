import fs from "fs";
import path from "path";
import { serialize } from "next-mdx-remote/serialize";
import { BlogPreview } from "./types";
import { GetStaticPropsContext } from "next";
import readingTime from "reading-time";

export async function getBlogPreviews(): Promise<BlogPreview[]> {
  // get all MDX files
  const blogFilePaths = fs
    .readdirSync("src/data/blogs")
    .filter((blogFilePath) => {
      return path.extname(blogFilePath).toLowerCase() === ".mdx";
    });

  const blogPreviews: BlogPreview[] = [];

  // read the frontmatter for each file
  for (const blogFilePath of blogFilePaths) {
    const blogFile = fs.readFileSync(`./src/data/blogs/${blogFilePath}`, "utf8");
    // serialize the MDX content to a React-compatible format
    // and parse the frontmatter
    const serializedBlog = await serialize(blogFile, {
      parseFrontmatter: true,
    });

    // calculate reading time based on the compiled source
    const readingTimeStats = readingTime(serializedBlog.compiledSource);

    blogPreviews.push({
      ...serializedBlog.frontmatter,
      // add the slug and reading time to the frontmatter info
      slug: blogFilePath.replace(".mdx", ""),
      readingtime: readingTimeStats.text,
    } as BlogPreview);
  }

  return blogPreviews;
}

export async function getBlogSource(
  ctx: GetStaticPropsContext<{ slug: string }>
) {
  const { slug } = ctx.params!;
  // retrieve the MDX blog file associated
  // with the specified slug parameter
  const blogFile = fs.readFileSync(`./src/data/blogs/${slug}.mdx`);
  // read the MDX serialized content along with the frontmatter
  // from the .mdx blog file
  const mdxSource = await serialize(blogFile, { parseFrontmatter: true });

  return mdxSource;
}