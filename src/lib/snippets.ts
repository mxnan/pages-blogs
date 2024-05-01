// src/lib/snippets.ts
import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { Snippet, SnippetMetadata } from "./types";

const snippetsDirectory = path.join(process.cwd(), "src", "data", "snippets");

export function getSnippets(): Snippet[] {
  const fileNames = fs.readdirSync(snippetsDirectory);

  return fileNames
    .filter((fileName) => fileName.endsWith(".mdx"))
    .map((fileName) => {
      //path
      const fullPath = path.join(snippetsDirectory, fileName);
      //filecontents
      const fileContents = fs.readFileSync(fullPath, "utf8");
      //data and content
      const { data, content } = matter(fileContents);
      //slug
      const slug = fileName.replace(".mdx", "");

      return {
        slug,
        metadata: data as SnippetMetadata,
        content: content.split("\n"),
      };
    });
}
