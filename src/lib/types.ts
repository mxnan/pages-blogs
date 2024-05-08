
// implement form with zod .
import { z } from "zod";
export const formSchema = z.object({
  name: z
    .string()
    .min(4, { message: "Username must be at least 4 characters." }),
  email: z.string().email({ message: "Please enter a valid email." }),
  subject: z
    .string()
    .min(4, { message: "Subject must be at least 4 characters." }),
  message: z
    .string()
    .min(4, { message: "Message must be at least 4 characters." }),
});

// for mdx usage
export type SnippetPreview = {
  title: string;
  description: string;
  publishedAt: string;
  slug: string;
  readingtime: string;
};
export type BlogPreview = {
  title: string;
  description: string;
  publishedAt: string;
  slug: string;
  readingtime: string;
};
export interface MobileLinkProps {
  name: string;
  link: string;
}
